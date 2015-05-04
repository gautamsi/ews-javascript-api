import ExtractedEntity = require("./ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class EmailAddressEntity extends ExtractedEntity {
    EmailAddress: string;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = EmailAddressEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
