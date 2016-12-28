
/**
 * Defines the order in which conversation nodes should be returned by GetConversationItems.
 */
export enum ConversationSortOrder {
    
    /**
     * Tree order, ascending
     */
    TreeOrderAscending = 0,
    
    /**
     * Tree order, descending.
     */
    TreeOrderDescending = 1,
    
    /**
     * Chronological order, ascending.
     */
    DateOrderAscending = 2,
    
    /**
     * Chronological order, descending.
     */
    DateOrderDescending = 3
}