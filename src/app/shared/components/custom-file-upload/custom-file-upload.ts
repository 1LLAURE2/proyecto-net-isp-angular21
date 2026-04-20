import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-file-upload',
  imports: [CommonModule],
  templateUrl: './custom-file-upload.html',
  styleUrl: './custom-file-upload.css',
})
export class CustomFileUpload {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Output() fileSelected = new EventEmitter<File | null>();

  file = signal<File | null>(null);
  previewUrl = signal<string | null>(null);

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const selected = input.files?.[0] || null;

    if (!selected) return;

    // 🔥 reset previo (evita bugs)
    input.value = '';

    this.file.set(selected);
    this.fileSelected.emit(selected);

    if (selected && selected.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl.set(reader.result as string);
      };
      reader.readAsDataURL(selected);
    } else {
      this.previewUrl.set(null);
    }
  }

  removeFile() {
    this.file.set(null);
    this.previewUrl.set(null);
    this.fileSelected.emit(null);

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  isImage(): boolean {
    return !!this.file() && this.file()!.type.startsWith('image/');
  }
}
