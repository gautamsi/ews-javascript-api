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
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var XmlElementNames_1 = require("../XmlElementNames");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
var UpdateItemResponse = /** @class */ (function (_super) {
    __extends(UpdateItemResponse, _super);
    function UpdateItemResponse(item) {
        var _this = _super.call(this) || this;
        _this.item = null;
        _this.returnedItem = null;
        _this.conflictCount = 0;
        EwsLogging_1.EwsLogging.Assert(item != null, "UpdateItemResponse.ctor", "item is null");
        _this.item = item;
        return _this;
    }
    Object.defineProperty(UpdateItemResponse.prototype, "ReturnedItem", {
        get: function () {
            return this.returnedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemResponse.prototype, "ConflictCount", {
        get: function () {
            return this.conflictCount;
        },
        enumerable: true,
        configurable: true
    });
    UpdateItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) {
        this.returnedItem = new ItemInfo_1.ItemInfo().CreateEwsObjectFromXmlElementName(service, xmlElementName);
        return this.returnedItem;
    };
    UpdateItemResponse.prototype.Loaded = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Success) {
            this.item.ClearChangeLog();
        }
    };
    UpdateItemResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(responseObject, service, XmlElementNames_1.XmlElementNames.Items, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ null, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
        // ConflictResults was only added in 2007 SP1 so if this was a 2007 RTM request we shouldn't expect to find the element
        if (!service.Exchange2007CompatibilityMode) {
            this.conflictCount = ExtensionMethods_1.Convert.toNumber(responseObject[XmlElementNames_1.XmlElementNames.ConflictResults][XmlElementNames_1.XmlElementNames.Count]);
        }
        // If UpdateItem returned an item that has the same Id as the item that
        // is being updated, this is a "normal" UpdateItem operation, and we need
        // to update the ChangeKey of the item being updated with the one that was
        // returned. Also set returnedItem to indicate that no new item was returned.
        //
        // Otherwise, this in a "special" UpdateItem operation, such as a recurring
        // task marked as complete (the returned item in that case is the one-off
        // task that represents the completed instance).
        //
        // Note that there can be no returned item at all, as in an UpdateItem call
        // with MessageDisposition set to SendOnly or SendAndSaveCopy.
        if (this.returnedItem != null) {
            if (this.item.Id.UniqueId == this.returnedItem.Id.UniqueId) {
                this.item.Id.ChangeKey = this.returnedItem.Id.ChangeKey;
                this.returnedItem = null;
            }
        }
    };
    return UpdateItemResponse;
}(ServiceResponse_1.ServiceResponse));
exports.UpdateItemResponse = UpdateItemResponse;
