import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../interfaces/project-interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
/**
 * Renders a single project as a UI component.
 *
 * Expects a {@link ProjectInterface} object as input and displays its contents
 * in the template. Translations in the template are resolved using
 * {@link TranslatePipe}.
 */
export class Project {
  @Input() project!: ProjectInterface;
}
