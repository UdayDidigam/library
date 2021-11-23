import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { RequestBookComponent } from './request-book/request-book.component';

const routes: Routes = [
  {path: 'books/add', component: AddBookComponent},
  {path: 'books/list', component: BookListComponent},
  {path: 'books/issue', component: IssueBookComponent},
  {path: 'books/request', component: RequestBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
