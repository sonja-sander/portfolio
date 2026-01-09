/**
 * Describes the data structure of a single reference or testimonial entry.
 *
 * This interface defines all properties required to render a reference in the UI,
 * including colleague information, project context, and translation keys.
 *
 * @remarks
 * The actual reference text is represented by a translation key (`referenceTextKey`)
 * that is resolved via the translation pipeline at runtime.
 */
export interface ReferenceInterface {
    colleagueName: string;
    project: string;
    referenceTextKey: string;
    link: string;
}
