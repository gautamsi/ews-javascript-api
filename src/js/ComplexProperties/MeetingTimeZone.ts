import {TimeChange} from "./TimeChange";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class MeetingTimeZone extends ComplexProperty {
    Name: string;
    BaseOffset: any /*System.TimeSpan*/;
    Standard: TimeChange;
    Daylight: TimeChange;
    private name: string;
    private baseOffset: any /*System.TimeSpan*/;
    private standard: TimeChange;
    private daylight: TimeChange;
    /*fix constructor in StartTimeZonePropertyDefinition - <TimeZoneInfo>value*/
    InternalToJson(service: ExchangeService): any { throw new Error("MeetingTimeZone.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("MeetingTimeZone.ts - LoadFromJson : Not implemented."); }
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MeetingTimeZone.ts - ReadAttributesFromXml : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("MeetingTimeZone.ts - ToTimeZoneInfo : Not implemented."); }
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("MeetingTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MeetingTimeZone.ts - WriteAttributesToXml : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MeetingTimeZone.ts - WriteElementsToXml : Not implemented."); }
}


//}



