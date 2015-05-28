import ExchangeCredentials = require("./ExchangeCredentials");
class WebCredentials extends ExchangeCredentials {
    Credentials: /*System.Net.ICredentials*/any;
    private credentials: /*System.Net.ICredentials*/any;
    AdjustUrl(url: /*System.Uri*/string): /*System.Uri*/string { throw new Error("WebCredentials.ts - AdjustUrl : Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("WebCredentials.ts - PrepareWebRequest : Not implemented.");}
}
export = WebCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
