"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the location for mailbox search.
 */
var MailboxSearchLocation;
(function (MailboxSearchLocation) {
    /**
     * Primary only (Exchange 2013 or later).
     */
    MailboxSearchLocation[MailboxSearchLocation["PrimaryOnly"] = 0] = "PrimaryOnly";
    /**
     * Archive only (Exchange 2013 or later).
     */
    MailboxSearchLocation[MailboxSearchLocation["ArchiveOnly"] = 1] = "ArchiveOnly";
    /**
     * Both Primary and Archive (Exchange 2013 or later).
     */
    MailboxSearchLocation[MailboxSearchLocation["All"] = 2] = "All";
})(MailboxSearchLocation = exports.MailboxSearchLocation || (exports.MailboxSearchLocation = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (MailboxSearchLocation) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 2) //<= MailboxSearchLocation.All
            return ExchangeVersion_1.ExchangeVersion.Exchange2013;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    MailboxSearchLocation.RequiredServerVersion = RequiredServerVersion;
})(MailboxSearchLocation = exports.MailboxSearchLocation || (exports.MailboxSearchLocation = {}));
