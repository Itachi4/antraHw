import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) // This makes DataService available application-wide
export class DataService {
  submittedData = { name: '', message: '' };
}
