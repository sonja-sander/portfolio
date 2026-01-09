import { Injectable } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Provides project data for the application.
 *
 * This service acts as a simple in-memory data source that exposes a list of
 * projects to be rendered by UI components (e.g., the projects section).
 *
 * @remarks
 * The project content is largely driven by translation keys (e.g. `nameKey`,
 * `aboutKey`, `durationKey`) that are resolved in the UI via the translation
 * pipeline. Asset paths (images/icons) are provided as strings and are expected
 * to be available in the configured Angular assets folder.
 */
export class ProjectsData {
  projectsList: Array<ProjectInterface> = [
    {
      id: 1,
      nameKey: 'projects.project-1.name',
      technologiesNames: ['HTML', 'CSS', 'JavaScript'],
      technologiesImages: [
        'assets/icons/skills/mobile/html.svg',
        'assets/icons/skills/mobile/css.svg',
        'assets/icons/skills/mobile/javascript.svg',
      ],
      isOngoingProject: false,
      durationKey: 'projects.project-1.duration',
      image: 'assets/img/projects/pollo-loco.png',
      aboutKey: 'projects.project-1.about',
      organisationKey: 'projects.project-1.organisation',
      wasGroupProject: false,
      groupWorkKey: 'projects.project-1.groupWork',
      learningsKey: 'projects.project-1.learnings',
      liveTestUrl: '',
      gitHubUrl: '',
    },
    {
      id: 2,
      nameKey: 'projects.project-2.name',
      technologiesNames: ['Angular', 'Git', 'Firebase'],
      technologiesImages: [
        'assets/icons/skills/mobile/angular.svg',
        'assets/icons/skills/mobile/git.svg',
        'assets/icons/skills/mobile/firebase.svg',
      ],
      isOngoingProject: false,
      durationKey: 'projects.project-2.duration',
      image: 'assets/img/projects/join.jpg',
      aboutKey: 'projects.project-2.about',
      organisationKey: 'projects.project-2.organisation',
      wasGroupProject: true,
      groupWorkKey: 'projects.project-2.groupWork',
      learningsKey: 'projects.project-2.learnings',
      liveTestUrl: '',
      gitHubUrl: '',
    },
    {
      id: 3,
      nameKey: 'projects.ongoing-project.name',
      technologiesNames: ['Angular', 'Git', 'Firebase'],
      technologiesImages: [
        'assets/icons/skills/mobile/angular.svg',
        'assets/icons/skills/mobile/git.svg',
        'assets/icons/skills/mobile/firebase.svg',
      ],
      isOngoingProject: true,
      durationKey: 'projects.ongoing-project.duration',
      image: 'assets/img/projects/join.jpg',
      aboutKey: 'projects.ongoing-project.about',
      organisationKey: 'projects.ongoing-project.organisation',
      wasGroupProject: false,
      groupWorkKey: 'projects.ongoing-project.organisation',
      learningsKey: 'projects.ongoing-project.organisation',
      liveTestUrl: '',
      gitHubUrl: '',
    },
  ];
}
