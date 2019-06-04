"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines items to be included in a SyncFolderItems response.
 */
var SyncFolderItemsScope;
(function (SyncFolderItemsScope) {
    /**
     * Include only normal items in the response.
     */
    SyncFolderItemsScope[SyncFolderItemsScope["NormalItems"] = 0] = "NormalItems";
    /**
     * Include normal and associated items in the response.
     */
    SyncFolderItemsScope[SyncFolderItemsScope["NormalAndAssociatedItems"] = 1] = "NormalAndAssociatedItems";
})(SyncFolderItemsScope = exports.SyncFolderItemsScope || (exports.SyncFolderItemsScope = {}));
