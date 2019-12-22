import { AccountIsLockedException } from "../Exceptions/AccountIsLockedException";
import { ArgumentException } from "../Exceptions/ArgumentException";
import { DateTime, DateTimeKind } from "../DateTime";
import { Dictionary, DictionaryWithStringKey } from "../AltDictionary";
import { EwsLogging } from "./EwsLogging";
import { EwsServiceXmlWriter } from "./EwsServiceXmlWriter";
import { EwsTraceListener } from "../Misc/EwsTraceListener";
import { EwsUtilities } from "./EwsUtilities";
import { Exception } from "../Exceptions/Exception";
import { ExchangeCredentials } from "../Credentials/ExchangeCredentials";
import { ExchangeServerInfo } from "./ExchangeServerInfo";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { HttpStatusCode } from "../../lib/HttpStatusCode";
import { IEwsHttpWebRequestFactory } from "../Interfaces/IEwsHttpWebRequestFactory";
import { ITraceListener } from "../Interfaces/ITraceListener";
import { IXHROptions, IXHRApi } from "../Interfaces";
import { ResponseHeadersCapturedHandler, CustomXmlSerializationDelegate } from "../Misc/DelegateTypes";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceRequestUnauthorizedException } from "../Exceptions/ServiceRequestUnauthorizedException";
import { SoapFaultDetails } from "../Misc/SoapFaultDetails";
import { StringHelper, hasValue } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { TimeZoneDefinition } from "../ComplexProperties/TimeZones/TimeZoneDefinition";
import { TimeZoneInfo } from "../TimeZoneInfo";
import { TraceFlags } from "../Enumerations/TraceFlags";
import { Uri } from "../Uri";
import { XHRFactory } from "../XHRFactory";

/**
 * Represents an abstract binding to an Exchange Service.
 */
export abstract class ExchangeServiceBase {
  //#region const members
  // private static lockObj: any = new Object();
  private readonly requestedServerVersion: ExchangeVersion = ExchangeVersion.Exchange2013_SP1;

  /**
   * @internal Special HTTP status code that indicates that the account is locked.
   */
  static AccountIsLocked: HttpStatusCode = HttpStatusCode.Autodiscover_ContactAdmin;

  /**
   * The binary secret.
   */
  private static binarySecret: number[] = null;
  //#endregion

  //#region static members

  /**
   * Default UserAgent
   */
  private static defaultUserAgent: string = `ExchangeServicesClient/${EwsUtilities.BuildVersion}`;
  //#endregion

  //#region fields

  OnResponseHeadersCaptured: ResponseHeadersCapturedHandler;

  private credentials: ExchangeCredentials = null;
  // private useDefaultCredentials: boolean = false;
  private timeout: number = 100000;
  private traceEnabled: boolean = false;
  private sendClientLatencies: boolean = true;
  private traceFlags: TraceFlags = TraceFlags.All;
  private traceListener: ITraceListener = new EwsTraceListener();
  private preAuthenticate: boolean = false;
  private userAgent: string = ExchangeServiceBase.defaultUserAgent;
  private acceptGzipEncoding: boolean = true;
  private keepAlive: boolean = true;
  private connectionGroupName: string = null;
  private clientRequestId: string = null;
  private returnClientRequestId: boolean = false;
  // private cookieContainer: CookieContainer = new CookieContainer();
  protected timeZone: TimeZoneInfo = TimeZoneInfo.Local;
  private timeZoneDefinition: TimeZoneDefinition = null;
  private serverInfo: ExchangeServerInfo = null;
  // private webProxy: IWebProxy = null;
  private httpHeaders: Dictionary<string, string> = new DictionaryWithStringKey<string>();
  private httpResponseHeaders: Dictionary<string, string> = new DictionaryWithStringKey<string>();
  // private ewsHttpWebRequestFactory: IEwsHttpWebRequestFactory = new EwsHttpWebRequestFactory();
  private suppressXmlVersionHeader: boolean = false;

  //#endregion

  //#region event handlers

  /**
   * Provides an event that applications can implement to emit custom SOAP headers in requests that are sent to Exchange.
   * @event
   */
  OnSerializeCustomSoapHeaders: CustomXmlSerializationDelegate;
  //#endregion

  //#region Properties

