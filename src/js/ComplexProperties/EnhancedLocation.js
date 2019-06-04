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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var PersonaPostalAddress_1 = require("./PersonaPostalAddress");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents Enhanced Location.
 */
var EnhancedLocation = /** @class */ (function (_super) {
    __extends(EnhancedLocation, _super);
    function EnhancedLocation(displayName, annotation, personaPostalAddress) {
        if (annotation === void 0) { annotation = ExtensionMethods_1.StringHelper.Empty; }
        if (personaPostalAddress === void 0) { personaPostalAddress = new PersonaPostalAddress_1.PersonaPostalAddress(); }
        var _this = _super.call(this) || this;
        _this.displayName = null;
        _this.annotation = null;
        _this.personaPostalAddress = null;
        _this.displayName = displayName;
        _this.annotation = annotation;
        _this.personaPostalAddress = personaPostalAddress;
        _this.personaPostalAddress.OnChange.push(_this.PersonaPostalAddress_OnChange.bind(_this));
        return _this;
    }
    Object.defineProperty(EnhancedLocation.prototype, "DisplayName", {
        /**
         * Gets or sets the Location DisplayName.
         */
        get: function () {
            return this.displayName;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.displayName; }, setValue: function (fieldValue) { _this.displayName = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedLocation.prototype, "Annotation", {
        /**
         * Gets or sets the Location Annotation.
         */
        get: function () {
            return this.annotation;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.annotation; }, setValue: function (fieldValue) { _this.annotation = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnhancedLocation.prototype, "PersonaPostalAddress", {
        /**
         * Gets or sets the Persona Postal Address.
         */
        get: function () {
            return this.personaPostalAddress;
        },
        set: function (value) {
            var _this = this;
            if (this.personaPostalAddress !== value) {
                if (this.personaPostalAddress !== null) {
                    ExtensionMethods_1.ArrayHelper.RemoveEntry(this.personaPostalAddress.OnChange, this.PersonaPostalAddress_OnChange);
                }
                this.SetFieldValue({ getValue: function () { return _this.personaPostalAddress; }, setValue: function (fieldValue) { _this.personaPostalAddress = fieldValue; } }, value);
                this.personaPostalAddress.OnChange.push(this.PersonaPostalAddress_OnChange.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Validates this instance.
     */
    EnhancedLocation.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.displayName, "DisplayName");
        EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(this.annotation, "Annotation");
        EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(this.personaPostalAddress, "PersonaPostalAddress");
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    EnhancedLocation.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.LocationDisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.LocationAnnotation:
                    this.annotation = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PersonaPostalAddress:
                    this.personaPostalAddress = new PersonaPostalAddress_1.PersonaPostalAddress();
                    this.personaPostalAddress.LoadFromXmlJsObject(jsObject[key], service);
                    this.personaPostalAddress.OnChange.push(this.PersonaPostalAddress_OnChange.bind(this));
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * PersonaPostalAddress OnChange.
     *
     * @param   {ComplexProperty}   complexProperty   ComplexProperty object.
     */
    EnhancedLocation.prototype.PersonaPostalAddress_OnChange = function (complexProperty) { this.Changed(); };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    EnhancedLocation.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LocationDisplayName, this.displayName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LocationAnnotation, this.annotation);
        this.personaPostalAddress.WriteToXml(writer);
    };
    return EnhancedLocation;
}(ComplexProperty_1.ComplexProperty));
exports.EnhancedLocation = EnhancedLocation;
