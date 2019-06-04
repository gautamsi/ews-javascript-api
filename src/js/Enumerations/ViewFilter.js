"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the view filter for queries.
 */
var ViewFilter;
(function (ViewFilter) {
    /**
     * Show all item (no filter)
     */
    ViewFilter[ViewFilter["All"] = 0] = "All";
    /**
     * Item has flag
     */
    ViewFilter[ViewFilter["Flagged"] = 1] = "Flagged";
    /**
     * Item has attachment
     */
    ViewFilter[ViewFilter["HasAttachment"] = 2] = "HasAttachment";
    /**
     * Item is to or cc me
     */
    ViewFilter[ViewFilter["ToOrCcMe"] = 3] = "ToOrCcMe";
    /**
     * Item is unread
     */
    ViewFilter[ViewFilter["Unread"] = 4] = "Unread";
    /**
     * Active task items
     */
    ViewFilter[ViewFilter["TaskActive"] = 5] = "TaskActive";
    /**
     * Overdue task items
     */
    ViewFilter[ViewFilter["TaskOverdue"] = 6] = "TaskOverdue";
    /**
     * Completed task items
     */
    ViewFilter[ViewFilter["TaskCompleted"] = 7] = "TaskCompleted";
    /**
     * Suggestions (aka Predicted Actions) from the Inference engine
     */
    ViewFilter[ViewFilter["Suggestions"] = 8] = "Suggestions";
    /**
     * Respond suggestions
     */
    ViewFilter[ViewFilter["SuggestionsRespond"] = 9] = "SuggestionsRespond";
    /**
     * Delete suggestions
     */
    ViewFilter[ViewFilter["SuggestionsDelete"] = 10] = "SuggestionsDelete";
})(ViewFilter = exports.ViewFilter || (exports.ViewFilter = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (ViewFilter) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 10) //<=ViewFilter.SuggestionsDelete
            return ExchangeVersion_1.ExchangeVersion.Exchange2013;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    ViewFilter.RequiredServerVersion = RequiredServerVersion;
})(ViewFilter = exports.ViewFilter || (exports.ViewFilter = {}));
