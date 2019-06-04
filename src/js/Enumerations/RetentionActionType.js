"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the action of a retention policy tag.
 */
var RetentionActionType;
(function (RetentionActionType) {
    /**
     * Never tags (RetentionEnabled = false) do not have retention action in the FAI.
     */
    RetentionActionType[RetentionActionType["None"] = 0] = "None";
    /**
     * Expired items will be moved to the Deleted Items folder.
     */
    RetentionActionType[RetentionActionType["MoveToDeletedItems"] = 1] = "MoveToDeletedItems";
    /**
     * Expired items will be moved to the organizational folder specified in the ExpirationDestination field.
     */
    RetentionActionType[RetentionActionType["MoveToFolder"] = 2] = "MoveToFolder";
    /**
     * Expired items will be soft deleted.
     */
    RetentionActionType[RetentionActionType["DeleteAndAllowRecovery"] = 3] = "DeleteAndAllowRecovery";
    /**
     * Expired items will be hard deleted.
     */
    RetentionActionType[RetentionActionType["PermanentlyDelete"] = 4] = "PermanentlyDelete";
    /**
     * Expired items will be tagged as expired.
     */
    RetentionActionType[RetentionActionType["MarkAsPastRetentionLimit"] = 5] = "MarkAsPastRetentionLimit";
    /**
     * Expired items will be moved to the archive.
     */
    RetentionActionType[RetentionActionType["MoveToArchive"] = 6] = "MoveToArchive";
})(RetentionActionType = exports.RetentionActionType || (exports.RetentionActionType = {}));
