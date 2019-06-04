"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the response actions that can be taken on an item.
 *
 * [Flags]
 */
var ResponseActions;
(function (ResponseActions) {
    /**
     * No action can be taken.
     */
    ResponseActions[ResponseActions["None"] = 0] = "None";
    /**
     * The item can be accepted.
     */
    ResponseActions[ResponseActions["Accept"] = 1] = "Accept";
    /**
     * The item can be tentatively accepted.
     */
    ResponseActions[ResponseActions["TentativelyAccept"] = 2] = "TentativelyAccept";
    /**
     * The item can be declined.
     */
    ResponseActions[ResponseActions["Decline"] = 4] = "Decline";
    /**
     * The item can be replied to.
     */
    ResponseActions[ResponseActions["Reply"] = 8] = "Reply";
    /**
     * The item can be replied to all.
     */
    ResponseActions[ResponseActions["ReplyAll"] = 16] = "ReplyAll";
    /**
     * The item can be forwarded.
     */
    ResponseActions[ResponseActions["Forward"] = 32] = "Forward";
    /**
     * The item can be cancelled.
     */
    ResponseActions[ResponseActions["Cancel"] = 64] = "Cancel";
    /**
     * The item can be removed from the calendar.
     */
    ResponseActions[ResponseActions["RemoveFromCalendar"] = 128] = "RemoveFromCalendar";
    /**
     * The item's read receipt can be suppressed.
     */
    ResponseActions[ResponseActions["SuppressReadReceipt"] = 256] = "SuppressReadReceipt";
    /**
     * A reply to the item can be posted.
     */
    ResponseActions[ResponseActions["PostReply"] = 512] = "PostReply";
})(ResponseActions = exports.ResponseActions || (exports.ResponseActions = {}));
