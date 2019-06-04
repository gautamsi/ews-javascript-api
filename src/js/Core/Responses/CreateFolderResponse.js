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
var FolderInfo_1 = require("../ServiceObjects/Folders/FolderInfo");
var XmlElementNames_1 = require("../XmlElementNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var ServiceResponse_1 = require("./ServiceResponse");
var CreateFolderResponse = /** @class */ (function (_super) {
    __extends(CreateFolderResponse, _super);
    function CreateFolderResponse(folder) {
        var _this = _super.call(this) || this;
        _this.folder = null;
        _this.folder = folder;
        return _this;
    }
    CreateFolderResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        if (this.folder != null) {
            return this.folder;
        }
        else {
            var flinfo = new FolderInfo_1.FolderInfo();
            return flinfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
        }
    };
    CreateFolderResponse.prototype.Loaded = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Success) {
            this.folder.ClearChangeLog();
        }
    };
    CreateFolderResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("CreateFolderResponse.ts - ReadElementsFromJson : Not implemented."); };
    CreateFolderResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Folders]) {
            var folders = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Folders, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
            this.folder = folders[0];
        }
    };
    return CreateFolderResponse;
}(ServiceResponse_1.ServiceResponse));
exports.CreateFolderResponse = CreateFolderResponse;
