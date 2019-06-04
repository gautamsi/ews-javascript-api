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
 * Represents an Internet message header.
 */
var InternetMessageHeader = /** @class */ (function (_super) {
    __extends(InternetMessageHeader, _super);
    /**
     * @internal Initializes a new instance of the **InternetMessageHeader** class.
     */
    function InternetMessageHeader() {
        var _this = _super.call(this) || this;
        _this.name = null;
        _this.value = null;
        return _this;
    }
    Object.defineProperty(InternetMessageHeader.prototype, "Name", {
        /**
         * The name of the header.
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.name; }, setValue: function (nameValue) { _this.name = nameValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternetMessageHeader.prototype, "Value", {
        /**
         * The value of the header.
         */
        get: function () {
            return this.value;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.value; }, setValue: function (valueValue) { _this.value = valueValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsonProperty   The json property.
     * @param   {ExchangeService}   service        The ExchangeService instance
     */
    InternetMessageHeader.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.HeaderName:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.InternetMessageHeader: //JsonObject.JsonValueString: //ref: //info: custom parser in ExtensionMethods uses name of type when there is attribute value as well as text value
                    this.value = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Obtains a string representation of the header.
     *
     * @return  {string}      The string representation of the header.
     */
    InternetMessageHeader.prototype.ToString = function () { return ExtensionMethods_1.StringHelper.Format("{0}={1}", this.Name, this.Value); };
    InternetMessageHeader.prototype.toString = function () { return this.ToString(); };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternetMessageHeader.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.HeaderName, this.Name); };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternetMessageHeader.prototype.WriteElementsToXml = function (writer) { writer.WriteValue(this.Value, this.Name); };
    return InternetMessageHeader;
}(ComplexProperty_1.ComplexProperty));
exports.InternetMessageHeader = InternetMessageHeader;
