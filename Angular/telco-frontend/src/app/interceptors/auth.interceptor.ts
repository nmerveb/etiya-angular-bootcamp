import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorageService.service';
import { AuthService } from '../services/authService.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalstorageService,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //todo: get token from localStorage
    //add to req header
    if (this.authService.isAuthenticated) {
      //requesti clonelayip uzerinde degisiklikler yapip yeni bir req'e atabilmemizi saglar.
      let newRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.jwtToken}` },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
