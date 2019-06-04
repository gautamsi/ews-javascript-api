"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents deletion modes.
 */
var DeleteMode;
(function (DeleteMode) {
    /**
     * The item or folder will be permanently deleted.
     */
    DeleteMode[DeleteMode["HardDelete"] = 0] = "HardDelete";
    /**
     * The item or folder will be moved to the dumpster. Items and folders in the dumpster can be recovered.
     */
    DeleteMode[DeleteMode["SoftDelete"] = 1] = "SoftDelete";
    /**
     * The item or folder will be moved to the mailbox' Deleted Items folder.
     */
    DeleteMode[DeleteMode["MoveToDeletedItems"] = 2] = "MoveToDeletedItems";
})(DeleteMode = exports.DeleteMode || (exports.DeleteMode = {}));
