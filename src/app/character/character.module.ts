import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [CharacterComponent, CharacterListComponent, FavouritesComponent, HeaderComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    FormsModule
  ],

})
export class CharacterModule { }
