import { Component, inject } from '@angular/core';
import { Project } from './project/project';
import { ProjectsData } from '../../services/projects/projects-data';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsDataService = inject(ProjectsData);
  activeTabIndex = 0;

  activateTab(index: number){
    this.activeTabIndex = index;
  }
}
