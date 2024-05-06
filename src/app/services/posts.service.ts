import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../eviroments/enviroment';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
}
