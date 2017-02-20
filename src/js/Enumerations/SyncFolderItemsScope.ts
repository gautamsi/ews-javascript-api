
/**
 * Determines items to be included in a SyncFolderItems response.
 */
export enum SyncFolderItemsScope {
    
    /**
     * Include only normal items in the response.
     */
    NormalItems = 0,
    
    /**
     * Include normal and associated items in the response.
     */
    NormalAndAssociatedItems = 1
}