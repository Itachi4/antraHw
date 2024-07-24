import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './average-rating.component.html',
  styleUrl: './average-rating.component.css'
})
export class AverageRatingComponent {
 @Input() ratings!: any[];

 get averageRating() : number{
  if (this.ratings.length != 0){
    return this.ratings.reduce((acc,cur)=>acc+cur.rate,0/ this.ratings.length);
  }
  return 0;
 }

 get wholeStarNumber(): number{
  return Math.round(this.averageRating)
 }

 get stars(): Array<string> {
  return new Array(5).fill('★', 0, this.wholeStarNumber).fill('☆', this.wholeStarNumber);
}

}

