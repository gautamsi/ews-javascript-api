"use strict";
//todo - move to file where class Microsoft.Exchange.WebServices.Data.NonIndexableItem is located
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Item index error
 */
var ItemIndexError;
(function (ItemIndexError) {
    /**
     * None
     */
    ItemIndexError[ItemIndexError["None"] = 0] = "None";
    /**
     * Generic Error
     */
    ItemIndexError[ItemIndexError["GenericError"] = 1] = "GenericError";
    /**
     * Timeout
     */
    ItemIndexError[ItemIndexError["Timeout"] = 2] = "Timeout";
    /**
     * Stale Event
     */
    ItemIndexError[ItemIndexError["StaleEvent"] = 3] = "StaleEvent";
    /**
     * Mailbox Offline
     */
    ItemIndexError[ItemIndexError["MailboxOffline"] = 4] = "MailboxOffline";
    /**
     * Too many attachments to index
     */
    ItemIndexError[ItemIndexError["AttachmentLimitReached"] = 5] = "AttachmentLimitReached";
    /**
     * Data is truncated
     */
    ItemIndexError[ItemIndexError["MarsWriterTruncation"] = 6] = "MarsWriterTruncation";
})(ItemIndexError = exports.ItemIndexError || (exports.ItemIndexError = {}));
