import ExtractedEntity = require("./ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class PhoneEntity extends ExtractedEntity {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = PhoneEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
