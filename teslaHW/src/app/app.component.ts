import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingService } from './rating.service';
import { RatingListComponent } from './rating-list/rating-list.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RatingListComponent, AverageRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teslaHw';
  constructor(public ratingService: RatingService){}
  ratingsData = this.ratingService.getRatings()
}
