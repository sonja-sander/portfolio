import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
/**
 * Provides the contact form section of the page.
 *
 * This component manages user input for the contact form and submits the data
 * to a backend endpoint via {@link HttpClient}. It supports a test mode in which
 * no HTTP request is sent.
 *
 * @remarks
 * The form uses template-driven forms (`NgForm`). When `mailTest` is enabled,
 * submissions are handled locally without calling the backend.
 */
export class Contact {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest: boolean = true;
  sent: boolean = false;

  post = {
    endPoint: 'https://sonja-sander.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles the submission of the contact form.
   *
   * If the form is valid and `mailTest` is disabled, the form data is sent to the
   * configured backend endpoint via an HTTP POST request. After a successful
   * submission, the form is reset.
   *
   * When `mailTest` is enabled, the form is only reset without performing any
   * network request.
   *
   * @param ngForm - The Angular form instance representing the contact form.
   */
  onSubmit(ngForm: NgForm): void {
    this.sent = false;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: () => {
          this.sent = true;
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
