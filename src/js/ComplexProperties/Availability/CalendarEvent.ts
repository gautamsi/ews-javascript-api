class CalendarEvent extends ComplexProperty {
    StartTime: Date;
    EndTime: Date;
    FreeBusyStatus: LegacyFreeBusyStatus;
    Details: CalendarEventDetails;
    private startTime: Date;
    private endTime: Date;
    private freeBusyStatus: LegacyFreeBusyStatus;
    private details: CalendarEventDetails;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
