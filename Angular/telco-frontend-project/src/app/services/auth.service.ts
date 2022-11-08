import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controllerUrl = `${environment.apiUrl}/auth/login`;

  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<any> {
    return this.httpClient.post(this.controllerUrl, user);
  }
}
