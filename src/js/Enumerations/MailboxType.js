"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of an EmailAddress object.
 */
var MailboxType;
(function (MailboxType) {
    /**
     * Unknown mailbox type (Exchange 2010 or later).
     */
    MailboxType[MailboxType["Unknown"] = 0] = "Unknown";
    /**
     * The EmailAddress represents a one-off contact (Exchange 2010 or later).
     */
    MailboxType[MailboxType["OneOff"] = 1] = "OneOff";
    /**
     * The EmailAddress represents a mailbox.
     */
    MailboxType[MailboxType["Mailbox"] = 2] = "Mailbox";
    /**
     * The EmailAddress represents a public folder.
     */
    MailboxType[MailboxType["PublicFolder"] = 3] = "PublicFolder";
    /**
     * The EmailAddress represents a Public Group.
     */
    MailboxType[MailboxType["PublicGroup"] = 4] = "PublicGroup";
    /**
     * The EmailAddress represents a Contact Group.
     */
    MailboxType[MailboxType["ContactGroup"] = 5] = "ContactGroup";
    /**
     * The EmailAddress represents a store contact or AD mail contact.
     */
    MailboxType[MailboxType["Contact"] = 6] = "Contact";
    /**
     * The EmailAddress represents a GroupMailbox (Exchange 2015/2016 or later).
     */
    MailboxType[MailboxType["GroupMailbox"] = 7] = "GroupMailbox";
})(MailboxType = exports.MailboxType || (exports.MailboxType = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (MailboxType) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 1) //<=MailboxType.OneOff
            return ExchangeVersion_1.ExchangeVersion.Exchange2010;
        if (value <= 6) //<=MailboxType.Contact
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        if (value <= 7) //<=MailboxType.GroupMailbox
            return ExchangeVersion_1.ExchangeVersion.Exchange2015;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    MailboxType.RequiredServerVersion = RequiredServerVersion;
    /**EwsEnumAttribute */
    function FromEwsEnumString(value) {
        switch (value) {
            case "PublicDL":
                return MailboxType.PublicGroup;
            case "PrivateDL":
                return MailboxType.ContactGroup;
            default:
                return MailboxType[value];
        }
    }
    MailboxType.FromEwsEnumString = FromEwsEnumString;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value) {
        switch (value) {
            case MailboxType.PublicGroup:
                return "PublicDL";
            case MailboxType.ContactGroup:
                return "PrivateDL";
            default:
                return MailboxType[value];
        }
    }
    MailboxType.ToEwsEnumString = ToEwsEnumString;
})(MailboxType = exports.MailboxType || (exports.MailboxType = {}));
