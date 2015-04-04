import Exception = require("./Exception");
import ServiceLocalException = require("./ServiceLocalException");
class ServiceXmlSerializationException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception) {
        //todo: implement base class
        super(message, innerException);

    }
}
export = ServiceXmlSerializationException;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

