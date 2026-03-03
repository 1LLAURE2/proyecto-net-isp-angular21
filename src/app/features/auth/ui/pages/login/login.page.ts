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

  username = '';
  password = '';

  login() {
    this.loginUseCase.execute(this.username, this.password)
      .subscribe(() => {
        this.router.navigate(['/clientes']);
      });
  }
}
