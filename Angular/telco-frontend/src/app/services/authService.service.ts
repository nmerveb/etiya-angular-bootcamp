import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controllerUrl = `${environment.apiUrl}/auth/login`;
  constructor(private httpClient: HttpClient) {}

  login(user: User): string {
    console.log('test3');
    let temp = '';
    this.httpClient.post(this.controllerUrl, user).subscribe((response) => {
      console.log('test');
      console.log(response);
    });
    return temp;
  }
}
