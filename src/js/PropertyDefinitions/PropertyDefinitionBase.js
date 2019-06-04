"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeContainer_1 = require("../TypeContainer");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents the base class for all property definitions.
 */
var PropertyDefinitionBase = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **PropertyDefinitionBase** class.
     */
    function PropertyDefinitionBase() {
    }
    Object.defineProperty(PropertyDefinitionBase.prototype, "Type", {
        /**
         * Gets the type of the property.
         */
        get: function () { return PropertyDefinitionBase; } //System.Type;
        ,
        enumerable: true,
        configurable: true
    });
    PropertyDefinitionBase.prototype.ToString = function () { return this.GetPrintableName(); };
    //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("PropertyDefinitionBase.ts - TryLoadFromJson : Not implemented.");}
    /**
     * @internal load from XMLJsObject.
     *
     * @param   {any}   jsonObject   The json object.
     * @return  {PropertyDefinitionBase}        True if property was loaded.
     */
    PropertyDefinitionBase.LoadFromXmlJsObject = function (jsObject) {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlElementNames_1.XmlElementNames.FieldURI:
                    return TypeContainer_1.TypeContainer.ServiceObjectSchema.FindPropertyDefinition(XmlAttributeNames_1.XmlAttributeNames.FieldURI);
                case XmlElementNames_1.XmlElementNames.IndexedFieldURI:
                    return new TypeContainer_1.TypeContainer.IndexedPropertyDefinition(jsObject[XmlAttributeNames_1.XmlAttributeNames.FieldURI], jsObject[XmlAttributeNames_1.XmlAttributeNames.FieldIndex]);
                case XmlElementNames_1.XmlElementNames.ExtendedFieldURI:
                    var propertyDefiniton = new TypeContainer_1.TypeContainer.ExtendedPropertyDefinition();
                    propertyDefiniton.LoadPropertyValueFromXmlJsObject(jsObject);
                    return propertyDefiniton;
                default:
                    break;
            }
        }
        return null;
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PropertyDefinitionBase.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement();
    };
    return PropertyDefinitionBase;
}());
exports.PropertyDefinitionBase = PropertyDefinitionBase;
