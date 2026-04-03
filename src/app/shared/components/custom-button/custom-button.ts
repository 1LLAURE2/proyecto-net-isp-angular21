import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [CommonModule],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css',
})
export class CustomButton {
  @Input() label: string = 'Botón';
  @Input() type: 'primary' | 'secondary' | 'danger' | 'outline' | 'outline-accent' = 'primary';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

  getClasses() {
    const base = 'px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition';

    const types = {
      primary: 'text-white',
      secondary: 'text-white',
      danger: 'text-white',
      outline: 'border',
      'outline-accent': 'border'
    };

    return `${base} ${types[this.type]} ${this.fullWidth ? 'w-full' : ''}`;
  }

  getStyles() {
    switch (this.type) {
      case 'primary':
        return { 'background-color': 'var(--primary-color)' };
      case 'secondary':
        return { 'background-color': 'var(--secondary-color)' };
      case 'danger':
        return { 'background-color': 'var(--accent-color)' };
      case 'outline':
        return {
          'border-color': 'var(--primary-color)',
          'color': 'var(--primary-color)'
        };
      case 'outline-accent':
        return {
          'border-color': 'var(--accent-color)',
          'color': 'var(--accent-color)'
        };
      default:
        return {};
    }
  }
}
