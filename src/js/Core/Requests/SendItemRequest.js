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
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var SendItemRequest = /** @class */ (function (_super) {
    __extends(SendItemRequest, _super);
    function SendItemRequest(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        _this.items = [];
        _this.savedCopyDestinationFolderId = null;
        return _this;
    }
    Object.defineProperty(SendItemRequest.prototype, "Items", {
        get: function () {
            return this.items;
        },
        set: function (value) {
            this.items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendItemRequest.prototype, "SavedCopyDestinationFolderId", {
        get: function () {
            return this.savedCopyDestinationFolderId;
        },
        set: function (value) {
            this.savedCopyDestinationFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    SendItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    SendItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.items.length; };
    SendItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    SendItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SendItemResponseMessage; };
    SendItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SendItemResponse; };
    SendItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SendItem; };
    SendItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.Items, "Items");
        if (this.SavedCopyDestinationFolderId != null) {
            this.SavedCopyDestinationFolderId.Validate(this.Service.RequestedServerVersion);
        }
    };
    /**@internal */
    SendItemRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SaveItemToFolder, this.SavedCopyDestinationFolderId != null);
    };
    /**@internal */
    SendItemRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.Id.WriteToXml(writer); //, XmlElementNames.ItemId);
        }
        writer.WriteEndElement(); // ItemIds
        if (this.SavedCopyDestinationFolderId != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SavedItemFolderId);
            this.SavedCopyDestinationFolderId.WriteToXml(writer);
            writer.WriteEndElement();
        }
    };
    return SendItemRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SendItemRequest = SendItemRequest;
