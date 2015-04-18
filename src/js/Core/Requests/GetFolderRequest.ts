
import GetFolderResponse = require("../Responses/GetFolderResponse");
import ExchangeService = require("../ExchangeService");
import ServiceErrorHandling = require("../../Enumerations/ServiceErrorHandling");

import GetFolderRequestBase = require("./GetFolderRequestBase");
class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse {
        return new GetFolderResponse(this.FolderIds._propGet(responseIndex).GetFolder(), this.PropertySet);
    }
}

 export = GetFolderRequest;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
