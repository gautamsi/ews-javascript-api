
class CompleteName extends ComplexProperty {
    Title: string;
    GivenName: string;
    MiddleName: string;
    Surname: string;
    Suffix: string;
    Initials: string;
    FullName: string;
    NickName: string;
    YomiGivenName: string;
    YomiSurname: string;
    private title: string;
    private givenName: string;
    private middleName: string;
    private surname: string;
    private suffix: string;
    private initials: string;
    private fullName: string;
    private nickname: string;
    private yomiGivenName: string;
    private yomiSurname: string;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
