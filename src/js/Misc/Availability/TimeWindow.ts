import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class TimeWindow {
    StartTime: Date;
    EndTime: Date;
    Duration: any;//System.TimeSpan;
    private startTime: Date;
    private endTime: Date;
    InternalToJson(service: ExchangeService): JsonObject { throw new Error("TimeWindow.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("TimeWindow.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("TimeWindow.ts - LoadFromXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any, endTime: any): any { throw new Error("TimeWindow.ts - WriteToXml : Not implemented."); }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("TimeWindow.ts - WriteToXml : Not implemented.");}
    WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("TimeWindow.ts - WriteToXmlUnscopedDatesOnly : Not implemented."); }
}
export = TimeWindow;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
