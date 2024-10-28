import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  formData = { name: '', message: '' };

  constructor(private router: Router, private dataService: DataService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.submittedData = { ...this.formData }; // Save data in service
      form.reset();
      this.router.navigate(['/display']); // Navigate to /display
    }
  }
}
