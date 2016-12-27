
/**
 * Defines permission levels for calendar folders.
 */
export enum FolderPermissionLevel {
    
    /**
     * No permission is granted.
     */
    None = 0,
    
    /**
     * The Owner level.
     */
    Owner = 1,
    
    /**
     * The Publishing Editor level.
     */
    PublishingEditor = 2,
    
    /**
     * The Editor level.
     */
    Editor = 3,
    
    /**
     * The Publishing Author level.
     */
    PublishingAuthor = 4,
    
    /**
     * The Author level.
     */
    Author = 5,
    
    /**
     * The Nonediting Author level.
     */
    NoneditingAuthor = 6,
    
    /**
     * The Reviewer level.
     */
    Reviewer = 7,
    
    /**
     * The Contributor level.
     */
    Contributor = 8,
    
    /**
     * The Free/busy Time Only level. (Can only be applied to Calendar folders).
     */
    FreeBusyTimeOnly = 9,
    
    /**
     * The Free/busy Time, Subject and Location level. (Can only be applied to Calendar folders).
     */
    FreeBusyTimeAndSubjectAndLocation = 10,
    
    /**
     * The Custom level.
     */
    Custom = 11
}