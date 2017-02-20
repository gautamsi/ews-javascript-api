
/**
 * Represents deletion modes.
 */
export enum DeleteMode {
    
    /**
     * The item or folder will be permanently deleted.
     */
    HardDelete = 0,
    
    /**
     * The item or folder will be moved to the dumpster. Items and folders in the dumpster can be recovered.
     */
    SoftDelete = 1,
    
    /**
     * The item or folder will be moved to the mailbox' Deleted Items folder.
     */
    MoveToDeletedItems = 2
}