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
var ServiceResponse_1 = require("./ServiceResponse");
var FindFoldersResults_1 = require("../../Search/FindFoldersResults");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var FolderInfo_1 = require("../ServiceObjects/Folders/FolderInfo");
var EwsLogging_1 = require("../EwsLogging");
var FindFolderResponse = /** @class */ (function (_super) {
    __extends(FindFolderResponse, _super);
    function FindFolderResponse(propertySet) {
        var _this = _super.call(this) || this;
        _this.results = new FindFoldersResults_1.FindFoldersResults();
        _this.propertySet = propertySet;
        EwsLogging_1.EwsLogging.Assert(_this.propertySet != null, "FindFolderResponse.ctor", "PropertySet should not be null");
        return _this;
    }
    Object.defineProperty(FindFolderResponse.prototype, "Results", {
        get: function () { return this.results; },
        enumerable: true,
        configurable: true
    });
    FindFolderResponse.prototype.CreateFolderInstance = function (service, xmlElementName) {
        var flinfo = new FolderInfo_1.FolderInfo();
        return flinfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
    };
    FindFolderResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("FindFolderResponse.ts - ReadElementsFromJson : Not implemented."); };
    FindFolderResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        var _this = this;
        var rootFolder = responseObject[XmlElementNames_1.XmlElementNames.RootFolder];
        this.results.TotalCount = Number(rootFolder[XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView]);
        this.results.MoreAvailable = !ExtensionMethods_1.Convert.toBool(rootFolder[XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange]);
        // Ignore IndexedPagingOffset attribute if moreItemsAvailable is false.
        var nextPageOffset = null;
        if (this.results.MoreAvailable) {
            if (rootFolder[XmlAttributeNames_1.XmlAttributeNames.IndexedPagingOffset]) {
                nextPageOffset = Number(rootFolder[XmlAttributeNames_1.XmlAttributeNames.IndexedPagingOffset]);
            }
        }
        if (rootFolder[XmlElementNames_1.XmlElementNames.Folders]) {
            var folders = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(rootFolder, service, XmlElementNames_1.XmlElementNames.Folders, this.CreateFolderInstance, true, /* clearPropertyBag */ this.propertySet, /* requestedPropertySet */ true); /* summaryPropertiesOnly */
            folders.forEach(function (item, index) { _this.results.Folders.push(item); });
        }
    };
    return FindFolderResponse;
}(ServiceResponse_1.ServiceResponse));
exports.FindFolderResponse = FindFolderResponse;
