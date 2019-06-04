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
var ExtendedProperty_1 = require("./ExtendedProperty");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var ExtendedPropertyCollection = /** @class */ (function (_super) {
    __extends(ExtendedPropertyCollection, _super);
    function ExtendedPropertyCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedPropertyCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new ExtendedProperty_1.ExtendedProperty(); };
    ExtendedPropertyCollection.prototype.CreateDefaultComplexProperty = function () { return new ExtendedProperty_1.ExtendedProperty(); };
    ExtendedPropertyCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return null; };
    ExtendedPropertyCollection.prototype.GetOrAddExtendedProperty = function (propertyDefinition) {
        var extendedProperty = { outValue: null };
        if (!this.TryGetProperty(propertyDefinition, extendedProperty)) {
            extendedProperty.outValue = new ExtendedProperty_1.ExtendedProperty(propertyDefinition);
            this.InternalAdd(extendedProperty.outValue);
        }
        return extendedProperty.outValue;
    };
    ExtendedPropertyCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        var extendedProperty = new ExtendedProperty_1.ExtendedProperty();
        //debugger; //debug: //todo: check for need of local element -not tested
        extendedProperty.LoadFromXmlJsObject(jsObject, service);
        this.InternalAdd(extendedProperty);
    };
    ExtendedPropertyCollection.prototype.RemoveExtendedProperty = function (propertyDefinition) {
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        var extendedProperty = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            return this.InternalRemove(extendedProperty.outValue);
        }
        else {
            return false;
        }
    };
    ExtendedPropertyCollection.prototype.SetExtendedProperty = function (propertyDefinition, value) {
        var extendedProperty = this.GetOrAddExtendedProperty(propertyDefinition);
        extendedProperty.Value = value;
    };
    ExtendedPropertyCollection.prototype.TryGetProperty = function (propertyDefinition, extendedProperty) {
        extendedProperty.outValue = ExtensionMethods_1.ArrayHelper.Find(this.Items, function (prop) { return prop.PropertyDefinition.Equals(propertyDefinition); });
        return extendedProperty.outValue != null;
    };
    ExtendedPropertyCollection.prototype.TryGetValue = function (propertyDefinition, propertyValue) {
        var extendedProperty = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            //debug: Verify that the type parameter and property definition's type are compatible.
            //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
            // var errorMessage = StringHelper.Format(
            //     Strings.PropertyDefinitionTypeMismatch,
            //     EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
            //     EwsUtilities.GetPrintableTypeName("Y"));
            // throw new ArgumentException(errorMessage +  " - propertyDefinition");
            //}
            propertyValue.outValue = extendedProperty.outValue.Value;
            return true;
        }
        else {
            propertyValue.outValue = null; // default(T);
            return false;
        }
    };
    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    ExtendedPropertyCollection.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        // Use the default XML serializer.
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var extendedProperty = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
            extendedProperty.PropertyDefinition.WriteToXml(writer);
            writer.WriteEndElement();
        }
        return true;
    };
    /**
     * @internal Writes the update to XML.
     * ICustomUpdateSerializer.WriteSetUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    ExtendedPropertyCollection.prototype.WriteSetUpdateToXml = function (writer, ewsObject, propertyDefinition) {
        var propertiesToSet = [];
        ExtensionMethods_1.ArrayHelper.AddRange(propertiesToSet, this.AddedItems);
        ExtensionMethods_1.ArrayHelper.AddRange(propertiesToSet, this.ModifiedItems);
        for (var _i = 0, propertiesToSet_1 = propertiesToSet; _i < propertiesToSet_1.length; _i++) {
            var extendedProperty = propertiesToSet_1[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetSetFieldXmlElementName());
            extendedProperty.PropertyDefinition.WriteToXml(writer);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetXmlElementName());
            extendedProperty.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ExtendedProperty);
            writer.WriteEndElement();
            writer.WriteEndElement();
        }
        for (var _a = 0, _b = this.RemovedItems; _a < _b.length; _a++) {
            var extendedProperty = _b[_a];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
            extendedProperty.PropertyDefinition.WriteToXml(writer);
            writer.WriteEndElement();
        }
        return true;
    };
    /**@internal */
    ExtendedPropertyCollection.prototype.WriteToXml = function (writer, xmlElementName) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var extendedProperty = _a[_i];
            extendedProperty.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ExtendedProperty);
        }
    };
    return ExtendedPropertyCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ExtendedPropertyCollection = ExtendedPropertyCollection;
