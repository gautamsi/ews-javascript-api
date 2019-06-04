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
var PhoneCallId = /** @class */ (function (_super) {
    __extends(PhoneCallId, _super);
    function PhoneCallId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhoneCallId.prototype.InternalToJson = function (service) { throw new Error("PhoneCallId.ts - InternalToJson : Not implemented."); };
    PhoneCallId.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("PhoneCallId.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    PhoneCallId.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("PhoneCallId.ts - ReadAttributesFromXml : Not implemented."); };
    /**@internal */
    PhoneCallId.prototype.WriteAttributesToXml = function (writer) { throw new Error("PhoneCallId.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    PhoneCallId.prototype.WriteToXml = function (writer) { throw new Error("PhoneCallId.ts - WriteToXml : Not implemented."); };
    return PhoneCallId;
}(ComplexProperty_1.ComplexProperty));
exports.PhoneCallId = PhoneCallId;
//}
