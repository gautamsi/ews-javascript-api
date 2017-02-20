
/**
 * Defines supported Id formats in ConvertId operations.
 */
export enum IdFormat {
    
    /**
     * The EWS Id format used in Exchange 2007 RTM.
     */
    EwsLegacyId = 0,
    
    /**
     * The EWS Id format used in Exchange 2007 SP1 and above.
     */
    EwsId = 1,
    
    /**
     * The base64-encoded PR_ENTRYID property.
     */
    EntryId = 2,
    
    /**
     * The hexadecimal representation  of the PR_ENTRYID property.
     */
    HexEntryId = 3,
    
    /**
     * The Store Id format.
     */
    StoreId = 4,
    
    /**
     * The Outlook Web Access Id format.
     */
    OwaId = 5
}