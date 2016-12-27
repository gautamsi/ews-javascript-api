
/**
 * Defines how messages are disposed of in CreateItem and UpdateItem operations.
 */
export enum MessageDisposition {
    
    /**
     * Messages are saved but not sent.
     */
    SaveOnly = 0,
    
    /**
     * Messages are sent and a copy is saved.
     */
    SendAndSaveCopy = 1,
    
    /**
     * Messages are sent but no copy is saved.
     */
    SendOnly = 2
}