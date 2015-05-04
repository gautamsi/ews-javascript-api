import ExtractedEntity = require("./ExtractedEntity");
import ContactPhoneEntityCollection = require("./ContactPhoneEntityCollection");
import StringList = require("./StringList");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class ContactEntity extends ExtractedEntity {
    PersonName: string;
    BusinessName: string;
    PhoneNumbers: ContactPhoneEntityCollection;
    Urls: StringList;
    EmailAddresses: StringList;
    Addresses: StringList;
    ContactString: string;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = ContactEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
