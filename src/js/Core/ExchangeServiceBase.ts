import { AccountIsLockedException } from "../Exceptions/AccountIsLockedException";
import { DateTime, DateTimeKind } from "../DateTime";
import { EwsLogging } from "./EwsLogging";
import { EwsUtilities } from "./EwsUtilities";
import { Exception } from "../Exceptions/Exception";
import { ExchangeCredentials } from "../Credentials/ExchangeCredentials";
import { ExchangeServerInfo } from "./ExchangeServerInfo";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { IEwsHttpWebRequestFactory } from "../Interfaces/IEwsHttpWebRequestFactory";
import { ITraceListener } from "../Interfaces/ITraceListener";
import { IXHROptions, IXHRApi } from "../Interfaces";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceRequestUnauthorizedException } from "../Exceptions/ServiceRequestUnauthorizedException";
import { SoapFaultDetails } from "../Misc/SoapFaultDetails";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { TimeZoneDefinition } from "../ComplexProperties/TimeZones/TimeZoneDefinition";
import { TimeZoneInfo } from "../TimeZoneInfo";
import { TraceFlags } from "../Enumerations/TraceFlags";
import { Uri } from "../Uri";
import { XHRFactory } from "../XHRFactory";

export class ExchangeServiceBase {

    static AccountIsLocked: any /*System.Net.systemnet.HttpStatusCode*/ = 456;

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
    get TimeZone(): TimeZoneInfo {
        return this.timeZone;
    }
    /**@internal */
    get TimeZoneDefinition(): TimeZoneDefinition {
        if (this.timeZoneDefinition == null) {
            this.timeZoneDefinition = new TimeZoneDefinition(this.TimeZone);
        }
        return this.timeZoneDefinition;
    }
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
    protected timeZone: TimeZoneInfo = TimeZoneInfo.Local;

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

    private xhrApi: IXHRApi = null;
    get XHRApi(): IXHRApi {
        return this.xhrApi || XHRFactory.XHRApi;
    }
    set XHRApi(xhrApi: IXHRApi) {
        this.xhrApi = xhrApi || XHRFactory.XHRApi;
    }

    constructor();
    constructor(timeZone: TimeZoneInfo);
    constructor(requestedServerVersion: ExchangeVersion);
    constructor(requestedServerVersion: ExchangeVersion, timeZone: TimeZoneInfo);
    constructor(service: ExchangeServiceBase);
    constructor(service: ExchangeServiceBase, requestedServerVersion: ExchangeVersion);

