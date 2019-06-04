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
var LocationSource_1 = require("../Enumerations/LocationSource");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents PersonaPostalAddress.
 */
var PersonaPostalAddress = /** @class */ (function (_super) {
    __extends(PersonaPostalAddress, _super);
    function PersonaPostalAddress(street, city, state, country, postalCode, postOfficeBox, locationSource, locationUri, formattedAddress, latitude, longitude, accuracy, altitude, altitudeAccuracy) {
        var _this = _super.call(this) || this;
        _this.street = null;
        _this.city = null;
        _this.state = null;
        _this.country = null;
        _this.postalCode = null;
        _this.postOfficeBox = null;
        _this.type = null;
        _this.latitude = null;
        _this.longitude = null;
        _this.accuracy = null;
        _this.altitude = null;
        _this.altitudeAccuracy = null;
        _this.formattedAddress = null;
        _this.uri = null;
        _this.source = 0;
        if (arguments.length === 0)
            return _this;
        _this.street = street;
        _this.city = city;
        _this.state = state;
        _this.country = country;
        _this.postalCode = postalCode;
        _this.postOfficeBox = postOfficeBox;
        _this.latitude = latitude;
        _this.longitude = longitude;
        _this.source = locationSource;
        _this.uri = locationUri;
        _this.formattedAddress = formattedAddress;
        _this.accuracy = accuracy;
        _this.altitude = altitude;
        _this.altitudeAccuracy = altitudeAccuracy;
        return _this;
    }
    Object.defineProperty(PersonaPostalAddress.prototype, "Street", {
        /**
         * Gets or sets the Street.
         */
        get: function () {
            return this.street;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.street; }, setValue: function (fieldValue) { _this.street = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "City", {
        /**
         * Gets or sets the City.
         */
        get: function () {
            return this.city;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.city; }, setValue: function (fieldValue) { _this.city = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "State", {
        /**
         * Gets or sets the state.
         */
        get: function () {
            return this.state;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.state; }, setValue: function (fieldValue) { _this.state = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Country", {
        /**
         * Gets or sets the Country.
         */
        get: function () {
            return this.country;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.country; }, setValue: function (fieldValue) { _this.country = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "PostalCode", {
        /**
         * Gets or sets the PostalCode.
         */
        get: function () {
            return this.postalCode;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.postalCode; }, setValue: function (fieldValue) { _this.postalCode = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "PostOfficeBox", {
        /**
         * Gets or sets the PostOfficeBox.
         */
        get: function () {
            return this.postOfficeBox;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.postOfficeBox; }, setValue: function (fieldValue) { _this.postOfficeBox = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Type", {
        /**
         * Gets or sets the Type.
         */
        get: function () {
            return this.type;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.type; }, setValue: function (fieldValue) { _this.type = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Source", {
        /**
         * Gets or sets the location source type.
         */
        get: function () {
            return this.source;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.source; }, setValue: function (fieldValue) { _this.source = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Uri", {
        /**
         * Gets or sets the location Uri.
         */
        get: function () {
            return this.uri;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.uri; }, setValue: function (fieldValue) { _this.uri = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Latitude", {
        /**
         * Gets or sets a value indicating location latitude.
         */
        get: function () {
            return this.latitude;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.latitude; }, setValue: function (fieldValue) { _this.latitude = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Longitude", {
        /**
         * Gets or sets a value indicating location longitude.
         */
        get: function () {
            return this.longitude;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.longitude; }, setValue: function (fieldValue) { _this.longitude = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Accuracy", {
        /**
         * Gets or sets the location accuracy.
         */
        get: function () {
            return this.accuracy;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.accuracy; }, setValue: function (fieldValue) { _this.accuracy = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "Altitude", {
        /**
         * Gets or sets the location altitude.
         */
        get: function () {
            return this.altitude;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.altitude; }, setValue: function (fieldValue) { _this.altitude = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "AltitudeAccuracy", {
        /**
         * Gets or sets the location altitude accuracy.
         */
        get: function () {
            return this.altitudeAccuracy;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.altitudeAccuracy; }, setValue: function (fieldValue) { _this.altitudeAccuracy = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaPostalAddress.prototype, "FormattedAddress", {
        /**
         * Gets or sets the street address.
         */
        get: function () {
            return this.formattedAddress;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.formattedAddress; }, setValue: function (fieldValue) { _this.formattedAddress = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    PersonaPostalAddress.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Street:
                    this.street = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.City:
                    this.city = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Country:
                    this.country = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PostalCode:
                    this.postalCode = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PostOfficeBox:
                    this.postOfficeBox = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PostalAddressType:
                    this.type = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Latitude:
                    this.latitude = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Longitude:
                    this.longitude = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Accuracy:
                    this.accuracy = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Altitude:
                    this.altitude = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.AltitudeAccuracy:
                    this.altitudeAccuracy = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.FormattedAddress:
                    this.formattedAddress = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.LocationUri:
                    this.uri = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.LocationSource:
                    this.source = LocationSource_1.LocationSource[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PersonaPostalAddress.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Street, this.street);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.City, this.city);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.State, this.state);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Country, this.country);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PostalCode, this.postalCode);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PostOfficeBox, this.postOfficeBox);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PostalAddressType, this.type);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Latitude, this.latitude);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Longitude, this.longitude);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Accuracy, this.accuracy);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Altitude, this.altitude);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AltitudeAccuracy, this.altitudeAccuracy);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FormattedAddress, this.formattedAddress);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LocationUri, this.uri);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LocationSource, this.source);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PersonaPostalAddress.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PersonaPostalAddress);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement(); // xmlElementName
    };
    return PersonaPostalAddress;
}(ComplexProperty_1.ComplexProperty));
exports.PersonaPostalAddress = PersonaPostalAddress;
