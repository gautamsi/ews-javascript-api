
/**
 * Defines a user's read access permission on items in a non-calendar folder.
 */
export enum FolderPermissionReadAccess {
    
    /**
     * The user has no read access on the items in the folder.
     */
    None = 0,
    
    /**
     * The user can read the start and end date and time of appointments. (Can only be applied to Calendar folders).
     */
    TimeOnly = 1,
    
    /**
     * The user can read the start and end date and time, subject and location of appointments. (Can only be applied to Calendar folders).
     */
    TimeAndSubjectAndLocation = 2,
    
    /**
     * The user has access to the full details of items.
     */
    FullDetails = 3
}