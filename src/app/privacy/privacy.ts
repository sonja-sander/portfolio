import { Component, inject } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy',
  imports: [Navbar, Footer, TranslatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
/**
 * Provides the privacy page (privacy notice) as a component.
 *
 * This component composes the privacy view using shared layout components
 * such as {@link Navbar} and {@link Footer} and resolves translations in the
 * template via {@link TranslatePipe}.
 *
 * Additionally, it supports a back navigation action via Angular's
 * {@link Location} service.
 *
 * @remarks
 * The back navigation is implemented using {@link Location.back}, which
 * navigates to the previous entry in the platform's history stack.
 */
export class Privacy {
  location = inject(Location);

  /**
   * Navigates back to the previous route using the platform history.
   *
   * @remarks
   * This method is wired to a "Back" button in the template.
   */
  back(): void {
    this.location.back();
  }
}
