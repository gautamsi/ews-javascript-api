import EmailAddress = require("../ComplexProperties/EmailAddress");
import Contact = require("../Core/ServiceObjects/Items/Contact");
import NameResolutionCollection = require("./NameResolutionCollection");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
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
