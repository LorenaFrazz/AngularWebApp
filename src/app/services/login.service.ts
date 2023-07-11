import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userNotFound: boolean | undefined;
  snackBar: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post('http://localhost:3000/v1/Users/login', loginData);
  }
}











