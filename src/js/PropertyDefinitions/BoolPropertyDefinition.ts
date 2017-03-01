import { Convert } from "../ExtensionMethods";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";

import { GenericPropertyDefinition } from "./GenericPropertyDefinition";
/**
 * @internal Represents Boolean property definition
 */
export class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {

    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
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
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version, false);
                break;
            case 6:
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version, isNullable);
                break;
            default:
                break;
        }
    }

    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        return Convert.toBool(value);
    }

    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    String representation of Boolean property.
     */
    ToString(value?: any): string {
        if (typeof value !== 'undefined')
            return EwsUtilities.BoolToXSBool(value);
        throw new Error("BoolPropertyDefinition: incorrect call of ToString(value): value is undefined");
    }
}