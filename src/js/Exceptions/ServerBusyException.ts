
import Exception = require("./Exception");
import ServiceResponseException = require("./ServiceResponseException");
class ServerBusyException extends ServiceResponseException {
    private static BackOffMillisecondsKey: string = "BackOffMilliseconds";
    BackOffMilliseconds: number;
    private backOffMilliseconds: number;
}
export = ServerBusyException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


