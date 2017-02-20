
/**
 * Defines the type of change of a synchronization event.
 */
export enum ChangeType {
    
    /**
     * An item or folder was created.
     */
    Create = 0,
    
    /**
     * An item or folder was modified.
     */
    Update = 1,
    
    /**
     * An item or folder was deleted.
     */
    Delete = 2,
    
    /**
     * An item's IsRead flag was changed.
     */
    ReadFlagChange = 3
}