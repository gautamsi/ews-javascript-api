import WSSecurityBasedCredentials = require("./WSSecurityBasedCredentials");
class X509CertificateCredentials extends WSSecurityBasedCredentials {
    NeedSignature: boolean;
    private certificate: any;
    private keyInfoClause: any;
    AdjustUrl(url: /*System.Uri*/string): /*System.Uri*/string { throw new Error("Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("Not implemented.");}
    Sign(memoryStream: any): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
}
export = X509CertificateCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
