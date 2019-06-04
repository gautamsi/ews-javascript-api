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
var ItemId_1 = require("../../ComplexProperties/ItemId");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
var MarkAsJunkResponse = /** @class */ (function (_super) {
    __extends(MarkAsJunkResponse, _super);
    function MarkAsJunkResponse() {
        var _this = _super.call(this) || this;
        _this.MovedItemId = null;
        return _this;
    }
    //ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromJson : Not implemented."); }
    MarkAsJunkResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Token]) {
            this.MovedItemId = new ItemId_1.ItemId();
            this.MovedItemId.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.MovedItemId], service);
        }
    };
    return MarkAsJunkResponse;
}(ServiceResponse_1.ServiceResponse));
exports.MarkAsJunkResponse = MarkAsJunkResponse;
