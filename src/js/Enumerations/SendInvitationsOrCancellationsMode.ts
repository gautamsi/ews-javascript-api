
/**
 * Defines if/how meeting invitations or cancellations should be sent to attendees when an appointment is updated.
 */
export enum SendInvitationsOrCancellationsMode {
    
    /**
     * No meeting invitation/cancellation is sent.
     */
    SendToNone = 0,
    
    /**
     * Meeting invitations/cancellations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified.
     */
    SendOnlyToChanged = 2,
    
    /**
     * Meeting invitations/cancellations are sent to all attendees and a copy is saved in the organizer's Sent Items folder.
     */
    SendToAllAndSaveCopy = 3,
    
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified and a copy is saved in the organizer's Sent Items folder.
     */
    SendToChangedAndSaveCopy = 4
}