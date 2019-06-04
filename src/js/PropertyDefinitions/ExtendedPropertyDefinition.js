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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var DefaultExtendedPropertySet_1 = require("../Enumerations/DefaultExtendedPropertySet");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var Guid_1 = require("../Guid");
var MapiPropertyType_1 = require("../Enumerations/MapiPropertyType");
var PropertyDefinitionBase_1 = require("./PropertyDefinitionBase");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var util_1 = require("util");
/**
 * Represents the definition of an extended property.
 */
var ExtendedPropertyDefinition = /** @class */ (function (_super) {
    __extends(ExtendedPropertyDefinition, _super);
    function ExtendedPropertyDefinition(mapiTypeTagPropertySetOrPropertySetId, mapiTypeNameOrId, mapiType) {
        var _this = _super.call(this) || this;
        var argsLength = arguments.length;
        _this.mapiType = MapiPropertyType_1.MapiPropertyType.String;
        switch (argsLength) {
            case 1:
                _this.mapiType = mapiTypeTagPropertySetOrPropertySetId;
                break;
            case 2:
                _this.mapiType = mapiTypeNameOrId;
                if (mapiTypeTagPropertySetOrPropertySetId < 0 || mapiTypeTagPropertySetOrPropertySetId > 65535 /*UInt16.MaxValue*/) {
                    throw new ArgumentException_1.ArgumentOutOfRangeException("tag", Strings_1.Strings.TagValueIsOutOfRange);
                }
                _this.tag = mapiTypeTagPropertySetOrPropertySetId;
                break;
            case 3:
                _this.mapiType = mapiType;
                typeof mapiTypeNameOrId === 'string' ? _this.name = mapiTypeNameOrId : _this.id = mapiTypeNameOrId;
                typeof mapiTypeTagPropertySetOrPropertySetId === 'number' ? _this.propertySet = mapiTypeTagPropertySetOrPropertySetId : _this.propertySetId = mapiTypeTagPropertySetOrPropertySetId;
                break;
            default:
                break;
        }
        return _this;
    }
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "Id", {
        /**
         * @Nullable Gets the Id of the extended property.
         */
        get: function () { return this.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "MapiType", {
        /**
         * Gets the MAPI type of the extended property.
         */
        get: function () { return this.mapiType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "Name", {
        /**
         * Gets the name of the extended property.
         */
        get: function () { return this.name || ((typeof this.tag === 'undefined') ? null : this.tag.toString()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "PropertySet", {
        /**
         * @Nullable Gets the property set of the extended property.
         */
        get: function () { return this.propertySet; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "PropertySetId", {
        /**
         * @Nullable Gets the property set Id or the extended property.
         * */
        get: function () { return this.propertySetId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "Tag", {
        /**
         * @Nullable Gets the extended property's tag.
         */
        get: function () { return this.tag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedPropertyDefinition.prototype, "Version", {
        /**
         * Gets the minimum Exchange version that supports this extended property.
         *
         * @value {ExchangeVersion} The version.
         */
        get: function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines whether a given extended property definition is equal to this extended property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same extended property.
     */
    ExtendedPropertyDefinition.prototype.Equals = function (obj) {
        var propertyDefinition = obj;
        return ExtendedPropertyDefinition.IsEqualTo(propertyDefinition, this);
    };
    /**
     * @internal Formats the field.
     *
     * @type    <T>        Type of field value.
     * @param   {string}   name         The name.
     * @param   {string}   fieldValue   The field value.
     * @return  {string}                Formatted value.
     */
    ExtendedPropertyDefinition.prototype.FormatField = function (name, fieldValue) {
        //debugger;
        return (fieldValue != null)
            ? ExtensionMethods_1.StringHelper.Format(ExtendedPropertyDefinition.FieldFormat, name, fieldValue)
            : "";
    };
    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    ExtendedPropertyDefinition.prototype.GetHashCode = function () { throw new Error("ExtendedPropertyDefinition.ts - GetHashCode : Not implemented."); };
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    ExtendedPropertyDefinition.prototype.GetPrintableName = function () {
        var sb = "";
        sb += "{";
        sb += this.FormatField(ExtendedPropertyDefinition.NameFieldName, this.Name);
        sb += this.FormatField(ExtendedPropertyDefinition.MapiTypeFieldName, MapiPropertyType_1.MapiPropertyType[this.MapiType]);
        sb += this.FormatField(ExtendedPropertyDefinition.IdFieldName, this.Id.toString());
        sb += this.FormatField(ExtendedPropertyDefinition.PropertySetFieldName, DefaultExtendedPropertySet_1.DefaultExtendedPropertySet[this.PropertySet]);
        sb += this.FormatField(ExtendedPropertyDefinition.PropertySetIdFieldName, this.PropertySetId != null ? this.PropertySetId.ToString() : "");
        sb += this.FormatField(ExtendedPropertyDefinition.TagFieldName, this.Tag.toString());
        sb += "}";
        return sb;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ExtendedPropertyDefinition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ExtendedFieldURI; };
    /**
     * @internal Determines whether two specified instances of ExtendedPropertyDefinition are equal.
     *
     * @param   {ExtendedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {ExtendedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                       True if extended property definitions are equal.
     */
    ExtendedPropertyDefinition.IsEqualTo = function (extPropDef1, extPropDef2) {
        return (extPropDef1 === extPropDef2) ||
            (extPropDef1 && extPropDef2 &&
                (extPropDef1.Id === extPropDef2.Id) &&
                (extPropDef1.MapiType === extPropDef2.MapiType) &&
                (extPropDef1.Tag === extPropDef2.Tag) &&
                (extPropDef1.Name === extPropDef2.Name) &&
                (extPropDef1.PropertySet === extPropDef2.PropertySet) &&
                (String(extPropDef1.propertySetId) === String(extPropDef2.propertySetId)));
    };
    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsObject   The json object.
     */
    ExtendedPropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.DistinguishedPropertySetId:
                    //debugger;
                    this.propertySet = isNaN(jsObject[key]) ? DefaultExtendedPropertySet_1.DefaultExtendedPropertySet[jsObject[key]] : +(jsObject[key]); // jsObject.ReadEnumValue<DefaultExtendedPropertySet>(key);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.PropertySetId:
                    //debugger;
                    this.propertySetId = new Guid_1.Guid(jsObject[key]); // new Guid(jsObject.ReadAsString(key));
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.PropertyTag:
                    this.tag = ExtensionMethods_1.Convert.toNumber(jsObject[key]); //Convert.ToUInt16(jsObject.ReadAsString(key), 16);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.PropertyName:
                    this.name = jsObject[key]; //jsObject.ReadAsString(key);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.PropertyId:
                    this.id = ExtensionMethods_1.Convert.toInt(jsObject[key]); //jsObject.ReadAsInt(key);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.PropertyType:
                    this.mapiType = isNaN(jsObject[key]) ? MapiPropertyType_1.MapiPropertyType[jsObject[key]] : +(jsObject[key]); // jsObject.ReadEnumValue<MapiPropertyType>(key);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ExtendedPropertyDefinition.prototype.WriteAttributesToXml = function (writer) {
        if (!util_1.isNullOrUndefined(this.propertySet)) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.DistinguishedPropertySetId, DefaultExtendedPropertySet_1.DefaultExtendedPropertySet[this.propertySet]);
        }
        if (this.propertySetId) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.PropertySetId, this.propertySetId.ToString());
        }
        if (this.tag) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.PropertyTag, this.tag);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.name)) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.PropertyName, this.name);
        }
        if (this.id) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.PropertyId, this.id);
        }
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.PropertyType, MapiPropertyType_1.MapiPropertyType[this.mapiType]);
    };
    ExtendedPropertyDefinition.FieldFormat = "{0}: {1} ";
    ExtendedPropertyDefinition.PropertySetFieldName = "PropertySet";
    ExtendedPropertyDefinition.PropertySetIdFieldName = "PropertySetId";
    ExtendedPropertyDefinition.TagFieldName = "Tag";
    ExtendedPropertyDefinition.NameFieldName = "Name";
    ExtendedPropertyDefinition.IdFieldName = "Id";
    ExtendedPropertyDefinition.MapiTypeFieldName = "MapiType";
    return ExtendedPropertyDefinition;
}(PropertyDefinitionBase_1.PropertyDefinitionBase));
exports.ExtendedPropertyDefinition = ExtendedPropertyDefinition;
