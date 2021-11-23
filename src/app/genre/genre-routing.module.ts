import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { GenreListComponent } from './genre-list/genre-list.component';

const routes: Routes = [
  {path: 'genres/add', component: AddGenreComponent},
  {path: 'genres/list', component: GenreListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
