
/**
 * @internal Enum MailboxSearchScopeType
 */
export enum MailboxSearchScopeType {
    
    /**
     * The legacy exchange DN
     */
    LegacyExchangeDN = 0,
    
    /**
     * The public folder
     */
    PublicFolder = 1,
    
    /**
     * The recipient
     */
    Recipient = 2,
    
    /**
     * The mailbox GUID
     */
    MailboxGuid = 3,
    
    /**
     * All public folders
     */
    AllPublicFolders = 4,
    
    /**
     * All mailboxes
     */
    AllMailboxes = 5,
    
    /**
     * The saved search id
     */
    SavedSearchId = 6,
    
    /**
     * The auto detect
     */
    AutoDetect = 7
}