"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Enum MailboxSearchScopeType
 */
var MailboxSearchScopeType;
(function (MailboxSearchScopeType) {
    /**
     * The legacy exchange DN
     */
    MailboxSearchScopeType[MailboxSearchScopeType["LegacyExchangeDN"] = 0] = "LegacyExchangeDN";
    /**
     * The public folder
     */
    MailboxSearchScopeType[MailboxSearchScopeType["PublicFolder"] = 1] = "PublicFolder";
    /**
     * The recipient
     */
    MailboxSearchScopeType[MailboxSearchScopeType["Recipient"] = 2] = "Recipient";
    /**
     * The mailbox GUID
     */
    MailboxSearchScopeType[MailboxSearchScopeType["MailboxGuid"] = 3] = "MailboxGuid";
    /**
     * All public folders
     */
    MailboxSearchScopeType[MailboxSearchScopeType["AllPublicFolders"] = 4] = "AllPublicFolders";
    /**
     * All mailboxes
     */
    MailboxSearchScopeType[MailboxSearchScopeType["AllMailboxes"] = 5] = "AllMailboxes";
    /**
     * The saved search id
     */
    MailboxSearchScopeType[MailboxSearchScopeType["SavedSearchId"] = 6] = "SavedSearchId";
    /**
     * The auto detect
     */
    MailboxSearchScopeType[MailboxSearchScopeType["AutoDetect"] = 7] = "AutoDetect";
})(MailboxSearchScopeType = exports.MailboxSearchScopeType || (exports.MailboxSearchScopeType = {}));
