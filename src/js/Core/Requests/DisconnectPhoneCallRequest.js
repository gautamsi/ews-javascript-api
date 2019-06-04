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
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * ## @internal *Not Implemented*
 */
var DisconnectPhoneCallRequest = /** @class */ (function (_super) {
    __extends(DisconnectPhoneCallRequest, _super);
    function DisconnectPhoneCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisconnectPhoneCallRequest.prototype.Execute = function () { throw new Error("DisconnectPhoneCallRequest.ts - Execute : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetResponseXmlElementName = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetResponseXmlElementName : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.GetXmlElementName = function () { throw new Error("DisconnectPhoneCallRequest.ts - GetXmlElementName : Not implemented."); };
    DisconnectPhoneCallRequest.prototype.ParseResponse = function (reader) { throw new Error("DisconnectPhoneCallRequest.ts - ParseResponse : Not implemented."); };
    /**@internal */
    DisconnectPhoneCallRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("DisconnectPhoneCallRequest.ts - WriteElementsToXml : Not implemented."); };
    return DisconnectPhoneCallRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.DisconnectPhoneCallRequest = DisconnectPhoneCallRequest;
