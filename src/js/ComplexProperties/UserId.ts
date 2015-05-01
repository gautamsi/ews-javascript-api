
class UserId extends ComplexProperty {
    SID: string;
    PrimarySmtpAddress: string;
    DisplayName: string;
    StandardUser: StandardUser;
    private sID: string;
    private primarySmtpAddress: string;
    private displayName: string;
    private standardUser: StandardUser;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    IsValid(): boolean { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

