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
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MarkAsJunkResponse_1 = require("../Responses/MarkAsJunkResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var MarkAsJunkRequest = /** @class */ (function (_super) {
    __extends(MarkAsJunkRequest, _super);
    function MarkAsJunkRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
        _this.IsJunk = false;
        _this.MoveItem = false;
        return _this;
    }
    Object.defineProperty(MarkAsJunkRequest.prototype, "ItemIds", {
        get: function () {
            return this.itemIds;
        },
        enumerable: true,
        configurable: true
    });
    MarkAsJunkRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MarkAsJunkResponse_1.MarkAsJunkResponse(); };
    MarkAsJunkRequest.prototype.GetExpectedResponseMessageCount = function () { return this.itemIds.Count; };
    MarkAsJunkRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2013; };
    MarkAsJunkRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunkResponseMessage; };
    MarkAsJunkRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunkResponse; };
    MarkAsJunkRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAsJunk; };
    MarkAsJunkRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    };
    /**@internal */
    MarkAsJunkRequest.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.IsJunk, this.IsJunk);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MoveItem, this.MoveItem);
    };
    /**@internal */
    MarkAsJunkRequest.prototype.WriteElementsToXml = function (writer) { this.itemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds); };
    return MarkAsJunkRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.MarkAsJunkRequest = MarkAsJunkRequest;
