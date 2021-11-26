import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel, Item } from '../../models/marvel.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: CharacterModel;

  comics: Item[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.character);
    this.comics = this.character.comics.items.splice(0,4);

  }

  get joinImgUrl(): string {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  get descriptionShort(): string {
    return this.character.description.slice(0, 150);
  }

  get getComics(): Item[] {
    const vect = this.character.comics.items.splice(0,4);
    console.log(vect);

    return vect;
  }
}
