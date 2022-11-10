import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/loginDto';
import { LoginResponseModel } from '../models/loginResponseModel';
import { TokenUserModel } from '../models/tokenUserModel';
import { AppStoreState } from '../store/app.state';
import {
  deleteTokenUserModel,
  setTokenUserModel,
} from '../store/auth/auth.action';
import { LocalstorageService } from './localstorageService.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private controllerUrl = `${environment.apiUrl}/auth/login`;
  //eventemitter genelde html icerisinde kullaniliyor.
  onLogin: BehaviorSubject<string> = new BehaviorSubject<string>('hosgeldin');
  //todo: state containera tasi
  tokenUserModel$: Observable<TokenUserModel | null>;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalstorageService,
    private jwtHelperService: JwtHelperService,
    private store: Store<AppStoreState>
  ) {
    //store'dan tokenUserModel'i alir.
    this.tokenUserModel$ = this.store.select(
      (state) => state.auth.tokenUserModel
    );
  }

  login(loginDto: LoginDto): Observable<LoginResponseModel> {
    //console.log('test3');
    return this.httpClient.post<LoginResponseModel>(
      this.controllerUrl,
      loginDto
    );
  }

  saveToken(loginResponseModel: LoginResponseModel) {
    this.localStorageService.setItem('token', loginResponseModel.access_token);
    const tokenUserModel = this.tokenUserModel;
    if (tokenUserModel) this.setTokenUserModelStoreState(tokenUserModel);
  }

  logout() {
    this.localStorageService.removeItem('token');
    this.deleteTokenUserModelStoreState();
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

  get tokenUserModel(): TokenUserModel | null {
    const token = this.jwtToken;
    if (!token) return null;
    if (this.jwtHelperService.isTokenExpired()) return null;

    return this.jwtHelperService.decodeToken(token) as TokenUserModel;
  }

  emitOnLoginEvent(eventValue: string) {
    this.onLogin.next(eventValue);
    //this.onLogin.complete();
    //this.onLogin = new Subject<string>(); //complete edilen onlogin degiskenini tekrar kullanmak icin tekrar setleriz ama bu yeni referansli degiskene funclar erisemez
    //cunmu ref degisti.
  }

  setTokenUserModelStoreState(tokenUserModel: TokenUserModel) {
    //actionlari gonderdigimiz method
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  deleteTokenUserModelStoreState() {
    this.store.dispatch(deleteTokenUserModel());
  }
}
