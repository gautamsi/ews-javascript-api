import ITraceListener = require("../Interfaces/ITraceListener");
import EwsXmlReader = require("../Core/EwsXmlReader");
import WSSecurityBasedCredentials = require("./WSSecurityBasedCredentials");
class WindowsLiveCredentials extends WSSecurityBasedCredentials {
    static XmlEncNamespace: string = "http://www.w3.org/2001/04/xmlenc#";
    static WindowsLiveSoapNamespacePrefix: string = "S";
    static RequestSecurityTokenResponseCollectionElementName: string = "RequestSecurityTokenResponseCollection";
    static RequestSecurityTokenResponseElementName: string = "RequestSecurityTokenResponse";
    static EncryptedDataElementName: string = "EncryptedData";
    static PpElementName: string = "pp";
    static ReqstatusElementName: string = "reqstatus";
    static SuccessfulReqstatus: string = "0x0";
    static XmlSignatureReference: string = "_EWSTKREF";
    TraceEnabled: boolean;
    TraceListener: ITraceListener;
    WindowsLiveUrl: /*System.Uri*/string;
    IsAuthenticated: boolean;
    private windowsLiveId: string;
    private password: string;
    private windowsLiveUrl: /*System.Uri*/string;
    private isAuthenticated: boolean;
    private traceEnabled: boolean;
    private traceListener: ITraceListener;
    static DefaultWindowsLiveUrl: /*System.Uri*/string;
    EmitTokenRequest(uriForTokenEndpointReference: /*System.Uri*/string): any { throw new Error("WindowsLiveCredentials.ts - EmitTokenRequest : Not implemented."); }
    MakeTokenRequestToWindowsLive(uriForTokenEndpointReference: /*System.Uri*/string): any { throw new Error("WindowsLiveCredentials.ts - MakeTokenRequestToWindowsLive : Not implemented."); }
    ParseWindowsLiveRSTResponseBody(rstResponse: EwsXmlReader): any { throw new Error("WindowsLiveCredentials.ts - ParseWindowsLiveRSTResponseBody : Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("WindowsLiveCredentials.ts - PrepareWebRequest : Not implemented.");}
    ProcessTokenResponse(response: any): any { throw new Error("WindowsLiveCredentials.ts - ProcessTokenResponse : Not implemented."); }
    ReadWindowsLiveRSTResponseHeaders(rstResponse: EwsXmlReader): any { throw new Error("WindowsLiveCredentials.ts - ReadWindowsLiveRSTResponseHeaders : Not implemented."); }
    TraceResponse(response: any, memoryStream: any): any { throw new Error("WindowsLiveCredentials.ts - TraceResponse : Not implemented."); }
    TraceWebException(e: any): any { throw new Error("WindowsLiveCredentials.ts - TraceWebException : Not implemented."); }
}
export = WindowsLiveCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
