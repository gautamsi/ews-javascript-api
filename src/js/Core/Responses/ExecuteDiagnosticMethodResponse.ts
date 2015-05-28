import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class ExecuteDiagnosticMethodResponse extends ServiceResponse {
    ReturnValue: any;// System.Xml.XmlDocument;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ExecuteDiagnosticMethodResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}

export = ExecuteDiagnosticMethodResponse;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
