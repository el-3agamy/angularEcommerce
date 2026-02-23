import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. Import FormsModule
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // 2. Add FormsModule here
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);
  // 3. Create a simple object to bind to the inputs
  loginData = {
    email: '',
    password: '',
    // remember: false
  };

  handleLogin(form: any) {
    const url = `https://ecommerce.routemisr.com/api/v1/auth/signin`;
    if (form.valid) {
      console.log('Form Submitted:', this.loginData);
      this.http.post<any>(url, this.loginData).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem("montagToken", res.token);
          this.authService.token.set(res.token);
          this.router.navigateByUrl('')
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}