"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchPageDirection_1 = require("../Enumerations/SearchPageDirection");
var SearchResultType_1 = require("../Enumerations/SearchResultType");
var SortDirection_1 = require("../Enumerations/SortDirection");
/**
 * Represents search mailbox parameters.
 *
 * @sealed
 */
var SearchMailboxesParameters = /** @class */ (function () {
    function SearchMailboxesParameters() {
        /**
         * Search queries
         */
        this.SearchQueries = null;
        /**
         * Result type
         */
        this.ResultType = SearchResultType_1.SearchResultType.PreviewOnly;
        /**
         * Sort by property
         */
        this.SortBy = null;
        /**
         * Sort direction
         */
        this.SortOrder = SortDirection_1.SortDirection.Ascending;
        /**
         * Perform deduplication
         */
        this.PerformDeduplication = false;
        /**
         * Page size
         */
        this.PageSize = 0;
        /**
         * Search page direction
         */
        this.PageDirection = SearchPageDirection_1.SearchPageDirection.Next;
        /**
         * Page item reference
         */
        this.PageItemReference = null;
        /**
         * Preview item response shape
         */
        this.PreviewItemResponseShape = null;
        /**
         * Query language
         */
        this.Language = null;
    }
    return SearchMailboxesParameters;
}());
exports.SearchMailboxesParameters = SearchMailboxesParameters;
