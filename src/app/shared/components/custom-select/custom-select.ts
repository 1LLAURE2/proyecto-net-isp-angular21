import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectOption } from '../../models/SelectOption';

@Component({
  selector: 'app-custom-select',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.css',
})
export class CustomSelect {
  @Input() options: SelectOption[] = [];
  @Input() value: number | string | null = null;
  @Input() placeholder: string = 'Seleccione';

  @Output() valueChange = new EventEmitter<number | string>();

  onChange(value: any) {
    this.valueChange.emit(value);
  }
}
