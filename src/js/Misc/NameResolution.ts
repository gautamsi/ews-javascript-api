class NameResolution {
    Mailbox: EmailAddress;
    Contact: Contact;
    private owner: NameResolutionCollection;
    private mailbox: EmailAddress;
    private contact: Contact;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = NameResolution;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
