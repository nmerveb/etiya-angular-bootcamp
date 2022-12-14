import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { FilterServicePipe } from './pipes/filter-service.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { AppStoreState } from './store/app.state';

//declarations ---> Module ait componentleri cagirir.
//imports  ---> Modulun kullandigi modulleri tutar.
//exports ---> Bir modulden disariya acmak istedigimiz ozellikleri tutar.(fonk. degiskenler gibi)
//providers ---> injectible classlari provider icinde tanimlariz.
//baska bir comp icinde bile bir modul kullanacaginda buraya import gerekir.
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ServiceListComponent,
    HomeComponent,
    LoginComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    FilterServicePipe,
    NavbarComponent,
    OverlayTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    StoreModule.forRoot<AppStoreState>(appReducers),
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
