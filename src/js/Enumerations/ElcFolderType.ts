
/**
 * Defines the folder type of a retention policy tag.
 */
export enum ElcFolderType {

    /**
     * Calendar folder.
     */
    Calendar = 1,

    /**
     * Contacts folder.
     */
    Contacts = 2,

    /**
     * Deleted Items.
     */
    DeletedItems = 3,

    /**
     * Drafts folder.
     */
    Drafts = 4,

    /**
     * Inbox.
     */
    Inbox = 5,

    /**
     * Junk mail
     */
    JunkEmail = 6,

    /**
     * Journal.
     */
    Journal = 7,

    /**
     * Notes.
     */
    Notes = 8,

    /**
     * Outbox.
     */
    Outbox = 9,

    /**
     * Sent Items.
     */
    SentItems = 10,

    /**
     * Tasks folder.
     */
    Tasks = 11,

    /**
     * Policy applies to all folders that do not have a policy.
     */
    All = 12,

    /**
     * Policy is for an organizational policy.
     */
    ManagedCustomFolder = 13,

    /**
     * Policy is for the RSS Subscription (default) folder.
     */
    RssSubscriptions = 14,

    /**
     * Policy is for the Sync Issues (default) folder.
     */
    SyncIssues = 15,

    /**
     * Policy is for the Conversation History (default) folder.
     * This folder is used by the Office Communicator to archive IM conversations.
     */
    ConversationHistory = 16,

    /**
     * Policy is for the personal folders.
     */
    Personal = 17,

    /**
     * Policy is for Dumpster 2.0.
     */
    RecoverableItems = 18,

    /**
     * Non IPM Subtree root.
     */
    NonIpmRoot = 19
}