  // /** 
  //  * Gets or sets the cookie container.
  // */
  // get CookieContainer(): CookieContainer {
  //   return this.cookieContainer;
  // }
  // set CookieContainer(value: CookieContainer) {
  //   this.cookieContainer = value;
  // }

  /**
   * @internal Gets the time zone this service is scoped to.
   */
  get TimeZone(): TimeZoneInfo {
    return this.timeZone;
  }

  /**
   * @internal Gets a time zone definition generated from the time zone info to which this service is scoped.
   */
  get TimeZoneDefinition(): TimeZoneDefinition {
    if (this.timeZoneDefinition === null) {
      this.timeZoneDefinition = new TimeZoneDefinition(this.TimeZone);
    }
    return this.timeZoneDefinition;
  }

  /**
   * Gets or sets a value indicating whether client latency info is push to server.
   */
  get SendClientLatencies(): boolean {
    return this.sendClientLatencies;
  }
  set SendClientLatencies(value: boolean) {
    this.sendClientLatencies = value;
  }

  /**
   * Gets or sets a value indicating whether tracing is enabled.
   */
  get TraceEnabled(): boolean {
    return this.traceEnabled;
  }
  set TraceEnabled(value: boolean) {
    this.traceEnabled = value;
    if (this.traceEnabled && this.traceListener === null) {
      this.traceListener = new EwsTraceListener();
    }
  }

  /**
   * Gets or sets the trace flags.
   */
  get TraceFlags(): TraceFlags {
    return this.traceFlags;
  }
  set TraceFlags(value: TraceFlags) {
    this.traceFlags = value;
  }

  /**
   * Gets or sets the trace listener.
   */
  get TraceListener(): ITraceListener {
    return this.traceListener;
  }
  set TraceListener(value: ITraceListener) {
    this.traceListener = value;
    this.traceEnabled = (value !== null);
  }

  /**
   * Gets or sets the credentials used to authenticate with the Exchange Web Services. Setting the Credentials property automatically sets the UseDefaultCredentials to false.
   */
  get Credentials(): ExchangeCredentials {
    return this.credentials;
  }
  set Credentials(value: ExchangeCredentials) {
    this.credentials = value;
    // this.useDefaultCredentials = false;
    // this.cookieContainer = new CookieContainer();
  }

  // /** // REF: No default credential in NodeJs
  //  * Gets or sets a value indicating whether the credentials of the user currently logged into Windows should be used to authenticate with the Exchange Web Services. Setting UseDefaultCredentials to true automatically sets the Credentials property to null.
  //  */
  // get UseDefaultCredentials(): boolean {
  //   return this.useDefaultCredentials;
  // }
  // set UseDefaultCredentials(value: boolean) {
  //   this.useDefaultCredentials = value;
  //   if (value) {
  //     this.credentials = null;
  //     // this.cookieContainer = new CookieContainer();
  //   }
  // }

  /**
   * Gets or sets the timeout used when sending HTTP requests and when receiving HTTP responses, in milliseconds. Defaults to 100000.
   */
  get Timeout(): number {
    return this.timeout;
  }
  set Timeout(value: number) {
    if (value < 1) {
      throw new ArgumentException(Strings.TimeoutMustBeGreaterThanZero);
    }
    this.timeout = value;
  }

  /**
   * Gets or sets a value that indicates whether HTTP pre-authentication should be performed.
   */
  get PreAuthenticate(): boolean {
    return this.preAuthenticate;
  }
  set PreAuthenticate(value: boolean) {
    this.preAuthenticate = value;
  }

  /**
   * Gets or sets a value indicating whether GZip compression encoding should be accepted.
   * @remarks This value will tell the server that the client is able to handle GZip compression encoding. The server will only send Gzip compressed content if it has been configured to do so.
   * @remarks {ewsjs} not used in ewsjs
   */
  get AcceptGzipEncoding(): boolean {
    return this.acceptGzipEncoding;
  }
  set AcceptGzipEncoding(value: boolean) {
    this.acceptGzipEncoding = value;
  }

  /**
   * Gets the requested server version.
   */
  get RequestedServerVersion(): ExchangeVersion {
    return this.requestedServerVersion;
  }

