import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cvs';
  formData = {
    name: '',
    message: '',
  };

  submitted = false;
  submittedData = {
    name: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedData = {
        name: this.formData.name,
        message: this.formData.message,
      };
      this.submitted = true;
      form.reset();
    }
  }
}
