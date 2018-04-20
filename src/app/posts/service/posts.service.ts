import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  serverUrl: string="http://localhost:3001";

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(page) {
    return this.http.post(this.serverUrl+'/api/posts', page)
      .map(res => res.json());
  }
}
