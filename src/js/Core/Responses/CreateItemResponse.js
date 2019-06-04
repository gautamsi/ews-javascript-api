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
var CreateItemResponseBase_1 = require("./CreateItemResponseBase");
var CreateItemResponse = /** @class */ (function (_super) {
    __extends(CreateItemResponse, _super);
    function CreateItemResponse(item) {
        var _this = _super.call(this) || this;
        _this.item = null;
        _this.item = item;
        return _this;
    }
    CreateItemResponse.prototype.GetObjectInstance = function (service, xmlElementName) { return this.item; };
    CreateItemResponse.prototype.Loaded = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Success) {
            this.item.ClearChangeLog();
        }
    };
    return CreateItemResponse;
}(CreateItemResponseBase_1.CreateItemResponseBase));
exports.CreateItemResponse = CreateItemResponse;
