"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the follow-up actions that may be stamped on a message.
 */
var FlaggedForAction;
(function (FlaggedForAction) {
    /**
     * The message is flagged with any action.
     */
    FlaggedForAction[FlaggedForAction["Any"] = 0] = "Any";
    /**
     * The recipient is requested to call the sender.
     */
    FlaggedForAction[FlaggedForAction["Call"] = 1] = "Call";
    /**
     * The recipient is requested not to forward the message.
     */
    FlaggedForAction[FlaggedForAction["DoNotForward"] = 2] = "DoNotForward";
    /**
     * The recipient is requested to follow up on the message.
     */
    FlaggedForAction[FlaggedForAction["FollowUp"] = 3] = "FollowUp";
    /**
     * The recipient received the message for information.
     */
    FlaggedForAction[FlaggedForAction["FYI"] = 4] = "FYI";
    /**
     * The recipient is requested to forward the message.
     */
    FlaggedForAction[FlaggedForAction["Forward"] = 5] = "Forward";
    /**
     * The recipient is informed that a response to the message is not required.
     */
    FlaggedForAction[FlaggedForAction["NoResponseNecessary"] = 6] = "NoResponseNecessary";
    /**
     * The recipient is requested to read the message.
     */
    FlaggedForAction[FlaggedForAction["Read"] = 7] = "Read";
    /**
     * The recipient is requested to reply to the sender of the message.
     */
    FlaggedForAction[FlaggedForAction["Reply"] = 8] = "Reply";
    /**
     * The recipient is requested to reply to everyone the message was sent to.
     */
    FlaggedForAction[FlaggedForAction["ReplyToAll"] = 9] = "ReplyToAll";
    /**
     * The recipient is requested to review the message.
     */
    FlaggedForAction[FlaggedForAction["Review"] = 10] = "Review";
})(FlaggedForAction = exports.FlaggedForAction || (exports.FlaggedForAction = {}));
