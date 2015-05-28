import GetItemRequestBase = require("./GetItemRequestBase");
import ExchangeService = require("../ExchangeService");
import GetItemResponse = require("../Responses/GetItemResponse");
class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse { throw new Error("GetItemRequest.ts - CreateServiceResponse : Not implemented."); }
}
export = GetItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
