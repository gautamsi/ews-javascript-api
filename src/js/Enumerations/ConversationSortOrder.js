"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the order in which conversation nodes should be returned by GetConversationItems.
 */
var ConversationSortOrder;
(function (ConversationSortOrder) {
    /**
     * Tree order, ascending
     */
    ConversationSortOrder[ConversationSortOrder["TreeOrderAscending"] = 0] = "TreeOrderAscending";
    /**
     * Tree order, descending.
     */
    ConversationSortOrder[ConversationSortOrder["TreeOrderDescending"] = 1] = "TreeOrderDescending";
    /**
     * Chronological order, ascending.
     */
    ConversationSortOrder[ConversationSortOrder["DateOrderAscending"] = 2] = "DateOrderAscending";
    /**
     * Chronological order, descending.
     */
    ConversationSortOrder[ConversationSortOrder["DateOrderDescending"] = 3] = "DateOrderDescending";
})(ConversationSortOrder = exports.ConversationSortOrder || (exports.ConversationSortOrder = {}));
