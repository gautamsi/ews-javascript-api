import Exception = require("./Exception");
import ServiceLocalException = require("./ServiceLocalException");
class PropertyException extends ServiceLocalException {
    Name: string;
    //private name: string;
    constructor(message: string, name: string, innerException?: Exception) {
        super(message, innerException);
    }
}
export = PropertyException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
