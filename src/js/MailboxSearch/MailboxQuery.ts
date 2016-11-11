import { MailboxSearchScope } from "./MailboxSearchScope";

/**
 * Represents mailbox query object.
 * 
 * @sealed
 */
export class MailboxQuery {

    /**
     * Search query
     */
    Query: string = null;

    /**
     * Set of mailbox and scope pair
     */
    MailboxSearchScopes: MailboxSearchScope[] = null;

    /**
     * Constructor
     *
     * @param   {string}                query          Search query
     * @param   {MailboxSearchScope[]}  searchScopes   Set of mailbox and scope pair
     */
    constructor(query: string, searchScopes: MailboxSearchScope[]) {
        this.Query = query;
        this.MailboxSearchScopes = searchScopes;
    }
}