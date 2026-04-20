import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFileUpload } from "../../../../../shared/components/custom-file-upload/custom-file-upload";

@Component({
  selector: 'app-gastos-form-modal',
  standalone:true,
  imports: [CommonModule, FormsModule, CustomFileUpload],
  templateUrl: './gastos-form-modal.html',
  styleUrl: './gastos-form-modal.css',
})
export class GastosFormModal {

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<FormData>();

  loading = signal(false);

  form = {
    concept: '',
    category: '',
    amount: null as number | null,
    provider: '',
    notes: '',
    voucher: null as File | null
  };

  categories = ['servicios', 'comida', 'transporte'];

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.form.voucher = file;
    }
  }

  submit() {
    const formData = new FormData();

    formData.append('concept', this.form.concept);
    formData.append('category', this.form.category);
    formData.append('amount', String(this.form.amount ?? 0));
    formData.append('provider', this.form.provider);
    formData.append('notes', this.form.notes);

    if (this.form.voucher) {
      formData.append('voucher', this.form.voucher);
    }

    this.save.emit(formData);
  }

  closeModal() {
    this.close.emit();
  }
}
