import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { mergeMap, skip, tap } from 'rxjs/operators';
import { CharacterModel, ComicModel, Item, MarvelModel } from 'src/app/shared/models/marvel.model';
import { CharacterService } from 'src/app/shared/services/character-service/character.service';
import { ComicService } from 'src/app/shared/services/comic-service/comic.service';

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characterList: CharacterModel[];
  marvelData: MarvelModel<CharacterModel>;
  offset = "0";
  orderBy = "name";
  readonly limit: "10";
  filter = "name";
  characterName: string;
  filterIndex = [1, 2, 3];
  suscriber$: Subscription;

  constructor(private readonly characterService: CharacterService,
              private readonly comicService: ComicService) {}

  ngOnInit(): void {
    this.listenerCharacterSearch();
    this.getAllCharacters(this.offset, this.limit, this.orderBy).subscribe();
  }

  getAllCharacters(offset: string, limit: string, orderBy: string, name?: string): Observable<MarvelModel<CharacterModel>> {
    return this.characterService
      .getCharacters(offset, limit, orderBy, name)
      .pipe(
        tap((marvel: MarvelModel<CharacterModel>) => {
          this.marvelData = marvel;
          this.characterList = marvel.data.results;
          this.setFilterIndex();
        })
      );
  }

  listenerCharacterSearch(): void {
    this.suscriber$ = this.characterService.getCharacterSearch()
      .pipe(
        skip(1),
        mergeMap((characterName: string) => {
          this.characterName = characterName;
          return this.getAllCharacters(this.offset, this.limit, this.orderBy, characterName);
        })
      ).subscribe();
  }

  onChangeFilter(): void {
    this.getAllCharacters(this.offset, this.limit, this.filter, this.characterName).subscribe();
  }

  setFilterIndex(): void {
    const selected = parseInt(this.offset) / 10 + 1;
    this.filterIndex = [selected];
    this.marvelData.data.total > parseInt(this.offset) + 10 && this.filterIndex.push(selected + 1);
    this.marvelData.data.total > parseInt(this.offset) + 20 && this.filterIndex.push(selected + 2);
  }

  clickPaginator(side: string): void {
    const newOffset =
      side === "next" ? parseInt(this.offset) + 10 : parseInt(this.offset) - 10;
    this.offset = newOffset.toString();
    this.getAllCharacters(this.offset, this.limit, this.filter, this.characterName).subscribe();
    scroll(0, 0);
  }

  onClickComicEmit(item: Item): void {
    this.comicService.getOneComic(item.resourceURI).subscribe(
      (comicMarvel: MarvelModel<ComicModel>) => {
        const comicItem = comicMarvel.data.results;
        this.comicService.setBehaviorSubjectComics(comicItem[0]);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.suscriber$) {
      this.suscriber$.unsubscribe();
    }
  }
}
