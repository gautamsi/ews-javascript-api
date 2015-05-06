import EwsXmlReader = require("../Core/EwsXmlReader");
 class AutodiscoverError {
    Time: string;
    Id: string;
    ErrorCode: number;
    Message: string;
    DebugData: string;
    private time: string;
    private id: string;
    private errorCode: number;
    private message: string;
    private debugData: string;
    Parse(reader: EwsXmlReader): AutodiscoverError { throw new Error("Not implemented."); }
}
export = AutodiscoverError;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
