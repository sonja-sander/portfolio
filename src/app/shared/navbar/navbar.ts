import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
/**
 * Provides the site navigation bar component.
 *
 * Manages language switching (German/English), tracks the currently active
 * page section for navigation highlighting, and controls a mobile menu
 * implemented with an {@link HTMLDialogElement}.
 *
 * @remarks
 * The selected language is persisted in `localStorage` under the key `lang`.
 * The mobile menu state is synchronized with the dialog's open/close lifecycle
 * to ensure consistent UI state.
 */
export class Navbar implements OnInit {
  activeLang: 'de' | 'en' = 'de';
  activeSection: 'about' | 'skills' | 'projects' | 'contact' | null = null;
  menuOpen = false;

  /**
   * Creates an instance of the navbar and injects the translation service.
   *
   * @param translate - The translation service used to switch the active language.
   */
  constructor(private translate: TranslateService) {}

  /**
   * Initializes the active language from persisted state.
   *
   * Reads the `lang` value from `localStorage` and sets {@link Navbar.activeLang}
   * accordingly. If no valid value is found, German (`'de'`) is used as default.
   */
  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');

    if (savedLang === 'en') {
      this.activeLang = 'en';
    } else {
      this.activeLang = 'de';
    }
  }

  /**
   * Switches the current UI language and persists the selection.
   *
   * Updates {@link Navbar.activeLang}, tells {@link TranslateService} to use the
   * selected language, and stores the value in `localStorage` under `lang`.
   *
   * @param lang - The language code to activate (`'de'` or `'en'`).
   */
  changeLang(lang: 'de' | 'en'): void {
    this.activeLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  /**
   * Sets the active section for navigation highlighting.
   *
   * @param section - The section identifier to mark as active.
   */
  setActive(section: 'about' | 'skills' | 'projects' | 'contact'): void {
    this.activeSection = section;
  }

  /**
   * Toggles the mobile menu dialog open/closed.
   *
   * When opening, calls {@link HTMLDialogElement.showModal}. When closing,
   * calls {@link HTMLDialogElement.close}.
   *
   * @param dialog - The dialog element that hosts the mobile menu.
   */
  toggleMenu(dialog: HTMLDialogElement): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }

  /**
   * Closes the dialog and resets the menu state.
   *
   * @param dialog - The dialog element that hosts the mobile menu.
   */
  closeDialog(dialog: HTMLDialogElement): void {
    this.menuOpen = false;
    dialog.close();
  }

  /**
   * Handles clicks on the dialog backdrop to close the mobile menu.
   *
   * If the click target equals the dialog element itself, it is considered a
   * backdrop click and the dialog is closed.
   *
   * @param event - The click event originating from the dialog.
   * @param dialog - The dialog element that hosts the mobile menu.
   */
  onBackdropClick(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target === dialog) {
      this.menuOpen = false;
      dialog.close();
    }
  }

  /**
   * Synchronizes component state when the dialog has been closed.
   *
   * This can be used with the dialog's `close` event to ensure {@link Navbar.menuOpen}
   * is reset even if the dialog closes via non-button interactions.
   */
  onDialogClosed(): void {
    this.menuOpen = false;
  }
}
