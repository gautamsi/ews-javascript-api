import EwsXmlReader = require("../Core/EwsXmlReader");
import WSSecurityBasedCredentials = require("./WSSecurityBasedCredentials");
class WindowsLiveCredentials extends WSSecurityBasedCredentials {
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
    EmitTokenRequest(uriForTokenEndpointReference: /*System.Uri*/string): any { throw new Error("Not implemented."); }
    MakeTokenRequestToWindowsLive(uriForTokenEndpointReference: /*System.Uri*/string): any { throw new Error("Not implemented."); }
    ParseWindowsLiveRSTResponseBody(rstResponse: EwsXmlReader): any { throw new Error("Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("Not implemented.");}
    ProcessTokenResponse(response: any): any { throw new Error("Not implemented."); }
    ReadWindowsLiveRSTResponseHeaders(rstResponse: EwsXmlReader): any { throw new Error("Not implemented."); }
    TraceResponse(response: any, memoryStream: any): any { throw new Error("Not implemented."); }
    TraceWebException(e: any): any { throw new Error("Not implemented."); }
}
export = WindowsLiveCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
