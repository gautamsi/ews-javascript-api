import ServiceResponse = require("./ServiceResponse");
import FindFoldersResults = require("../../Search/FindFoldersResults");
import PropertySet = require("../PropertySet");
import ExchangeService = require("../ExchangeService");
import Folder = require("../ServiceObjects/Folders/Folder");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class FindFolderResponse extends ServiceResponse {
    Results: FindFoldersResults;
    private results: FindFoldersResults;
    private propertySet: PropertySet;
    CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("FindFolderResponse.ts - CreateFolderInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("FindFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("FindFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = FindFolderResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

