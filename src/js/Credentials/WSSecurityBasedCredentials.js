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
var ExchangeCredentials_1 = require("./ExchangeCredentials");
var WSSecurityBasedCredentials = /** @class */ (function (_super) {
    __extends(WSSecurityBasedCredentials, _super);
    function WSSecurityBasedCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WSSecurityBasedCredentials.prototype.AdjustUrl = function (url) { throw new Error("WSSecurityBasedCredentials.ts - AdjustUrl : Not implemented."); };
    WSSecurityBasedCredentials.prototype.EmitExtraSoapHeaderNamespaceAliases = function (writer /*System.Xml.XmlWriter*/) { throw new Error("WSSecurityBasedCredentials.ts - EmitExtraSoapHeaderNamespaceAliases : Not implemented."); };
    WSSecurityBasedCredentials.prototype.PreAuthenticate = function () { throw new Error("WSSecurityBasedCredentials.ts - PreAuthenticate : Not implemented."); };
    WSSecurityBasedCredentials.prototype.SerializeExtraSoapHeaders = function (writer /*System.Xml.XmlWriter*/, webMethodName) { throw new Error("WSSecurityBasedCredentials.ts - SerializeExtraSoapHeaders : Not implemented."); };
    WSSecurityBasedCredentials.prototype.SerializeWSAddressingHeaders = function (xmlWriter /*System.Xml.XmlWriter*/, webMethodName) { throw new Error("WSSecurityBasedCredentials.ts - SerializeWSAddressingHeaders : Not implemented."); };
    WSSecurityBasedCredentials.prototype.SerializeWSSecurityHeaders = function (xmlWriter /*System.Xml.XmlWriter*/) { throw new Error("WSSecurityBasedCredentials.ts - SerializeWSSecurityHeaders : Not implemented."); };
    WSSecurityBasedCredentials.WsAddressingHeadersFormat = "<wsa:Action soap:mustUnderstand='1'>http://schemas.microsoft.com/exchange/services/2006/messages/{0}</wsa:Action><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:To soap:mustUnderstand='1'>{1}</wsa:To>";
    WSSecurityBasedCredentials.WsSecurityHeaderFormat = "<wsse:Security soap:mustUnderstand='1'>  {0}</wsse:Security>";
    WSSecurityBasedCredentials.WsuTimeStampFormat = "<wsu:Timestamp><wsu:Created>{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Created><wsu:Expires>{1:yyyy'-'MM'-'dd'T'HH':'mm':'ss'Z'}</wsu:Expires></wsu:Timestamp>";
    return WSSecurityBasedCredentials;
}(ExchangeCredentials_1.ExchangeCredentials));
exports.WSSecurityBasedCredentials = WSSecurityBasedCredentials;
