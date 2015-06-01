import ClientAppMetadata = require("./ClientAppMetadata");
import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import SafeXmlDocument = require("../Security/SafeXmlDocument");
class ClientApp extends ComplexProperty {
    Manifest: XMLDocument;// System.Xml.XmlDocument;
    Metadata: ClientAppMetadata;
    ReadToXmlDocument(reader: EwsServiceXmlReader): SafeXmlDocument { throw new Error("ClientApp.ts - ReadToXmlDocument : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientApp.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ClientApp;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
