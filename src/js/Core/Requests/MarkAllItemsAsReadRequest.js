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
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var MarkAllItemsAsReadRequest = /** @class */ (function (_super) {
    __extends(MarkAllItemsAsReadRequest, _super);
    function MarkAllItemsAsReadRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.folderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        _this.ReadFlag = false;
        _this.SuppressReadReceipts = false;
        return _this;
    }
    Object.defineProperty(MarkAllItemsAsReadRequest.prototype, "FolderIds", {
        get: function () {
            return this.folderIds;
        },
        enumerable: true,
        configurable: true
    });
    MarkAllItemsAsReadRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    MarkAllItemsAsReadRequest.prototype.GetExpectedResponseMessageCount = function () { return this.FolderIds.Count; };
    MarkAllItemsAsReadRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2013; };
    MarkAllItemsAsReadRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAllItemsAsReadResponseMessage; };
    MarkAllItemsAsReadRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAllItemsAsReadResponse; };
    MarkAllItemsAsReadRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MarkAllItemsAsRead; };
    MarkAllItemsAsReadRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    };
    /**@internal */
    MarkAllItemsAsReadRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ReadFlag, this.ReadFlag);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SuppressReadReceipts, this.SuppressReadReceipts);
        this.FolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderIds);
    };
    return MarkAllItemsAsReadRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.MarkAllItemsAsReadRequest = MarkAllItemsAsReadRequest;
