import { ExtendedAttribute } from "./ExtendedAttribute";
import { MailboxSearchLocation } from "../Enumerations/MailboxSearchLocation";
import { MailboxSearchScopeType } from "../Enumerations/MailboxSearchScopeType";

/**
 * Represents mailbox search scope object.
 */
export class MailboxSearchScope {

    private searchScope: MailboxSearchLocation = MailboxSearchLocation.All;
    private scopeType: MailboxSearchScopeType = MailboxSearchScopeType.LegacyExchangeDN;

    /**
     * Mailbox
     */
    Mailbox: string = null;

    /**
     * Search scope
     */
    get SearchScope(): MailboxSearchLocation {
        return this.searchScope;
    }
    set SearchScope(value: MailboxSearchLocation) {
        this.searchScope = value;
    }

    /**
     * @internal Search scope type
     */
    get SearchScopeType(): MailboxSearchScopeType {
        return this.scopeType;
    }
    /**
     * @internal Search scope type
     */
    set SearchScopeType(value: MailboxSearchScopeType) {
        this.scopeType = value;
    }

    /**
     * Gets the extended data.
     * 
     * @value The extended data.
     */
    ExtendedAttributes: ExtendedAttribute[] = null;

    /**
     * Constructor
     *
     * @param   {string}   mailbox       Mailbox
     * @param   {MailboxSearchLocation}   searchScope   Search scope
     */
    constructor(mailbox: string, searchScope: MailboxSearchLocation) {
        this.Mailbox = mailbox;
        this.searchScope = searchScope;
        this.ExtendedAttributes = [];
    }
}