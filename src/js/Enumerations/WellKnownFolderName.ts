
/**
 * The values in this enumeration must match the values of the DistinguishedFolderIdNameType type in the schema.
 */
export enum WellKnownFolderName {

    /**
     * The Calendar folder.
     */
    Calendar,

    /**
     * The Contacts folder.
     */
    Contacts,

    /**
     * The Deleted Items folder
     */
    DeletedItems,

    /**
     * The Drafts folder.
     */
    Drafts,

    /**
     * The Inbox folder.
     */
    Inbox,

    /**
     * The Journal folder.
     */
    Journal,

    /**
     * The Notes folder.
     */
    Notes,

    /**
     * The Outbox folder.
     */
    Outbox,

    /**
     * The Sent Items folder.
     */
    SentItems,

    /**
     * The Tasks folder.
     */
    Tasks,

    /**
     * The message folder root.
     */
    MsgFolderRoot,

    /**
     * The root of the Public Folders hierarchy.
     */
    PublicFoldersRoot,

    /**
     * The root of the mailbox.
     */
    Root,

    /**
     * The Junk E-mail folder.
     */
    JunkEmail,

    /**
     * The Search Folders folder, also known as the Finder folder.
     */
    SearchFolders,

    /**
     * The Voicemail folder.
     */
    VoiceMail,

    /**
     * The Dumpster 2.0 root folder.
     */
    RecoverableItemsRoot,

    /**
     * The Dumpster 2.0 soft deletions folder.
     */
    RecoverableItemsDeletions,

    /**
     * The Dumpster 2.0 versions folder.
     */
    RecoverableItemsVersions,

    /**
     * The Dumpster 2.0 hard deletions folder.
     */
    RecoverableItemsPurges,

    /**
     * The Dumpster 2.0 discovery hold folder
     */
    RecoverableItemsDiscoveryHolds,

    /**
     * The root of the archive mailbox.
     */
    ArchiveRoot,

    /**
     * The root of the archive mailbox.
     */
    ArchiveInbox,

    /**
     * The message folder root in the archive mailbox.
     */
    ArchiveMsgFolderRoot,

    /**
     * The Deleted Items folder in the archive mailbox
     */
    ArchiveDeletedItems,

    /**
     * The Dumpster 2.0 root folder in the archive mailbox.
     */
    ArchiveRecoverableItemsRoot,

    /**
     * The Dumpster 2.0 soft deletions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsDeletions,

    /**
     * The Dumpster 2.0 versions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsVersions,

    /**
     * The Dumpster 2.0 hard deletions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsPurges,

    /**
     * The Dumpster 2.0 discovery hold folder in the archive mailbox.
     */
    ArchiveRecoverableItemsDiscoveryHolds,

    /**
     * The Sync Issues folder.
     */
    SyncIssues,

    /**
     * The Conflicts folder
     */
    Conflicts,

    /**
     * The Local failures folder
     */
    LocalFailures,

    /**
     * The Server failures folder
     */
    ServerFailures,

    /**
     * The Recipient Cache folder
     */
    RecipientCache,

    /**
     * The Quick Contacts folder
     */
    QuickContacts,

    /**
     * Conversation history folder
     */
    ConversationHistory,

    /**
     * AdminAuditLogs folder
     */
    AdminAuditLogs,

    /**
     * ToDo search folder
     */
    ToDoSearch,

    /**
     * MyContacts folder
     */
    MyContacts,

    /**
     * Directory (GAL)
     * It is not a mailbox folder. It only indicates any GAL operation.
     */
    Directory,

    /**
     * IMContactList folder
     */
    IMContactList,

    /**
     * PeopleConnect folder
     */
    PeopleConnect,

    /**
     * Favorites folder
     */
    Favorites,

    /**
     * Updated from latest Types.xsd in 03/2023
     */
    MeContact,
    PersonMetaData,
    TeamSpaceActivity,
    TeamSpaceMessaging,
    TeamSpaceWorkItems,
    Scheduled,
    OrionNotes,
    TagItems,
    AllTaggedItems,
    AllCategorizedItems,
    ExternalContacts,
    TeamChat,
    TeamChatHistory,
    YammerData,
    YammerRoot,
    YammerInbound,
    YammerOutbound,
    YammerFeeds,
    KaizalaData,
    MessageIngestion,
    OneDriveRoot,
    OneDriveRecyleBin,
    OneDriveSystem,
    OneDriveVolume,
    Important,
    Starred,
    Archive,
}

import { ExchangeVersion } from "./ExchangeVersion"
export module WellKnownFolderName {

    /**RequiredServerVersionAttribute */
    export function RequiredServerVersion(value: WellKnownFolderName): ExchangeVersion {
        if (value <= 15) //<= WellKnownFolderName.VoiceMail
            return ExchangeVersion.Exchange2007_SP1;
        if (value <= 28 && [20, 22].indexOf(value) < 0) //>= RecoverableItemsRoot && <= ArchiveRecoverableItemsPurges except RecoverableItemsDiscoveryHolds & ArchiveInbox
            return ExchangeVersion.Exchange2010_SP1;
        if (value >= 27 && value <= 43) //>= SyncIssues && <= Favorites except Directory
            return ExchangeVersion.Exchange2013;
        if ([20, 22, 29, 40].indexOf(value) >= 0) // RecoverableItemsDiscoveryHolds, ArchiveInbox, ArchiveRecoverableItemsDiscoveryHolds and Directory
            return ExchangeVersion.Exchange2013_SP1;

        return ExchangeVersion.Exchange_Version_Not_Updated;
    }

    const cachedValues = Object.keys(WellKnownFolderName)
        .filter(key => typeof WellKnownFolderName[key] == 'number')
        .map(item => item.toLowerCase())
        .reduce((prev, item, index) => ({ ...prev, [item]: index, [index]: item }), {});

    /**EwsEnumAttribute */
    export function FromEwsEnumString(value: string): any {
        return cachedValues[value];
    }

    /**EwsEnumAttribute */
    export function ToEwsEnumString(value: any) {
        return WellKnownFolderName[value].toLowerCase();
    }

}