  /**
   * Gets or sets the user agent.
   */
  get UserAgent(): string {
    return this.userAgent;
  }
  set UserAgent(value: string) {
    this.userAgent = `${value} (${ExchangeServiceBase.defaultUserAgent})`;
  }

  /**
   * Gets information associated with the server that processed the last request. Will be null if no requests have been processed.
   */
  get ServerInfo(): ExchangeServerInfo {
    return this.serverInfo;
  }
  /** @internal set */
  set ServerInfo(value: ExchangeServerInfo) {
    this.serverInfo = value;
  }

  // /**
  //  * Gets or sets the web proxy that should be used when sending requests to EWS. Set this property to null to use the default web proxy.
  //  */
  // get WebProxy(): IWebProxy {
  //   return this.webProxy;
  // }
  // set WebProxy(value: IWebProxy) {
  //   this.webProxy = value;
  // }

  /**
   * Gets or sets if the request to the internet resource should contain a Connection HTTP header with the value Keep-alive
   */
  get KeepAlive(): boolean {
    return this.keepAlive;
  }
  set KeepAlive(value: boolean) {
    this.keepAlive = value;
  }

  /**
   * Gets or sets the name of the connection group for the request. 
   */
  get ConnectionGroupName(): string {
    return this.connectionGroupName;
  }
  set ConnectionGroupName(value: string) {
    this.connectionGroupName = value;
  }

  /**
   * Gets or sets the request id for the request.
   */
  get ClientRequestId(): string {
    return this.clientRequestId;
  }
  set ClientRequestId(value: string) {
    this.clientRequestId = value;
  }

  /**
   * Gets or sets a flag to indicate whether the client requires the server side to return the  request id.
   */
  get ReturnClientRequestId(): boolean {
    return this.returnClientRequestId;
  }
  set ReturnClientRequestId(value: boolean) {
    this.returnClientRequestId = value;
  }

  /**
   * Gets a collection of HTTP headers that will be sent with each request to EWS.
   */
  get HttpHeaders(): Dictionary<string, string> {
    return this.httpHeaders;
  }

  /**
   * Gets a collection of HTTP headers from the last response.
   */
  get HttpResponseHeaders(): Dictionary<string, string> {
    return this.httpResponseHeaders;
  }

  /**
   * @internal Gets the session key.
   */
  static get SessionKey(): number[] {
    // TODO: fix when implement Partner tokens
    // // this has to be computed only once.
    // lock(ExchangeServiceBase.lockObj)
    // {
    //   if (ExchangeServiceBase.binarySecret === null) {
    //     RandomNumberGenerator randomNumberGenerator = RandomNumberGenerator.Create();
    //     ExchangeServiceBase.binarySecret = new byte[256 / 8];
    //     randomNumberGenerator.GetNonZeroBytes(binarySecret);
    //   }

    //   return ExchangeServiceBase.binarySecret;
    // }
    return null;
  }

  // /**
  //  * Gets or sets the HTTP web request factory.
  //  */
  // get HttpWebRequestFactory(): IEwsHttpWebRequestFactory {
  //   return this.ewsHttpWebRequestFactory;
  // }
  // set HttpWebRequestFactory(value: IEwsHttpWebRequestFactory) {
  //   this.ewsHttpWebRequestFactory = ((value === null) ? new EwsHttpWebRequestFactory() : value);
  // }

  /**
   * @internal For testing: suppresses generation of the SOAP version header.
   */
  get SuppressXmlVersionHeader(): boolean {
    return this.suppressXmlVersionHeader;
  }
  set SuppressXmlVersionHeader(value: boolean) {
    this.suppressXmlVersionHeader = value;
  }
  //#endregion

  //#region EWS JavaScript code
  private xhrApi: IXHRApi = null;
  get XHRApi(): IXHRApi {
    return this.xhrApi || XHRFactory.XHRApi;
  }
  set XHRApi(xhrApi: IXHRApi) {
    this.xhrApi = xhrApi || XHRFactory.XHRApi;
  }
  //#endregion

  //#region Constructor

