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
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents a response to a Move or Copy operation.
 *
 */
var MoveCopyItemResponse = /** @class */ (function (_super) {
    __extends(MoveCopyItemResponse, _super);
    /**
     * @internal Initializes a new instance of the *MoveCopyItemResponse* class.
     *
     */
    function MoveCopyItemResponse() {
        var _this = _super.call(this) || this;
        _this.item = null;
        return _this;
    }
    Object.defineProperty(MoveCopyItemResponse.prototype, "Item", {
        /**
         * Gets the copied or moved item. Item is null if the copy or move operation was between two mailboxes or between a mailbox and a public folder.
         *
         */
        get: function () {
            return this.item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets Item instance.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {Item}              Item.
     */
    MoveCopyItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        var itemInfo = new ItemInfo_1.ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
    };
    /**
     * @internal Reads response elements from XML parsed to JS Object.
     *
     * @param   {any}               responseObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    MoveCopyItemResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Items]) {
            //debug: check if this works
            var items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Items, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
            // We only receive the copied or moved items if the copy or move operation was within
            // a single mailbox. No item is returned if the operation is cross-mailbox, from a
            // mailbox to a public folder or from a public folder to a mailbox.
            this.item = items[0];
        }
    };
    return MoveCopyItemResponse;
}(ServiceResponse_1.ServiceResponse));
exports.MoveCopyItemResponse = MoveCopyItemResponse;
