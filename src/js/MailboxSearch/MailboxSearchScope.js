"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MailboxSearchLocation_1 = require("../Enumerations/MailboxSearchLocation");
var MailboxSearchScopeType_1 = require("../Enumerations/MailboxSearchScopeType");
/**
 * Represents mailbox search scope object.
 */
var MailboxSearchScope = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param   {string}   mailbox       Mailbox
     * @param   {MailboxSearchLocation}   searchScope   Search scope
     */
    function MailboxSearchScope(mailbox, searchScope) {
        this.searchScope = MailboxSearchLocation_1.MailboxSearchLocation.All;
        this.scopeType = MailboxSearchScopeType_1.MailboxSearchScopeType.LegacyExchangeDN;
        /**
         * Mailbox
         */
        this.Mailbox = null;
        /**
         * Gets the extended data.
         *
         * @value The extended data.
         */
        this.ExtendedAttributes = null;
        this.Mailbox = mailbox;
        this.searchScope = searchScope;
        this.ExtendedAttributes = [];
    }
    Object.defineProperty(MailboxSearchScope.prototype, "SearchScope", {
        /**
         * Search scope
         */
        get: function () {
            return this.searchScope;
        },
        set: function (value) {
            this.searchScope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MailboxSearchScope.prototype, "SearchScopeType", {
        /**
         * @internal Search scope type
         */
        get: function () {
            return this.scopeType;
        },
        set: function (value) {
            this.scopeType = value;
        },
        enumerable: true,
        configurable: true
    });
    return MailboxSearchScope;
}());
exports.MailboxSearchScope = MailboxSearchScope;
