import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
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
}
