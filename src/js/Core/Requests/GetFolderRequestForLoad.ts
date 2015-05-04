import GetFolderRequestBase = require("./GetFolderRequestBase");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
 class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
}
 export = GetFolderRequestForLoad;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
