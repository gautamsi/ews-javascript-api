import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class ClientAppMetadata extends ComplexProperty {
    EndNodeUrl: string;
    ActionUrl: string;
    AppStatus: string;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientAppMetadata.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ClientAppMetadata;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
