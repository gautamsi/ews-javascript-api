import MeetingTimeZone = require("../ComplexProperties/MeetingTimeZone");
import AppointmentSchema = require("../Core/ServiceObjects/Schemas/AppointmentSchema");
import PropertyDefinition = require("./PropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
    Type: any;//System.Type;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("MeetingTimeZonePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        debugger;
        if (jsObject != null) {
            var meetingTimeZone: MeetingTimeZone = new MeetingTimeZone();
            meetingTimeZone.LoadFromXmlJsObject(jsObject, this.GetXmlElementName());

            propertyBag._setItem(AppointmentSchema.StartTimeZone, meetingTimeZone.ToTimeZoneInfo());
        }

        throw new Error("MeetingTimeZonePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented.");
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("MeetingTimeZonePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value: MeetingTimeZone = <MeetingTimeZone> propertyBag._getItem(this);

        if (value != null || typeof value !== 'undefined') {
            value.WriteToXml(writer, this.XmlElementName);
        }
        //throw new Error("MeetingTimeZonePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); 
    }
}
export = MeetingTimeZonePropertyDefinition;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
