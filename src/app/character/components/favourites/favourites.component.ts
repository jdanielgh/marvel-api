import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly comicService: ComicService) { }

  ngOnInit(): void {
    this.getNumbersRandomForComics();
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

  joinImgUrl(comic: ComicModel): string {
    return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  }

  onClickDelete(comic: ComicModel): void {
    this.comics = this.comics.filter( (comicValue: ComicModel) => comicValue.id !== comic.id);
  }

}
