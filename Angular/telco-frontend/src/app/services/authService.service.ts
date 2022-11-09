import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/loginDto';
import { LoginResponseModel } from '../models/loginResponseModel';
import { LocalstorageService } from './localstorageService.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private controllerUrl = `${environment.apiUrl}/auth/login`;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalstorageService,
    private jwtHelperService: JwtHelperService
  ) {}

  login(loginDto: LoginDto): Observable<LoginResponseModel> {
    //console.log('test3');
    return this.httpClient.post<LoginResponseModel>(
      this.controllerUrl,
      loginDto
    );
  }

  logout() {
    this.localStorageService.removeItem('token');
  }

  //basa koyulan get ve set degerleri bu fonksiyonlarin birer degisken olmasini saglar.
  get isAuthenticated(): boolean {
    //todo:localstorage'dan token'i al' yoksa false, suresi gecmisse false aksi durumda true don
    let token = this.localStorageService.getItem('token');
    if (!token) return false;
    if (this.jwtHelperService.isTokenExpired()) return false; //token getter icinde token'a eristigi icin direkt isTokenExpired fonksiyonunu kullanabiliriz.
    return true;
  }

  get jwtToken(): string | null {
    return this.localStorageService.getItem('token');
  }
}
