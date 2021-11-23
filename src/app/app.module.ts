import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';
import { PublisherModule } from './publisher/publisher.module';
import { RoleModule } from './role/role.module';
import { AuthService } from './services/auth.service';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { GenreService } from './services/genre.service';
import { PublisherService } from './services/publisher.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    UserModule,
    BookModule,
    RoleModule,
    AdminModule,
    AuthorModule,
    GenreModule,
    PublisherModule,
    AppRoutingModule
  ],
  providers: [AuthService, BookService, AuthorService, UserService, GenreService, PublisherService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
