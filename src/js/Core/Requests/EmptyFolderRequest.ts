import DeleteRequest = require("./DeleteRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import JsonObject = require("../JsonObject");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class EmptyFolderRequest extends DeleteRequest<ServiceResponse> {
    FolderIds: FolderIdWrapperList;
    DeleteSubFolders: boolean;
    private folderIds: FolderIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("EmptyFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("EmptyFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("EmptyFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("EmptyFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("EmptyFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("EmptyFolderRequest.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(body: JsonObject): any { throw new Error("EmptyFolderRequest.ts - InternalToJson : Not implemented."); }
    Validate(): any { throw new Error("EmptyFolderRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmptyFolderRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmptyFolderRequest.ts - WriteElementsToXml : Not implemented."); }
}

export = EmptyFolderRequest;

    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
