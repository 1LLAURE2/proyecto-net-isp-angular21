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
  @Input() variant: 'solid' | 'outline' = 'solid';
  @Input() color: 'primary' | 'secondary' | 'accent' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

  getClasses() {
    const base = 'rounded-lg font-medium flex items-center justify-center gap-2 transition';

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg'
    };

    const width = this.fullWidth ? 'w-full' : '';

    const state = this.disabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : 'cursor-pointer hover:opacity-90 active:scale-95';

    return `${base} ${sizes[this.size]} ${width} ${state}`;
  }

  getStyles() {
    if (this.variant === 'solid') {
      switch (this.color) {
        case 'primary':
          return { 'background-color': 'var(--primary-color)', 'color': 'white' };

        case 'secondary':
          return { 'background-color': 'var(--secondary-color)', 'color': 'white' };

        case 'accent':
          return { 'background-color': 'var(--accent-color)', 'color': 'white' };
      }
    }

    if (this.variant === 'outline') {
      switch (this.color) {
        case 'primary':
          return {
            'border': '1px solid var(--primary-color)',
            'color': 'var(--primary-color)'
          };

        case 'accent':
          return {
            'border': '1px solid var(--accent-color)',
            'color': 'var(--accent-color)'
          };
      }
    }

    return {};
  }
}
