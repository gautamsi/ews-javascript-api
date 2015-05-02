class ResolveNamesResponse extends ServiceResponse {
    Resolutions: NameResolutionCollection;
    private resolutions: NameResolutionCollection;
    InternalThrowIfNecessary(): any { throw new Error("Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = ResolveNamesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
