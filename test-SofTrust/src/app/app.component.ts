import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  template: `<app-contact-form></app-contact-form>`,
  styleUrl: './app.component.css',
  imports: [ContactFormComponent]
})
export class AppComponent {
  title = 'test-SofTrust';
}
