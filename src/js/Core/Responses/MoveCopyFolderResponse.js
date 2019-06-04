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
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var MoveCopyFolderResponse = /** @class */ (function (_super) {
    __extends(MoveCopyFolderResponse, _super);
    function MoveCopyFolderResponse() {
        var _this = _super.call(this) || this;
        _this.folder = null;
        return _this;
    }
    Object.defineProperty(MoveCopyFolderResponse.prototype, "Folder", {
        get: function () {
            return this.folder;
        },
        enumerable: true,
        configurable: true
    });
    MoveCopyFolderResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        var flinfo = new FolderInfo_1.FolderInfo();
        return flinfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
    };
    MoveCopyFolderResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromJson : Not implemented."); };
    MoveCopyFolderResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Folders]) {
            //debug: check if this works
            var folders = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Folders, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
            this.folder = folders[0];
        }
    };
    return MoveCopyFolderResponse;
}(ServiceResponse_1.ServiceResponse));
exports.MoveCopyFolderResponse = MoveCopyFolderResponse;
