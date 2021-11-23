import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private authorService: AuthorService,
    private router: Router) {
    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [],
      lastName: ['', Validators.required],
      description: []
    });
  }

  ngOnInit(): void {
  }

  saveAuthor() {
    this.authorService.create(this.authorForm.value, (response: any) => {
      console.log(this.authorForm.value);
      this.router.navigate(['/authors/list'])
    });
  }
}
