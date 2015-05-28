import MoveCopyItemRequest = require("./MoveCopyItemRequest");
import ExchangeService = require("../ExchangeService");
import MoveCopyItemResponse = require("../Responses/MoveCopyItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { throw new Error("CopyItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CopyItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CopyItemRequest.ts - GetXmlElementName : Not implemented."); }
}
export = CopyItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
