import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

const GALANT_NUMBER = '972503048750';

const INITIAL_MESSAGE = 'היי שמעון יש מצב לסיווג?';
const generateWhatsappUrl = (phone: string, message: string) => {
  const decodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${decodedMessage}`;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kitchen-demo';
  message = INITIAL_MESSAGE;

  handleMessage(message: string) {
    this.message = message;
  }
  submit() {
    window.open(generateWhatsappUrl(GALANT_NUMBER, this.message));
  }
}
