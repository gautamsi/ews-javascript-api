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
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var MapiTypeConverter_1 = require("../Misc/MapiTypeConverter");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EwsLogging_1 = require("../Core/EwsLogging");
var ExtendedPropertyDefinition_1 = require("../PropertyDefinitions/ExtendedPropertyDefinition");
var StringList_1 = require("./StringList");
var ComplexProperty_1 = require("./ComplexProperty");
var ExtendedProperty = /** @class */ (function (_super) {
    __extends(ExtendedProperty, _super);
    function ExtendedProperty(propertyDefinition) {
        var _this = _super.call(this) || this;
        _this.propertyDefinition = null;
        _this.value = null;
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        if (typeof propertyDefinition !== 'undefined')
            _this.propertyDefinition = propertyDefinition;
        return _this;
    }
    Object.defineProperty(ExtendedProperty.prototype, "PropertyDefinition", {
        get: function () {
            return this.propertyDefinition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedProperty.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            var _this = this;
            EwsUtilities_1.EwsUtilities.ValidateParam(value, "value");
            this.SetFieldValue({ getValue: function () { return _this.value; }, setValue: function (val) { return _this.value = val; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    ExtendedProperty.prototype.Equals = function (obj) { throw new Error("ExtendedProperty.ts - Equals : Not implemented."); };
    ExtendedProperty.prototype.GetHashCode = function () { throw new Error("ExtendedProperty.ts - GetHashCode : Not implemented."); };
    ExtendedProperty.prototype.GetStringValue = function () { throw new Error("ExtendedProperty.ts - GetStringValue : Not implemented."); };
    ExtendedProperty.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        if (jsonProperty[XmlElementNames_1.XmlElementNames.ExtendedFieldURI]) {
            this.propertyDefinition = new ExtendedPropertyDefinition_1.ExtendedPropertyDefinition();
            this.propertyDefinition.LoadPropertyValueFromXmlJsObject(jsonProperty[XmlElementNames_1.XmlElementNames.ExtendedFieldURI]);
        }
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.ExtendedFieldURI:
                    //pre processed above
                    break;
                case XmlElementNames_1.XmlElementNames.Value:
                    EwsLogging_1.EwsLogging.Assert(this.PropertyDefinition != null, "ExtendedProperty.TryReadElementFromXml", "PropertyDefintion is missing");
                    var stringValue = jsonProperty[key];
                    this.value = MapiTypeConverter_1.MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringValue);
                    break;
                case XmlElementNames_1.XmlElementNames.Values:
                    EwsLogging_1.EwsLogging.Assert(this.PropertyDefinition != null, "ExtendedProperty.TryReadElementFromXml", "PropertyDefintion is missing");
                    var stringList = new StringList_1.StringList(XmlElementNames_1.XmlElementNames.Value);
                    var jsonCollection = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonProperty, key);
                    stringList.CreateFromXmlJsObjectCollection(jsonCollection, service);
                    this.value = MapiTypeConverter_1.MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringList.GetEnumerator());
                    break;
                default:
                    break;
            }
        }
    };
    /**@internal */
    ExtendedProperty.prototype.WriteElementsToXml = function (writer) {
        this.PropertyDefinition.WriteToXml(writer);
        if (MapiTypeConverter_1.MapiTypeConverter.IsArrayType(this.PropertyDefinition.MapiType)) {
            var array = this.Value;
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Values);
            for (var index = 0; index < array.length; index++) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Value, MapiTypeConverter_1.MapiTypeConverter.ConvertToString(this.PropertyDefinition.MapiType, array[index]));
            }
            writer.WriteEndElement();
        }
        else {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Value, MapiTypeConverter_1.MapiTypeConverter.ConvertToString(this.PropertyDefinition.MapiType, this.Value));
        }
    };
    return ExtendedProperty;
}(ComplexProperty_1.ComplexProperty));
exports.ExtendedProperty = ExtendedProperty;
