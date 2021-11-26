import { Component } from '@angular/core';
import { CharacterModel } from '../shared/models/marvel.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  characterList: CharacterModel[];

  constructor() { }


}
