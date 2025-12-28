import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsData {
  projectsList: Array<ProjectInterface> = [
    {
      name: "El Pollo Loco",
      technologiesNames: ["HTML", "CSS", "JavaScript"],
      technologiesImages: [],
      duration: "2 weeks",
      image: "assets/img/pollo-loco.png",
      about: "kjsdkjfsk",
      organisation: "lksjdfkjs",
      groupWork: "lsdkjf",
      liveTestUrl: "sdjflksj",
      gitHubUrl: "sdflskd"
    }
  ];
}
