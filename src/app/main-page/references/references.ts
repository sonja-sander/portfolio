import { Component, inject } from '@angular/core';
import { ReferencesData } from '../../services/references/references-data';
import { Reference } from './reference/reference';

@Component({
  selector: 'app-references',
  imports: [Reference],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  referencesDataService = inject(ReferencesData);
}
