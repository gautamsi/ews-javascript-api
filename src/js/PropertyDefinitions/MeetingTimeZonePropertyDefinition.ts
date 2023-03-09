import {MeetingTimeZone} from "../ComplexProperties/MeetingTimeZone";
import {Schemas} from "../Core/ServiceObjects/Schemas/Schemas";
import {ServiceObjectSchema} from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsLogging} from "../Core/EwsLogging";

import {PropertyDefinition} from "./PropertyDefinition";
/**
 * @internal Represents the definition for the meeting time zone property.
 */
export class MeetingTimeZonePropertyDefinition extends PropertyDefinition {

    /**
     * Gets the property type.
     */
    // Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **MeetingTimeZonePropertyDefinition** class.
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
        EwsLogging.Assert(false, "MeetingTimeZonePropertyDefinition.LoadPropertyValueFromXmlJsObject", "This is not properly validate, need to validate with example");
        if (jsObject != null) {
            var meetingTimeZone: MeetingTimeZone = new MeetingTimeZone();
            meetingTimeZone.LoadFromXmlJsObject(jsObject, service);

            propertyBag._setItem(Schemas.AppointmentSchema.StartTimeZone, meetingTimeZone.ToTimeZoneInfo());
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value: MeetingTimeZone = <MeetingTimeZone>propertyBag._getItem(this);

        if (value) {
            value.WriteToXml(writer, this.XmlElementName);
        }
    }
}