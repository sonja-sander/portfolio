import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
/**
 * Provides the about section of the page as a component.
 *
 * The component acts as a container for the about content and binds translations
 * in the template via {@link TranslatePipe} as well as navigation via
 * {@link RouterLink}.
 *
 * @remarks
 * This class currently contains no additional logic and is mainly defined
 * by its template and styles.
 */
export class About {
  
}
