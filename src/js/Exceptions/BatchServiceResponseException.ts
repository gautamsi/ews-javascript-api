import Exception = require("./Exception");
import ServiceRemoteException = require("./ServiceRemoteException");
class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    ServiceResponses: ServiceResponseCollection<TResponse>;
    private responses: ServiceResponseCollection<TResponse>;
}




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;



