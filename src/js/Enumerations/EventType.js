"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the types of event that can occur in a folder.
 */
var EventType;
(function (EventType) {
    /**
     * This event is sent to a client application by push notifications to indicate that the subscription is still alive.
     */
    EventType[EventType["Status"] = 0] = "Status";
    /**
     * This event indicates that a new e-mail message was received.
     */
    EventType[EventType["NewMail"] = 1] = "NewMail";
    /**
     * This event indicates that an item or folder has been deleted.
     */
    EventType[EventType["Deleted"] = 2] = "Deleted";
    /**
     * This event indicates that an item or folder has been modified.
     */
    EventType[EventType["Modified"] = 3] = "Modified";
    /**
     * This event indicates that an item or folder has been moved to another folder.
     */
    EventType[EventType["Moved"] = 4] = "Moved";
    /**
     * This event indicates that an item or folder has been copied to another folder.
     */
    EventType[EventType["Copied"] = 5] = "Copied";
    /**
     * This event indicates that a new item or folder has been created.
     */
    EventType[EventType["Created"] = 6] = "Created";
    /**
     * This event indicates that free/busy has changed. This is only supported in 2010 SP1 or later
     */
    EventType[EventType["FreeBusyChanged"] = 7] = "FreeBusyChanged";
})(EventType = exports.EventType || (exports.EventType = {}));
var ExchangeVersion_1 = require("./ExchangeVersion");
(function (EventType) {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value) {
        if (value <= 6) //<= EventType.Created
            return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
        if (value == 7) // == FreeBusyChanged
            return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
        return ExchangeVersion_1.ExchangeVersion.Exchange_Version_Not_Updated;
    }
    EventType.RequiredServerVersion = RequiredServerVersion;
    /**EwsEnumAttribute */
    function FromEwsEnumString(value) {
        return EventType[value.replace("Event", "")];
    }
    EventType.FromEwsEnumString = FromEwsEnumString;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value) {
        return EventType[value] + "Event";
    }
    EventType.ToEwsEnumString = ToEwsEnumString;
})(EventType = exports.EventType || (exports.EventType = {}));