    constructor(
        versionServiceorTZ?: ExchangeVersion | ExchangeServiceBase | TimeZoneInfo,
        versionOrTZ?: ExchangeVersion | TimeZoneInfo
    ) {
        var argsLength = arguments.length;
        if (argsLength > 2) {
            throw new Error("ExchangeServiceBase.ts - ctor with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }
        var timeZone: TimeZoneInfo = null;
        var requestedServerVersion: ExchangeVersion = ExchangeVersion.Exchange2013_SP1;
        var service: ExchangeServiceBase = null;

        if (argsLength >= 1) {
            if (versionServiceorTZ instanceof TimeZoneInfo) {
                timeZone = versionServiceorTZ;
            }
            else if (versionServiceorTZ instanceof ExchangeServiceBase) {
                service = versionServiceorTZ;
            }
            else if (typeof versionServiceorTZ === 'number') {
                requestedServerVersion = versionServiceorTZ;
            }
        }
        if (argsLength == 2) {
            if (versionOrTZ instanceof TimeZoneInfo) {
                if (typeof versionServiceorTZ !== 'number') {
                    throw new Error("ExchangeServiceBase.ts - ctor with " + argsLength + " parameters - incorrect uses of parameter at 1st position, it must be ExchangeVersion when using TimeZoneInfo at 2nd place");
                }
                timeZone = versionOrTZ;
            }
            else if (typeof versionOrTZ === 'number') {
                if (!(versionServiceorTZ instanceof ExchangeServiceBase)) {
                    throw new Error("ExchangeServiceBase.ts - ctor with " + argsLength + " parameters - incorrect uses of parameter at 1st position, it must be ExchangeServiceBase when using ExchangeVersion at 2nd place");
                }
                requestedServerVersion = versionOrTZ;
            }
        }



        this.requestedServerVersion = requestedServerVersion;

        if (service !== null && typeof service !== 'undefined') {
            this.useDefaultCredentials = service.useDefaultCredentials;
            this.credentials = service.credentials;
            this.traceEnabled = service.traceEnabled;
            this.traceListener = service.traceListener;
            this.traceFlags = service.traceFlags;
            this.timeout = service.timeout;
            this.preAuthenticate = service.preAuthenticate;
            this.userAgent = service.userAgent;
            //this.acceptGzipEncoding = service.acceptGzipEncoding;
            this.keepAlive = service.keepAlive;
            this.connectionGroupName = service.connectionGroupName;
            this.timeZone = service.timeZone;
            this.httpHeaders = service.httpHeaders;
            this.ewsHttpWebRequestFactory = service.ewsHttpWebRequestFactory;
        }

        if (timeZone !== null && typeof timeZone !== 'undefined') {
            this.timeZone = timeZone;
            //this.useDefaultCredentials = true; //ref: no default credential in node.js
        }
    }


    ConvertDateTimeToUniversalDateTimeString(value: DateTime): string {
        var dateTime: DateTime;

        switch (value.Kind) {
            case DateTimeKind.Unspecified:
                dateTime = EwsUtilities.ConvertTime(
                    value,
                    this.TimeZone,
                    TimeZoneInfo.Utc);

                break;
            case DateTimeKind.Local:
                dateTime = EwsUtilities.ConvertTime(
                    value,
                    TimeZoneInfo.Local,
                    TimeZoneInfo.Utc);

                break;
            default:
                // The date is already in UTC, no need to convert it.
                dateTime = value;

                break;
        }
        //debug://todo:iso string should work
        return dateTime.ToISOString();// ISO string should work .ToString("yyyy-MM-ddTHH:mm:ss.fffZ", CultureInfo.InvariantCulture);
    }
    ConvertStartDateToUnspecifiedDateTime(value: string): DateTime {
        //EwsLogging.Log("ExchangeServiceBase.ConvConvertStartDateToUnspecifiedDateTime : DateTimeOffset not implemented, check date values")
        value = value.substring(0, 10); //info: //ref: for DateTimeOffset substitution, this is being called only from recurring datetime StartDate and 
        if (StringHelper.IsNullOrEmpty(value)) {
            return null;
        }
        else {
            return DateTime.Parse(value);

            //let dateTimeOffset:DateTimeOffset = DateTimeOffset.Parse(value, CultureInfo.InvariantCulture);

            // Return only the date part with the kind==Unspecified.
            //return dateTimeOffset.Date;
        }
    }
    ConvertUniversalDateTimeStringToLocalDateTime(value: string): DateTime {
        if (StringHelper.IsNullOrEmpty(value)) {
            return null;
        }
        else {
            // Assume an unbiased date/time is in UTC. Convert to UTC otherwise.
            //ref: //fix: hard convert to UTC date as no request contains TZ information.
            if (value.toLowerCase().indexOf("z") < 0 && ["+", "-"].indexOf(value.substr(19, 1)) < 0) {
                value += "Z";
            }

            var dateTime: DateTime = DateTime.Parse(
                value);
            // CultureInfo.InvariantCulture,
            // DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal);

            if (this.TimeZone == TimeZoneInfo.Utc) {
                // This returns a DateTime with Kind.Utc
                return dateTime;
            }
            else {
                var localTime: DateTime = EwsUtilities.ConvertTime(

                    dateTime,
                    TimeZoneInfo.Utc,
                    this.TimeZone);

                if (EwsUtilities.IsLocalTimeZone(this.TimeZone)) {
                    // This returns a DateTime with Kind.Local
                    return new DateTime(localTime.TotalMilliSeconds, DateTimeKind.Local);
                }
                else {
                    // This returns a DateTime with Kind.Unspecified
                    return localTime;
                }
            }
        }
    }
    DoOnSerializeCustomSoapHeaders(writer: any /*System.Xml.XmlWriter*/): void {
        EwsLogging.Assert(
            writer != null,
            "ExchangeServiceBase.DoOnSerializeCustomSoapHeaders",
            "writer is null");

        if (this.OnSerializeCustomSoapHeaders != null) {
            this.OnSerializeCustomSoapHeaders(writer);
        }
    }

    /**
     * @internal Processes an HTTP error response
     *
     * /remarks/    This method doesn't handle 500 ISE errors. This is handled by the caller since 500 ISE typically indicates that a SOAP fault has occurred and the handling of a SOAP fault is currently service specific.
     * @param   {XMLHttpRequest}    httpWebResponse            The HTTP web response.
     * @param   {SoapFaultDetails}  webException               The web exception.
     * @param   {TraceFlags}        responseHeadersTraceFlag   The trace flag for response headers.
     * @param   {TraceFlags}        responseTraceFlag          The trace flag for responses.
     * 
     */
    InternalProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, soapFault: SoapFaultDetails, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): void {
        EwsLogging.Assert(
            httpWebResponse.status != 500, // HttpStatusCode.InternalServerError,
            "ExchangeServiceBase.InternalProcessHttpErrorResponse",
            "InternalProcessHttpErrorResponse does not handle 500 ISE errors, the caller is supposed to handle this.");

        this.ProcessHttpResponseHeaders(responseHeadersTraceFlag, httpWebResponse);

        let exception: Exception = null;
        // Deal with new HTTP error code indicating that account is locked.
        // The "unlock" URL is returned as the status description in the response.
        if (httpWebResponse.status == ExchangeServiceBase.AccountIsLocked) {
            EwsLogging.Assert(false, "ExchangeServiceBase.InternalProcessHttpErrorResponse", "Please report back to ews-javascript-api with example or response XML for future improvements of this code.");

            let location: string = httpWebResponse.getResponseHeader("StatusDescription");

            let accountUnlockUrl: Uri = null;

            //if (Uri.IsWellFormedUriString(location, UriKind.Absolute)) {
            if (Uri.ParseString(location).authority) { //todo: implement better Url parsing in Uri.
                accountUnlockUrl = new Uri(location);
            }

            this.TraceMessage(responseTraceFlag, StringHelper.Format("Account is locked. Unlock URL is {0}", accountUnlockUrl.ToString()));

            exception = new AccountIsLockedException(
                StringHelper.Format(Strings.AccountIsLocked, accountUnlockUrl),
                accountUnlockUrl,
                null);
        }
        else if (httpWebResponse.status === 401 /*Unauthorized*/) {
            exception = new ServiceRequestUnauthorizedException("401 Unauthorized");
        }

        if (exception) {
            if (soapFault !== null) {
                soapFault.Exception = exception;
                if (StringHelper.IsNullOrEmpty(soapFault.message) && !StringHelper.IsNullOrEmpty(exception.message)) {
                    soapFault.message = exception.message;
                }
            }
            else {
                throw exception;
            }
        }
    }

    IsTraceEnabledFor(traceFlags: TraceFlags): boolean { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); }
    PrepareHttpWebRequestForUrl(url: Uri, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): IXHROptions /*IEwsHttpWebRequest*/ {
        // Verify that the protocol is something that we can handle
        if ((url.Scheme != Uri.UriSchemeHttp) && (url.Scheme != Uri.UriSchemeHttps)) {
            throw new ServiceLocalException("unsupported web protocol" + url);//string.Format(Strings.UnsupportedWebProtocol, url.Scheme));
        }
        var request: IXHROptions = { url: url.ToString() };
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
        // else
        //     debugger;

        this.httpResponseHeaders = {};

        return request;
    }
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest/*IEwsHttpWebResponse*/, webException: any): any { throw new Error("ExchangeServiceBase.ts - ProcessHttpErrorResponse : Not implemented."); }
    ProcessHttpResponseHeaders(traceType: TraceFlags, response: any): void {
        //todo: implement tracing
        // this.TraceHttpResponseHeaders(traceType, response);

        this.SaveHttpResponseHeaders(response.headers);
    }
    SaveHttpResponseHeaders(headers: IXHROptions/* System.Net.WebHeaderCollection*/): any {
        //debug:
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
    TraceHttpRequestHeaders(traceType: TraceFlags, request: any): any { throw new Error("ExchangeServiceBase.ts - TraceHttpRequestHeaders : Not implemented."); }
    TraceHttpResponseHeaders(traceType: TraceFlags, response: any): any { throw new Error("ExchangeServiceBase.ts - TraceHttpResponseHeaders : Not implemented."); }
    TraceMessage(traceType: TraceFlags, logEntry: string): any { EwsLogging.Log(logEntry); /*throw new Error("Not implemented."); */ }
    TraceXml(traceType: TraceFlags, stream: any): any { throw new Error("ExchangeServiceBase.ts - TraceXml : Not implemented."); }
    Validate(): any { }
}

