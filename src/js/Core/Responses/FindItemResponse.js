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
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var ItemGroup_1 = require("../../Search/ItemGroup");
var HighlightTerm_1 = require("../../ComplexProperties/HighlightTerm");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var GroupedFindItemsResults_1 = require("../../Search/GroupedFindItemsResults");
var FindItemsResults_1 = require("../../Search/FindItemsResults");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var EwsLogging_1 = require("../EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ServiceResponse_1 = require("./ServiceResponse");
var FindItemResponse = /** @class */ (function (_super) {
    __extends(FindItemResponse, _super);
    function FindItemResponse(isGrouped, propertySet) {
        var _this = _super.call(this) || this;
        _this.isGrouped = false;
        _this.isGrouped = isGrouped;
        _this.propertySet = propertySet;
        EwsLogging_1.EwsLogging.Assert(_this.propertySet != null, "FindItemResponse.ctor", "PropertySet should not be null");
        return _this;
    }
    Object.defineProperty(FindItemResponse.prototype, "GroupedFindResults", {
        get: function () { return this.groupedFindResults; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindItemResponse.prototype, "Results", {
        get: function () { return this.results; },
        enumerable: true,
        configurable: true
    });
    FindItemResponse.prototype.CreateItemInstance = function (service, xmlElementName) {
        var itemInfo = new ItemInfo_1.ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName(service, xmlElementName);
        //return EwsUtilities.CreateEwsObjectFromXmlElementName<TItem>(service, xmlElementName);
    };
    FindItemResponse.prototype.InternalReadItemsFromJson = function (jsonObject /*JsonObject*/, propertySet, service, destinationList /*System.Collections.Generic.IList<TItem>*/) { throw new Error("FindItemResponse.ts - InternalReadItemsFromJson : Not implemented."); };
    FindItemResponse.prototype.InternalReadItemsFromXmlJsObject = function (jsonObject, propertySet, service, destinationList /*System.Collections.Generic.IList<TItem>*/) {
        EwsLogging_1.EwsLogging.Assert(destinationList != null, "FindItemResponse.InternalReadItemsFromJson", "destinationList is null.");
        if (jsonObject[XmlElementNames_1.XmlElementNames.Items]) {
            var items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(jsonObject, service, XmlElementNames_1.XmlElementNames.Items, this.CreateItemInstance, true, /* clearPropertyBag */ this.propertySet, /* requestedPropertySet */ true); /* summaryPropertiesOnly */
            items.forEach(function (item, index) { destinationList.push(item); });
        }
    };
    FindItemResponse.prototype.ReadElementsFromJson = function (responseObject /*JsonObject*/, service) { throw new Error("FindItemResponse.ts - ReadElementsFromJson : Not implemented."); };
    FindItemResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        var rootFolder = responseObject[XmlElementNames_1.XmlElementNames.RootFolder];
        var totalItemsInView = Number(rootFolder[XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView]);
        var moreItemsAvailable = !ExtensionMethods_1.Convert.toBool(rootFolder[XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange]);
        // Ignore IndexedPagingOffset attribute if moreItemsAvailable is false.
        var nextPageOffset = null;
        if (moreItemsAvailable) {
            if (rootFolder[XmlAttributeNames_1.XmlAttributeNames.IndexedPagingOffset]) {
                nextPageOffset = Number(rootFolder[XmlAttributeNames_1.XmlAttributeNames.IndexedPagingOffset]);
            }
        }
        if (!this.isGrouped) {
            this.results = new FindItemsResults_1.FindItemsResults();
            this.results.TotalCount = totalItemsInView;
            this.results.NextPageOffset = nextPageOffset;
            this.results.MoreAvailable = moreItemsAvailable;
            this.InternalReadItemsFromXmlJsObject(rootFolder, this.propertySet, service, this.results.Items);
        }
        else {
            this.groupedFindResults = new GroupedFindItemsResults_1.GroupedFindItemsResults();
            this.groupedFindResults.TotalCount = totalItemsInView;
            this.groupedFindResults.NextPageOffset = nextPageOffset;
            this.groupedFindResults.MoreAvailable = moreItemsAvailable;
            if (rootFolder[XmlElementNames_1.XmlElementNames.Groups]) {
                var jsGroups = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(rootFolder, XmlElementNames_1.XmlElementNames.Groups);
                for (var _i = 0, jsGroups_1 = jsGroups; _i < jsGroups_1.length; _i++) {
                    var jsGroup = jsGroups_1[_i];
                    if (jsGroup[XmlElementNames_1.XmlElementNames.GroupedItems]) {
                        var jsGroupedItemCollection = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsGroup, XmlElementNames_1.XmlElementNames.GroupedItems);
                        for (var _a = 0, jsGroupedItemCollection_1 = jsGroupedItemCollection; _a < jsGroupedItemCollection_1.length; _a++) {
                            var jsGroupedItem = jsGroupedItemCollection_1[_a];
                            var groupIndex = jsGroupedItem[XmlElementNames_1.XmlElementNames.GroupIndex];
                            var itemList = []; // new List<TItem>();
                            this.InternalReadItemsFromXmlJsObject(jsGroupedItem, this.propertySet, service, itemList);
                            this.groupedFindResults.ItemGroups.push(new ItemGroup_1.ItemGroup(groupIndex, itemList));
                        }
                    }
                }
            }
        }
        //debug: //ref: need to find example.
        //todo: check highlight terms and grouping.
        if (responseObject[XmlElementNames_1.XmlElementNames.HighlightTerms]) {
            var highlightTermElements = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject, XmlElementNames_1.XmlElementNames.HighlightTerms);
            for (var _b = 0, highlightTermElements_1 = highlightTermElements; _b < highlightTermElements_1.length; _b++) {
                var highlightTermElement = highlightTermElements_1[_b];
                if (highlightTermElement[XmlElementNames_1.XmlElementNames.HighlightTerm]) {
                    var highlightTermObjects = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(highlightTermElement, XmlElementNames_1.XmlElementNames.HighlightTerm);
                    for (var _c = 0, highlightTermObjects_1 = highlightTermObjects; _c < highlightTermObjects_1.length; _c++) {
                        var jsonHighlightTerm = highlightTermObjects_1[_c];
                        var term = new HighlightTerm_1.HighlightTerm();
                        term.LoadFromXmlJsObject(jsonHighlightTerm, service);
                        this.results.HighlightTerms.push(term);
                    }
                }
            }
        }
    };
    return FindItemResponse;
}(ServiceResponse_1.ServiceResponse));
exports.FindItemResponse = FindItemResponse;
