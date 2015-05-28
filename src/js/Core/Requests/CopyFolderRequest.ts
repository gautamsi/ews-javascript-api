import MoveCopyFolderRequest = require("./MoveCopyFolderRequest");
import ExchangeService = require("../ExchangeService");
import MoveCopyFolderResponse = require("../Responses/MoveCopyFolderResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("CopyFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CopyFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CopyFolderRequest.ts - GetXmlElementName : Not implemented."); }
}

export = CopyFolderRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

