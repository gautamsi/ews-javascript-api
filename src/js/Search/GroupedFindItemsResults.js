"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the results of an item search operation.
 *
 * @sealed
 * @type    {TItem} The type of item returned by the search operation.
 */
var GroupedFindItemsResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **GroupedFindItemsResults<TItem>** class.
     */
    function GroupedFindItemsResults() {
        this.totalCount = 0;
        this.nextPageOffset = null;
        this.moreAvailable = false;
        /**
         * List of ItemGroups.
         */
        this.itemGroups = [];
    }
    Object.defineProperty(GroupedFindItemsResults.prototype, "TotalCount", {
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
    Object.defineProperty(GroupedFindItemsResults.prototype, "NextPageOffset", {
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
    Object.defineProperty(GroupedFindItemsResults.prototype, "MoreAvailable", {
        /**
         * Gets a value indicating whether more items corresponding to the search criteria are available in the searched folder.
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
    Object.defineProperty(GroupedFindItemsResults.prototype, "ItemGroups", {
        /**
         * Gets the item groups returned by the search operation.
         */
        get: function () {
            return this.itemGroups;
        },
        enumerable: true,
        configurable: true
    });
    GroupedFindItemsResults.prototype.GetEnumerator = function () { throw new Error("GroupedFindItemsResults.ts - GetEnumerator : Not implemented."); };
    return GroupedFindItemsResults;
}());
exports.GroupedFindItemsResults = GroupedFindItemsResults;
