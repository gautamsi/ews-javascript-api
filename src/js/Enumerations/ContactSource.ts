
/**
 * Defines the source of a contact or group.
 */
export enum ContactSource {

    /**
     * The contact or group is stored in the Global Address List
     */
    ActiveDirectory = 0,

    /**
     * The contact or group is stored in Exchange.
     */
    Store = 1
}