
/**
 * Defines the hold action.
 */
export enum HoldAction {
    
    /**
     * Create new hold
     */
    Create = 0,
    
    /**
     * Update query associated with a hold
     */
    Update = 1,
    
    /**
     * Release the hold
     */
    Remove = 2
}