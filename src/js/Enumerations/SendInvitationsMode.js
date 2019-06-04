"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines if/how meeting invitations are sent.
 */
var SendInvitationsMode;
(function (SendInvitationsMode) {
    /**
     * No meeting invitation is sent.
     */
    SendInvitationsMode[SendInvitationsMode["SendToNone"] = 0] = "SendToNone";
    /**
     * Meeting invitations are sent to all attendees.
     */
    SendInvitationsMode[SendInvitationsMode["SendOnlyToAll"] = 1] = "SendOnlyToAll";
    /**
     * Meeting invitations are sent to all attendees and a copy of the invitation message is saved.
     */
    SendInvitationsMode[SendInvitationsMode["SendToAllAndSaveCopy"] = 2] = "SendToAllAndSaveCopy";
})(SendInvitationsMode = exports.SendInvitationsMode || (exports.SendInvitationsMode = {}));
