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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var DeleteRequest_1 = require("./DeleteRequest");
/** @internal */
var EmptyFolderRequest = /** @class */ (function (_super) {
    __extends(EmptyFolderRequest, _super);
    function EmptyFolderRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.DeleteSubFolders = false;
        _this.folderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        return _this;
    }
    Object.defineProperty(EmptyFolderRequest.prototype, "FolderIds", {
        get: function () {
            return this.folderIds;
        },
        enumerable: true,
        configurable: true
    });
    EmptyFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    EmptyFolderRequest.prototype.GetExpectedResponseMessageCount = function () { return this.FolderIds.Count; };
    EmptyFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1; };
    EmptyFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.EmptyFolderResponseMessage; };
    EmptyFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.EmptyFolderResponse; };
    EmptyFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.EmptyFolder; };
    EmptyFolderRequest.prototype.InternalToJson = function (body) { throw new Error("EmptyFolderRequest.ts - InternalToJson : Not implemented."); };
    EmptyFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    };
    /**@internal */
    EmptyFolderRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.DeleteSubFolders, this.DeleteSubFolders);
    };
    /**@internal */
    EmptyFolderRequest.prototype.WriteElementsToXml = function (writer) {
        this.FolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderIds);
    };
    return EmptyFolderRequest;
}(DeleteRequest_1.DeleteRequest));
exports.EmptyFolderRequest = EmptyFolderRequest;
