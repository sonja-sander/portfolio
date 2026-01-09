import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [Navbar, Footer, RouterLink, TranslatePipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
/**
 * Provides the imprint page (legal notice) as a component.
 *
 * This component composes the imprint view using shared layout components
 * such as {@link Navbar} and {@link Footer}. It also enables navigation links
 * via {@link RouterLink} and resolves translations in the template via
 * {@link TranslatePipe}.
 *
 * @remarks
 * The class currently contains no additional logic and is primarily defined
 * by its template and styles.
 */
export class Imprint {
  
}
