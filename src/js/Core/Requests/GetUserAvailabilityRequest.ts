class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
    EmitTimeZoneHeader: boolean;
    IsFreeBusyViewRequested: boolean;
    IsSuggestionsViewRequested: boolean;
    Attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
    TimeWindow: TimeWindow;
    RequestedData: AvailabilityData;
    Options: AvailabilityOptions;
    private attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
    private timeWindow: TimeWindow;
    private requestedData: AvailabilityData;
    private options: AvailabilityOptions;
    Execute(): GetUserAvailabilityResults { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetUserAvailabilityRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
