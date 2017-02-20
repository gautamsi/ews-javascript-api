
/**
 * Defines how conflict resolutions are handled in update operations.
 */
export enum ConflictResolutionMode {
    
    /**
     * Local property changes are discarded.
     */
    NeverOverwrite = 0,
    
    /**
     * Local property changes are applied to the server unless the server-side copy is more recent than the local copy.
     */
    AutoResolve = 1,
    
    /**
     * Local property changes overwrite server-side changes. 
     */
    AlwaysOverwrite = 2
}