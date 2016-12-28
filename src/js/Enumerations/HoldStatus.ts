
/**
 * Defines the hold status.
 */
export enum HoldStatus {
    
    /**
     * Not on hold
     */
    NotOnHold = 0,
    
    /**
     * Placing/removing hold is in-progress
     */
    Pending = 1,
    
    /**
     * On hold
     */
    OnHold = 2,
    
    /**
     * Some mailboxes are on hold and some are not
     */
    PartialHold = 3,
    
    /**
     * The hold operation failed
     */
    Failed = 4
}