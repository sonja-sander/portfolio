import { Component, inject } from '@angular/core';
import { Project } from './project/project';
import { ProjectsData } from '../../services/projects/projects-data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [Project, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
/**
 * Provides the projects section of the page and controls the tab navigation.
 *
 * Manages the currently active tab index and binds the project data source
 * so that the corresponding project cards can be rendered in the template.
 *
 * @remarks
 * The data is injected via Angular's `inject()` API from {@link ProjectsData}.
 * Translations in the template are resolved using {@link TranslatePipe}.
 */
export class Projects {
  projectsDataService = inject(ProjectsData);
  activeTabIndex = 0;

  /**
   * Activates the tab with the given index.
   *
   * @param index - The index of the tab to set as active.
   */
  activateTab(index: number): void {
    this.activeTabIndex = index;
  }
}
