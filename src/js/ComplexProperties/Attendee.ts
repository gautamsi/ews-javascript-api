class Attendee extends EmailAddress {
    ResponseType: MeetingResponseType;
    LastResponseTime: Date;
    private responseType: MeetingResponseType;
    private lastResponseTime: Date;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}





//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
