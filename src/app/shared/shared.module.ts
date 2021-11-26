import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ComicService } from './services/comic-service/comic.service';
import { CharacterService } from './services/character-service/character.service';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent],
  providers: [ComicService, CharacterService]
})
export class SharedModule { }
