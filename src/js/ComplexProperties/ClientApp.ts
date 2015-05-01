   class ClientApp extends ComplexProperty {
        Manifest: XMLDocument;// System.Xml.XmlDocument;
        Metadata: ClientAppMetadata;
        ReadToXmlDocument(reader: EwsServiceXmlReader): SafeXmlDocument { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
