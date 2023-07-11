import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  signUpForm!: FormGroup;
  showNavbar: boolean = false;
  alreadyRegistered: boolean = false;
  passwordMismatch: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,

  ) { }

  signup(name: string, surname: string, email: string, password: string, confirmPassword: string, age: number, gender: string) {
    const userData = { name, surname, email, password, confirmPassword, age, gender };

    if (password === confirmPassword) {
      this.http.post('http://localhost:3000/v1/Users/signup', userData).subscribe(
        response => {
          console.log('Registrazione avvenuta con successo', response);
          // this.signUpForm.reset();
          this.showNavbar = true;
          this.router.navigate(['/login']); // Naviga alla pagina di login
        },
        error => {
          console.error('Errore durante la registrazione', error);
          this.alreadyRegistered = true;
        }
      );
    } else {
      this.passwordMismatch = true;
    }
  }

  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'error-snackbar'
    });
  }
}





