
/**
 * Defines the scope of a search folder.
 */
export enum SearchFolderTraversal {
    
    /**
     * Items belonging to the root folder are retrieved.
     */
    Shallow = 0,
    
    /**
     * Items belonging to the root folder and its sub-folders are retrieved.
     */
    Deep = 1
}