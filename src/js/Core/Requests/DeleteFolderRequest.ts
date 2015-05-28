import DeleteRequest = require("./DeleteRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import JsonObject = require("../JsonObject");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
    FolderIds: FolderIdWrapperList;
    private folderIds: FolderIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("DeleteFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("DeleteFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeleteFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DeleteFolderRequest.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(body: JsonObject): any { throw new Error("DeleteFolderRequest.ts - InternalToJson : Not implemented."); }
    Validate(): any { throw new Error("DeleteFolderRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteFolderRequest.ts - WriteElementsToXml : Not implemented."); }
}

export = DeleteFolderRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

