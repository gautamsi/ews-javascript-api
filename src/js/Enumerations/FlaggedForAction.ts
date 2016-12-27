
/**
 * Defines the follow-up actions that may be stamped on a message.
 */
export enum FlaggedForAction {
    
    /**
     * The message is flagged with any action.
     */
    Any = 0,
    
    /**
     * The recipient is requested to call the sender.
     */
    Call = 1,
    
    /**
     * The recipient is requested not to forward the message.
     */
    DoNotForward = 2,
    
    /**
     * The recipient is requested to follow up on the message.
     */
    FollowUp = 3,
    
    /**
     * The recipient received the message for information.
     */
    FYI = 4,
    
    /**
     * The recipient is requested to forward the message.
     */
    Forward = 5,
    
    /**
     * The recipient is informed that a response to the message is not required.
     */
    NoResponseNecessary = 6,
    
    /**
     * The recipient is requested to read the message.
     */
    Read = 7,
    
    /**
     * The recipient is requested to reply to the sender of the message.
     */
    Reply = 8,
    
    /**
     * The recipient is requested to reply to everyone the message was sent to.
     */
    ReplyToAll = 9,
    
    /**
     * The recipient is requested to review the message.
     */
    Review = 10
}