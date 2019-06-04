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
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the MIME content of an item.
 */
var MimeContentBase = /** @class */ (function (_super) {
    __extends(MimeContentBase, _super);
    function MimeContentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * to set XMLElementName when reading XML JsObject value.
         */
        _this.xmlElementName = XmlElementNames_1.XmlElementNames.MimeContent;
        return _this;
    }
    Object.defineProperty(MimeContentBase.prototype, "CharacterSet", {
        /**
         * Gets or sets the character set of the content.
         */
        get: function () {
            return this.characterSet;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.characterSet; }, setValue: function (updateValue) { _this.characterSet = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MimeContentBase.prototype, "Content", {
        /**
         * Gets or sets the content.  - ews-javascript-api this is base64 value without encoding applied.
         */
        get: function () {
            return this.content;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.content; }, setValue: function (updateValue) { _this.content = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    MimeContentBase.prototype.LoadFromXmlJsObject = function (jsObject /*JsonObject*/, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.CharacterSet:
                    this.characterSet = jsObject[key];
                    break;
                case this.xmlElementName: //ref: text value in xml2jsobject
                    this.content = jsObject[key];
                    ;
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes attributes to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    MimeContentBase.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.CharacterSet, this.CharacterSet);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    MimeContentBase.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Content)) {
            writer.WriteValue(this.Content, this.xmlElementName);
            //writer.WriteBase64ElementValue(this.Content);
        }
    };
    return MimeContentBase;
}(ComplexProperty_1.ComplexProperty));
exports.MimeContentBase = MimeContentBase;
