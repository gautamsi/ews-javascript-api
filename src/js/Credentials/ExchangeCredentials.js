"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var Uri_1 = require("../Uri");
var ExchangeCredentials = /** @class */ (function () {
    function ExchangeCredentials(userName, password) {
        if (userName === void 0) { userName = null; }
        if (password === void 0) { password = null; }
        this.UserName = null;
        if (arguments.length > 0 && (ExtensionMethods_1.StringHelper.IsNullOrEmpty(userName) || ExtensionMethods_1.StringHelper.IsNullOrEmpty(password))) {
            throw new Error("ExchangeCredentials.ctor, must provide username and password value.");
        }
        this.UserName = userName;
        var pwd = password;
        this.setPassword = function (value) { pwd = value; };
        this.getPassword = function () { return pwd; };
        //this.Password = password;
    }
    Object.defineProperty(ExchangeCredentials.prototype, "Password", {
        get: function () { return this.getPassword(); },
        set: function (value) { this.setPassword(value); },
        enumerable: true,
        configurable: true
    });
    ExchangeCredentials.prototype.AdjustUrl = function (url) { return new Uri_1.Uri(ExchangeCredentials.GetUriWithoutSuffix(url)); };
    ExchangeCredentials.prototype.EmitExtraSoapHeaderNamespaceAliases = function (writer /*System.Xml.XmlWriter*/) { };
    ExchangeCredentials.GetUriWithoutSuffix = function (url) {
        var absoluteUri = url.AbsoluteUri;
        //ref: can not use WSSecurityBasedCredentials.WsSecurityPathSuffix, creates circular reference.
        var index = absoluteUri.toUpperCase().indexOf(/*WSSecurityBasedCredentials*/ ExchangeCredentials.WsSecurityPathSuffix.toUpperCase()); //, StringComparison.OrdinalIgnoreCase);
        if (index != -1) {
            return absoluteUri.substring(0, index);
        }
        return absoluteUri;
    };
    //PreAuthenticate(): any{ throw new Error("ExchangeCredentials.ts - PreAuthenticate : Not implemented.");}
    ExchangeCredentials.prototype.PrepareWebRequest = function (request /*IEwsHttpWebRequest*/) {
        request.headers["Authorization"] = "Basic " + ExtensionMethods_1.base64Helper.btoa(this.UserName + ":" + this.Password);
    };
    ExchangeCredentials.prototype.SerializeExtraSoapHeaders = function (writer /*System.Xml.XmlWriter*/, webMethodName) { };
    //NeedSignature: boolean;
    ExchangeCredentials.WsSecurityPathSuffix = "/wssecurity";
    return ExchangeCredentials;
}());
exports.ExchangeCredentials = ExchangeCredentials;
