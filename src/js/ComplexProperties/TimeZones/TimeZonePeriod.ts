import {ComplexProperty} from "../ComplexProperty";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class TimeZonePeriod extends ComplexProperty {
    static StandardPeriodId: string = "Std";
    static StandardPeriodName: string = "Standard";
    static DaylightPeriodId: string = "Dlt";
    static DaylightPeriodName: string = "Daylight";
    IsStandardPeriod: boolean;
    Bias: any /*System.TimeSpan*/;
    Name: string;
    Id: string;
    private bias: any /*System.TimeSpan*/;
    private name: string;
    private id: string;
    InternalToJson(service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeZonePeriod.ts - LoadFromXmlJsObject : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeZonePeriod.ts - ReadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZonePeriod.ts - WriteAttributesToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZonePeriod.ts - WriteToXml : Not implemented."); }
}


//}



