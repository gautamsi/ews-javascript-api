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
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var CreateItemResponseBase = /** @class */ (function (_super) {
    __extends(CreateItemResponseBase, _super);
    function CreateItemResponseBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CreateItemResponseBase.prototype, "Items", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    CreateItemResponseBase.prototype.GetObjectInstance = function (service, xmlElementName) { throw new Error("CreateItemResponseBase.ts - GetObjectInstance : abstract must implement."); };
    CreateItemResponseBase.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("CreateItemResponseBase.ts - ReadElementsFromJson : Not implemented."); };
    CreateItemResponseBase.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Items]) {
            this.items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Items, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
        }
    };
    return CreateItemResponseBase;
}(ServiceResponse_1.ServiceResponse));
exports.CreateItemResponseBase = CreateItemResponseBase;
