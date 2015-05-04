import ComplexProperty = require("./ComplexProperty");
import MailboxType = require("../Enumerations/MailboxType");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class EmailAddress extends ComplexProperty {
    static SmtpRoutingType: string = "SMTP";
    Name: string;
    Address: string;
    RoutingType: string;
    MailboxType: MailboxType;
    Id: ItemId;
    private name: string;
    private address: string;
    private routingType: string;
    private mailboxType: MailboxType;
    private id: ItemId;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = EmailAddress;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
