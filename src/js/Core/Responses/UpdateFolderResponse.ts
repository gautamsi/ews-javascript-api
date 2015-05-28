import ServiceResponse = require("./ServiceResponse");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");

class UpdateFolderResponse extends ServiceResponse {
    private folder: Folder;
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { throw new Error("UpdateFolderResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("UpdateFolderResponse.ts - Loaded : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("UpdateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = UpdateFolderResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
