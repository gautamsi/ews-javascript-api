import ExtractedEntity = require("./ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class PhoneEntity extends ExtractedEntity {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("PhoneEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = PhoneEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
