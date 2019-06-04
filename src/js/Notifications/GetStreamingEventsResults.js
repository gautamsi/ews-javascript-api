"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType_1 = require("../Enumerations/EventType");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var FolderEvent_1 = require("./FolderEvent");
var GetEventsResults_1 = require("./GetEventsResults");
var ItemEvent_1 = require("./ItemEvent");
var NotificationGroup_1 = require("./NotificationGroup");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * @internal Represents a collection of notification events.
 *
 * @sealed
 */
var GetStreamingEventsResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **GetStreamingEventsResults** class.
     */
    function GetStreamingEventsResults() {
        /**
         * Collection of notification events.
         */
        this.events = [];
    }
    Object.defineProperty(GetStreamingEventsResults.prototype, "Notifications", {
        /**
         * @internal Gets the notification collection.
         *
         * @value	The notification collection.
         */
        get: function () { return this.events; },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads the events from XML.
     *
     * @param   {any[]}               	jsEventsArray         	The json events array.
     * @param   {string}     		  	xmlElementName			Name of the element.
     * @param   {NotificationGroup}		notifications			Collection of notifications.
     * @param   {ExchangeService}     	service               	The service.
     */
    GetStreamingEventsResults.prototype.LoadNotificationEventFromXmlJsObject = function (jsEventsArray, eventElementName, notifications, service) {
        for (var _i = 0, jsEventsArray_1 = jsEventsArray; _i < jsEventsArray_1.length; _i++) {
            var jsEvent = jsEventsArray_1[_i];
            var eventType = GetEventsResults_1.GetEventsResults.XmlElementNameToEventTypeMap.get(eventElementName);
            if (eventType == EventType_1.EventType.Status) {
                continue;
            }
            var timeStamp = service.ConvertUniversalDateTimeStringToLocalDateTime(jsEvent[XmlElementNames_1.XmlElementNames.TimeStamp]);
            var notificationEvent = void 0;
            if (jsEvent[XmlElementNames_1.XmlElementNames.FolderId]) {
                notificationEvent = new FolderEvent_1.FolderEvent(eventType, timeStamp);
            }
            else {
                notificationEvent = new ItemEvent_1.ItemEvent(eventType, timeStamp);
            }
            notificationEvent.LoadFromXmlJsObject(jsEvent, service);
            notifications.Events.push(notificationEvent);
        }
    };
    /**
     * @internal Loads from XML.
     *
     * @param   {any}                 eventsResponse         The events response Object converted from XML.
     * @param   {ExchangeService}     service                The service.
     */
    GetStreamingEventsResults.prototype.LoadFromXmlJsObject = function (eventsResponse, service) {
        var streamingNotifications = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(eventsResponse, XmlElementNames_1.XmlElementNames.Notification);
        for (var _i = 0, streamingNotifications_1 = streamingNotifications; _i < streamingNotifications_1.length; _i++) {
            var streamingNotification = streamingNotifications_1[_i];
            var notifications = new NotificationGroup_1.NotificationGroup();
            notifications.SubscriptionId = streamingNotification[XmlElementNames_1.XmlElementNames.SubscriptionId];
            notifications.Events = [];
            this.events.push(notifications);
            for (var key in streamingNotification) {
                switch (key) {
                    default:
                        if (GetEventsResults_1.GetEventsResults.XmlElementNameToEventTypeMap.containsKey(key)) {
                            this.LoadNotificationEventFromXmlJsObject(EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(streamingNotification, key), key, notifications, service);
                        }
                        break;
                }
            }
        }
    };
    return GetStreamingEventsResults;
}());
exports.GetStreamingEventsResults = GetStreamingEventsResults;
