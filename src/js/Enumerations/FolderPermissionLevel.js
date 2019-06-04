"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines permission levels for calendar folders.
 */
var FolderPermissionLevel;
(function (FolderPermissionLevel) {
    /**
     * No permission is granted.
     */
    FolderPermissionLevel[FolderPermissionLevel["None"] = 0] = "None";
    /**
     * The Owner level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Owner"] = 1] = "Owner";
    /**
     * The Publishing Editor level.
     */
    FolderPermissionLevel[FolderPermissionLevel["PublishingEditor"] = 2] = "PublishingEditor";
    /**
     * The Editor level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Editor"] = 3] = "Editor";
    /**
     * The Publishing Author level.
     */
    FolderPermissionLevel[FolderPermissionLevel["PublishingAuthor"] = 4] = "PublishingAuthor";
    /**
     * The Author level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Author"] = 5] = "Author";
    /**
     * The Nonediting Author level.
     */
    FolderPermissionLevel[FolderPermissionLevel["NoneditingAuthor"] = 6] = "NoneditingAuthor";
    /**
     * The Reviewer level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Reviewer"] = 7] = "Reviewer";
    /**
     * The Contributor level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Contributor"] = 8] = "Contributor";
    /**
     * The Free/busy Time Only level. (Can only be applied to Calendar folders).
     */
    FolderPermissionLevel[FolderPermissionLevel["FreeBusyTimeOnly"] = 9] = "FreeBusyTimeOnly";
    /**
     * The Free/busy Time, Subject and Location level. (Can only be applied to Calendar folders).
     */
    FolderPermissionLevel[FolderPermissionLevel["FreeBusyTimeAndSubjectAndLocation"] = 10] = "FreeBusyTimeAndSubjectAndLocation";
    /**
     * The Custom level.
     */
    FolderPermissionLevel[FolderPermissionLevel["Custom"] = 11] = "Custom";
})(FolderPermissionLevel = exports.FolderPermissionLevel || (exports.FolderPermissionLevel = {}));
