import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DetailsCard } from '../../../../interfaces/Movie/detailsMovie.interface';
import { TmbdService } from '../../../../services/tmbd/tmbd.service';
import { MoviedialogComponent } from './components/moviedialog/moviedialog.component';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit, OnDestroy {
  movie!: DetailsCard;
  sbp: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private tmbdService: TmbdService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sbp = this.route.data.subscribe((data: Data) => {
      this.movie = data['movie'] as DetailsCard;
      console.log('Movie details:', this.movie); // Add console log to check the data
    });
  }

  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  getBackground(): string {
    if (this.movie && this.movie.movieBackDrop) {
      return `url(${this.movie.movieBackDrop})`;
    }
    return '';
  }

  openDialog(): void {
    this.tmbdService.getVideos(this.movie.movieId).subscribe((data: any) => {
      const videoKeys = data.results.map((result: any) => result.key);
      if (videoKeys) {
        this.dialog.open(MoviedialogComponent, {
          data: { videoKeys: videoKeys },
        });
      }
    });
  }
}
