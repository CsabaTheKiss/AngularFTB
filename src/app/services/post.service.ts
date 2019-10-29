import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Contect-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post, httpOptions);
  }
}
