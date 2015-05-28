import ServiceObject = require("../ServiceObjects/ServiceObject");
import CreateItemRequestBase = require("./CreateItemRequestBase");
import ExchangeService = require("../ExchangeService");
import CreateResponseObjectResponse = require("../Responses/CreateResponseObjectResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse { throw new Error("CreateResponseObjectRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateResponseObjectRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
}
export = CreateResponseObjectRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
