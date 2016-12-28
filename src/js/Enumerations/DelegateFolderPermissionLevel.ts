
/**
 * 
 */
export enum DelegateFolderPermissionLevel {

    /**
     * The delegate has no permissions.
     */
    None = 0,

    /**
     * The delegate has Editor permissions.
     */
    Editor = 1,

    /**
     * The delegate has Reviewer permissions.
     */
    Reviewer = 2,

    /**
     * The delegate has Author permissions.
     */
    Author = 3,

    /**
     * The delegate has Custom permissions.
     */
    Custom = 4
}