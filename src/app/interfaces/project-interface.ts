export interface ProjectInterface {
    id: number;
    name: string;
    technologiesNames: Array<string>;
    technologiesImages: Array<string>;
    isOngoingProject: boolean;
    duration: string;
    image: string;
    about: string;
    organisation: string;
    wasGroupProject: boolean;
    groupWork: string;
    learnings: string;
    liveTestUrl: string;
    gitHubUrl: string;
}
