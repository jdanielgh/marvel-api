import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: '', redirectTo: '/character', pathMatch: 'full'},
  {
  path: 'character',
  loadChildren: () => import('./character/character.module').then( m => m.CharacterModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
