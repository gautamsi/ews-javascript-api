"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how meeting cancellations should be sent to attendees when an appointment is deleted.
 */
var SendCancellationsMode;
(function (SendCancellationsMode) {
    /**
     * No meeting cancellation is sent.
     */
    SendCancellationsMode[SendCancellationsMode["SendToNone"] = 0] = "SendToNone";
    /**
     * Meeting cancellations are sent to all attendees.
     */
    SendCancellationsMode[SendCancellationsMode["SendOnlyToAll"] = 1] = "SendOnlyToAll";
    /**
     * Meeting cancellations are sent to all attendees and a copy of the cancellation message is saved in the organizer's Sent Items folder.
     */
    SendCancellationsMode[SendCancellationsMode["SendToAllAndSaveCopy"] = 2] = "SendToAllAndSaveCopy";
})(SendCancellationsMode = exports.SendCancellationsMode || (exports.SendCancellationsMode = {}));
