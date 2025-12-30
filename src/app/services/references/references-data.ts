import { Injectable } from '@angular/core';
import { ReferenceInterface } from '../../interfaces/reference-interface';

@Injectable({
  providedIn: 'root',
})
export class ReferencesData {
  referencesList: Array<ReferenceInterface> = [
    {
      colleagueName: "Srah Muller",
      project: "Join",
      referenceText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, accusamus.",
      link: ""
    },
    {
      colleagueName: "Srah Muller",
      project: "Join",
      referenceText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, accusamus.",
      link: ""
    },
    {
      colleagueName: "Srah Muller",
      project: "Join",
      referenceText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, accusamus.",
      link: ""
    }
  ];
}
