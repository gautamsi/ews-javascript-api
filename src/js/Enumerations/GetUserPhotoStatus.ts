
/**
 * Defines the response types from a GetUserPhoto request
 */
export enum GetUserPhotoStatus {
    /**
     * The photo was successfully returned
     */
    PhotoReturned = 0,

    /**
     * The photo has not changed since it was last obtained
     */
    PhotoUnchanged = 1,

    /**
     * The photo or user was not found on the server
     */
    PhotoOrUserNotFound = 2,
}