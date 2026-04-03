import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-seleccion-items-por-pagina',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-seleccion-items-por-pagina.html',
  styleUrl: './custom-seleccion-items-por-pagina.css',
})
export class CustomSeleccionItemsPorPagina {
  @Input() options: number[] = [5, 10, 50];
  @Input() value: number = 5;

  @Output() valueChange = new EventEmitter<number>();

  onChange() {
    this.valueChange.emit(this.value);
  }
}
