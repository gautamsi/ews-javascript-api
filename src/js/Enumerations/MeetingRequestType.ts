
/**
 * Defines the type of a meeting request.
 */
export enum MeetingRequestType {
    
    /**
     * Undefined meeting request type.
     */
    None = 0,
    
    /**
     * The meeting request is an update to the original meeting.
     */
    FullUpdate = 1,
    
    /**
     * The meeting request is an information update.
     */
    InformationalUpdate = 2,
    
    /**
     * The meeting request is for a new meeting.
     */
    NewMeetingRequest = 3,
    
    /**
     * The meeting request is outdated.
     */
    Outdated = 4,
    
    /**
     * The meeting update is a silent update to an existing meeting.
     */
    SilentUpdate = 5,
    
    /**
     * The meeting update was forwarded to a delegate, and this copy is informational.
     */
    PrincipalWantsCopy = 6
}