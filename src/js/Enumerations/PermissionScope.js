"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the scope of a user's permission on a folders.
 */
var PermissionScope;
(function (PermissionScope) {
    /**
     * The user does not have the associated permission.
     */
    PermissionScope[PermissionScope["None"] = 0] = "None";
    /**
     * The user has the associated permission on items that it owns.
     */
    PermissionScope[PermissionScope["Owned"] = 1] = "Owned";
    /**
     * The user has the associated permission on all items.
     */
    PermissionScope[PermissionScope["All"] = 2] = "All";
})(PermissionScope = exports.PermissionScope || (exports.PermissionScope = {}));
