
/**
 * Defines the view filter for queries.
 */
export enum ViewFilter {

    /**
     * Show all item (no filter)
     */
    All = 0,

    /**
     * Item has flag
     */
    Flagged = 1,

    /**
     * Item has attachment
     */
    HasAttachment = 2,

    /**
     * Item is to or cc me
     */
    ToOrCcMe = 3,

    /**
     * Item is unread
     */
    Unread = 4,

    /**
     * Active task items
     */
    TaskActive = 5,

    /**
     * Overdue task items
     */
    TaskOverdue = 6,

    /**
     * Completed task items
     */
    TaskCompleted = 7,

    /**
     * Suggestions (aka Predicted Actions) from the Inference engine
     */
    Suggestions = 8,

    /**
     * Respond suggestions
     */
    SuggestionsRespond = 9,

    /**
     * Delete suggestions
     */
    SuggestionsDelete = 10
}

import { ExchangeVersion } from "./ExchangeVersion"
export module ViewFilter {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: ViewFilter): ExchangeVersion {
        if (value <= 10) //<=ViewFilter.SuggestionsDelete
            return ExchangeVersion.Exchange2013;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }
}