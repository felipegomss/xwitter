import { Injectable } from '@angular/core';
import { environment } from '../../eviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/profile`);
  }
}
