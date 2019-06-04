"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var DelegateFolderPermissionLevel;
(function (DelegateFolderPermissionLevel) {
    /**
     * The delegate has no permissions.
     */
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["None"] = 0] = "None";
    /**
     * The delegate has Editor permissions.
     */
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Editor"] = 1] = "Editor";
    /**
     * The delegate has Reviewer permissions.
     */
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Reviewer"] = 2] = "Reviewer";
    /**
     * The delegate has Author permissions.
     */
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Author"] = 3] = "Author";
    /**
     * The delegate has Custom permissions.
     */
    DelegateFolderPermissionLevel[DelegateFolderPermissionLevel["Custom"] = 4] = "Custom";
})(DelegateFolderPermissionLevel = exports.DelegateFolderPermissionLevel || (exports.DelegateFolderPermissionLevel = {}));
