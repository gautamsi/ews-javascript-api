"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = require("../Enumerations/EventType");
/**
 * Represents an event as exposed by push and pull notifications.
 */
var NotificationEvent = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **NotificationEvent** class.
     *
     * @param   {EventType}		eventType   Type of the event.
     * @param   {DateTime}   	timestamp   The event timestamp.
     */
    function NotificationEvent(eventType, timestamp) {
        /**
         * Type of this event.
         */
        this.eventType = EventType_1.EventType.Status;
        /**
         * Date and time when the event occurred.
         */
        this.timestamp = null;
        /**
         * Id of parent folder of the item or folder this event applies to.
         */
        this.parentFolderId = null;
        /**
         * Id of the old prarent foldero of the item or folder this event applies to.
         * This property is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
         * For all other event types, oldParentFolderId will be null.
         */
        this.oldParentFolderId = null;
        this.eventType = eventType;
        this.timestamp = timestamp;
    }
    Object.defineProperty(NotificationEvent.prototype, "EventType", {
        /**
         * Gets the type of this event.
         */
        get: function () {
            return this.eventType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationEvent.prototype, "TimeStamp", {
        /**
         * Gets the date and time when the event occurred.
         */
        get: function () {
            return this.timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationEvent.prototype, "ParentFolderId", {
        /**
         * Gets the Id of the parent folder of the item or folder this event applie to.
         */
        get: function () {
            return this.parentFolderId;
        },
        set: function (value) {
            this.parentFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationEvent.prototype, "OldParentFolderId", {
        /**
         * Gets the Id of the old parent folder of the item or folder this event applies to.
         * OldParentFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
         * For all other event types, OldParentFolderId is null.
         */
        get: function () {
            return this.oldParentFolderId;
        },
        set: function (value) {
            this.oldParentFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    return NotificationEvent;
}());
exports.NotificationEvent = NotificationEvent;
