import MoveCopyFolderRequest = require("./MoveCopyFolderRequest");
import ExchangeService = require("../ExchangeService");
import MoveCopyFolderResponse = require("../Responses/MoveCopyFolderResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("MoveFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MoveFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MoveFolderRequest.ts - GetXmlElementName : Not implemented."); }
}

export = MoveFolderRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

