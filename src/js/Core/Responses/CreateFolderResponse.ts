import ServiceResponse = require("./ServiceResponse");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");

class CreateFolderResponse extends ServiceResponse {
    private folder: Folder;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("CreateFolderResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("CreateFolderResponse.ts - Loaded : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("CreateFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("CreateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}

export = CreateFolderResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
