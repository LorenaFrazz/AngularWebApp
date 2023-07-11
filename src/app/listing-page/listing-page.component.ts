import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListingPageService } from 'src/app/services/listing-page.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit, AfterViewInit {
  characters: any[] = [];
  errorMessage: string = '';
  searchQuery: string = '';
  filteredCharacters: any[] = [];

  @ViewChildren('characterItems') characterItems!: QueryList<ElementRef>;

  constructor(
    private http: HttpClient,
    private listingPageService: ListingPageService
  ) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.addClickHereText();
    }, 2000);
  }

  fetchCharacters() {
    this.listingPageService.getCharacters().subscribe(
      (characters: any) => {
        this.characters = characters.results;
        this.filteredCharacters = [...this.characters];
      },
      (error) => {
        this.errorMessage = 'Error occurred while fetching the characters';
      }
    );
  }

  filterCharacters() {
    this.filteredCharacters = this.characters.filter((character: { name: string }) => {
      return character.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  onSearchInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    this.filterCharacters();
  }

  addClickHereText() {
    this.characterItems.forEach((item: ElementRef) => {
      item.nativeElement.classList.add('show-click-here');
    });
  }

  onImageMouseEnter(character: any) {
    character.isImageHovered = true;
  }

  onImageMouseLeave(character: any) {
    character.isImageHovered = false;
  }

  goToCharacterDetails(characterId: number) {
    this.listingPageService.goToCharacterDetails(characterId);
  }
}

























