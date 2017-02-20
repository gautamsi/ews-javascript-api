
/**
 * Defines the scope of a user's permission on a folders.
 */
export enum PermissionScope {

    /**
     * The user does not have the associated permission.
     */
    None = 0,

    /**
     * The user has the associated permission on items that it owns.
     */
    Owned = 1,

    /**
     * The user has the associated permission on all items.
     */
    All = 2
}