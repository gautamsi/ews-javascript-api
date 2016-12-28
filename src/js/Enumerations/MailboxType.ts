
/**
 * Defines the type of an EmailAddress object.
 */
export enum MailboxType {
    /**
     * Unknown mailbox type (Exchange 2010 or later).
     */
    Unknown,

    /**
     * The EmailAddress represents a one-off contact (Exchange 2010 or later).
     */
    OneOff,

    /**
     * The EmailAddress represents a mailbox.
     */
    Mailbox,

    /**
     * The EmailAddress represents a public folder.
     */
    PublicFolder,

    /**
     * The EmailAddress represents a Public Group.
     */
    PublicGroup,

    /**
     * The EmailAddress represents a Contact Group.
     */
    ContactGroup,

    /**
     * The EmailAddress represents a store contact or AD mail contact.
     */
    Contact,

    /**
     * The EmailAddress represents a GroupMailbox (Exchange 2015/2016 or later).
     */
    GroupMailbox,
}

import { ExchangeVersion } from "./ExchangeVersion"
export module MailboxType {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: MailboxType): ExchangeVersion {
        if (value <= 1) //<=MailboxType.OneOff
            return ExchangeVersion.Exchange2010;
        if (value <= 6) //<=MailboxType.Contact
            return ExchangeVersion.Exchange2007_SP1;
        if (value <= 7) //<=MailboxType.GroupMailbox
            return ExchangeVersion.Exchange2015;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): MailboxType {
        switch (value) {
            case "PublicDL":
                return MailboxType.PublicGroup;
            case "PrivateDL":
                return MailboxType.ContactGroup;
            default:
                return MailboxType[value];
        }
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: MailboxType): string {
        switch (value) {
            case MailboxType.PublicGroup:
                return "PublicDL";
            case MailboxType.ContactGroup:
                return "PrivateDL";
            default:
                return MailboxType[value];
        }
    }
}