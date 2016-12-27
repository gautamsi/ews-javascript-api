
/**
 * Defines the scope of FindFolders operations.
 */
export enum FolderTraversal {
    
    /**
     * Only direct sub-folders are retrieved.
     */
    Shallow = 0,
    
    /**
     * The entire hierarchy of sub-folders is retrieved.
     */
    Deep = 1,
    
    /**
     * Only soft deleted folders are retrieved.
     */
    SoftDeleted = 2
}