"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines if/how meeting invitations or cancellations should be sent to attendees when an appointment is updated.
 */
var SendInvitationsOrCancellationsMode;
(function (SendInvitationsOrCancellationsMode) {
    /**
     * No meeting invitation/cancellation is sent.
     */
    SendInvitationsOrCancellationsMode[SendInvitationsOrCancellationsMode["SendToNone"] = 0] = "SendToNone";
    /**
     * Meeting invitations/cancellations are sent to all attendees.
     */
    SendInvitationsOrCancellationsMode[SendInvitationsOrCancellationsMode["SendOnlyToAll"] = 1] = "SendOnlyToAll";
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified.
     */
    SendInvitationsOrCancellationsMode[SendInvitationsOrCancellationsMode["SendOnlyToChanged"] = 2] = "SendOnlyToChanged";
    /**
     * Meeting invitations/cancellations are sent to all attendees and a copy is saved in the organizer's Sent Items folder.
     */
    SendInvitationsOrCancellationsMode[SendInvitationsOrCancellationsMode["SendToAllAndSaveCopy"] = 3] = "SendToAllAndSaveCopy";
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified and a copy is saved in the organizer's Sent Items folder.
     */
    SendInvitationsOrCancellationsMode[SendInvitationsOrCancellationsMode["SendToChangedAndSaveCopy"] = 4] = "SendToChangedAndSaveCopy";
})(SendInvitationsOrCancellationsMode = exports.SendInvitationsOrCancellationsMode || (exports.SendInvitationsOrCancellationsMode = {}));
