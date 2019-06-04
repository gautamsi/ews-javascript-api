"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a user's read access permission on items in a non-calendar folder.
 */
var FolderPermissionReadAccess;
(function (FolderPermissionReadAccess) {
    /**
     * The user has no read access on the items in the folder.
     */
    FolderPermissionReadAccess[FolderPermissionReadAccess["None"] = 0] = "None";
    /**
     * The user can read the start and end date and time of appointments. (Can only be applied to Calendar folders).
     */
    FolderPermissionReadAccess[FolderPermissionReadAccess["TimeOnly"] = 1] = "TimeOnly";
    /**
     * The user can read the start and end date and time, subject and location of appointments. (Can only be applied to Calendar folders).
     */
    FolderPermissionReadAccess[FolderPermissionReadAccess["TimeAndSubjectAndLocation"] = 2] = "TimeAndSubjectAndLocation";
    /**
     * The user has access to the full details of items.
     */
    FolderPermissionReadAccess[FolderPermissionReadAccess["FullDetails"] = 3] = "FullDetails";
})(FolderPermissionReadAccess = exports.FolderPermissionReadAccess || (exports.FolderPermissionReadAccess = {}));
