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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var MimeContentBase_1 = require("./MimeContentBase");
/**
 * Represents the MIME content of an item.
 */
var MimeContentUTF8 = /** @class */ (function (_super) {
    __extends(MimeContentUTF8, _super);
    function MimeContentUTF8(characterSet) {
        if (characterSet === void 0) { characterSet = null; }
        var _this = _super.call(this) || this;
        _this.CharacterSet = characterSet;
        _this.Content = "utf-8"; //c# - Encoding.UTF8.BodyName, nodejs - utf8 not utf-8
        _this.xmlElementName = XmlElementNames_1.XmlElementNames.MimeContentUTF8;
        return _this;
    }
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    MimeContentUTF8.prototype.ToString = function () {
        return this.Content || ExtensionMethods_1.StringHelper.Empty;
        //ref: //info: 
        //todo: implement arraybuffer and encoding using TextDecoder or some other tech
        //            if (this.Content == null)
        //            {
        //                return string.Empty;
        //            }
        //            else
        //            {
        //                try
        //                {
        //                    // Try to convert to original MIME content using specified charset. If this fails, 
        //                    // return the Base64 representation of the content.
        //                    // Note: Encoding.GetString can throw DecoderFallbackException which is a subclass
        //                    // of ArgumentException.
        //                    // it should always be UTF8 encoding for MimeContentUTF8
        //                    return Encoding.UTF8.GetString(this.Content);
        //                }
        //                catch (ArgumentException)
        //                {
        //                    return Convert.ToBase64String(this.Content);
        //                }
        //            }
    };
    MimeContentUTF8.prototype.toString = function () { return this.ToString(); };
    return MimeContentUTF8;
}(MimeContentBase_1.MimeContentBase));
exports.MimeContentUTF8 = MimeContentUTF8;
