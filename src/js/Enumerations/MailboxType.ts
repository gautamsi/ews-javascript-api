import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
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
     * The EmailAddress represents a GroupMailbox
     */
    GroupMailbox,
}
/**
 * This is to workaround **EwsEnumAttribute**
 */
export class MailboxTypeParser {
    static ToString(value: MailboxType): string {
        switch (value) {
            case MailboxType.PublicGroup:
                return "PublicDL";
            case MailboxType.ContactGroup:
                return "PrivateDL";
            default:
                return MailboxType[value];
        }
    }
    static FromString(value: string): MailboxType {
        switch (value) {
            case "PublicDL":
                return MailboxType.PublicGroup;
            case "PrivateDL":
                return MailboxType.ContactGroup;
            default:
                return MailboxType[value];
        }
    }
}