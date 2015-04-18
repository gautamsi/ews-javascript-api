/// <reference path="../system.enums.d.ts" />
import systemnet = require("System.Net");

import EwsUtilities = require("./EwsUtilities");
import ExchangeCredentials = require("../Credentials/ExchangeCredentials");
import ExchangeServerInfo = require("./ExchangeServerInfo");

import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import TraceFlags = require("../Enumerations/TraceFlags");


class ExchangeServiceBase {
    static AccountIsLocked: /*System.Net.*/systemnet.HttpStatusCode = 456;

    AcceptGzipEncoding: boolean;
    ClientRequestId: string;
    ConnectionGroupName: string;
    CookieContainer: any;//System.Net.CookieContainer;
    Credentials: ExchangeCredentials;
    HttpHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
    HttpResponseHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
    HttpWebRequestFactory: IEwsHttpWebRequestFactory;
    KeepAlive: boolean;
    PreAuthenticate: boolean;
    get RequestedServerVersion(): ExchangeVersion { return this.requestedServerVersion; }
    ReturnClientRequestId: boolean;
    SendClientLatencies: boolean;
    ServerInfo: ExchangeServerInfo;
    static SessionKey: any[];//System.Byte[];
    SuppressXmlVersionHeader: boolean;
    Timeout: number;
    TimeZone: any;//System.TimeZoneInfo;
    TimeZoneDefinition: TimeZoneDefinition;
    TraceEnabled: boolean;
    TraceFlags: TraceFlags;
    TraceListener: ITraceListener;
    UseDefaultCredentials: boolean;
    UserAgent: string;
    WebProxy: any;//System.Net.IWebProxy;

    //private acceptGzipEncoding: boolean;
    private clientRequestId: string;
    private connectionGroupName: string;
    //private cookieContainer: any;//System.Net.CookieContainer;
    private credentials: ExchangeCredentials;
    private ewsHttpWebRequestFactory: IEwsHttpWebRequestFactory;
    private httpHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
    private httpResponseHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
    private keepAlive: boolean;
    private OnResponseHeadersCaptured: ResponseHeadersCapturedHandler;
    private OnSerializeCustomSoapHeaders: Function;// CustomXmlSerializationDelegate;
    private preAuthenticate: boolean;
    private requestedServerVersion: ExchangeVersion = ExchangeVersion.Exchange2013_SP1;
    private returnClientRequestId: boolean;
    private sendClientLatencies: boolean;
    private serverInfo: ExchangeServerInfo;
    private timeout: number;
    private timeZone: any;//System.TimeZoneInfo;
    private timeZoneDefinition: TimeZoneDefinition;
    private traceEnabled: boolean;
    private traceFlags: TraceFlags;
    private traceListener: ITraceListener;
    private useDefaultCredentials: boolean;
    private userAgent: string;
    private webProxy: any;//System.Net.IWebProxy;

    private static lockObj: any;
    private static binarySecret: any;//System.Byte[];
    private static defaultUserAgent: string;

    constructor(requestedServerVersion: ExchangeVersion) {
        this.requestedServerVersion = requestedServerVersion;
    }


    ConvertDateTimeToUniversalDateTimeString(value: Date): string { throw new Error("Not implemented."); }
    ConvertStartDateToUnspecifiedDateTime(value: string): Date { throw new Error("Not implemented."); }
    ConvertUniversalDateTimeStringToLocalDateTime(value: string): Date { throw new Error("Not implemented."); }
    DoOnSerializeCustomSoapHeaders(writer: any /*System.Xml.XmlWriter*/): void {
        EwsUtilities.Assert(
            writer != null,
            "ExchangeServiceBase.DoOnSerializeCustomSoapHeaders",
            "writer is null");

        if (this.OnSerializeCustomSoapHeaders != null) {
            this.OnSerializeCustomSoapHeaders(writer);
        }
    }
    InternalProcessHttpErrorResponse(httpWebResponse: IEwsHttpWebResponse, webException: any, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): any { throw new Error("Not implemented."); }
    IsTraceEnabledFor(traceFlags: TraceFlags): boolean { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); }
    PrepareHttpWebRequestForUrl(url: string/*System.Uri*/, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): WinJS.IXHROptions /*IEwsHttpWebRequest*/ {
        // Verify that the protocol is something that we can handle
        if (url.toLowerCase().indexOf("https") != 0)// .Scheme != Uri.UriSchemeHttp) && (url.Scheme != Uri.UriSchemeHttps)) {
            throw new ServiceLocalException("unsupported web protocol" + url);//string.Format(Strings.UnsupportedWebProtocol, url.Scheme));

        var request: WinJS.IXHROptions = { url: url };
        request.headers = {};


        //request.PreAuthenticate = this.PreAuthenticate;
        //request.Timeout = this.Timeout; //todo: implement this within WinJS.Promise

        this.SetContentType(request);

        request.type = "POST";
        request.headers["User-Agent"] = this.UserAgent || ExchangeServiceBase.defaultUserAgent;
        //request.AllowAutoRedirect = allowAutoRedirect;

        //todo: figure out next 3 lines
        //request.CookieContainer = this.CookieContainer;
        //request.KeepAlive = this.keepAlive;
        //request.ConnectionGroupName = this.connectionGroupName;

        if (acceptGzipEncoding) {
            request.headers["Accept-Encoding"] = "gzip,deflate";
        }

        if (!string.IsNullOrEmpty(this.clientRequestId)) {
            request.headers["client-request-id"] = this.clientRequestId;
            if (this.returnClientRequestId) {
                request.headers["return-client-request-id"] = "true";
            }
        }

        //if (this.webProxy != null) {
        //    request.Proxy = this.webProxy;
        //}

        if (this.HttpHeaders) {
            for (var kv in this.HttpHeaders) {
                request.headers[kv] = this.HttpHeaders[kv];
            }
        }

        //request.UseDefaultCredentials = this.UseDefaultCredentials;
        if (!this.UseDefaultCredentials) {
            var serviceCredentials = this.Credentials;
            if (serviceCredentials == null) {
                throw new ServiceLocalException("credential is required"/*Strings.CredentialsRequired*/);
            }

            // Make sure that credentials have been authenticated if required
            //serviceCredentials.PreAuthenticate(); //todo: fix preauthenticate if possible

            // Apply credentials to the request
            serviceCredentials.PrepareWebRequest(request);
        }
        else debugger;

        this.httpResponseHeaders = {};

        return request;
    }
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest/*IEwsHttpWebResponse*/, webException: any): any { throw new Error("Not implemented."); }
    ProcessHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any { throw new Error("Not implemented."); }
    SaveHttpResponseHeaders(headers: any/* System.Net.WebHeaderCollection*/): any { throw new Error("Not implemented."); }
    SetContentType(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): void {
        request.headers["Content-Type"] = "text/xml; charset=utf-8";
        request.headers["Accept"] = "text/xml";
    }
    SetCustomUserAgent(userAgent: string): any { throw new Error("Not implemented."); }
    TraceHttpRequestHeaders(traceType: TraceFlags, request: IEwsHttpWebRequest): any { throw new Error("Not implemented."); }
    TraceHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any { throw new Error("Not implemented."); }
    TraceMessage(traceType: TraceFlags, logEntry: string): any { console.log(logEntry); /*throw new Error("Not implemented."); */}
    TraceXml(traceType: TraceFlags, stream: any): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
}

export = ExchangeServiceBase;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
