"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountIsLockedException_1 = require("../Exceptions/AccountIsLockedException");
var DateTime_1 = require("../DateTime");
var EwsLogging_1 = require("./EwsLogging");
var EwsUtilities_1 = require("./EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var ServiceRequestUnauthorizedException_1 = require("../Exceptions/ServiceRequestUnauthorizedException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var TimeZoneDefinition_1 = require("../ComplexProperties/TimeZones/TimeZoneDefinition");
var TimeZoneInfo_1 = require("../TimeZoneInfo");
var Uri_1 = require("../Uri");
var XHRFactory_1 = require("../XHRFactory");
var ExchangeServiceBase = /** @class */ (function () {
    function ExchangeServiceBase(versionServiceorTZ, versionOrTZ) {
        this.requestedServerVersion = ExchangeVersion_1.ExchangeVersion.Exchange2013_SP1;
        this.timeZone = TimeZoneInfo_1.TimeZoneInfo.Local;
        this.xhrApi = null;
        var argsLength = arguments.length;
        if (argsLength > 2) {
            throw new Error("ExchangeServiceBase.ts - ctor with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }
        var timeZone = null;
        var requestedServerVersion = ExchangeVersion_1.ExchangeVersion.Exchange2013_SP1;
        var service = null;
        if (argsLength >= 1) {
            if (versionServiceorTZ instanceof TimeZoneInfo_1.TimeZoneInfo) {
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
            if (versionOrTZ instanceof TimeZoneInfo_1.TimeZoneInfo) {
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
    Object.defineProperty(ExchangeServiceBase.prototype, "RequestedServerVersion", {
        get: function () { return this.requestedServerVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeServiceBase.prototype, "TimeZone", {
        get: function () {
            return this.timeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeServiceBase.prototype, "TimeZoneDefinition", {
        /**@internal */
        get: function () {
            if (this.timeZoneDefinition == null) {
                this.timeZoneDefinition = new TimeZoneDefinition_1.TimeZoneDefinition(this.TimeZone);
            }
            return this.timeZoneDefinition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeServiceBase.prototype, "XHRApi", {
        get: function () {
            return this.xhrApi || XHRFactory_1.XHRFactory.XHRApi;
        },
        set: function (xhrApi) {
            this.xhrApi = xhrApi || XHRFactory_1.XHRFactory.XHRApi;
        },
        enumerable: true,
        configurable: true
    });
    ExchangeServiceBase.prototype.ConvertDateTimeToUniversalDateTimeString = function (value) {
        var dateTime;
        switch (value.Kind) {
            case DateTime_1.DateTimeKind.Unspecified:
                dateTime = EwsUtilities_1.EwsUtilities.ConvertTime(value, this.TimeZone, TimeZoneInfo_1.TimeZoneInfo.Utc);
                break;
            case DateTime_1.DateTimeKind.Local:
                dateTime = EwsUtilities_1.EwsUtilities.ConvertTime(value, TimeZoneInfo_1.TimeZoneInfo.Local, TimeZoneInfo_1.TimeZoneInfo.Utc);
                break;
            default:
                // The date is already in UTC, no need to convert it.
                dateTime = value;
                break;
        }
        //debug://todo:iso string should work
        return dateTime.ToISOString(); // ISO string should work .ToString("yyyy-MM-ddTHH:mm:ss.fffZ", CultureInfo.InvariantCulture);
    };
    ExchangeServiceBase.prototype.ConvertStartDateToUnspecifiedDateTime = function (value) {
        //EwsLogging.Log("ExchangeServiceBase.ConvConvertStartDateToUnspecifiedDateTime : DateTimeOffset not implemented, check date values")
        value = value.substring(0, 10); //info: //ref: for DateTimeOffset substitution, this is being called only from recurring datetime StartDate and 
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(value)) {
            return null;
        }
        else {
            return DateTime_1.DateTime.Parse(value);
            //let dateTimeOffset:DateTimeOffset = DateTimeOffset.Parse(value, CultureInfo.InvariantCulture);
            // Return only the date part with the kind==Unspecified.
            //return dateTimeOffset.Date;
        }
    };
    ExchangeServiceBase.prototype.ConvertUniversalDateTimeStringToLocalDateTime = function (value) {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(value)) {
            return null;
        }
        else {
            // Assume an unbiased date/time is in UTC. Convert to UTC otherwise.
            //ref: //fix: hard convert to UTC date as no request contains TZ information.
            if (value.toLowerCase().indexOf("z") < 0 && ["+", "-"].indexOf(value.substr(19, 1)) < 0) {
                value += "Z";
            }
            var dateTime = DateTime_1.DateTime.Parse(value);
            // CultureInfo.InvariantCulture,
            // DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal);
            if (this.TimeZone == TimeZoneInfo_1.TimeZoneInfo.Utc) {
                // This returns a DateTime with Kind.Utc
                return dateTime;
            }
            else {
                var localTime = EwsUtilities_1.EwsUtilities.ConvertTime(dateTime, TimeZoneInfo_1.TimeZoneInfo.Utc, this.TimeZone);
                if (EwsUtilities_1.EwsUtilities.IsLocalTimeZone(this.TimeZone)) {
                    // This returns a DateTime with Kind.Local
                    return new DateTime_1.DateTime(localTime.TotalMilliSeconds, DateTime_1.DateTimeKind.Local);
                }
                else {
                    // This returns a DateTime with Kind.Unspecified
                    return localTime;
                }
            }
        }
    };
    ExchangeServiceBase.prototype.DoOnSerializeCustomSoapHeaders = function (writer /*System.Xml.XmlWriter*/) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "ExchangeServiceBase.DoOnSerializeCustomSoapHeaders", "writer is null");
        if (this.OnSerializeCustomSoapHeaders != null) {
            this.OnSerializeCustomSoapHeaders(writer);
        }
    };
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
    ExchangeServiceBase.prototype.InternalProcessHttpErrorResponse = function (httpWebResponse, soapFault, responseHeadersTraceFlag, responseTraceFlag) {
        EwsLogging_1.EwsLogging.Assert(httpWebResponse.status != 500, // HttpStatusCode.InternalServerError,
        "ExchangeServiceBase.InternalProcessHttpErrorResponse", "InternalProcessHttpErrorResponse does not handle 500 ISE errors, the caller is supposed to handle this.");
        this.ProcessHttpResponseHeaders(responseHeadersTraceFlag, httpWebResponse);
        var exception = null;
        // Deal with new HTTP error code indicating that account is locked.
        // The "unlock" URL is returned as the status description in the response.
        if (httpWebResponse.status == ExchangeServiceBase.AccountIsLocked) {
            EwsLogging_1.EwsLogging.Assert(false, "ExchangeServiceBase.InternalProcessHttpErrorResponse", "Please report back to ews-javascript-api with example or response XML for future improvements of this code.");
            var location_1 = httpWebResponse.getResponseHeader("StatusDescription");
            var accountUnlockUrl = null;
            //if (Uri.IsWellFormedUriString(location, UriKind.Absolute)) {
            if (Uri_1.Uri.ParseString(location_1).authority) { //todo: implement better Url parsing in Uri.
                accountUnlockUrl = new Uri_1.Uri(location_1);
            }
            this.TraceMessage(responseTraceFlag, ExtensionMethods_1.StringHelper.Format("Account is locked. Unlock URL is {0}", accountUnlockUrl.ToString()));
            exception = new AccountIsLockedException_1.AccountIsLockedException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.AccountIsLocked, accountUnlockUrl), accountUnlockUrl, null);
        }
        else if (httpWebResponse.status === 401 /*Unauthorized*/) {
            exception = new ServiceRequestUnauthorizedException_1.ServiceRequestUnauthorizedException("401 Unauthorized");
        }
        if (exception) {
            if (soapFault !== null) {
                soapFault.Exception = exception;
                if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(soapFault.message) && !ExtensionMethods_1.StringHelper.IsNullOrEmpty(exception.message)) {
                    soapFault.message = exception.message;
                }
            }
            else {
                throw exception;
            }
        }
    };
    ExchangeServiceBase.prototype.IsTraceEnabledFor = function (traceFlags) { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); };
    ExchangeServiceBase.prototype.PrepareHttpWebRequestForUrl = function (url, acceptGzipEncoding, allowAutoRedirect) {
        // Verify that the protocol is something that we can handle
        if ((url.Scheme != Uri_1.Uri.UriSchemeHttp) && (url.Scheme != Uri_1.Uri.UriSchemeHttps)) {
            throw new ServiceLocalException_1.ServiceLocalException("unsupported web protocol" + url); //string.Format(Strings.UnsupportedWebProtocol, url.Scheme));
        }
        var request = { url: url.ToString() };
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
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.clientRequestId)) {
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
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.CredentialsRequired);
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
    };
    ExchangeServiceBase.prototype.ProcessHttpErrorResponse = function (httpWebResponse /*IEwsHttpWebResponse*/, webException) { throw new Error("ExchangeServiceBase.ts - ProcessHttpErrorResponse : Not implemented."); };
    ExchangeServiceBase.prototype.ProcessHttpResponseHeaders = function (traceType, response) {
        //todo: implement tracing
        // this.TraceHttpResponseHeaders(traceType, response);
        this.SaveHttpResponseHeaders(response.Headers);
    };
    ExchangeServiceBase.prototype.SaveHttpResponseHeaders = function (headers /* System.Net.WebHeaderCollection*/) {
        //debug:
        this.httpResponseHeaders = {};
        for (var key in headers.headers) {
            this.httpResponseHeaders[key] = headers.headers[key];
        }
        if (this.OnResponseHeadersCaptured != null) {
            this.OnResponseHeadersCaptured(headers);
        }
    };
    ExchangeServiceBase.prototype.SetContentType = function (request /*IEwsHttpWebRequest*/) {
        request.headers["Content-Type"] = "text/xml; charset=utf-8";
        request.headers["Accept"] = "text/xml";
    };
    ExchangeServiceBase.prototype.SetCustomUserAgent = function (userAgent) { };
    ExchangeServiceBase.prototype.TraceHttpRequestHeaders = function (traceType, request) { throw new Error("ExchangeServiceBase.ts - TraceHttpRequestHeaders : Not implemented."); };
    ExchangeServiceBase.prototype.TraceHttpResponseHeaders = function (traceType, response) { throw new Error("ExchangeServiceBase.ts - TraceHttpResponseHeaders : Not implemented."); };
    ExchangeServiceBase.prototype.TraceMessage = function (traceType, logEntry) { EwsLogging_1.EwsLogging.Log(logEntry); /*throw new Error("Not implemented."); */ };
    ExchangeServiceBase.prototype.TraceXml = function (traceType, stream) { throw new Error("ExchangeServiceBase.ts - TraceXml : Not implemented."); };
    ExchangeServiceBase.prototype.Validate = function () { };
    ExchangeServiceBase.AccountIsLocked = 456;
    return ExchangeServiceBase;
}());
exports.ExchangeServiceBase = ExchangeServiceBase;
