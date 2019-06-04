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
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExchangeCredentials_1 = require("./ExchangeCredentials");
var OAuthCredentials = /** @class */ (function (_super) {
    __extends(OAuthCredentials, _super);
    function OAuthCredentials(token, verbatim) {
        if (verbatim === void 0) { verbatim = false; }
        var _this = _super.call(this) || this;
        _this.token = null;
        _this.credentials = null; /*System.Net.ICredentials*/
        EwsUtilities_1.EwsUtilities.ValidateParam(token, "token");
        var rawToken;
        if (verbatim) {
            rawToken = token;
        }
        else {
            var whiteSpacePosition = token.indexOf(' ');
            if (whiteSpacePosition == -1) {
                rawToken = token;
            }
            else {
                var authType = token.substring(0, whiteSpacePosition);
                if (ExtensionMethods_1.StringHelper.Compare(authType, OAuthCredentials.BearerAuthenticationType, true) != 0) {
                    throw new Error(Strings_1.Strings.InvalidAuthScheme); //ArgumentException
                }
                rawToken = token.substring(whiteSpacePosition + 1);
            }
            if (!OAuthCredentials.validTokenPattern.test(rawToken)) {
                throw new Error(Strings_1.Strings.InvalidOAuthToken); //ArgumentException
            }
        }
        _this.token = OAuthCredentials.BearerAuthenticationType + " " + rawToken;
        return _this;
    }
    OAuthCredentials.prototype.PrepareWebRequest = function (request /*IEwsHttpWebRequest*/) {
        request.headers["Authorization"] = this.token;
    };
    OAuthCredentials.BearerAuthenticationType = "Bearer";
    OAuthCredentials.validTokenPattern = new RegExp("^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]*$");
    return OAuthCredentials;
}(ExchangeCredentials_1.ExchangeCredentials));
exports.OAuthCredentials = OAuthCredentials;
