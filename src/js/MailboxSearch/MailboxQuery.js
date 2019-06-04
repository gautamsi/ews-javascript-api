"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents mailbox query object.
 *
 * @sealed
 */
var MailboxQuery = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param   {string}                query          Search query
     * @param   {MailboxSearchScope[]}  searchScopes   Set of mailbox and scope pair
     */
    function MailboxQuery(query, searchScopes) {
        /**
         * Search query
         */
        this.Query = null;
        /**
         * Set of mailbox and scope pair
         */
        this.MailboxSearchScopes = null;
        this.Query = query;
        this.MailboxSearchScopes = searchScopes;
    }
    return MailboxQuery;
}());
exports.MailboxQuery = MailboxQuery;
