import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [
  {path: 'authors/add', component: AddAuthorComponent},
  {path: 'authors/list', component: AuthorListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
