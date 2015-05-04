import ServiceResponse = require("../Responses/ServiceResponse");
import MoveCopyRequest = require("./MoveCopyRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
    FolderIds: FolderIdWrapperList;
    private folderIds: FolderIdWrapperList;
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = MoveCopyFolderRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

