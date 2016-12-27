//todo - move to file where class Microsoft.Exchange.WebServices.Data.NonIndexableItem is located

/**
 * Item index error
 */
export enum ItemIndexError {
    
    /**
     * None
     */
    None = 0,
    
    /**
     * Generic Error
     */
    GenericError = 1,
    
    /**
     * Timeout
     */
    Timeout = 2,
    
    /**
     * Stale Event
     */
    StaleEvent = 3,
    
    /**
     * Mailbox Offline
     */
    MailboxOffline = 4,
    
    /**
     * Too many attachments to index
     */
    AttachmentLimitReached = 5,
    
    /**
     * Data is truncated
     */
    MarsWriterTruncation = 6
}