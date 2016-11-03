import {Schemas} from "../Core/ServiceObjects/Schemas/Schemas";
import {ExchangeService} from "../Core/ExchangeService";
import {MeetingTimeZone} from "../ComplexProperties/MeetingTimeZone";
import {XmlElementNames} from "../Core/XmlElementNames";
import {PropertyDefinition} from "./PropertyDefinition";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {PropertyBag} from "../Core/PropertyBag";

import {TimeZonePropertyDefinition} from "./TimeZonePropertyDefinition";
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
export class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {

    /**
     * @internal Initializes a new instance of the **StartTimeZonePropertyDefinition** class.
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
     * @internalDetermines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
        if (version && (version as ExchangeVersion === ExchangeVersion.Exchange2007_SP1)) {
            return Schemas.AppointmentSchema.MeetingTimeZone.HasFlag(flag, version);
        }
        else {
            return super.HasFlag(flag, version);
        }
    }

    /**
     * @internal Registers associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void {
        super.RegisterAssociatedInternalProperties(properties);

        properties.push(Schemas.AppointmentSchema.MeetingTimeZone);
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

        if (value != null) {
            if (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
                var service = <ExchangeService>writer.Service;
                if (service != null && service.Exchange2007CompatibilityMode == false) {
                    var meetingTimeZone: MeetingTimeZone = new MeetingTimeZone(/*<TimeZoneInfo>value*/);
                    meetingTimeZone.WriteToXml(writer, XmlElementNames.MeetingTimeZone);
                }
            }
            else {
                super.WritePropertyValueToXml(
                    writer,
                    propertyBag,
                    isUpdateOperation);
            }
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        if (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
            Schemas.AppointmentSchema.MeetingTimeZone.WriteToXml(writer);
        }
        else {
            super.WriteToXml(writer);
        }
    }
}