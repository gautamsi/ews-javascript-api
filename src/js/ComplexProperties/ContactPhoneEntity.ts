import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class ContactPhoneEntity extends ComplexProperty {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ContactPhoneEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ContactPhoneEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
