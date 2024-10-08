import { Component, Input } from '@angular/core';
import { Card } from '../../../../interfaces/Movie/discoverMovie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss'],
})
export class MovieitemComponent {
  @Input() movie!: Card;
  maxNum: number = 190;
  loading: boolean = false;

  constructor(private router: Router) {}

  shortView(summary: string): string {
    return summary.length >= this.maxNum
      ? summary.substring(0, this.maxNum) + '...'
      : summary;
  }

  viewDetails(id: number): void {
    this.loading = true;
    this.router.navigate(['/movies/details', id]).finally(() => {
      this.loading = false;
    });
  }
}
