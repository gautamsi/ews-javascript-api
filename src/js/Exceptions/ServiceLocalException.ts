import Exception = require("./Exception");
class ServiceLocalException extends Exception {// extends System.Exception {
    constructor(message?: string, innerException?: Exception) {
        super(message, innerException);
        //this.message = message;
    }
}

export = ServiceLocalException;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;