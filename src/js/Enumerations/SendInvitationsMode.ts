
/**
 * Defines if/how meeting invitations are sent.
 */
export enum SendInvitationsMode {
    
    /**
     * No meeting invitation is sent.
     */
    SendToNone = 0,
    
    /**
     * Meeting invitations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    
    /**
     * Meeting invitations are sent to all attendees and a copy of the invitation message is saved.
     */
    SendToAllAndSaveCopy = 2
}