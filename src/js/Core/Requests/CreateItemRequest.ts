import Item = require("../ServiceObjects/Items/Item");
import CreateItemRequestBase = require("./CreateItemRequestBase");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("CreateItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    Validate(): any { throw new Error("CreateItemRequest.ts - Validate : Not implemented."); }
}
export = CreateItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
