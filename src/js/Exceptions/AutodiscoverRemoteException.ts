import ServiceRemoteException = require("./ServiceRemoteException");
import AutodiscoverError = require("../Autodiscover/AutodiscoverError");
class AutodiscoverRemoteException extends ServiceRemoteException {
    Error: AutodiscoverError;
    private error: AutodiscoverError;
}

export = AutodiscoverRemoteException;



//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
