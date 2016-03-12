import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {TimeZoneDefinition} from "../ComplexProperties/TimeZones/TimeZoneDefinition";
import {TimeZoneInfo} from "../DateTime";
import {EwsLogging} from "../Core/EwsLogging";

import {PropertyDefinition} from "./PropertyDefinition";
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
export class TimeZonePropertyDefinition extends PropertyDefinition {

    /**
     * Gets the property type.
     */
    Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **TimeZonePropertyDefinition** class.
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
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        EwsLogging.Assert(false, "TimeZonePropertyDefinition.LoadPropertyValueFromXmlJsObject", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");
        let timeZoneDefinition: TimeZoneDefinition = new TimeZoneDefinition();

        if (jsObject) {
            timeZoneDefinition.LoadFromXmlJsObject(jsObject, service);
        }

        propertyBag._setItem(this, timeZoneDefinition.ToTimeZoneInfo(service));
    }

    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        EwsLogging.Assert(false, "TimeZonePropertyDefinition.WritePropertyValueToXml", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");
        let value = <TimeZoneInfo>propertyBag._getItem(this);

        if (value != null) {
            // We emit time zone properties only if we have not emitted the time zone SOAP header
            // or if this time zone is different from that of the service through which the request
            // is being emitted.
            if (!writer.IsTimeZoneHeaderEmitted || value != writer.Service.TimeZone) {
                let timeZoneDefinition: TimeZoneDefinition = new TimeZoneDefinition(value);

                timeZoneDefinition.WriteToXml(writer, this.XmlElementName);
            }
        }
    }
}