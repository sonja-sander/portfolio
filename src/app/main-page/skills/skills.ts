import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
/**
 * Provides the skills section of the page as a component.
 *
 * This component acts as a container for displaying the user's skill set and
 * binds translations in the template via {@link TranslatePipe} as well as
 * navigation via {@link RouterLink}.
 *
 * @remarks
 * The class currently contains no additional logic and is mainly defined
 * by its template and styles.
 */
export class Skills {
  
}
