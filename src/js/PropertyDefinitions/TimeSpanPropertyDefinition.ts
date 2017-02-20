import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";

import { DateTime, TimeSpan } from "../DateTime";
import { GenericPropertyDefinition } from "./GenericPropertyDefinition";
/**
 * @internal Represents TimeSpan property definition. based on moment Duration
 */
export class TimeSpanPropertyDefinition extends GenericPropertyDefinition<TimeSpan> {

    /**
     * @internal Initializes a new instance of the **TimeSpanPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion) {
        super(propertyName, xmlElementName, uri, flags, version, false);
    }

    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        return EwsUtilities.XSDurationToTimeSpan(value);
    }

    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TimeSpan value.
     */
    ToString(value?: any): string {
        if (value)
            return EwsUtilities.TimeSpanToXSDuration(value);
        throw new Error("TimeSpanPropertyDefinition: incorrect call of ToString(value): value is undefined");
    }
}
