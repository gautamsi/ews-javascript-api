"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
var EventType_1 = require("../Enumerations/EventType");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var FolderEvent_1 = require("./FolderEvent");
var ItemEvent_1 = require("./ItemEvent");
var LazyMember_1 = require("../Core/LazyMember");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents a collection of notification events.
 */
var GetEventsResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **GetEventsResults** class.
     */
    function GetEventsResults() {
        /**
         * Watermark in event.
         */
        this.newWatermark = null;
        /**
         * Subscription id.
         */
        this.subscriptionId = null;
        /**
         * Previous watermark.
         */
        this.previousWatermark = null;
        /**
         * True if more events available for this subscription.
         */
        this.moreEventsAvailable = false;
        /**
         * Collection of notification events.
         */
        this.events = [];
    }
    Object.defineProperty(GetEventsResults, "XmlElementNameToEventTypeMap", {
        /**
         * Gets the XML element name to event type mapping.
         *
         * @value	The XML element name to event type mapping.
         */
        get: function () {
            return GetEventsResults.xmlElementNameToEventTypeMap.Member;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "SubscriptionId", {
        /**
         * @internal Gets the Id of the subscription the collection is associated with.
         */
        get: function () {
            return this.subscriptionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "PreviousWatermark", {
        /**
         * @internal Gets the subscription's previous watermark.
         */
        get: function () {
            return this.previousWatermark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "NewWatermark", {
        /**
         * @internal Gets the subscription's new watermark.
         */
        get: function () {
            return this.newWatermark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "MoreEventsAvailable", {
        /**
         * @internal Gets a value indicating whether more events are available on the Exchange server.
         */
        get: function () {
            return this.moreEventsAvailable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "FolderEvents", {
        /**
         * Gets the collection of folder events.
         *
         * @value	The folder events.
         */
        get: function () {
            return ExtensionMethods_1.ArrayHelper.OfType(this.events, function (item) { return item instanceof FolderEvent_1.FolderEvent; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "ItemEvents", {
        /**
         * Gets the collection of item events.
         *
         * @value	The item events.
         */
        get: function () {
            return ExtensionMethods_1.ArrayHelper.OfType(this.events, function (item) { return item instanceof ItemEvent_1.ItemEvent; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsResults.prototype, "AllEvents", {
        /**
         * Gets the collection of all events.
         *
         * @value	The events.
         */
        get: function () {
            return this.events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads the events from XML.
     *
     * @param   {any[]}               jsEventsArray         The json events array.
     * @param   {string}     		  xmlElementName		Name of the element.
     * @param   {ExchangeService}     service               The service.
     */
    GetEventsResults.prototype.LoadEventsFromXmlJsObject = function (jsEventsArray, eventElementName, service) {
        for (var _i = 0, jsEventsArray_1 = jsEventsArray; _i < jsEventsArray_1.length; _i++) {
            var jsEvent = jsEventsArray_1[_i];
            this.newWatermark = jsEvent[XmlElementNames_1.XmlElementNames.Watermark];
            var eventType = GetEventsResults.XmlElementNameToEventTypeMap.get(eventElementName);
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
            this.events.push(notificationEvent);
        }
    };
    /**
     * @internal Loads from XML.
     *
     * @param   {any}                 eventsResponse         The events response Object converted from XML.
     * @param   {ExchangeService}     service                The service.
     */
    GetEventsResults.prototype.LoadFromXmlJsObject = function (eventsResponse, service) {
        var response = eventsResponse;
        if (eventsResponse[XmlElementNames_1.XmlElementNames.Notification]) {
            response = eventsResponse[XmlElementNames_1.XmlElementNames.Notification];
        }
        for (var key in response) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.SubscriptionId:
                    this.subscriptionId = response[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PreviousWatermark:
                    this.previousWatermark = response[key];
                    break;
                case XmlElementNames_1.XmlElementNames.MoreEvents:
                    this.moreEventsAvailable = ExtensionMethods_1.Convert.toBool(response[key]);
                    break;
                default:
                    if (GetEventsResults.XmlElementNameToEventTypeMap.containsKey(key)) {
                        this.LoadEventsFromXmlJsObject(EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(response, key), key, service);
                    }
                    break;
            }
        }
    };
    /**
     * Map XML element name to notification event type.
     *
     * /remarks/ 	If you add a new notification event type, you'll need to add a new entry to the dictionary here.
     */
    GetEventsResults.xmlElementNameToEventTypeMap = new LazyMember_1.LazyMember(function () {
        var dictionary = new AltDictionary_1.DictionaryWithStringKey();
        dictionary.Add("CopiedEvent", EventType_1.EventType.Copied);
        dictionary.Add("CreatedEvent", EventType_1.EventType.Created);
        dictionary.Add("DeletedEvent", EventType_1.EventType.Deleted);
        dictionary.Add("ModifiedEvent", EventType_1.EventType.Modified);
        dictionary.Add("MovedEvent", EventType_1.EventType.Moved);
        dictionary.Add("NewMailEvent", EventType_1.EventType.NewMail);
        dictionary.Add("StatusEvent", EventType_1.EventType.Status);
        dictionary.Add("FreeBusyChangedEvent", EventType_1.EventType.FreeBusyChanged);
        return dictionary;
    });
    return GetEventsResults;
}());
exports.GetEventsResults = GetEventsResults;
