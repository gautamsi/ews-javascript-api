import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsLogging} from "../Core/EwsLogging";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {base64Helper} from "../ExtensionMethods";

import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
/**
 * @internal Represents byte array property definition.
 */
export class ByteArrayPropertyDefinition extends TypedPropertyDefinition {

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    get IsNullable(): boolean { return true; }

    /**
     * @internal Gets the property type.
     */
    get Type(): any { return ByteArrayPropertyDefinition; }//System.Type;

    /**
     * @internal Initializes a new instance of the **ByteArrayPropertyDefinition** class.
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
     * @return  {any}           Byte array value.
     */
    Parse(value: string): any {
        //ref: storing original base64 data base64Helper.atob(value); }
        EwsLogging.Assert(false, "ByteArrayPropertyDefinition.Parse", "ByteArrayPropertyDefinition needs to be improved");
        return value;
    }

    /**
     * @internal Converts byte array property to a string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    Byte array value.
     */
    ToString(value?: any): string {
        EwsLogging.Assert(false, "ByteArrayPropertyDefinition.Parse", "ByteArrayPropertyDefinition needs to be improved");
        if (value)
            return value;//ref: using original value. base64Helper.btoa(value);

        throw new Error("ByteArrayPropertyDefinition: incorrect call of ToString(value): value is undefined");
    }
}