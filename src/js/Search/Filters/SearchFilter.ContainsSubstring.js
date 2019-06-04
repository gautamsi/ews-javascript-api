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
var ComparisonMode_1 = require("../../Enumerations/ComparisonMode");
var ContainmentMode_1 = require("../../Enumerations/ContainmentMode");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SearchFilter_PropertyBasedFilter_1 = require("./SearchFilter.PropertyBasedFilter");
/**
 * Represents a search filter that checks for the presence of a substring inside a text property. Applications can use ContainsSubstring to define conditions such as "Field CONTAINS Value" or "Field IS PREFIXED WITH Value".
 */
var ContainsSubstring = /** @class */ (function (_super) {
    __extends(ContainsSubstring, _super);
    function ContainsSubstring(propertyDefinition, value, containmentMode, comparisonMode) {
        if (propertyDefinition === void 0) { propertyDefinition = null; }
        if (value === void 0) { value = null; }
        if (containmentMode === void 0) { containmentMode = ContainmentMode_1.ContainmentMode.Substring; }
        if (comparisonMode === void 0) { comparisonMode = ComparisonMode_1.ComparisonMode.IgnoreCase; }
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, propertyDefinition) || this;
        _this.value = value;
        _this.containmentMode = containmentMode;
        _this.comparisonMode = comparisonMode;
        return _this;
    }
    Object.defineProperty(ContainsSubstring.prototype, "ContainmentMode", {
        /**
         * Gets or sets the containment mode.
         */
        get: function () {
            return this.containmentMode;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.containmentMode; }, setValue: function (updateValue) { _this.containmentMode = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainsSubstring.prototype, "ComparisonMode", {
        /**
         * Gets or sets the comparison mode.
         */
        get: function () {
            return this.comparisonMode;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.comparisonMode; }, setValue: function (updateValue) { _this.comparisonMode = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainsSubstring.prototype, "Value", {
        /**
         * Gets or sets the value to compare the specified property with.
         */
        get: function () {
            return this.value;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.value; }, setValue: function (updateValue) { _this.value = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ContainsSubstring.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Contains; };
    /**
     * @internal Validate instance.
     */
    ContainsSubstring.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.value)) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.ValuePropertyMustBeSet);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ContainsSubstring.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        this.value = jsObject[XmlElementNames_1.XmlElementNames.Constant][XmlElementNames_1.XmlElementNames.Value];
        this.containmentMode = ContainmentMode_1.ContainmentMode[jsObject[XmlAttributeNames_1.XmlAttributeNames.ContainmentMode]];
        this.comparisonMode = ComparisonMode_1.ComparisonMode[jsObject[XmlAttributeNames_1.XmlAttributeNames.ContainmentComparison]];
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ContainsSubstring.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ContainmentMode, ContainmentMode_1.ContainmentMode[this.ContainmentMode]);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ContainmentComparison, ComparisonMode_1.ComparisonMode[this.ComparisonMode]);
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ContainsSubstring.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Constant);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Value, this.Value);
        writer.WriteEndElement(); // Constant
    };
    return ContainsSubstring;
}(SearchFilter_PropertyBasedFilter_1.PropertyBasedFilter));
exports.ContainsSubstring = ContainsSubstring;
