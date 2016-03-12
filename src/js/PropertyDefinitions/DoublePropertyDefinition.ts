import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {PropertyBag} from "../Core/PropertyBag";
import {Convert} from "../ExtensionMethods";

import {GenericPropertyDefinition} from "./GenericPropertyDefinition";
/**
 * @internal Represents double-precision floating point property definition.
 */
export class DoublePropertyDefinition extends GenericPropertyDefinition<number> {

    /**
     * @internal Initializes a new instance of the **DoublePropertyDefinition** class.
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
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        return Convert.toNumber(value);
    }
}