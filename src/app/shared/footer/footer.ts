import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
/**
 * Provides the site footer as a component.
 *
 * This component renders footer content and exposes navigation links via
 * {@link RouterLink}. Translations in the template are resolved using
 * {@link TranslatePipe}.
 *
 * @remarks
 * The class currently contains no additional logic and is primarily defined
 * by its template and styles.
 */
export class Footer {
  
}