  /**
   * Initializes a new instance of the **ExchangeServiceBase** class.
   *
   */
  constructor();
  /**
   * Initializes a new instance of the **ExchangeServiceBase** class.
   *
   * @param   {TimeZoneInfo}   timeZone   The time zone to which the service is scoped.
   */
  constructor(timeZone: TimeZoneInfo);
  /**
   * Initializes a new instance of the **ExchangeServiceBase** class.
   *
   * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
   */
  constructor(requestedServerVersion: ExchangeVersion);
  /**
   * Initializes a new instance of the **ExchangeServiceBase** class.
   *
   * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
   * @param   {TimeZoneInfo}      timeZone                 The time zone to which the service is scoped.
   */
  constructor(requestedServerVersion: ExchangeVersion, timeZone: TimeZoneInfo);
  /**
   * @internal Initializes a new instance of the **ExchangeServiceBase** class.
   *
   * @param   {ExchangeServiceBase}   service                  The other service.
   */
  constructor(service: ExchangeServiceBase);
  /**
   * @internal Initializes a new instance of the **ExchangeServiceBase** class.
   *
   * @param   {ExchangeServiceBase}   service                  The other service.
   * @param   {ExchangeVersion}       requestedServerVersion   The requested server version.
   */
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
    if (argsLength === 2) {
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

    if (hasValue(timeZone)) {
      this.timeZone = timeZone;
      //this.useDefaultCredentials = true; //ref: no default credential in node.js
    }

    if (hasValue(service)) {
      // this.useDefaultCredentials = service.useDefaultCredentials;
      this.credentials = service.credentials;
      this.Credentials = service.Credentials;
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
      // this.ewsHttpWebRequestFactory = service.ewsHttpWebRequestFactory;
      this.xhrApi = service.xhrApi;
    }
  }
  //#endregion

  /**
   * @internal Converts the date time to universal date time string.
   *
   * @param   {DateTime}  value   The value.
   * @return  {string}    String representation of DateTime.
   */
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

  /**
   * @internal Converts xs:dateTime string with either "Z", "-00:00" bias, or "" suffixes to unspecified StartDate value ignoring the suffix.
  *
  * @param   {string}   value   The string value to parse.
  * @return  {DateTime} The parsed DateTime value.
  */
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

  /**
   * @internal Converts the universal date time string to local date time.
   *
   * @param   {string}    value   The value.
   * @return  {DateTime}  DateTime
   */
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

      if (this.TimeZone === TimeZoneInfo.Utc) {
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

  /**
   * @internal Calls the custom SOAP header serialization event handlers, if defined.
   *
   * @param   {EwsServiceXmlWriter}   writer   The XmlWriter to which to write the custom SOAP headers.
   */
  DoOnSerializeCustomSoapHeaders(writer: EwsServiceXmlWriter): void {
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
    if (httpWebResponse.status === ExchangeServiceBase.AccountIsLocked) {
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

  /**
   * @internal Determines whether tracing is enabled for specified trace flag(s).
   *
   * @param   {TraceFlags}  traceFlags   The trace flags.
   * @return  {boolean}     True if tracing is enabled for specified trace flag(s).
   */
  IsTraceEnabledFor(traceFlags: TraceFlags): boolean {
    return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0);
  }

  /**
  * @internal Creates an HttpWebRequest instance and initializes it with the appropriate parameters, based on the configuration of this service object.
  *
  * @param   {Uri}          url                  The URL that the HttpWebRequest should target.
  * @param   {boolean}      acceptGzipEncoding   If true, ask server for GZip compressed content.
  * @param   {boolean}      allowAutoRedirect    If true, redirection responses will be automatically followed.
  * @return  {IXHROptions}  A initialized instance of IXHROptions.
  */
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
      for (var key of this.HttpHeaders.Keys) {
        request.headers[key] = this.HttpHeaders.get(key);
      }
    }

    // REF: no default credential in NodeJs
    // request.UseDefaultCredentials = this.UseDefaultCredentials;
    // if (!this.UseDefaultCredentials) {
    var serviceCredentials = this.Credentials;
    if (serviceCredentials === null) {
      throw new ServiceLocalException(Strings.CredentialsRequired);
    }

    // Make sure that credentials have been authenticated if required
    //serviceCredentials.PreAuthenticate(); //todo: fix preauthenticate if possible

    // Apply credentials to the request
    serviceCredentials.PrepareWebRequest(request);
    // }
    // else
    //     debugger;

    this.httpResponseHeaders.clear();

    return request;
  }

