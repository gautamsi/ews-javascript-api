import XmlNamespace = require("../Enumerations/XmlNamespace");
import ItemId = require("./ItemId");
import MailboxType = require("../Enumerations/MailboxType");
import XmlElementNames = require("../Core/XmlElementNames");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ComplexProperty = require("./ComplexProperty");
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
    InternalToJson(service: ExchangeService): any { throw new Error("EmailAddress.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EmailAddress.ts - LoadFromJson : Not implemented."); }
    ToString(): string { throw new Error("EmailAddress.ts - ToString : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EmailAddress.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //todo: implement UpdateFromXmlJsObject
    
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {//xmlElementName: string, xmlNamespace?: XmlNamespace
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.Name:
                    this.name = jsObject[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.EmailAddress:
                    this.address = jsObject[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.RoutingType:
                    this.routingType = jsObject[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.MailboxType:
                    this.mailboxType = <MailboxType><any>MailboxType[jsObject[key]] //.ReadEnumValue<MailboxType>(key);
                    break;
                case XmlElementNames.ItemId:
                    this.id = new ItemId();
                    this.id.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmailAddress.ts - WriteElementsToXml : Not implemented."); }
}
export = EmailAddress;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
