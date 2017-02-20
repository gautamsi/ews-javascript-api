
/**
 * The attendee is the organizer of the meeting.
 */
export enum MeetingAttendeeType {
    
    /**
     * The attendee is the organizer of the meeting.
     */
    Organizer = 0,
    
    /**
     * The attendee is required.
     */
    Required = 1,
    
    /**
     * The attendee is optional.
     */
    Optional = 2,
    
    /**
     * The attendee is a room.
     */
    Room = 3,
    
    /**
     * The attendee is a resource.
     */
    Resource = 4
}