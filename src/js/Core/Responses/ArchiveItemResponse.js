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
var ServiceResponse_1 = require("./ServiceResponse");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var XmlElementNames_1 = require("../XmlElementNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ArchiveItemResponse = /** @class */ (function (_super) {
    __extends(ArchiveItemResponse, _super);
    function ArchiveItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArchiveItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        return (new ItemInfo_1.ItemInfo()).CreateEwsObjectFromXmlElementName(service, xmlElementName);
    };
    ArchiveItemResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("ArchiveItemResponse.ts - ReadElementsFromJson : Not implemented."); };
    ArchiveItemResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        //debugger;
        var items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Folders, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
        if (items.length > 0) {
            this.item = items[0];
        }
    };
    return ArchiveItemResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ArchiveItemResponse = ArchiveItemResponse;
