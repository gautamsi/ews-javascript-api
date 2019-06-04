"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the scope of a search folder.
 */
var SearchFolderTraversal;
(function (SearchFolderTraversal) {
    /**
     * Items belonging to the root folder are retrieved.
     */
    SearchFolderTraversal[SearchFolderTraversal["Shallow"] = 0] = "Shallow";
    /**
     * Items belonging to the root folder and its sub-folders are retrieved.
     */
    SearchFolderTraversal[SearchFolderTraversal["Deep"] = 1] = "Deep";
})(SearchFolderTraversal = exports.SearchFolderTraversal || (exports.SearchFolderTraversal = {}));
