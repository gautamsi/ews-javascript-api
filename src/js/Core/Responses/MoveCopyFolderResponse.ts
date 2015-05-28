import ServiceResponse = require("./ServiceResponse");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class MoveCopyFolderResponse extends ServiceResponse {
    Folder: Folder;
    private folder: Folder;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("MoveCopyFolderResponse.ts - GetObjectInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = MoveCopyFolderResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

