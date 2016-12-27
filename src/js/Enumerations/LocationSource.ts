
/**
 * Source of resolution.
 */
export enum LocationSource {
    
    /**
     * Unresolved
     */
    None = 0,
    
    /**
     * Resolved by external location services (such as Bing, Google, etc)
     */
    LocationServices = 1,
    
    /**
     * Resolved by external phonebook services (such as Bing, Google, etc)
     */
    PhonebookServices = 2,
    
    /**
     * Revolved by a GPS enabled device (such as cellphone)
     */
    Device = 3,
    
    /**
     * Sourced from a contact card
     */
    Contact = 4,
    
    /**
     * Sourced from a resource (such as a conference room)
     */
    Resource = 5
}