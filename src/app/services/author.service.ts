import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  create(author: any, callback: Function) {
    this.httpClient.post('https://library-39a3.restdb.io/rest/authors', author,
      {
        headers:
        {
          'cache-control': 'no-cache',
          'x-apikey': '362718ee0a47e387f60fbae639d9ca9c24c60',
          'content-type': 'application/json'
        }
      }).subscribe(response => {
        callback(response)
      });
  }

  get(callback: Function) {
    this.httpClient.get('https://library-39a3.restdb.io/rest/authors',
      {
        headers:
        {
          'cache-control': 'no-cache',
          'x-apikey': '362718ee0a47e387f60fbae639d9ca9c24c60',
          'content-type': 'application/json'
        }
      }).subscribe(response => {
        callback(response)
      });
  }
}
