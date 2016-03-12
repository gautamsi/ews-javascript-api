import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsLogging} from "../Core/EwsLogging";

import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
/**
 * @internal Represents generic property definition.
 */
export class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
    Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */    
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
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
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version);
                break;
            case 6:
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version, isNullable);
                break;
            default:
                break;
        }
    }

    /**
     * @internal Parses the specified value.
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        //todo: fix converting generictype
        EwsLogging.Assert(false, "GenericPropertyDefinition<TPropertyValue>.Parse", "GenericPropertyDefinition<TPropertyValue> needs to be improved");
        return value;
    }
}