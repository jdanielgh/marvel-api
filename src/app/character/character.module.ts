import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';


@NgModule({
  declarations: [CharacterComponent, CharacterListComponent, FavouritesComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
