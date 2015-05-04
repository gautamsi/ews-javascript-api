import MoveCopyItemRequest = require("./MoveCopyItemRequest");
import ExchangeService = require("../ExchangeService");
import MoveCopyItemResponse = require("../Responses/MoveCopyItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
}
export = CopyItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
