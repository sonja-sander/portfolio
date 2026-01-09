import { Component, Input } from '@angular/core';
import { ReferenceInterface } from '../../../interfaces/reference-interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  imports: [TranslatePipe],
  templateUrl: './reference.html',
  styleUrl: './reference.scss',
})
/**
 * Renders a single reference entry as a UI component.
 *
 * Expects a {@link ReferenceInterface} object as input and displays its
 * contents in the template. Translations in the template are resolved
 * using {@link TranslatePipe}.
 */
export class Reference {
  @Input() reference!: ReferenceInterface;
}
