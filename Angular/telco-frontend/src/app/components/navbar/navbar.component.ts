import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  @Output() onLogout = new EventEmitter<void>(); //Output degiskeni event tetiklenmesine baglidir.
  @Output() onLogoutWithValue = new EventEmitter<string>(); //generic'te belirttigimiz tipe gore degiskene param da gecebiliriz.
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    //bu durum bir state oldugu icin componment icinde direkt alamayiz.
    //this.isLogin = this.authService.isAuthenticated;
    this.handleOnLogin();
  }

  logout() {
    this.authService.logout();
    //navigate kullanirken id gibi degiskenler de gonderebiliyoruz
    this.onLogout.emit();
    this.onLogoutWithValue.emit('Hoscakal');
    this.router.navigateByUrl('/login');
  }

  handleOnLogin(): void {
    this.authService.onLogin.subscribe({
      next: () => {
        this.isLogin = this.authService.isAuthenticated;
      },
    });
  }
}
