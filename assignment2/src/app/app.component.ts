import { Component } from '@angular/core';
import {items, movies } from './cities.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete-app';
  searchText = '';
  selectAll = false;
  items = items;
  movies = movies;
  get filteredItems() {
    if (this.searchText === '') {
      return [];
    }

    return this.items.filter(item =>
      item.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

  }

  onfill(item: string){
    this.searchText = item;
  }

onSelect(){
  this.movies.forEach((movie)=>movie.selected=!movie.selected);
}

onEachMovie() {
  for (let movie of this.movies) {
    if (movie.selected) {
      this.selectAll = true;
    }else
    this.selectAll=false;
  }
}

}
