import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userNotFound: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ctaLogin(): void {
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.loginService.login(email, password).subscribe(
      response => {
        console.log('Login avvenuto con successo', response);
        localStorage.setItem('user', response)
        this.authService.setLoggedIn(true);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Errore durante il login', error);
        if (error.status === 404) {
          this.userNotFound = true;
        } else {
          this.snackBar.open('Errore durante il login', 'OK', { duration: 3000 });
        }
      }
    );
  }
}





