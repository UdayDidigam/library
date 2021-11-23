import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];
  constructor(private authorService: AuthorService) { 
    this.authorService.get((response: any)=>{
      this.authors = response;
    });
  }

  ngOnInit(): void {
  }

}
