import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authService.service';
import { LocalstorageService } from 'src/app/services/localstorageService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localstorageService: LocalstorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (!this.loginForm.valid) {
      this.toastr.error('Lutfen tum alanlari kontrol ediniz');
      return;
    }
    //todo: authService login cagir.
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.localstorageService.setItem('token', response.access_token);
        this.loginForm.reset();
        this.router.navigateByUrl('/home');
      },
      error: (errResp) => {
        this.toastr.error(errResp.error.message);
      },
    });
  }
}
