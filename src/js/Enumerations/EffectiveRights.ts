
/**
 * Defines the effective user rights associated with an item or folder.
 * 
 * [Flags]
 */
export enum EffectiveRights {
    
    /**
     * The user has no acces right on the item or folder.
     */
    None = 0,
    
    /**
     * The user can create associated items (FAI)
     */
    CreateAssociated = 1,
    
    /**
     * The user can create items.
     */
    CreateContents = 2,
    
    /**
     * The user can create sub-folders.
     */
    CreateHierarchy = 4,
    
    /**
     * The user can delete items and/or folders.
     */
    Delete = 8,
    
    /**
     * The user can modify the properties of items and/or folders.
     */
    Modify = 16,
    
    /**
     * The user can read the contents of items.
     */
    Read = 32,
    
    /**
     * The user can view private items.
     */
    ViewPrivateItems = 64
}