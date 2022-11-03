import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  //req ve resp'lari kesen fonk.
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Interceptor calisti...');
    this.loadingService.startLoading();
    console.log('start calisti');
    //bir istek bittiginde onu anlamak icin rxjs fonksiyonu devreye girer. rxjs finalize
    return next.handle(request).pipe(
      finalize(() => {
        console.log('istek bitti.');

        setTimeout(() => {
          this.loadingService.stopLoading();
        }, 3000);
        console.log('stop calisti');
      })
    );
  }
}
