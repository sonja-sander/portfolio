/**
 * Describes the data structure of a single project entry.
 *
 * This interface defines all properties required to render a project in the UI,
 * including translation keys, asset paths, metadata, and external links.
 *
 * @remarks
 * Most textual content is represented by translation keys that are resolved
 * via the translation pipeline at runtime.
 */
export interface ProjectInterface {
    id: number;
    nameKey: string;
    technologiesNames: Array<string>;
    technologiesImages: Array<string>;
    image: string;
    liveTestUrl: string;
    gitHubUrl: string;
    isOngoingProject: boolean;
    wasGroupProject: boolean;
    durationKey: string;
    aboutKey: string;
    organisationKey: string;
    groupWorkKey: string;
    learningsKey: string;
}
