
/**
 * Defines the response actions that can be taken on an item.
 * 
 * [Flags]
 */
export enum ResponseActions {
    
    /**
     * No action can be taken.
     */
    None = 0,
    
    /**
     * The item can be accepted.
     */
    Accept = 1,
    
    /**
     * The item can be tentatively accepted.
     */
    TentativelyAccept = 2,
    
    /**
     * The item can be declined.
     */
    Decline = 4,
    
    /**
     * The item can be replied to.
     */
    Reply = 8,
    
    /**
     * The item can be replied to all.
     */
    ReplyAll = 16,
    
    /**
     * The item can be forwarded.
     */
    Forward = 32,
    
    /**
     * The item can be cancelled.
     */
    Cancel = 64,
    
    /**
     * The item can be removed from the calendar.
     */
    RemoveFromCalendar = 128,
    
    /**
     * The item's read receipt can be suppressed.
     */
    SuppressReadReceipt = 256,
    
    /**
     * A reply to the item can be posted.
     */
    PostReply = 512
}