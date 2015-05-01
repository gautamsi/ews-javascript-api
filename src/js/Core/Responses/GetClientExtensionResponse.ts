class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    RawMasterTableXml: string;
    private clientExtension: ClientExtension[];//System.Collections.ObjectModel.Collection<ClientExtension>;
    private rawMasterTableXml: string;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetClientExtensionResponse;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
