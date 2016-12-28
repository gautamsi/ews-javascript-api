

/**
 * @internal Defines actions applicable to Conversation.
 */
export enum ConversationActionType {
    
    /**
     * Categorizes every current and future message in the conversation
     */
    AlwaysCategorize = 0,
    
    /**
     * Deletes every current and future message in the conversation
     */
    AlwaysDelete = 1,
    
    /**
     * Moves every current and future message in the conversation
     */
    AlwaysMove = 2,
    
    /**
     * Deletes current item in context folder in the conversation
     */
    Delete = 3,
    
    /**
     * Moves current item in context folder in the conversation
     */
    Move = 4,
    
    /**
     * Copies current item in context folder in the conversation
     */
    Copy = 5,
    
    /**
     * Marks current item in context folder in the conversation with provided read state
     */
    SetReadState = 6,
    
    /**
     * Set retention policy.
     */
    SetRetentionPolicy = 7,
    
    /**
     * Flag current items in context folder in the conversation with provided flag state.
     */
    Flag = 8
}