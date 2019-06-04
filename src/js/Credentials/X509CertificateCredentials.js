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
var X509CertificateCredentials = /** @class */ (function (_super) {
    __extends(X509CertificateCredentials, _super);
    function X509CertificateCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    X509CertificateCredentials.prototype.AdjustUrl = function (url) { throw new Error("X509CertificateCredentials.ts - AdjustUrl : Not implemented."); };
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("X509CertificateCredentials.ts - PrepareWebRequest : Not implemented.");}
    X509CertificateCredentials.prototype.Sign = function (memoryStream) { throw new Error("X509CertificateCredentials.ts - Sign : Not implemented."); };
    X509CertificateCredentials.prototype.ToString = function () { throw new Error("X509CertificateCredentials.ts - ToString : Not implemented."); };
    X509CertificateCredentials.BinarySecurityTokenFormat = "<wsse:BinarySecurityToken EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' wsu:Id='{0}'>{1}</wsse:BinarySecurityToken>";
    X509CertificateCredentials.KeyInfoClauseFormat = "<wsse:SecurityTokenReference xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd' ><wsse:Reference URI='#{0}' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' /></wsse:SecurityTokenReference>";
    X509CertificateCredentials.WsSecurityX509CertPathSuffix = "/wssecurity/x509cert";
    return X509CertificateCredentials;
}(WSSecurityBasedCredentials_1.WSSecurityBasedCredentials));
exports.X509CertificateCredentials = X509CertificateCredentials;
