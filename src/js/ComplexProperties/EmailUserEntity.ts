import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class EmailUserEntity extends ComplexProperty {
    Name: string;
    UserId: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EmailUserEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = EmailUserEntity;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
