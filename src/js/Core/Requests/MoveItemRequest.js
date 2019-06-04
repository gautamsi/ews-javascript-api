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
var MoveCopyItemResponse_1 = require("../Responses/MoveCopyItemResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MoveCopyItemRequest_1 = require("./MoveCopyItemRequest");
/** @internal */
var MoveItemRequest = /** @class */ (function (_super) {
    __extends(MoveItemRequest, _super);
    function MoveItemRequest(service, errorHandlingModeServiceErrorHandling) {
        return _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
    }
    MoveItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MoveCopyItemResponse_1.MoveCopyItemResponse(); };
    MoveItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    MoveItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveItemResponseMessage; };
    MoveItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveItemResponse; };
    MoveItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveItem; };
    return MoveItemRequest;
}(MoveCopyItemRequest_1.MoveCopyItemRequest));
exports.MoveItemRequest = MoveItemRequest;
