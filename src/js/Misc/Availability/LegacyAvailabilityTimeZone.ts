import LegacyAvailabilityTimeZoneTime = require("./LegacyAvailabilityTimeZoneTime");
import ComplexProperty = require("../../ComplexProperties/ComplexProperty");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

class LegacyAvailabilityTimeZone extends ComplexProperty {
    private bias: any /*System.TimeSpan*/;
    private standardTime: LegacyAvailabilityTimeZoneTime;
    private daylightTime: LegacyAvailabilityTimeZoneTime;
    InternalToJson(service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - LoadFromJson : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("LegacyAvailabilityTimeZone.ts - ToTimeZoneInfo : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("LegacyAvailabilityTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("LegacyAvailabilityTimeZone.ts - WriteElementsToXml : Not implemented."); }
}
export = LegacyAvailabilityTimeZone;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
