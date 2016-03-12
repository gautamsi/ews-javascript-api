import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";

import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
/**
 * @internal Represents String property definition.
 */
export class StringPropertyDefinition extends TypedPropertyDefinition {
    
    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...). 
     */
    get IsNullable(): boolean { return true; }

    /**
     * @internal Gets the property type.
     */
    get Type(): any { return StringPropertyDefinition; }//System.Type;

    /**
     * @internal Initializes a new instance of the **StringPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion) {
        super(propertyName, xmlElementName, uri, flags, version);
    }

    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}           String value.
     */
    Parse(value: string): any { return value; }
}