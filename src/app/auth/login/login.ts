import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Login {
  email: string = '';
  password: string = '';

  onLogin() {
    // Aquí va la lógica de autenticación
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Ejemplo: podrías llamar a un servicio de autenticación aquí
  }

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
    console.log('dark mode toggled', document.documentElement.classList.contains('dark'));
  }
}
