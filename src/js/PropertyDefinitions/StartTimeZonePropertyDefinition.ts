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
export class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean {
        if (version && (version === ExchangeVersion.Exchange2007_SP1)) {
            return Schemas.AppointmentSchema.MeetingTimeZone.HasFlag(flag, version);
        }
        else {
            return super.HasFlag(flag, version);
        }
    }
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void {
        super.RegisterAssociatedInternalProperties(properties);

        properties.push(Schemas.AppointmentSchema.MeetingTimeZone);
    }
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
    WriteToXml(writer: EwsServiceXmlWriter): void {
        if (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
            Schemas.AppointmentSchema.MeetingTimeZone.WriteToXml(writer);
        }
        else {
            super.WriteToXml(writer);
        }
    }
}