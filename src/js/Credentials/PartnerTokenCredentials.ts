import WSSecurityBasedCredentials = require("./WSSecurityBasedCredentials");
class PartnerTokenCredentials extends WSSecurityBasedCredentials {
    NeedSignature: boolean;
    private keyInfoNode: any;
    AdjustUrl(url: /*System.Uri*/string): /*System.Uri*/string { throw new Error("Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("Not implemented.");}
    Sign(memoryStream: any): any { throw new Error("Not implemented."); }
}
export = PartnerTokenCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
