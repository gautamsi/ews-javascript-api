import GetItemRequestBase = require("./GetItemRequestBase");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
}
export = GetItemRequestForLoad;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
