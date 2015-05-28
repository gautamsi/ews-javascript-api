import MoveCopyItemRequest = require("./MoveCopyItemRequest");
import ExchangeService = require("../ExchangeService");
import MoveCopyItemResponse = require("../Responses/MoveCopyItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class MoveItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { throw new Error("MoveItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MoveItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MoveItemRequest.ts - GetXmlElementName : Not implemented."); }
}
export = MoveItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
