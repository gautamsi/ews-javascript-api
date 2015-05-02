class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;
    private phoneCall: PhoneCall;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetPhoneCallResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
