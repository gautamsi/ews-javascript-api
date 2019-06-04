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
var GetItemResponse_1 = require("../Responses/GetItemResponse");
var GetItemRequestBase_1 = require("./GetItemRequestBase");
/** @internal */
var GetItemRequest = /** @class */ (function (_super) {
    __extends(GetItemRequest, _super);
    function GetItemRequest(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    GetItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new GetItemResponse_1.GetItemResponse(this.ItemIds[responseIndex], this.PropertySet); };
    return GetItemRequest;
}(GetItemRequestBase_1.GetItemRequestBase));
exports.GetItemRequest = GetItemRequest;
