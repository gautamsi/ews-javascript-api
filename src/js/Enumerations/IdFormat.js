"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines supported Id formats in ConvertId operations.
 */
var IdFormat;
(function (IdFormat) {
    /**
     * The EWS Id format used in Exchange 2007 RTM.
     */
    IdFormat[IdFormat["EwsLegacyId"] = 0] = "EwsLegacyId";
    /**
     * The EWS Id format used in Exchange 2007 SP1 and above.
     */
    IdFormat[IdFormat["EwsId"] = 1] = "EwsId";
    /**
     * The base64-encoded PR_ENTRYID property.
     */
    IdFormat[IdFormat["EntryId"] = 2] = "EntryId";
    /**
     * The hexadecimal representation  of the PR_ENTRYID property.
     */
    IdFormat[IdFormat["HexEntryId"] = 3] = "HexEntryId";
    /**
     * The Store Id format.
     */
    IdFormat[IdFormat["StoreId"] = 4] = "StoreId";
    /**
     * The Outlook Web Access Id format.
     */
    IdFormat[IdFormat["OwaId"] = 5] = "OwaId";
})(IdFormat = exports.IdFormat || (exports.IdFormat = {}));
