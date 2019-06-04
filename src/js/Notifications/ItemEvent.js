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
var EventType_1 = require("../Enumerations/EventType");
var FolderId_1 = require("../ComplexProperties/FolderId");
var ItemId_1 = require("../ComplexProperties/ItemId");
var JsonNames_1 = require("../Core/JsonNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var NotificationEvent_1 = require("./NotificationEvent");
/**
 * Represents an event that applies to an item.
 */
var ItemEvent = /** @class */ (function (_super) {
    __extends(ItemEvent, _super);
    /**
     * @internal Initializes a new instance of the **FolderEvent** class.
     *
     * @param   {EventType}		eventType   Type of the event.
     * @param   {DateTime}   	timestamp   The event timestamp.
     */
    function ItemEvent(eventType, timestamp) {
        var _this = _super.call(this, eventType, timestamp) || this;
        /**
         * Id of the item this event applies to.
         */
        _this.itemId = null;
        /**
         * Id of the item that moved or copied. This is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
         * For all other event types, it's null.
         */
        _this.oldItemId = null;
        return _this;
    }
    Object.defineProperty(ItemEvent.prototype, "ItemId", {
        /**
         * Gets the Id of the item this event applies to.
         */
        get: function () {
            return this.itemId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemEvent.prototype, "OldItemId", {
        /**
         * Gets the Id of the item that was moved or copied. OldItemId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
         * For all other event types, OldItemId is null.
         */
        get: function () {
            return this.oldItemId;
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
    ItemEvent.prototype.LoadFromXmlJsObject = function (jsEvent, service) {
        this.itemId = new ItemId_1.ItemId();
        this.itemId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.ItemId], service);
        this.ParentFolderId = new FolderId_1.FolderId();
        this.ParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.ParentFolderId], service);
        switch (this.EventType) {
            case EventType_1.EventType.Moved:
            case EventType_1.EventType.Copied:
                this.oldItemId = new ItemId_1.ItemId();
                this.oldItemId.LoadFromXmlJsObject(jsEvent[JsonNames_1.JsonNames.OldItemId], service);
                this.OldParentFolderId = new FolderId_1.FolderId();
                this.OldParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames_1.XmlElementNames.OldParentFolderId], service);
                break;
            default:
                break;
        }
    };
    return ItemEvent;
}(NotificationEvent_1.NotificationEvent));
exports.ItemEvent = ItemEvent;
