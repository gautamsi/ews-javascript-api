import CreateRequest = require("./CreateRequest");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");

class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
    Folders: Folder[];//System.Collections.Generic.IEnumerable<Folder>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("CreateFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetObjectCollectionXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetObjectCollectionXmlElementName : Not implemented."); }
    GetParentFolderXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetParentFolderXmlElementName : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("CreateFolderRequest.ts - Validate : Not implemented."); }
}

export = CreateFolderRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
