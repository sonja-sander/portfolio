import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
/**
 * Provides the root component of the application.
 *
 * Hosts the router outlet and initializes application-wide concerns such as
 * the active UI language.
 *
 * @remarks
 * The active language is read from `localStorage` under the key `lang`. If the
 * stored value is missing or invalid, German (`'de'`) is used as the default.
 */
export class App implements OnInit {

  /**
   * Creates an instance of the root component and injects the translation service.
   *
   * @param translate - The translation service used to set the active language.
   */
  constructor(private translate: TranslateService) {}

  /**
   * Initializes the application language on startup.
   *
   * Reads the language from `localStorage` and activates it via
   * {@link TranslateService}. Only `'de'` and `'en'` are considered valid.
   */
  ngOnInit(): void {
    let lang = localStorage.getItem('lang');

    if (lang !== 'en' && lang !== 'de') {
      lang = 'de';
    }

    this.translate.use(lang);
  }
}
