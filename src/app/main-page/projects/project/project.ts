import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../interfaces/project-interface';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  @Input() project!: ProjectInterface;
}
