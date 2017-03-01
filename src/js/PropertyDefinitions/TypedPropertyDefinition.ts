import { XmlNamespace } from "../Enumerations/XmlNamespace";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { PropertyBag } from "../Core/PropertyBag";
import { ExchangeService } from "../Core/ExchangeService";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";

import { PropertyDefinition } from "./PropertyDefinition";
/**
 * @internal Represents typed property definition.
 */
export abstract class TypedPropertyDefinition extends PropertyDefinition {

    private isNullable: boolean;

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     *
     */
    get IsNullable(): boolean { return this.isNullable; };

    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    constructor(propertyName: string, xmlElementName: string, uri: string, versionOrFlags: ExchangeVersion | PropertyDefinitionFlags, version?: ExchangeVersion, isNullable?: boolean) {
        switch (arguments.length) {
            case 4:
                super(propertyName, xmlElementName, uri, <ExchangeVersion>versionOrFlags);
                break;
            case 5:
            case 6:
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version);
                break;
            default:
                break;
        }
        this.isNullable = isNullable || false;
    }

    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JsObject value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {

        if (jsObject) {
            propertyBag._setItem(this, this.Parse(jsObject));
        }

        // if (typeof jsObject === 'string' || jsObject instanceof String) {
        //     propertyBag._setItem(this, this.Parse(jsObject));
        // }
        // else if (jsObject != null) { //undefined == null returns true, false for === comparison.
        //     propertyBag._setItem(this, this.Parse(jsObject));
        // }
    }

    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}       Typed value.
     */
    abstract Parse(value: string): any;

    /**
     * @internal Convert instance to string.
     *
     * @param   {any}   value   The value.
     * @return  {string}        String representation of property value.
     */
    ToString(value?: any): string {
        if (value !== null && typeof value !== 'undefined')
            return value.toString();
        throw new Error("TypedPropertydefinition: incorrect call of ToString(value): value is undefined");
    }
    toString(value?: any) {
        if (arguments.length > 0) {
            return this.ToString(value);
        }
        else {
            return this.ToString();
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value = propertyBag._getItem(this);
        if (typeof value !== 'undefined') {
            writer.WriteElementValue(XmlNamespace.Types, this.XmlElementName, this.Name, this.ToString(value));
        }
    }
}