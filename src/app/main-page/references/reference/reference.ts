import { Component, Input } from '@angular/core';
import { ReferenceInterface } from '../../../interfaces/reference-interface';

@Component({
  selector: 'app-reference',
  imports: [],
  templateUrl: './reference.html',
  styleUrl: './reference.scss',
})
export class Reference {
  @Input() reference!: ReferenceInterface;
}
