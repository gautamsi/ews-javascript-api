
class PhoneCall extends ComplexProperty {
    private static SuccessfulResponseText: string = "OK";
    private static SuccessfulResponseCode: number = 200;
    State: PhoneCallState;
    ConnectionFailureCause: ConnectionFailureCause;
    SIPResponseText: string;
    SIPResponseCode: number;
    private service: ExchangeService;
    private state: PhoneCallState;
    private connectionFailureCause: ConnectionFailureCause;
    private sipResponseText: string;
    private sipResponseCode: number;
    private id: PhoneCallId;
    Disconnect(): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    Refresh(): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = PhoneCall;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
