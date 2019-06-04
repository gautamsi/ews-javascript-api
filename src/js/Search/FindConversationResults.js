"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the results of an conversation search operation.
 *
 * @sealed
 */
var FindConversationResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **FindConversationResults** class.
     */
    function FindConversationResults() {
        /**
         * Gets a collection containing the conversations that were found by the search operation.
         */
        this.Conversations = [];
        /**
         * Gets a collection containing the HighlightTerms that were returned by the search operation.
         */
        this.HighlightTerms = [];
        /**
         * Gets the total count of conversations in view.
         */
        this.TotalCount = null;
        /**
         * Gets the indexed offset of the first conversation by the search operation.
         */
        this.IndexedOffset = null;
    }
    return FindConversationResults;
}());
exports.FindConversationResults = FindConversationResults;
