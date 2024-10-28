import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
