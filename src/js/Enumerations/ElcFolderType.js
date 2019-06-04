"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the folder type of a retention policy tag.
 */
var ElcFolderType;
(function (ElcFolderType) {
    /**
     * Calendar folder.
     */
    ElcFolderType[ElcFolderType["Calendar"] = 1] = "Calendar";
    /**
     * Contacts folder.
     */
    ElcFolderType[ElcFolderType["Contacts"] = 2] = "Contacts";
    /**
     * Deleted Items.
     */
    ElcFolderType[ElcFolderType["DeletedItems"] = 3] = "DeletedItems";
    /**
     * Drafts folder.
     */
    ElcFolderType[ElcFolderType["Drafts"] = 4] = "Drafts";
    /**
     * Inbox.
     */
    ElcFolderType[ElcFolderType["Inbox"] = 5] = "Inbox";
    /**
     * Junk mail
     */
    ElcFolderType[ElcFolderType["JunkEmail"] = 6] = "JunkEmail";
    /**
     * Journal.
     */
    ElcFolderType[ElcFolderType["Journal"] = 7] = "Journal";
    /**
     * Notes.
     */
    ElcFolderType[ElcFolderType["Notes"] = 8] = "Notes";
    /**
     * Outbox.
     */
    ElcFolderType[ElcFolderType["Outbox"] = 9] = "Outbox";
    /**
     * Sent Items.
     */
    ElcFolderType[ElcFolderType["SentItems"] = 10] = "SentItems";
    /**
     * Tasks folder.
     */
    ElcFolderType[ElcFolderType["Tasks"] = 11] = "Tasks";
    /**
     * Policy applies to all folders that do not have a policy.
     */
    ElcFolderType[ElcFolderType["All"] = 12] = "All";
    /**
     * Policy is for an organizational policy.
     */
    ElcFolderType[ElcFolderType["ManagedCustomFolder"] = 13] = "ManagedCustomFolder";
    /**
     * Policy is for the RSS Subscription (default) folder.
     */
    ElcFolderType[ElcFolderType["RssSubscriptions"] = 14] = "RssSubscriptions";
    /**
     * Policy is for the Sync Issues (default) folder.
     */
    ElcFolderType[ElcFolderType["SyncIssues"] = 15] = "SyncIssues";
    /**
     * Policy is for the Conversation History (default) folder.
     * This folder is used by the Office Communicator to archive IM conversations.
     */
    ElcFolderType[ElcFolderType["ConversationHistory"] = 16] = "ConversationHistory";
    /**
     * Policy is for the personal folders.
     */
    ElcFolderType[ElcFolderType["Personal"] = 17] = "Personal";
    /**
     * Policy is for Dumpster 2.0.
     */
    ElcFolderType[ElcFolderType["RecoverableItems"] = 18] = "RecoverableItems";
    /**
     * Non IPM Subtree root.
     */
    ElcFolderType[ElcFolderType["NonIpmRoot"] = 19] = "NonIpmRoot";
})(ElcFolderType = exports.ElcFolderType || (exports.ElcFolderType = {}));
