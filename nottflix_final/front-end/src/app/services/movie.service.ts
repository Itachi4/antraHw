import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly baseURL = 'http://localhost:5566/api/v1';

  constructor(private http: HttpClient) {}

  getMovieDetail(movieId: string | null): Observable<any> {
    const token = localStorage.getItem('accessToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', token);
    }

    return this.http.get<any>(`${this.baseURL}/movie/${movieId}`, { headers })
      .pipe(
        catchError(err => {
          if (err.status === 401) {
            // Handle unauthorized access
            console.error('Unauthorized access - possibly due to expired or invalid token');
          }
          return throwError(err);
        })
      );
  }
}
