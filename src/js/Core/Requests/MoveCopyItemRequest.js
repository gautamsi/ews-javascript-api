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
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var MoveCopyRequest_1 = require("./MoveCopyRequest");
/** @internal */
var MoveCopyItemRequest = /** @class */ (function (_super) {
    __extends(MoveCopyItemRequest, _super);
    function MoveCopyItemRequest(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        _this.ReturnNewItemIds = null; //nullable
        _this.itemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
        return _this;
    }
    Object.defineProperty(MoveCopyItemRequest.prototype, "ItemIds", {
        get: function () { return this.itemIds; },
        enumerable: true,
        configurable: true
    });
    //AddIdsToJson(jsonObject: any, service: ExchangeService): any { throw new Error("MoveCopyItemRequest.ts - AddIdsToJson : Not implemented."); }
    MoveCopyItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.ItemIds.Count; };
    MoveCopyItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    };
    /**@internal */
    MoveCopyItemRequest.prototype.WriteIdsToXml = function (writer) {
        this.ItemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemIds);
        if (this.ReturnNewItemIds) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ReturnNewItemIds, this.ReturnNewItemIds);
        }
    };
    return MoveCopyItemRequest;
}(MoveCopyRequest_1.MoveCopyRequest));
exports.MoveCopyItemRequest = MoveCopyItemRequest;
