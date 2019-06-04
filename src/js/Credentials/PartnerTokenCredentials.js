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
var WSSecurityBasedCredentials_1 = require("./WSSecurityBasedCredentials");
var PartnerTokenCredentials = /** @class */ (function (_super) {
    __extends(PartnerTokenCredentials, _super);
    function PartnerTokenCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartnerTokenCredentials.prototype.AdjustUrl = function (url) { throw new Error("PartnerTokenCredentials.ts - AdjustUrl : Not implemented."); };
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("PartnerTokenCredentials.ts - PrepareWebRequest : Not implemented.");}
    PartnerTokenCredentials.prototype.Sign = function (memoryStream) { throw new Error("PartnerTokenCredentials.ts - Sign : Not implemented."); };
    PartnerTokenCredentials.WsSecuritySymmetricKeyPathSuffix = "/wssecurity/symmetrickey";
    return PartnerTokenCredentials;
}(WSSecurityBasedCredentials_1.WSSecurityBasedCredentials));
exports.PartnerTokenCredentials = PartnerTokenCredentials;
