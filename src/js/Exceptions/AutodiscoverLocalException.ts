import Exception = require("./Exception");
import ServiceLocalException = require("./ServiceLocalException");
class AutodiscoverLocalException extends ServiceLocalException {

    constructor(message?: string, innerException?:Exception)
    {
        super(message,innerException);
    }
}
export = AutodiscoverLocalException;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
