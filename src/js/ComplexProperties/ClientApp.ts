import {ClientAppMetadata} from "./ClientAppMetadata";
import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
//import {SafeXmlDocument} from "../Security/SafeXmlDocument";
export class ClientApp extends ComplexProperty {
    Manifest: XMLDocument;// System.Xml.XmlDocument;
    Metadata: ClientAppMetadata;
    ReadToXmlDocument(reader: EwsServiceXmlReader): any { throw new Error("ClientApp.ts - ReadToXmlDocument : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ClientApp.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


