
/**
 * Defines how meeting cancellations should be sent to attendees when an appointment is deleted.
 */
export enum SendCancellationsMode {
    
    /**
     * No meeting cancellation is sent.
     */
    SendToNone = 0,
    
    /**
     * Meeting cancellations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    
    /**
     * Meeting cancellations are sent to all attendees and a copy of the cancellation message is saved in the organizer's Sent Items folder.
     */
    SendToAllAndSaveCopy = 2
}