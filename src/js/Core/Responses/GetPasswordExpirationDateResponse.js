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
var ServiceResponse_1 = require("./ServiceResponse");
var GetPasswordExpirationDateResponse = /** @class */ (function (_super) {
    __extends(GetPasswordExpirationDateResponse, _super);
    function GetPasswordExpirationDateResponse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.passwordExpirationDate = null;
        return _this;
    }
    Object.defineProperty(GetPasswordExpirationDateResponse.prototype, "PasswordExpirationDate", {
        get: function () {
            return this.passwordExpirationDate;
        },
        enumerable: true,
        configurable: true
    });
    GetPasswordExpirationDateResponse.prototype.ReadElementsFromJson = function (responseObject, service) { throw new Error("GetPasswordExpirationDateResponse.ts - ReadElementsFromJson : Not implemented."); };
    GetPasswordExpirationDateResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.passwordExpirationDate = service.ConvertUniversalDateTimeStringToLocalDateTime(responseObject[XmlElementNames_1.XmlElementNames.PasswordExpirationDate]);
    };
    return GetPasswordExpirationDateResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetPasswordExpirationDateResponse = GetPasswordExpirationDateResponse;
