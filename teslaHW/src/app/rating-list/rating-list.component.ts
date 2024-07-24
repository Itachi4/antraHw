import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {RatingComponentComponent} from '../rating-component/rating-component.component'
import { RatingService } from '../rating.service';
@Component({
  selector: 'app-rating-list',
  standalone: true,
  imports: [CommonModule, RatingComponentComponent],
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.css'
})
export class RatingListComponent {
 ratings! : any[];
 constructor(public ratingService: RatingService){}

 ngOnInit(){
  this.ratings = this.ratingService.getRatings();
 }

}
