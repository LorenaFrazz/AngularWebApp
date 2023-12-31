import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSignUpPage: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSignUpPage = (event.url === '/sign-up');
      }
    });
  }

  logout() {
    // Rimuovi i dati utente dal localStorage
    localStorage.removeItem('user');  
    this.router.navigate(['/login']);
  }
}

















// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent {
  

// constructor(public router: Router) { }
// logout() {
//     // Rimuovi i dati utente dal localStorage
//     localStorage.removeItem('user');  
//   // Dopo il logout, puoi reindirizzare l'utente alla pagina di accesso o a un'altra pagina appropriata
//   this.router.navigate(['/login']);
// }

// }