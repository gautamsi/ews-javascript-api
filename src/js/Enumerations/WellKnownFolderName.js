"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The values in this enumeration must match the values of the DistinguishedFolderIdNameType type in the schema.
 */
var WellKnownFolderName;
(function (WellKnownFolderName) {
    /**
     * The Calendar folder.
     */
    WellKnownFolderName[WellKnownFolderName["Calendar"] = 0] = "Calendar";
    /**
     * The Contacts folder.
     */
    WellKnownFolderName[WellKnownFolderName["Contacts"] = 1] = "Contacts";
    /**
     * The Deleted Items folder
     */
    WellKnownFolderName[WellKnownFolderName["DeletedItems"] = 2] = "DeletedItems";
    /**
     * The Drafts folder.
     */
    WellKnownFolderName[WellKnownFolderName["Drafts"] = 3] = "Drafts";
    /**
     * The Inbox folder.
     */
    WellKnownFolderName[WellKnownFolderName["Inbox"] = 4] = "Inbox";
    /**
     * The Journal folder.
     */
    WellKnownFolderName[WellKnownFolderName["Journal"] = 5] = "Journal";
    /**
     * The Notes folder.
     */
    WellKnownFolderName[WellKnownFolderName["Notes"] = 6] = "Notes";
    /**
     * The Outbox folder.
     */
    WellKnownFolderName[WellKnownFolderName["Outbox"] = 7] = "Outbox";
    /**
     * The Sent Items folder.
     */
    WellKnownFolderName[WellKnownFolderName["SentItems"] = 8] = "SentItems";
    /**
     * The Tasks folder.
     */
    WellKnownFolderName[WellKnownFolderName["Tasks"] = 9] = "Tasks";
    /**
     * The message folder root.
     */
    WellKnownFolderName[WellKnownFolderName["MsgFolderRoot"] = 10] = "MsgFolderRoot";
    /**
     * The root of the Public Folders hierarchy.
     */
    WellKnownFolderName[WellKnownFolderName["PublicFoldersRoot"] = 11] = "PublicFoldersRoot";
    /**
     * The root of the mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["Root"] = 12] = "Root";
    /**
     * The Junk E-mail folder.
     */
    WellKnownFolderName[WellKnownFolderName["JunkEmail"] = 13] = "JunkEmail";
    /**
     * The Search Folders folder, also known as the Finder folder.
     */
    WellKnownFolderName[WellKnownFolderName["SearchFolders"] = 14] = "SearchFolders";
    /**
     * The Voicemail folder.
     */
    WellKnownFolderName[WellKnownFolderName["VoiceMail"] = 15] = "VoiceMail";
    /**
     * The Dumpster 2.0 root folder.
     */
    WellKnownFolderName[WellKnownFolderName["RecoverableItemsRoot"] = 16] = "RecoverableItemsRoot";
    /**
     * The Dumpster 2.0 soft deletions folder.
     */
    WellKnownFolderName[WellKnownFolderName["RecoverableItemsDeletions"] = 17] = "RecoverableItemsDeletions";
    /**
     * The Dumpster 2.0 versions folder.
     */
    WellKnownFolderName[WellKnownFolderName["RecoverableItemsVersions"] = 18] = "RecoverableItemsVersions";
    /**
     * The Dumpster 2.0 hard deletions folder.
     */
    WellKnownFolderName[WellKnownFolderName["RecoverableItemsPurges"] = 19] = "RecoverableItemsPurges";
    /**
     * The Dumpster 2.0 discovery hold folder
     */
    WellKnownFolderName[WellKnownFolderName["RecoverableItemsDiscoveryHolds"] = 20] = "RecoverableItemsDiscoveryHolds";
    /**
     * The root of the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRoot"] = 21] = "ArchiveRoot";
    /**
     * The root of the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveInbox"] = 22] = "ArchiveInbox";
    /**
     * The message folder root in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveMsgFolderRoot"] = 23] = "ArchiveMsgFolderRoot";
    /**
     * The Deleted Items folder in the archive mailbox
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveDeletedItems"] = 24] = "ArchiveDeletedItems";
    /**
     * The Dumpster 2.0 root folder in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRecoverableItemsRoot"] = 25] = "ArchiveRecoverableItemsRoot";
    /**
     * The Dumpster 2.0 soft deletions folder in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRecoverableItemsDeletions"] = 26] = "ArchiveRecoverableItemsDeletions";
    /**
     * The Dumpster 2.0 versions folder in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRecoverableItemsVersions"] = 27] = "ArchiveRecoverableItemsVersions";
    /**
     * The Dumpster 2.0 hard deletions folder in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRecoverableItemsPurges"] = 28] = "ArchiveRecoverableItemsPurges";
    /**
     * The Dumpster 2.0 discovery hold folder in the archive mailbox.
     */
    WellKnownFolderName[WellKnownFolderName["ArchiveRecoverableItemsDiscoveryHolds"] = 29] = "ArchiveRecoverableItemsDiscoveryHolds";
    /**
     * The Sync Issues folder.
     */
    WellKnownFolderName[WellKnownFolderName["SyncIssues"] = 30] = "SyncIssues";
    /**
     * The Conflicts folder
     */
    WellKnownFolderName[WellKnownFolderName["Conflicts"] = 31] = "Conflicts";
    /**
     * The Local failures folder
     */
    WellKnownFolderName[WellKnownFolderName["LocalFailures"] = 32] = "LocalFailures";
    /**
     * The Server failures folder
     */
    WellKnownFolderName[WellKnownFolderName["ServerFailures"] = 33] = "ServerFailures";
    /**
     * The Recipient Cache folder
     */
    WellKnownFolderName[WellKnownFolderName["RecipientCache"] = 34] = "RecipientCache";
    /**
     * The Quick Contacts folder
     */
    WellKnownFolderName[WellKnownFolderName["QuickContacts"] = 35] = "QuickContacts";
    /**
     * Conversation history folder
     */
    WellKnownFolderName[WellKnownFolderName["ConversationHistory"] = 36] = "ConversationHistory";
    /**
     * AdminAuditLogs folder
     */
    WellKnownFolderName[WellKnownFolderName["AdminAuditLogs"] = 37] = "AdminAuditLogs";
    /**
     * ToDo search folder
     */
    WellKnownFolderName[WellKnownFolderName["ToDoSearch"] = 38] = "ToDoSearch";
    /**
     * MyContacts folder
     */
    WellKnownFolderName[WellKnownFolderName["MyContacts"] = 39] = "MyContacts";
    /**
     * Directory (GAL)
     * It is not a mailbox folder. It only indicates any GAL operation.
     */
    WellKnownFolderName[WellKnownFolderName["Directory"] = 40] = "Directory";
    /**
     * IMContactList folder
     */
    WellKnownFolderName[WellKnownFolderName["IMContactList"] = 41] = "IMContactList";
    /**
     * PeopleConnect folder
     */
    WellKnownFolderName[WellKnownFolderName["PeopleConnect"] = 42] = "PeopleConnect";
    /**
     * Favorites folder
     */
    WellKnownFolderName[WellKnownFolderName["Favorites"] = 43] = "Favorites";
})(WellKnownFolderName = exports.WellKnownFolderName || (exports.WellKnownFolderName = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (WellKnownFolderName) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 15) //<= WellKnownFolderName.VoiceMail
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        if (value <= 28 && [20, 22].indexOf(value) < 0) //>= RecoverableItemsRoot && <= ArchiveRecoverableItemsPurges except RecoverableItemsDiscoveryHolds & ArchiveInbox
            return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
        if (value >= 27 && value <= 43) //>= SyncIssues && <= Favorites except Directory
            return ExchangeVersion_1.ExchangeVersion.Exchange2013;
        if ([20, 22, 29, 40].indexOf(value) >= 0) // RecoverableItemsDiscoveryHolds, ArchiveInbox, ArchiveRecoverableItemsDiscoveryHolds and Directory
            return ExchangeVersion_1.ExchangeVersion.Exchange2013_SP1;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    WellKnownFolderName.RequiredServerVersion = RequiredServerVersion;
})(WellKnownFolderName = exports.WellKnownFolderName || (exports.WellKnownFolderName = {}));
