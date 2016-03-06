import {MeetingTimeZone} from "../ComplexProperties/MeetingTimeZone";
import {Schemas} from "../Core/ServiceObjects/Schemas/Schemas";
import {ServiceObjectSchema} from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";
import {PropertyDefinition} from "./PropertyDefinition";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
    Type: any;//System.Type;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("MeetingTimeZonePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        //debug: //ref: check for validity with example
        if (jsObject != null) {
            var meetingTimeZone: MeetingTimeZone = new MeetingTimeZone();
            meetingTimeZone.LoadFromXmlJsObject(jsObject, service);//this.GetXmlElementName()

            propertyBag._setItem(Schemas.AppointmentSchema.StartTimeZone, meetingTimeZone.ToTimeZoneInfo());
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