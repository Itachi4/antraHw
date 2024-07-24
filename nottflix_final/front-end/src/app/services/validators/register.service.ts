import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
//   private readonly baseURL = 'http://localhost:5566/api/v1/auth/check-email';

//   constructor(private http: HttpClient) {}

//   checkEmail(email: string): Observable<boolean> {
//     console.log('Checking email:', email);
//     return this.http.post<{ exists: boolean }>(this.baseURL, { email }).pipe(
//       map(response => {
//         console.log('Email check response:', response);
//         return response.exists;
//       })
//     );
//   }
  
// }

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly baseURL = 'http://localhost:5566/api/v1/auth/check-email';

  constructor(private http: HttpClient) {}

  checkEmail(email: string): Observable<boolean> {
    console.log('Checking email:', email);
    return this.http.post<boolean>(this.baseURL, { email }).pipe(
      map(response => {
        console.log('Email check response:', response); // Log the response
        return response; 
      })
    );
  }
}
