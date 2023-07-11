import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private authenticationStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);


  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.authenticationStatus.asObservable();
  }

  login(email: string, password: string): Observable<boolean> {
    const loginData = { email, password };

    return this.http.post<any>('http://localhost:3000/v1/Users/login', loginData)
      .pipe(
        map(response => {
          console.log('res', response); 
          
          // Controlla la risposta del backend per verificare l'autenticazione
          if (response && response.email) {
            setTimeout(() => {
              this.isLoggedIn = true;
              this.authenticationStatus.next(true); // Emit true to subscribers
            }, 2000); // Ritardo di 2 secondi
            return true; // Login avvenuto con successo
          } else {
            this.isLoggedIn = false; // Imposta a false in caso di errore
            return false; // Credenziali non valide o errore nel backend
          }
        }),
        catchError(error => {
          console.error('Errore durante la richiesta di login:', error);
          this.isLoggedIn = false; // Imposta a false in caso di errore
          return of(false); // Errore nella chiamata al backend
        })
      );
  }
}




