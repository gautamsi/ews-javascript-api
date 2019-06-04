"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var EventType_1 = require("../Enumerations/EventType");
var FolderId_1 = require("../ComplexProperties/FolderId");
var JsonNames_1 = require("../Core/JsonNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var NotificationEvent_1 = require("./NotificationEvent");
/**
 * Represents an event that applies to a folder.
 */
var FolderEvent = /** @class */ (function (_super) {
    __extends(FolderEvent, _super);
    /**
     * @internal Initializes a new instance of the **FolderEvent** class.
     *
     * @param   {EventType}		eventType   Type of the event.
     * @param   {DateTime}   	timestamp   The event timestamp.
     */
    function FolderEvent(eventType, timestamp) {
        var _this = _super.call(this, eventType, timestamp) || this;
        _this.folderId = null;
        _this.oldFolderId = null;
        /**
         * The new number of unread messages. This is is only meaningful when EventType is equal to EventType.Modified. For all other event types, it's null.
         */
        _this.unreadCount = null;
        return _this;
    }
    Object.defineProperty(FolderEvent.prototype, "FolderId", {
        /**
         * Gets the Id of the folder this event applies to.
         */
        get: function () {
            return this.folderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderEvent.prototype, "OldFolderId", {
        /**
         * Gets the Id of the folder that was moved or copied. OldFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. For all other event types, OldFolderId is null.
         */
        get: function () {
            return this.oldFolderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderEvent.prototype, "UnreadCount", {
        /**
         * Gets the new number of unread messages. This is is only meaningful when EventType is equal to EventType.Modified. For all other event types, UnreadCount is null.
         */
        get: function () {
            return this.unreadCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads from XML.
     *
     * @param   {any}                 jsEvent                Json Object converted from XML.
     * @param   {ExchangeService}     service                The service.
     */
    FolderEvent.prototype.LoadFromXmlJsObject = function (jsEvent, service) {
        this.folderId = new FolderId_1.FolderId();
        this.folderId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.FolderId], service);
        this.ParentFolderId = new FolderId_1.FolderId();
        this.ParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.ParentFolderId], service);
        switch (this.EventType) {
            case EventType_1.EventType.Moved:
            case EventType_1.EventType.Copied:
                this.oldFolderId = new FolderId_1.FolderId();
                this.oldFolderId.LoadFromXmlJsObject(jsEvent[JsonNames_1.JsonNames.OldFolderId], service);
                this.OldParentFolderId = new FolderId_1.FolderId();
                this.OldParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.OldParentFolderId], service);
                break;
            case EventType_1.EventType.Modified:
                if (jsEvent[XmlElementNames_1.XmlElementNames.UnreadCount]) {
                    this.unreadCount = ExtensionMethods_1.Convert.toNumber(jsEvent[XmlElementNames_1.XmlElementNames.UnreadCount]);
                }
                break;
            default:
                break;
        }
    };
    return FolderEvent;
}(NotificationEvent_1.NotificationEvent));
exports.FolderEvent = FolderEvent;
