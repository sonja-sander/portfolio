import { Component, inject } from '@angular/core';
import { ReferencesData } from '../../services/references/references-data';
import { Reference } from './reference/reference';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [Reference, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
/**
 * Provides the references section of the page and binds the reference data source.
 *
 * This component acts as a container to render individual reference items
 * via {@link Reference} in the template. Translations are resolved using
 * {@link TranslatePipe}.
 *
 * @remarks
 * The data source is injected via Angular's `inject()` API from {@link ReferencesData}.
 */
export class References {
  referencesDataService = inject(ReferencesData);
}
