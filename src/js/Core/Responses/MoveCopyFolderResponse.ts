class MoveCopyFolderResponse extends ServiceResponse {
    Folder: Folder;
    private folder: Folder;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = MoveCopyFolderResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

