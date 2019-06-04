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
var PlayOnPhoneRequest = /** @class */ (function (_super) {
    __extends(PlayOnPhoneRequest, _super);
    function PlayOnPhoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayOnPhoneRequest.prototype.Execute = function () { throw new Error("PlayOnPhoneRequest.ts - Execute : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("PlayOnPhoneRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetResponseXmlElementName = function () { throw new Error("PlayOnPhoneRequest.ts - GetResponseXmlElementName : Not implemented."); };
    PlayOnPhoneRequest.prototype.GetXmlElementName = function () { throw new Error("PlayOnPhoneRequest.ts - GetXmlElementName : Not implemented."); };
    PlayOnPhoneRequest.prototype.ParseResponse = function (reader) { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); };
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    /**@internal */
    PlayOnPhoneRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("PlayOnPhoneRequest.ts - WriteElementsToXml : Not implemented."); };
    return PlayOnPhoneRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.PlayOnPhoneRequest = PlayOnPhoneRequest;
