import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  imports: [FormsModule]
})
export class CaptchaComponent {
  @Output() captchaVerified = new EventEmitter<boolean>();

  captchaCode!: string;
  userInput: string = '';
  message: string = '';

  constructor() {
    this.generateCaptcha();
  }

  checkCaptcha() {
    if (this.userInput === this.captchaCode) {
      this.message = 'Капча пройдена!';
      this.captchaVerified.emit(true);
    } else {
      this.message = 'Неверный код. Попробуйте еще раз.';
      this.captchaVerified.emit(false); 
      this.generateCaptcha(); // создаем новый код
      this.userInput = '';
    }
  }
  generateCaptcha() {
    this.captchaCode = Math.floor(10000 + Math.random() * 90000).toString(); // 5 цифр
  }
}
