
/**
 * Defines the types of response given to a meeting request.
 */
export enum MeetingResponseType {
    
    /**
     * The response type is unknown.
     */
    Unknown = 0,
    
    /**
     * There was no response. The authenticated is the organizer of the meeting.
     */
    Organizer = 1,
    
    /**
     * The meeting was tentatively accepted.
     */
    Tentative = 2,
    
    /**
     * The meeting was accepted.
     */
    Accept = 3,
    
    /**
     * The meeting was declined.
     */
    Decline = 4,
    
    /**
     * No response was received for the meeting.
     */
    NoResponseReceived = 5
}