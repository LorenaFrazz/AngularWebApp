import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharacterDetailService {
  constructor(private http: HttpClient) {}

  getCharacterDetails(characterId: number) {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/${characterId}`);
  }
}