// import { Component } from '@angular/core';
// import { LoginService } from '../../services/validators/login.service';


// import {
//   FormBuilder,
//   FormGroup,
//   ValidationErrors,
//   Validators,
// } from '@angular/forms';

// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   passwordVisible: boolean = false;
//   signinForm: FormGroup;

//   constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
//     this.signinForm = this.fb.group({
//       emailOrphone: ['', [Validators.required, Validators.minLength(10)]],
//       password: ['', [Validators.required, Validators.minLength(8)]],
//     });
//   }

//   togglePassword() {
//     this.passwordVisible = !this.passwordVisible;
//   }

//   onSubmit() {
//     if (this.signinForm.valid) {
//       const { emailOrphone, password } = this.signinForm.value;
//       this.loginService.login(emailOrphone, password).subscribe({
//         next: (response) => {
//           console.log('Login successful', response);
//           // Store the JWT token in localStorage or any other storage
//           localStorage.setItem('accessToken', response.accessToken);
//           // Redirect to the desired page
//           this.router.navigate(['/movies']);
//         },
//         error: (error) => {
//           console.error('Login failed', error);
//         }
//       });
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/validators/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordVisible: boolean = false;
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signinForm = this.fb.group({
      emailOrphone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { emailOrphone, password } = this.signinForm.value;
      this.loginService.login(emailOrphone, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('accessToken', response.accessToken);
          this.router.navigate(['/movies']);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
