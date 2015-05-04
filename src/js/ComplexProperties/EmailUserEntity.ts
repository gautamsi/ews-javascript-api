import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class EmailUserEntity extends ComplexProperty {
    Name: string;
    UserId: string;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
