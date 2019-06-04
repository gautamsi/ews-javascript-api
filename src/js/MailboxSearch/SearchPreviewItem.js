"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Importance_1 = require("../Enumerations/Importance");
/**
 * Represents search preview item.
 *
 * @sealed
 */
var SearchPreviewItem = /** @class */ (function () {
    function SearchPreviewItem() {
        /**
         * Item id
         */
        this.Id = null;
        /**
         * Mailbox
         */
        this.Mailbox = null;
        /**
         * Parent item id
         */
        this.ParentId = null;
        /**
         * Item Class
         */
        this.ItemClass = null;
        /**
         * Unique hash
         */
        this.UniqueHash = null;
        /**
         * Sort Value
         */
        this.SortValue = null;
        /**
         * OWA Link
         */
        this.OwaLink = null;
        /**
         * Sender
         */
        this.Sender = null;
        /**
         * To recipients
         */
        this.ToRecipients = null;
        /**
         * Cc recipients
         */
        this.CcRecipients = null;
        /**
         * Bcc recipients
         */
        this.BccRecipients = null;
        /**
         * Created Time
         */
        this.CreatedTime = null;
        /**
         * Received Time
         */
        this.ReceivedTime = null;
        /**
         * Sent Time
         */
        this.SentTime = null;
        /**
         * Subject
         */
        this.Subject = null;
        /**
         * Item size
         */
        this.Size = 0;
        /**
         * Preview
         */
        this.Preview = null;
        /**
         * Importance
         */
        this.Importance = Importance_1.Importance.Low;
        /**
         * Read
         */
        this.Read = false;
        /**
         * Has attachment
         */
        this.HasAttachment = false;
        /**
         * Extended properties
         */
        this.ExtendedProperties = null;
    }
    return SearchPreviewItem;
}());
exports.SearchPreviewItem = SearchPreviewItem;
