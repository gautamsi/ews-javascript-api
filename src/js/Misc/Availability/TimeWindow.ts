class TimeWindow {
    StartTime: Date;
    EndTime: Date;
    Duration: any;//System.TimeSpan;
    private startTime: Date;
    private endTime: Date;
    InternalToJson(service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
    LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any, endTime: any): any { throw new Error("Not implemented."); }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
    WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = TimeWindow;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
