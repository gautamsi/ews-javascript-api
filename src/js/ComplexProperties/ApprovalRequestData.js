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
var ComplexProperty_1 = require("./ComplexProperty");
var ApprovalRequestData = /** @class */ (function (_super) {
    __extends(ApprovalRequestData, _super);
    function ApprovalRequestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApprovalRequestData.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("ApprovalRequestData.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    ApprovalRequestData.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ApprovalRequestData.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return ApprovalRequestData;
}(ComplexProperty_1.ComplexProperty));
exports.ApprovalRequestData = ApprovalRequestData;
