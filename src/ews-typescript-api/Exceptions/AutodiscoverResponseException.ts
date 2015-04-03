class AutodiscoverResponseException extends ServiceRemoteException {
    ErrorCode: AutodiscoverErrorCode;
    private errorCode: AutodiscoverErrorCode;
}
export = AutodiscoverResponseException;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;