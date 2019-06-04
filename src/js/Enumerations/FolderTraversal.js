"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the scope of FindFolders operations.
 */
var FolderTraversal;
(function (FolderTraversal) {
    /**
     * Only direct sub-folders are retrieved.
     */
    FolderTraversal[FolderTraversal["Shallow"] = 0] = "Shallow";
    /**
     * The entire hierarchy of sub-folders is retrieved.
     */
    FolderTraversal[FolderTraversal["Deep"] = 1] = "Deep";
    /**
     * Only soft deleted folders are retrieved.
     */
    FolderTraversal[FolderTraversal["SoftDeleted"] = 2] = "SoftDeleted";
})(FolderTraversal = exports.FolderTraversal || (exports.FolderTraversal = {}));
