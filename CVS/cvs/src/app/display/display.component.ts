import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  standalone: true,
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  submittedData;

  constructor(private dataService: DataService) {
    this.submittedData = this.dataService.submittedData; // Retrieve data from the service
    console.log(this.submittedData.message); // Log the message to the console
  }
}
