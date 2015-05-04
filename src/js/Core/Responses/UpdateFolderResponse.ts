import ServiceResponse = require("./ServiceResponse");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");

class UpdateFolderResponse extends ServiceResponse {
    private folder: Folder;
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
    Loaded(): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = UpdateFolderResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
