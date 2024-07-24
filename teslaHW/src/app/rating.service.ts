import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratingData = [
    { name: 'Product 1', rate: 4, content: 'Very good!' },
    { name: 'Product 2', rate: 5, content: 'Excellent!' },
    { name: 'Product 3', rate: 3, content: 'Average service.' }
  ];

  getRatings() {
    return this.ratingData;
  }
}
