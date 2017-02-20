
/**
 * Defines the email position of an extracted entity.
 */
export enum EmailPosition {
    
    /**
     * The position is in the latest reply.
     */
    LatestReply = 0,
    
    /**
     * The position is not in the latest reply.
     */
    Other = 1,
    
    /**
     * The position is in the subject.
     */
    Subject = 2,
    
    /**
     * The position is in the signature.
     */
    Signature = 3
}