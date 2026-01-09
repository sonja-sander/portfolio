import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
/**
 * Provides the hero section of the page as a component.
 *
 * This component represents the “above the fold” entry area and exposes
 * navigation links via {@link RouterLink} as well as translations in the
 * template via {@link TranslatePipe}.
 *
 * @remarks
 * The class currently contains no additional logic and is mainly defined
 * by its template and styles.
 */
export class Hero {
  
}
