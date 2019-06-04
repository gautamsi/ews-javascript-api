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
 * ## @internal *Not Implemented*   Server to server call - not needed
 */
var GetEncryptionConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetEncryptionConfigurationRequest, _super);
    function GetEncryptionConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GetEncryptionConfigurationRequest.prototype.Execute = function () { throw new Error("GetEncryptionConfigurationRequest.ts - Execute : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetResponseXmlElementName = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.GetXmlElementName = function () { throw new Error("GetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); };
    GetEncryptionConfigurationRequest.prototype.ParseResponse = function (reader) { throw new Error("GetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); };
    /**@internal */
    GetEncryptionConfigurationRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("GetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); };
    return GetEncryptionConfigurationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetEncryptionConfigurationRequest = GetEncryptionConfigurationRequest;
