import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDetailService } from '../services/character-detail.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  characterId: number = 0;
  character: any;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private characterDetailService: CharacterDetailService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.characterId = this.route.snapshot.params['id'];
    this.getCharacterDetails(this.characterId);
    this.isFavorite = this.favoriteService.isCharacterFavorite(this.characterId);
  }

  getCharacterDetails(characterId: number) {
    this.characterDetailService.getCharacterDetails(characterId).subscribe(
      response => {
        this.character = response;
      },
      error => {
        console.error('Error occurred while fetching character details', error);
      }
    );
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.favoriteService.removeFavoriteCharacter(this.characterId);
    } else {
      const characterToAdd = {
        id: this.characterId,
        name: this.character.name,
        description: this.character.description,
        image: this.character.image
      };
      this.favoriteService.addFavoriteCharacter(characterToAdd);
    }
    this.isFavorite = this.favoriteService.isCharacterFavorite(this.characterId);
  }
}
