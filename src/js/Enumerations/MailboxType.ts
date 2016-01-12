import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
export enum MailboxType {
    Unknown = 0,
    OneOff = 1,
    Mailbox = 2,
    PublicFolder = 3,
    PublicGroup = 4,
    ContactGroup = 5,
    Contact = 6
}
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