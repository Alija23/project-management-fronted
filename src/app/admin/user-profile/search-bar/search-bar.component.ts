import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = "";
  searchType: string = "";
  searchResults: string[] = [];

  constructor(private router: Router) {
    
  }

  onSearch() {

  }

  onClickList() {

  }
}
