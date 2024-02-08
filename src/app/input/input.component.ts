import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Output() onInputMessage = new EventEmitter<string>();

  @Input() galantMessage = '';

  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onInputMessage.emit(value);
  }
}
