import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from 'src/app/services/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  showNavbar: boolean = false;
  alreadyRegistered: boolean = false;
  passwordMismatch: boolean = false;
  signup: any;
  signUp: any;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private signUpService: SignUpService

  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ctaRegister(): void {
    const name = this.signUpForm.get('name')?.value;
    const surname = this.signUpForm.get('surname')?.value;
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = this.signUpForm.get('confirmPassword')?.value;
    const age = this.signUpForm.get('age')?.value;
    const gender = this.signUpForm.get('gender')?.value;
    this.signUp = this.signUpService.signup(name, surname, email, password, confirmPassword, age, gender)
 }
  
}













