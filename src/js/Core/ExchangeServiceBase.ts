import Strings = require("../Strings");
import TimeZoneDefinition = require("../ComplexProperties/TimeZones/TimeZoneDefinition");
import IEwsHttpWebRequestFactory = require("../Interfaces/IEwsHttpWebRequestFactory");
import ITraceListener = require("../Interfaces/ITraceListener");
import IEwsHttpWebResponse = require("../Interfaces/IEwsHttpWebResponse");
import IEwsHttpWebRequest = require("../Interfaces/IEwsHttpWebRequest");
/// <reference path="../system.enums.d.ts" />
import systemnet = require("System.Net");

import {EwsLogging} from "./EwsLogging";
import ExchangeCredentials = require("../Credentials/ExchangeCredentials");
import ExchangeServerInfo = require("./ExchangeServerInfo");

import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import TraceFlags = require("../Enumerations/TraceFlags");
import {IXHROptions} from "../Interfaces";

import {StringHelper} from "../ExtensionMethods";

import ServiceLocalException = require("../Exceptions/ServiceLocalException");

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
    private OnResponseHeadersCaptured: Function;// ResponseHeadersCapturedHandler;
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
        EwsLogging.Assert(
            writer != null,
            "ExchangeServiceBase.DoOnSerializeCustomSoapHeaders",
            "writer is null");

        if (this.OnSerializeCustomSoapHeaders != null) {
            this.OnSerializeCustomSoapHeaders(writer);
        }
    }
    InternalProcessHttpErrorResponse(httpWebResponse: IEwsHttpWebResponse, webException: any, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): any { throw new Error("Not implemented."); }
    IsTraceEnabledFor(traceFlags: TraceFlags): boolean { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); }
    PrepareHttpWebRequestForUrl(url: string/*System.Uri*/, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): IXHROptions /*IEwsHttpWebRequest*/ {
        // Verify that the protocol is something that we can handle
        if (url.toLowerCase().indexOf("https") != 0)// .Scheme != Uri.UriSchemeHttp) && (url.Scheme != Uri.UriSchemeHttps)) {
            throw new ServiceLocalException("unsupported web protocol" + url);//string.Format(Strings.UnsupportedWebProtocol, url.Scheme));

        var request: IXHROptions = { url: url };
        request.headers = {};


        //request.PreAuthenticate = this.PreAuthenticate;
        //request.Timeout = this.Timeout; //todo: implement this within IPromise

        this.SetContentType(request);

        request.type = "POST";
        
        //request.headers["User-Agent"] = this.UserAgent || ExchangeServiceBase.defaultUserAgent; //todo:fix -> Noje.js is refusing to set this unsafe header -//
        //request.AllowAutoRedirect = allowAutoRedirect;

        //todo: figure out next 3 lines
        //request.CookieContainer = this.CookieContainer;
        //request.KeepAlive = this.keepAlive;
        //request.ConnectionGroupName = this.connectionGroupName;

        if (acceptGzipEncoding) {
            request.headers["Accept-Encoding"] = "gzip,deflate";
        }

        if (!StringHelper.IsNullOrEmpty(this.clientRequestId)) {
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
                throw new ServiceLocalException(Strings.CredentialsRequired);
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
    SaveHttpResponseHeaders(headers: IXHROptions/* System.Net.WebHeaderCollection*/): any {
        debugger;
        this.httpResponseHeaders = {};

        for (var key in headers.headers) {
            this.httpResponseHeaders[key] = headers.headers[key];
        }

        if (this.OnResponseHeadersCaptured != null) {
            this.OnResponseHeadersCaptured(headers);
        }
    }
    SetContentType(request: IXHROptions /*IEwsHttpWebRequest*/): void {
        request.headers["Content-Type"] = "text/xml; charset=utf-8";
        request.headers["Accept"] = "text/xml";
    }
    SetCustomUserAgent(userAgent: string): any { /*this.userAgent = userAgent;*/ }
    TraceHttpRequestHeaders(traceType: TraceFlags, request: IEwsHttpWebRequest): any { throw new Error("Not implemented."); }
    TraceHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any { throw new Error("Not implemented."); }
    TraceMessage(traceType: TraceFlags, logEntry: string): any { EwsLogging.Log(logEntry); /*throw new Error("Not implemented."); */ }
    TraceXml(traceType: TraceFlags, stream: any): any { throw new Error("Not implemented."); }
    Validate(): any { }
}

export = ExchangeServiceBase;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
