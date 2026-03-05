import { Component, inject } from '@angular/core';
import { LoginUseCase } from '../../../application/login.usecase';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginPage {
  private loginUseCase = inject(LoginUseCase);
  private router = inject(Router);

  email = '';
  password = '';

  login() {
    this.loginUseCase.execute(this.email, this.password)
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => alert('Error en login: ' + err.message)
      });
  }

  toggleTheme() {
    // Ejemplo simple: cambia variable CSS para dark/light
    const root = document.documentElement;
    if (root.style.getPropertyValue('--bg-color') === 'white') {
      root.style.setProperty('--bg-color', '#1a202c');
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--card-bg', '#2d3748');
      root.style.setProperty('--primary-color', '#3182ce');
    } else {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', 'black');
      root.style.setProperty('--card-bg', 'white');
      root.style.setProperty('--primary-color', '#3182ce');
    }
  }
}
