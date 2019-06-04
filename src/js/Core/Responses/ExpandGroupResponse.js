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
var ExpandGroupResults_1 = require("../../Misc/ExpandGroupResults");
var ServiceResponse_1 = require("./ServiceResponse");
var ExpandGroupResponse = /** @class */ (function (_super) {
    __extends(ExpandGroupResponse, _super);
    function ExpandGroupResponse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.members = new ExpandGroupResults_1.ExpandGroupResults();
        return _this;
    }
    Object.defineProperty(ExpandGroupResponse.prototype, "Members", {
        get: function () {
            return this.members;
        },
        enumerable: true,
        configurable: true
    });
    ExpandGroupResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.Members.LoadFromXmlJsObject(responseObject, service);
    };
    return ExpandGroupResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ExpandGroupResponse = ExpandGroupResponse;
