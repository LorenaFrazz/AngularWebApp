import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingPageService {

  constructor(private http: HttpClient, private router: Router) { }

  getCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    return this.http.get<any>(url);
  }

  goToCharacterDetails(CharacterId: number) {
        // Naviga alla pagina di dettaglio del personaggio utilizzando l'ID del personaggio
      this.router.navigate(['/Character', CharacterId]);
    }
}



