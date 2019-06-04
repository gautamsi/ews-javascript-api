"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the scope of FindItems operations.
 */
var ItemTraversal;
(function (ItemTraversal) {
    /**
     * All non deleted items in the specified folder are retrieved.
     */
    ItemTraversal[ItemTraversal["Shallow"] = 0] = "Shallow";
    /**
     * Only soft-deleted items are retrieved.
     */
    ItemTraversal[ItemTraversal["SoftDeleted"] = 1] = "SoftDeleted";
    /**
     * Only associated items are retrieved (Exchange 2010 or later).
     */
    ItemTraversal[ItemTraversal["Associated"] = 2] = "Associated";
})(ItemTraversal = exports.ItemTraversal || (exports.ItemTraversal = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (ItemTraversal) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 1) //<= ItemTraversal.SoftDeleted
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        if (value == 2) // === Associated
            return ExchangeVersion_1.ExchangeVersion.Exchange2010;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    ItemTraversal.RequiredServerVersion = RequiredServerVersion;
})(ItemTraversal = exports.ItemTraversal || (exports.ItemTraversal = {}));
