"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the flag status of a Conversation.
 */
var ConversationFlagStatus;
(function (ConversationFlagStatus) {
    /**
     * Not Flagged
     */
    ConversationFlagStatus[ConversationFlagStatus["NotFlagged"] = 0] = "NotFlagged";
    /**
     * Flagged
     */
    ConversationFlagStatus[ConversationFlagStatus["Flagged"] = 1] = "Flagged";
    /**
     * Complete
     */
    ConversationFlagStatus[ConversationFlagStatus["Complete"] = 2] = "Complete";
})(ConversationFlagStatus = exports.ConversationFlagStatus || (exports.ConversationFlagStatus = {}));
