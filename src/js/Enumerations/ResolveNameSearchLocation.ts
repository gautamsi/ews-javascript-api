
/**
 * Defines the location where a ResolveName operation searches for contacts.
 */
export enum ResolveNameSearchLocation {
    
    /**
     * The name is resolved against the Global Address List.
     */
    DirectoryOnly = 0,
    
    /**
     * The name is resolved against the Global Address List and then against the Contacts folder if no match was found.
     */
    DirectoryThenContacts = 1,
    
    /**
     * The name is resolved against the Contacts folder.
     */
    ContactsOnly = 2,
    
    /**
     * The name is resolved against the Contacts folder and then against the Global Address List if no match was found.
     */
    ContactsThenDirectory = 3
}