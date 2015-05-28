import ClientExtension = require("../../ComplexProperties/ClientExtension");
import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    RawMasterTableXml: string;
    private clientExtension: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    private rawMasterTableXml: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetClientExtensionResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = GetClientExtensionResponse;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
