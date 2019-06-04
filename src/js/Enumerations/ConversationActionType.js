"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines actions applicable to Conversation.
 */
var ConversationActionType;
(function (ConversationActionType) {
    /**
     * Categorizes every current and future message in the conversation
     */
    ConversationActionType[ConversationActionType["AlwaysCategorize"] = 0] = "AlwaysCategorize";
    /**
     * Deletes every current and future message in the conversation
     */
    ConversationActionType[ConversationActionType["AlwaysDelete"] = 1] = "AlwaysDelete";
    /**
     * Moves every current and future message in the conversation
     */
    ConversationActionType[ConversationActionType["AlwaysMove"] = 2] = "AlwaysMove";
    /**
     * Deletes current item in context folder in the conversation
     */
    ConversationActionType[ConversationActionType["Delete"] = 3] = "Delete";
    /**
     * Moves current item in context folder in the conversation
     */
    ConversationActionType[ConversationActionType["Move"] = 4] = "Move";
    /**
     * Copies current item in context folder in the conversation
     */
    ConversationActionType[ConversationActionType["Copy"] = 5] = "Copy";
    /**
     * Marks current item in context folder in the conversation with provided read state
     */
    ConversationActionType[ConversationActionType["SetReadState"] = 6] = "SetReadState";
    /**
     * Set retention policy.
     */
    ConversationActionType[ConversationActionType["SetRetentionPolicy"] = 7] = "SetRetentionPolicy";
    /**
     * Flag current items in context folder in the conversation with provided flag state.
     */
    ConversationActionType[ConversationActionType["Flag"] = 8] = "Flag";
})(ConversationActionType = exports.ConversationActionType || (exports.ConversationActionType = {}));
