import {Uri} from "../Uri";
import {ITraceListener} from "../Interfaces/ITraceListener";
import {EwsXmlReader} from "../Core/EwsXmlReader";
import {WSSecurityBasedCredentials} from "./WSSecurityBasedCredentials";
export class WindowsLiveCredentials extends WSSecurityBasedCredentials {
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
    WindowsLiveUrl: Uri;
    IsAuthenticated: boolean;
    private windowsLiveId: string;
    private password: string;
    private windowsLiveUrl: Uri;
    private isAuthenticated: boolean;
    private traceEnabled: boolean;
    private traceListener: ITraceListener;
    static DefaultWindowsLiveUrl: Uri;
    EmitTokenRequest(uriForTokenEndpointReference: Uri): any { throw new Error("WindowsLiveCredentials.ts - EmitTokenRequest : Not implemented."); }
    MakeTokenRequestToWindowsLive(uriForTokenEndpointReference: Uri): any { throw new Error("WindowsLiveCredentials.ts - MakeTokenRequestToWindowsLive : Not implemented."); }
    //ParseWindowsLiveRSTResponseBody(rstResponse: EwsXmlReader): any { throw new Error("WindowsLiveCredentials.ts - ParseWindowsLiveRSTResponseBody : Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("WindowsLiveCredentials.ts - PrepareWebRequest : Not implemented.");}
    ProcessTokenResponse(response: any): any { throw new Error("WindowsLiveCredentials.ts - ProcessTokenResponse : Not implemented."); }
    //ReadWindowsLiveRSTResponseHeaders(rstResponse: EwsXmlReader): any { throw new Error("WindowsLiveCredentials.ts - ReadWindowsLiveRSTResponseHeaders : Not implemented."); }
    TraceResponse(response: any, memoryStream: any): any { throw new Error("WindowsLiveCredentials.ts - TraceResponse : Not implemented."); }
    TraceWebException(e: any): any { throw new Error("WindowsLiveCredentials.ts - TraceWebException : Not implemented."); }
}