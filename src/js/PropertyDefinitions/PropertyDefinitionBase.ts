
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {TypeContainer} from "../TypeContainer";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {TypeSystem} from "../Extensionmethods";
import {ServiceObjectSchema} from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";
import {IndexedPropertyDefinition} from "./IndexedPropertyDefinition";
import {ExtendedPropertyDefinition} from "./ExtendedPropertyDefinition";

/**
 * Represents the base class for all property definitions.
 */
export abstract class PropertyDefinitionBase {

    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    Version: ExchangeVersion;

    /**
     * Gets the type of the property.
     */
    get Type(): any { return PropertyDefinitionBase } //System.Type;

    /**
     * @internal Initializes a new instance of the **PropertyDefinitionBase** class.
     */
    constructor() { }

    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    abstract GetPrintableName(): string;

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    abstract GetXmlElementName(): string;
    ToString(): string { return this.GetPrintableName(); }
    //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("PropertyDefinitionBase.ts - TryLoadFromJson : Not implemented.");}

    /**
     * @internal load from XMLJsObject.
     *
     * @param   {any}   jsonObject   The json object.
     * @return  {PropertyDefinitionBase}        True if property was loaded.
     */
    static LoadFromXmlJsObject(jsObject: any): PropertyDefinitionBase {
        debugger;
        debugger;
        console.log("PropertyDefinitionBase.ts - static LoadFromXmlJsObject - was called, debug and check if values are returned properly");
        debugger;
        debugger;
        debugger;
        let typeName = TypeSystem.GetJsObjectTypeName(jsObject);

        switch (typeName) {
            case XmlElementNames.FieldURI:
                return TypeContainer.ServiceObjectSchema.FindPropertyDefinition(XmlAttributeNames.FieldURI);
            case XmlElementNames.IndexedFieldURI:
                return new TypeContainer.IndexedPropertyDefinition(
                    jsObject[XmlAttributeNames.FieldURI],
                    jsObject[XmlAttributeNames.FieldIndex])
            case XmlElementNames.ExtendedFieldURI:
                let propertyDefiniton: ExtendedPropertyDefinition = new TypeContainer.ExtendedPropertyDefinition();
                propertyDefiniton.LoadPropertyValueFromXmlJsObject(jsObject);
                return propertyDefiniton;
            default:
                return null;
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    abstract WriteAttributesToXml(writer: EwsServiceXmlWriter): void;

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement();
    }
}