import { Injectable } from '@angular/core';
import { ReferenceInterface } from '../../interfaces/reference-interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Provides reference/testimonial data for the application.
 *
 * This service acts as a simple in-memory data source that exposes a list of
 * references to be rendered by UI components (e.g., the references section).
 *
 * @remarks
 * The actual reference text is stored as a translation key (`referenceTextKey`)
 * and is resolved in the UI via the translation pipeline. Optional external
 * targets can be provided via `link`.
 */
export class ReferencesData {
  referencesList: Array<ReferenceInterface> = [
    {
      colleagueName: 'Sahra Muller',
      project: 'Join',
      referenceTextKey: 'references.reference-1.reference-text',
      link: '',
    },
    {
      colleagueName: 'Sarah Muller',
      project: 'Join',
      referenceTextKey: 'references.reference-2.reference-text',
      link: '',
    },
    {
      colleagueName: 'Sarah Muller',
      project: 'Join',
      referenceTextKey: 'references.reference-3.reference-text',
      link: '',
    },
  ];
}
