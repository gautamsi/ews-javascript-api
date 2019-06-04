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
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var EwsLogging_1 = require("../EwsLogging");
var XmlElementNames_1 = require("../XmlElementNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ServiceResponse_1 = require("./ServiceResponse");
var GetItemResponse = /** @class */ (function (_super) {
    __extends(GetItemResponse, _super);
    function GetItemResponse(item, propertySet) {
        var _this = _super.call(this) || this;
        _this.item = null;
        _this.propertySet = null;
        _this.item = item;
        _this.propertySet = propertySet;
        EwsLogging_1.EwsLogging.Assert(_this.propertySet !== null, "GetItemResponse.ctor", "PropertySet should not be null");
        return _this;
    }
    Object.defineProperty(GetItemResponse.prototype, "Item", {
        get: function () {
            return this.item;
        },
        enumerable: true,
        configurable: true
    });
    GetItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        if (this.Item != null) {
            return this.Item;
        }
        else {
            return new ItemInfo_1.ItemInfo().CreateEwsObjectFromXmlElementName(service, xmlElementName);
        }
    };
    //ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("GetItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    GetItemResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        var _this = this;
        var items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Items, function (s, e) { return _this.GetObjectInstance(s, e); }, true, /* clearPropertyBag         */ this.propertySet, /* requestedPropertySet     */ false); /* summaryPropertiesOnly    */
        this.item = items[0];
    };
    return GetItemResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetItemResponse = GetItemResponse;
