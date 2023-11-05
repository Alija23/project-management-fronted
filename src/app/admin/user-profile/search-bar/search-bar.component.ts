import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = "";
  searchType: string = "";
  searchResults: string[] = ["dilo", "tarik"];

  onSearch() {

  }

  onClickList() {

  }
}
