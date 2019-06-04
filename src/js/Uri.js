"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("./ExtensionMethods");
/**
* Uri: c# uri shim for js
*/
var Uri = /** @class */ (function () {
    function Uri(url) {
        this.m_scheme = null;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(url)) {
            throw new Error("Uri - ctor- argument is not string or it is null or empty");
        }
        this.url = url;
        var parsed = ExtensionMethods_1.UriHelper.parseString(url);
        this.m_scheme = parsed.scheme.toLowerCase();
    }
    Object.defineProperty(Uri.prototype, "AbsoluteUri", {
        /**returns string url component, no transformations yet */
        get: function () { return this.url; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Host", {
        get: function () { return ExtensionMethods_1.UriHelper.getHost(this.url); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "Scheme", {
        get: function () { return this.m_scheme; },
        enumerable: true,
        configurable: true
    });
    Uri.prototype.ToString = function () {
        return this.url;
    };
    Uri.prototype.toString = function () {
        return this.url;
    };
    // GetDomain(): string {
    //     return UriHelper.getDomain(this.url);
    // }
    // GetHost(url: string): string {
    //     return this.GetDomain();
    // }
    Uri.ParseString = function (url) {
        return ExtensionMethods_1.UriHelper.parseString(url);
    };
    Uri.UriSchemeHttp = "http";
    Uri.UriSchemeHttps = "https";
    return Uri;
}());
exports.Uri = Uri;
