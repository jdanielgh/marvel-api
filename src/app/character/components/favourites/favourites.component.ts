import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { skip, tap } from 'rxjs/operators';
import { ComicModel, MarvelModel } from 'src/app/shared/models/marvel.model';
import { ComicService } from 'src/app/shared/services/comic-service/comic.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  numberComicsRandom = '3';
  totalComics = 50292;
  comics: ComicModel[] = [];
  suscriber$: Subscription;

  constructor(private readonly comicService: ComicService) { }

  ngOnInit(): void {
    this.getNumbersRandomForComics();
    this.listenerComicAdded();
  }

  getNumbersRandomForComics(): void {
    const offsetRandom = this.getRandomArbitrary(0, this.totalComics - 1).toString();
    this.comicService.getComics(offsetRandom, this.numberComicsRandom).subscribe( (marvelData: MarvelModel<ComicModel>) => {
      console.log('comics', marvelData);
      this.comics = marvelData.data.results;
    });
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  listenerComicAdded(): void {
    this.suscriber$ = this.comicService.getBehaviorSubjectComics().pipe(
      skip(1),
      tap((comicAdd: ComicModel) => {
        const value = this.comics.some( (comic: ComicModel) => comic.id === comicAdd.id);
        if (!value) {
          this.comics = [comicAdd, ...this.comics];
        }
      }
    )).subscribe();
  }

  joinImgUrl(comic: ComicModel): string {
    return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  }

  onClickDelete(comic: ComicModel): void {
    this.comics = this.comics.filter( (comicValue: ComicModel) => comicValue.id !== comic.id);
  }

}
