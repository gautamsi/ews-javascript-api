import TimeChange = require("./TimeChange");
import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class MeetingTimeZone extends ComplexProperty {
    Name: string;
    BaseOffset: any /*System.TimeSpan*/;
    Standard: TimeChange;
    Daylight: TimeChange;
    private name: string;
    private baseOffset: any /*System.TimeSpan*/;
    private standard: TimeChange;
    private daylight: TimeChange;
    InternalToJson(service: ExchangeService): any { throw new Error("MeetingTimeZone.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("MeetingTimeZone.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("MeetingTimeZone.ts - ReadAttributesFromXml : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("MeetingTimeZone.ts - ToTimeZoneInfo : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("MeetingTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MeetingTimeZone.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MeetingTimeZone.ts - WriteElementsToXml : Not implemented."); }
}
export = MeetingTimeZone;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
