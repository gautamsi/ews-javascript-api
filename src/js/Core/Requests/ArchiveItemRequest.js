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
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ArchiveItemResponse_1 = require("../Responses/ArchiveItemResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var ArchiveItemRequest = /** @class */ (function (_super) {
    __extends(ArchiveItemRequest, _super);
    function ArchiveItemRequest(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        _this.ids = new ItemIdWrapperList_1.ItemIdWrapperList();
        return _this;
    }
    Object.defineProperty(ArchiveItemRequest.prototype, "Ids", {
        get: function () { return this.ids; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchiveItemRequest.prototype, "SourceFolderId", {
        get: function () {
            return this.sourceFolderId;
        },
        set: function (value) {
            this.sourceFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    //AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("ArchiveItemRequest.ts - AddIdsToJson : Not implemented."); }
    ArchiveItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ArchiveItemResponse_1.ArchiveItemResponse(); };
    ArchiveItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.ids.Count; };
    ArchiveItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2013; };
    ArchiveItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ArchiveItemResponseMessage; };
    ArchiveItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ArchiveItemResponse; };
    ArchiveItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ArchiveItem; };
    ArchiveItemRequest.prototype.Validate = function () {
        //EwsUtilities.ValidateParam(this.sourceFolderId, "SourceFolderId");
        this.sourceFolderId.Validate(this.Service.RequestedServerVersion);
    };
    /**@internal */
    ArchiveItemRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ArchiveSourceFolderId);
        this.SourceFolderId.WriteToXml(writer);
        writer.WriteEndElement();
        this.WriteIdsToXml(writer);
    };
    /**@internal */
    ArchiveItemRequest.prototype.WriteIdsToXml = function (writer) {
        this.Ids.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
    };
    return ArchiveItemRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ArchiveItemRequest = ArchiveItemRequest;
