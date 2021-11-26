import { Component } from '@angular/core';
import { CharacterService } from '../shared/services/character-service/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  characterSearch: string;

  constructor(private readonly characterService: CharacterService) { }

  onClickSearch(): void {
    this.characterService.setCharacterSearch(this.characterSearch);
  }

}
