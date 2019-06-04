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
var PropertyDefinitionBase_1 = require("../../PropertyDefinitions/PropertyDefinitionBase");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SearchFilter_PropertyBasedFilter_1 = require("./SearchFilter.PropertyBasedFilter");
/**
 * Represents the base class for relational filters (for example, IsEqualTo, IsGreaterThan or IsLessThanOrEqualTo).
 */
var RelationalFilter = /** @class */ (function (_super) {
    __extends(RelationalFilter, _super);
    function RelationalFilter(propertyDefinition, otherPropertyDefinitionOrValue) {
        if (propertyDefinition === void 0) { propertyDefinition = null; }
        if (otherPropertyDefinitionOrValue === void 0) { otherPropertyDefinitionOrValue = null; }
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, propertyDefinition) || this;
        if (arguments.length === 0) {
            return;
        }
        if (otherPropertyDefinitionOrValue instanceof PropertyDefinitionBase_1.PropertyDefinitionBase) {
            _this.otherPropertyDefinition = otherPropertyDefinitionOrValue;
        }
        else {
            _this.value = otherPropertyDefinitionOrValue;
        }
        return _this;
    }
    Object.defineProperty(RelationalFilter.prototype, "OtherPropertyDefinition", {
        /**
         * Gets or sets the definition of the property to compare with. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
         * The OtherPropertyDefinition and Value properties are mutually exclusive; setting one resets the other to null.
         */
        get: function () {
            return this.otherPropertyDefinition;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.otherPropertyDefinition; }, setValue: function (updateValue) { _this.otherPropertyDefinition = updateValue; } }, value);
            this.value = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelationalFilter.prototype, "Value", {
        /**
         * Gets or sets the value to compare with. The Value and OtherPropertyDefinition properties are mutually exclusive; setting one resets the other to null.
         */
        get: function () {
            return this.value;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.value; }, setValue: function (updateValue) { _this.value = updateValue; } }, value);
            this.otherPropertyDefinition = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validate instance.
     */
    RelationalFilter.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (this.otherPropertyDefinition == null && this.value == null) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.EqualityComparisonFilterIsInvalid);
        }
        else if (this.value != null) {
            // All common value types (String, Int32, DateTime, ...) implement IConvertible.
            // Value types that don't implement IConvertible must implement ISearchStringProvider 
            // in order to be used in a search filter.
            if (!(ExtensionMethods_1.TypeSystem.IsGenericType(this.value) || (typeof this.value.GetSearchString === 'function'))) // checking - ISearchStringProvider
             {
                throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.SearchFilterComparisonValueTypeIsNotSupported, this.constructor.name));
            }
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    RelationalFilter.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        var jsonFieldUriOrConstant = jsObject[XmlElementNames_1.XmlElementNames.FieldURIOrConstant];
        if (ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonFieldUriOrConstant) == XmlElementNames_1.XmlElementNames.Constant) {
            this.value = jsonFieldUriOrConstant[XmlElementNames_1.XmlElementNames.Value];
        }
        else {
            this.otherPropertyDefinition = PropertyDefinitionBase_1.PropertyDefinitionBase.LoadFromXmlJsObject(jsObject);
        }
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RelationalFilter.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FieldURIOrConstant);
        if (this.Value != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Constant);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Value, true /* alwaysWriteEmptyString */, this.Value);
            writer.WriteEndElement(); // Constant
        }
        else {
            this.OtherPropertyDefinition.WriteToXml(writer);
        }
        writer.WriteEndElement(); // FieldURIOrConstant
    };
    return RelationalFilter;
}(SearchFilter_PropertyBasedFilter_1.PropertyBasedFilter));
exports.RelationalFilter = RelationalFilter;
