import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  submittedData;
  constructor(private dataSerivce: DataService){
    this.submittedData = this.dataSerivce.submittedData;
    console.log(this.submittedData)
  }

}
