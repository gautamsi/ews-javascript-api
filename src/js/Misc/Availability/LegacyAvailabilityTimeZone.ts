import {LegacyAvailabilityTimeZoneTime} from "./LegacyAvailabilityTimeZoneTime";
import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class LegacyAvailabilityTimeZone extends ComplexProperty {
    private bias: any /*System.TimeSpan*/;
    private standardTime: LegacyAvailabilityTimeZoneTime;
    private daylightTime: LegacyAvailabilityTimeZoneTime;
    InternalToJson(service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - LoadFromJson : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("LegacyAvailabilityTimeZone.ts - ToTimeZoneInfo : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("LegacyAvailabilityTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("LegacyAvailabilityTimeZone.ts - WriteElementsToXml : Not implemented."); }
}


//}



