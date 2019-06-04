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
var FolderInfo_1 = require("../ServiceObjects/Folders/FolderInfo");
var EwsLogging_1 = require("../EwsLogging");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var GetFolderResponse = /** @class */ (function (_super) {
    __extends(GetFolderResponse, _super);
    function GetFolderResponse(folder, propertySet) {
        var _this = _super.call(this) || this;
        _this.folder = folder;
        _this.propertySet = propertySet;
        EwsLogging_1.EwsLogging.Assert(_this.propertySet != null, "GetFolderResponse.ctor", "PropertySet should not be null");
        return _this;
    }
    Object.defineProperty(GetFolderResponse.prototype, "Folder", {
        get: function () { return this.folder; },
        enumerable: true,
        configurable: true
    });
    GetFolderResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        if (this.Folder != null) {
            return this.Folder;
        }
        else {
            var flinfo = new FolderInfo_1.FolderInfo();
            return flinfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
        }
    };
    GetFolderResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Folders]) {
            var folders = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Folders, this.GetObjectInstance.bind(this), true, /* clearPropertyBag */ this.propertySet, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
            this.folder = folders[0];
        }
    };
    return GetFolderResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetFolderResponse = GetFolderResponse;
