import AppointmentSchema = require("../Core/ServiceObjects/Schemas/AppointmentSchema");
import ExchangeService = require("../Core/ExchangeService");
import MeetingTimeZone = require("../ComplexProperties/MeetingTimeZone");
import XmlElementNames = require("../Core/XmlElementNames");
import TimeZonePropertyDefinition = require("./TimeZonePropertyDefinition");
import PropertyDefinition = require("./PropertyDefinition");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import PropertyBag = require("../Core/PropertyBag");
class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean {
        if (version && (version === ExchangeVersion.Exchange2007_SP1)) {
            return AppointmentSchema.MeetingTimeZone.HasFlag(flag, version);
        }
        else {
            return super.HasFlag(flag, version);
        }
    }
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void {
        super.RegisterAssociatedInternalProperties(properties);

        properties.push(AppointmentSchema.MeetingTimeZone);
    }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value = propertyBag._getItem(this);

        if (value != null) {
            if (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
                var service = <ExchangeService>writer.Service;
                if (service != null && service.Exchange2007CompatibilityMode == false) {
                    var meetingTimeZone: MeetingTimeZone = new MeetingTimeZone(<TimeZoneInfo>value);
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
            AppointmentSchema.MeetingTimeZone.WriteToXml(writer);
        }
        else {
            super.WriteToXml(writer);
        }
    }
}
export = StartTimeZonePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
