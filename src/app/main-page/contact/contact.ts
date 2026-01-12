import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
/**
 * Provides the contact form section of the page.
 *
 * This component collects user input via a template-driven form and submits the
 * payload to a backend endpoint using {@link HttpClient}. It also supports a
 * test mode that simulates successful submission without performing a network
 * request.
 *
 * @remarks
 * The submission state can be reflected in the UI via the `sent` flag.
 * In case of an HTTP error, a localized error message is shown using
 * {@link TranslateService}.
 */
export class Contact {
  http = inject(HttpClient);
  translate = inject(TranslateService);

  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest: boolean = false;
  sent: boolean = false;

  endPoint: string = 'https://sonja-sander.de/sendMail.php';

  /**
   * Handles the submission of the contact form.
   *
   * If the form is invalid, the submission is aborted. If test mode is enabled,
   * the form is reset and the submission is marked as successful without
   * sending a request.
   *
   * Otherwise, the form data is posted as JSON to the configured endpoint.
   * On success, the form is reset and the submission is marked as sent. On
   * failure, an error is logged and a localized error message is shown.
   *
   * @param form - The template-driven form instance representing the contact form.
   */
  onSubmit(form: NgForm): void {
    if (!form.valid) return;

    this.sent = false;

    if (this.mailTest) {
      form.resetForm();
      this.sent = true;
      return;
    }

    this.http
      .post(this.endPoint, this.contactData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe({
        next: () => {
          this.sent = true;
          form.resetForm();
        },
        error: (err) => {
          console.error('Mail send failed:', err);
          alert(this.translate.instant('contact.sendError'));
        },
      });
  }
}
