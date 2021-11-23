import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { RequestBookComponent } from './request-book/request-book.component';


@NgModule({
  declarations: [
    BookListComponent,
    AddBookComponent,
    IssueBookComponent,
    RequestBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
