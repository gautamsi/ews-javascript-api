
/**
 * Defines the action of a retention policy tag.
 */
export enum RetentionActionType {
    
    /**
     * Never tags (RetentionEnabled = false) do not have retention action in the FAI.
     */
    None = 0,
    
    /**
     * Expired items will be moved to the Deleted Items folder.
     */
    MoveToDeletedItems = 1,
    
    /**
     * Expired items will be moved to the organizational folder specified in the ExpirationDestination field.
     */
    MoveToFolder = 2,
    
    /**
     * Expired items will be soft deleted.
     */
    DeleteAndAllowRecovery = 3,
    
    /**
     * Expired items will be hard deleted.
     */
    PermanentlyDelete = 4,
    
    /**
     * Expired items will be tagged as expired.
     */
    MarkAsPastRetentionLimit = 5,
    
    /**
     * Expired items will be moved to the archive.
     */
    MoveToArchive = 6
}