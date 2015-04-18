import Exception = require("./Exception");
import ServiceRemoteException = require("./ServiceRemoteException");
class AccountIsLockedException extends ServiceRemoteException {
    AccountUnlockUrl: string;//System.Uri;
}

export = AccountIsLockedException;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


