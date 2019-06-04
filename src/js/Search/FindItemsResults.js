"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the results of an item search operation.
 *
 * @sealed
 * @type    {TItem}  Item type
 */
var FindItemsResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **FindItemsResults<T>** class.
     */
    function FindItemsResults() {
        this.totalCount = 0;
        this.nextPageOffset = null;
        this.moreAvailable = false;
        this.items = [];
        this.highlightTerms = [];
    }
    Object.defineProperty(FindItemsResults.prototype, "TotalCount", {
        /**
         * Gets the total number of items matching the search criteria available in the searched folder.
         */
        get: function () {
            return this.totalCount;
        },
        set: function (value) {
            this.totalCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindItemsResults.prototype, "NextPageOffset", {
        /**
         * Gets the offset that should be used with ItemView to retrieve the next page of items in a FindItems operation.
         */
        get: function () {
            return this.nextPageOffset;
        },
        set: function (value) {
            this.nextPageOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindItemsResults.prototype, "MoreAvailable", {
        /**
         * Gets a value indicating whether more items matching the search criteria are available in the searched folder.
         */
        get: function () {
            return this.moreAvailable;
        },
        set: function (value) {
            this.moreAvailable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindItemsResults.prototype, "Items", {
        /**
         * Gets a collection containing the items that were found by the search operation.
         */
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindItemsResults.prototype, "HighlightTerms", {
        /**
         * Gets a collection containing the highlight terms that were found by the search operation.
         */
        get: function () {
            return this.highlightTerms;
        },
        enumerable: true,
        configurable: true
    });
    return FindItemsResults;
}());
exports.FindItemsResults = FindItemsResults;
