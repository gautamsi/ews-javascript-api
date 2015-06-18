import {MailboxSearchLocation} from "../Enumerations/MailboxSearchLocation";
import {MailboxSearchScopeType} from "../Enumerations/MailboxSearchScopeType";
import {ExtendedAttributes} from "./ExtendedAttributes";
export class MailboxSearchScope {
    Mailbox: string;
    SearchScope: MailboxSearchLocation;
    SearchScopeType: MailboxSearchScopeType;
    ExtendedAttributes: ExtendedAttributes;
    private searchScope: MailboxSearchLocation;
    private scopeType: MailboxSearchScopeType;
}