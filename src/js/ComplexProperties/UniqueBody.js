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
var BodyType_1 = require("../Enumerations/BodyType");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the body part of an item that is unique to the conversation the item is part of.
 */
var UniqueBody = /** @class */ (function (_super) {
    __extends(UniqueBody, _super);
    /**
     * Initializes a new instance of the **UniqueBody** class.
     */
    function UniqueBody() {
        var _this = _super.call(this) || this;
        _this.bodyType = BodyType_1.BodyType.HTML;
        _this.text = null;
        _this.isTruncated = false;
        return _this;
    }
    Object.defineProperty(UniqueBody.prototype, "BodyType", {
        /**
         * Gets the type of the normalized body's text.
         */
        get: function () {
            return this.bodyType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniqueBody.prototype, "Text", {
        /**
         * Gets the text of the normalized body.
         */
        get: function () {
            return this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniqueBody.prototype, "IsTruncated", {
        /**
         * Gets whether the body is truncated.
         */
        get: function () {
            return this.isTruncated;
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
    UniqueBody.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.BodyType:
                    this.bodyType = BodyType_1.BodyType[jsObject[key]];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.IsTruncated:
                    this.isTruncated = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.UniqueBody:
                    this.text = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    UniqueBody.prototype.ToString = function () { return this.Text || ExtensionMethods_1.StringHelper.Empty; };
    UniqueBody.prototype.toString = function () { return this.ToString(); };
    /**
     * @internal Writes attributes to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    UniqueBody.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.BodyType, this.BodyType);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    UniqueBody.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Text)) {
            writer.WriteValue(this.Text, XmlElementNames_1.XmlElementNames.UniqueBody);
        }
    };
    return UniqueBody;
}(ComplexProperty_1.ComplexProperty));
exports.UniqueBody = UniqueBody;
