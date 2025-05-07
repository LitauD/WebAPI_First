import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CaptchaComponent } from '../captcha/captcha.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: true,
  styleUrls: ['./contact-form.component.css'],
  imports: [CaptchaComponent, FormsModule, CommonModule]
})
export class ContactFormComponent {

  model = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  };


  onPhoneInput() {
    // Позволяет вводить только цифры
    this.model.phone = this.model.phone.replace(/\D/g, '');
  }

  onCaptchaVerified(isVerified: boolean) {
    this.captchaValid = isVerified;
  }

  captchaValid: boolean = false;

  onSubmit(form: any) {
    if (form.invalid || !this.captchaValid) {
      // Ничего не делаем, кнопка отключена
      return;
    }

    // Всё валидно и капча подтверждена
    alert('Форма успешно отправлена!\n' + JSON.stringify(this.model, null, 2));

    
    /*if (!this.captchaValid) {
      // тут логика отправки формы
      alert('Пожалуйста, подтвердите капчу!');
      return; // остановить выполнение, если капча не подтверждена
    }
    if (this.isFormValid()) {
      // Тут можно отправлять данные на сервер
      alert('Форма отправлена!\n' + JSON.stringify(this.model, null, 2));
    }
    else {
      alert('Пожалуйста, заполните все поля формы.');
    }*/
  }

  isFormValid() {
    // Простая проверка, что все поля заполнены
    return (
      this.model.name &&
      this.model.email &&
      this.model.phone &&
      this.model.topic &&
      this.model.message
    );
  }
}

