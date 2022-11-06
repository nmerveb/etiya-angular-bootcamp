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

  //req ve resp'lari kesen yapi
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('start calisti');
    this.loadingService.startLoading(); //bir istek bittiginde onu anlamak icin rxjs fonksiyonu devreye girer. rxjs finalize
    return next.handle(request).pipe(
      finalize(() => {
        console.log('stop calisti');
        setTimeout(() => {
          this.loadingService.stopLoading();
        }, 3000);
        //console.log('Istek bitti');
      })
    );
  }
}
