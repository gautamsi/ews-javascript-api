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
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var GetRequest_1 = require("./GetRequest");
/** @internal */
var GetFolderRequestBase = /** @class */ (function (_super) {
    __extends(GetFolderRequestBase, _super);
    function GetFolderRequestBase(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        _this.folderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        return _this;
    }
    Object.defineProperty(GetFolderRequestBase.prototype, "FolderIds", {
        get: function () { return this.folderIds; },
        enumerable: true,
        configurable: true
    });
    //AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("GetFolderRequestBase.ts - AddIdsToRequest : Not implemented.");}
    GetFolderRequestBase.prototype.GetExpectedResponseMessageCount = function () { return this.FolderIds.Count; };
    GetFolderRequestBase.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    GetFolderRequestBase.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetFolderResponseMessage; };
    GetFolderRequestBase.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetFolderResponse; };
    GetFolderRequestBase.prototype.GetServiceObjectType = function () { return ServiceObjectType_1.ServiceObjectType.Folder; };
    GetFolderRequestBase.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetFolder; };
    GetFolderRequestBase.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    };
    /**@internal */
    GetFolderRequestBase.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        this.FolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderIds);
    };
    return GetFolderRequestBase;
}(GetRequest_1.GetRequest));
exports.GetFolderRequestBase = GetFolderRequestBase;