  /**
   * @internal Processes an HTTP error response.
   *
   * @param   {XMLHttpRequest}  httpWebResponse   The HTTP web response.
   * @param   {Exception}       webException      The web exception.
   */
  abstract ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest/*IEwsHttpWebResponse*/, webException: Exception): void;

  /**
   * @internal Traces the HTTP response headers.
   *
   * @param   {TraceFlags}   traceType   Kind of trace entry.
   * @param   {XMLHttpRequest}   response    The response.
   */
  ProcessHttpResponseHeaders(traceType: TraceFlags, response: XMLHttpRequest): void {
    //TODO: implement tracing properly
    this.TraceHttpResponseHeaders(traceType, response);

    this.SaveHttpResponseHeaders(response);
  }

  /**
   * Save the HTTP response headers.
   *
   * @param   {Object}   response   The response headers
   */
  private SaveHttpResponseHeaders(response: any/* System.Net.WebHeaderCollection*/): any {
    //debug:
    this.httpResponseHeaders.clear();

    for (var key in response.headers || {}) {
      this.httpResponseHeaders.Add(key, response.headers[key]);
    }

    if (this.OnResponseHeadersCaptured != null) {
      this.OnResponseHeadersCaptured(this.httpResponseHeaders);
    }
  }

  /**
   * @internal 
   * @virtual
   */
  SetContentType(request: IXHROptions /*IEwsHttpWebRequest*/): void {
    request.headers["Content-Type"] = "text/xml; charset=utf-8";
    request.headers["Accept"] = "text/xml";
  }

  /**
   * @internal Sets the user agent to a custom value
   *
   * @param   {string}   userAgent   User agent string to set on the service
   */
  SetCustomUserAgent(userAgent: string): void {
    this.userAgent = userAgent;
  }

  /**
   * @internal Traces the HTTP request headers.
   *
   * @param   {TraceFlags}  traceType   Kind of trace entry.
   * @param   {IXHROptions} request     The request.
   */
  TraceHttpRequestHeaders(traceType: TraceFlags, request: IXHROptions): void {
    if (this.IsTraceEnabledFor(traceType)) {
      const traceTypeStr: string = TraceFlags[traceType];
      const headersAsString: string = EwsUtilities.FormatHttpRequestHeaders(request.headers);
      const logMessage: string = EwsUtilities.FormatLogMessage(traceTypeStr, headersAsString);
      this.TraceListener.Trace(traceTypeStr, logMessage);
    }
  }

  /**
   * Traces the HTTP response headers.
   *
   * @param   {TraceFlags}   traceType   Kind of trace entry.
   * @param   {XMLHttpRequest}   response    The response.
   */
  private TraceHttpResponseHeaders(traceType: TraceFlags, response: XMLHttpRequest): void {
    if (this.IsTraceEnabledFor(traceType)) {
      const traceTypeStr: string = TraceFlags[traceType];
      const headersAsString: string = EwsUtilities.FormatHttpResponseHeaders(response);
      const logMessage: string = EwsUtilities.FormatLogMessage(traceTypeStr, headersAsString);
      this.TraceListener.Trace(traceTypeStr, logMessage);
    }
  }

  /**
   * @internal Logs the specified string to the TraceListener if tracing is enabled.
   *
   * @param   {TraceFlags}  traceType   Kind of trace entry.
   * @param   {string}      logEntry    The entry to log.
   */
  TraceMessage(traceType: TraceFlags, logEntry: string): void { EwsLogging.Log(logEntry); /*throw new Error("Not implemented."); */ }

  /**
   * @internal Logs the specified XML to the TraceListener if tracing is enabled.
   *
   * @param   {TraceFlags}  traceType   Kind of trace entry.
   * @param   {XMLHttpRequest}         stream      The XMLHttpRequest containing XML.
   */
  TraceXml(traceType: TraceFlags, stream: XMLHttpRequest): void {
    if (this.IsTraceEnabledFor(traceType)) {
      const traceTypeStr: string = TraceFlags[traceType];
      const logMessage: string = EwsUtilities.FormatLogMessageWithXmlContent(traceTypeStr, stream);
      this.TraceListener.Trace(traceTypeStr, logMessage);
    }
  }

  /**
   * @internal Validates this instance.
   * @virtual
   */
  Validate(): void { }
}
