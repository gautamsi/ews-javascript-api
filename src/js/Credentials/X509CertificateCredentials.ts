import WSSecurityBasedCredentials = require("./WSSecurityBasedCredentials");
class X509CertificateCredentials extends WSSecurityBasedCredentials {
    private static BinarySecurityTokenFormat: string = "<wsse:BinarySecurityToken EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' wsu:Id='{0}'>{1}</wsse:BinarySecurityToken>";
    private static KeyInfoClauseFormat: string = "<wsse:SecurityTokenReference xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd' ><wsse:Reference URI='#{0}' ValueType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3' /></wsse:SecurityTokenReference>";
    private static WsSecurityX509CertPathSuffix: string = "/wssecurity/x509cert";
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
