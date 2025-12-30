import { Injectable } from '@angular/core';
import { ProjectInterface } from '../../interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsData {
  projectsList: Array<ProjectInterface> = [
    {
      id: 1,
      name: "El Pollo Loco",
      technologiesNames: ["HTML", "CSS", "JavaScript"],
      technologiesImages: [],
      isOngoingProject: false,
      duration: "2 weeks",
      image: "assets/img/projects/pollo-loco.png",
      about: "This is a side scroller game. The character Pepe must defeat the crazy chickens that try to attack him.",
      organisation: "I used class diagrams to organise all the classes and a kanban board to finish all tasks.",
      wasGroupProject: false,
      groupWork: "",
      learnings: "I learnt Object Oriented Programming.",
      liveTestUrl: "",
      gitHubUrl: ""
    },
    {
      id: 2,
      name: "Join",
      technologiesNames: ["Angular", "HTML", "SCSS", "TypeScript"],
      technologiesImages: [],
      isOngoingProject: false,
      duration: "2 weeks",
      image: "assets/img/projects/join.jpg",
      about: "This is a side scroller game. The character Pepe must defeat the crazy chickens that try to attack him.",
      organisation: "I used class diagrams to organise all the classes and a kanban board to finish all tasks.",
      wasGroupProject: true,
      groupWork: "This was a group project.",
      learnings: "",
      liveTestUrl: "",
      gitHubUrl: ""
    },
    {
      id: 3,
      name: "Ongoing Project",
      technologiesNames: ["Angular", "HTML", "SCSS", "TypeScript"],
      technologiesImages: [],
      isOngoingProject: true,
      duration: "2 weeks",
      image: "assets/img/projects/join.jpg",
      about: "This is a side scroller game. The character Pepe must defeat the crazy chickens that try to attack him.",
      organisation: "",
      wasGroupProject: false,
      groupWork: "",
      learnings: "",
      liveTestUrl: "",
      gitHubUrl: ""
    }
  ];
}
