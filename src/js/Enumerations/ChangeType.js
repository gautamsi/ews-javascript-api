"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of change of a synchronization event.
 */
var ChangeType;
(function (ChangeType) {
    /**
     * An item or folder was created.
     */
    ChangeType[ChangeType["Create"] = 0] = "Create";
    /**
     * An item or folder was modified.
     */
    ChangeType[ChangeType["Update"] = 1] = "Update";
    /**
     * An item or folder was deleted.
     */
    ChangeType[ChangeType["Delete"] = 2] = "Delete";
    /**
     * An item's IsRead flag was changed.
     */
    ChangeType[ChangeType["ReadFlagChange"] = 3] = "ReadFlagChange";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
