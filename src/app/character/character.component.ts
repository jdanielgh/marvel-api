import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/services/character-service/character.service';
import { ComicService } from '../shared/services/comic-service/comic.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private readonly characterService: CharacterService,
              private readonly comicService: ComicService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe( valor => console.log('characters', valor));
    this.comicService.getAllComics().subscribe( valor => console.log('comics', valor));
  }

}
