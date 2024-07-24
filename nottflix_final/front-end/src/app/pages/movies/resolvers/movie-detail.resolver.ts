import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TmbdService } from '../../../services/tmbd/tmbd.service';
import { DetailsCard } from '../../../interfaces/Movie/detailsMovie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<DetailsCard> {

  constructor(private tmbdService: TmbdService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DetailsCard> {
    const movieId = route.paramMap.get('id');
    return this.tmbdService.getDetails(Number(movieId)).pipe(
      map((detail: DetailsCard) => ({
        movieId: detail.movieId,
        movieName: detail.movieName,
        movieVote: detail.movieVote,
        movieCount: detail.movieCount,
        movieRunTime: detail.movieRunTime,
        movieGenres: detail.movieGenres,
        movieDate: detail.movieDate,
        movieOverview: detail.movieOverview,
        movieHomePage: detail.movieHomePage,
        moviePoster: detail.moviePoster,
        movieBackDrop: detail.movieBackDrop
      }))
    );
  }
}
