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
var ComplexProperty_1 = require("../ComplexProperties/ComplexProperty");
var PhoneCall = /** @class */ (function (_super) {
    __extends(PhoneCall, _super);
    function PhoneCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhoneCall.prototype.Disconnect = function () { throw new Error("PhoneCall.ts - Disconnect : Not implemented."); };
    PhoneCall.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("PhoneCall.ts - LoadFromJson : Not implemented."); };
    PhoneCall.prototype.Refresh = function () { throw new Error("PhoneCall.ts - Refresh : Not implemented."); };
    /**@internal */
    PhoneCall.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("PhoneCall.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    PhoneCall.SuccessfulResponseText = "OK";
    PhoneCall.SuccessfulResponseCode = 200;
    return PhoneCall;
}(ComplexProperty_1.ComplexProperty));
exports.PhoneCall = PhoneCall;
//}
