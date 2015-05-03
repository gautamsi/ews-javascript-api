import ExchangeCredentials = require("./ExchangeCredentials");
class OAuthCredentials extends ExchangeCredentials {
    private token: string;
    private credentials: /*System.Net.ICredentials*/any;
    private static validTokenPattern: any;
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("Not implemented.");}
}
export = OAuthCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
