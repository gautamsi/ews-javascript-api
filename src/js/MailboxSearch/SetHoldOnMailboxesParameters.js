"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HoldAction_1 = require("../Enumerations/HoldAction");
/**
 * Represents set hold on mailboxes parameters.
 *
 * @sealed
 */
var SetHoldOnMailboxesParameters = /** @class */ (function () {
    function SetHoldOnMailboxesParameters() {
        /**
         * Action type
         */
        this.ActionType = HoldAction_1.HoldAction.Create;
        /**
         * Hold id
         */
        this.HoldId = null;
        /**
         * Query
         */
        this.Query = null;
        /**
         * Collection of mailboxes
         */
        this.Mailboxes = null;
        /**
         * Query language
         */
        this.Language = null;
        /**
         * In-place hold identity
         */
        this.InPlaceHoldIdentity = null;
        /**
         * Item hold period
         * *The text value can be "Unlimited" or the string value of any Timespan value.*
         *
         * per github issue #120
         */
        this.ItemHoldPeriod = null;
        /**
         * Include Non Indexable Items
         *
         * per github issue #120
         */
        this.IncludeNonIndexableItems = null;
        /**
         * Perform deduplication
         *
         * per github issue #120
         */
        this.PerformDeduplication = null;
    }
    return SetHoldOnMailboxesParameters;
}());
exports.SetHoldOnMailboxesParameters = SetHoldOnMailboxesParameters;
