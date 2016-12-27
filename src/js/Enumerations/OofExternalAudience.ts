
/**
 * Defines the external audience of an Out of Office notification.
 */
export enum OofExternalAudience {
    
    /**
     * No external recipients should receive Out of Office notifications.
     */
    None = 0,
    
    /**
     * Only recipients that are in the user's Contacts frolder should receive Out of Office notifications.
     */
    Known = 1,
    
    /**
     * All recipients should receive Out of Office notifications.
     */
    All = 2
}