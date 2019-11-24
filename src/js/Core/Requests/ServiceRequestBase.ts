import { ArgumentNullException } from "../../Exceptions/ArgumentException";
import { DateTimePrecision } from "../../Enumerations/DateTimePrecision";
import { EwsLogging } from "../EwsLogging";
import { EwsServiceXmlReader } from "../EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeServerInfo } from "../ExchangeServerInfo";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { IXHROptions } from "../../Interfaces";
import { Promise } from "../../Promise"
import { RenderingMode } from "../../Enumerations/RenderingMode";
import { ServiceResponse } from "../Responses/ServiceResponse";
import { ServiceVersionException } from "../../Exceptions/ServiceVersionException";
import { SoapFaultDetails } from "../../Misc/SoapFaultDetails";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { HttpStatusCode } from "../../../lib/HttpStatusCode";

/**
 * @internal Represents an abstract service request.
 */
export abstract class ServiceRequestBase {

  //#region private static and const
  //ref:this may be from newer code overall i am using, update when updating from ews base code library //todo:

  /**
   * The two contants below are used to set the AnchorMailbox and ExplicitLogonUser values in the request header.
   * 
   * /remarks/    Note: Setting this values will route the request directly to the backend hosting the AnchorMailbox. These headers should be used primarily for UnifiedGroup scenario where a request needs to be routed directly to the group mailbox versus the user mailbox.
   */
  protected static AnchorMailboxHeaderName: string = "X-AnchorMailbox";
  protected static ExplicitLogonUserHeaderName: string = "X-OWA-ExplicitLogonUser";

  protected static RequestIdResponseHeaders: string[] = ["RequestId", "request-id"];
  protected static XMLSchemaNamespace: string = "http://www.w3.org/2001/XMLSchema";
  protected static XMLSchemaInstanceNamespace: string = "http://www.w3.org/2001/XMLSchema-instance";
  protected static ClientStatisticsRequestHeader: string = "X-ClientStatistics";

  /**
   * Maintains the collection of client side statistics for requests already completed
   */
  protected static clientStatisticsCache: string[] = [];

  private service: ExchangeService;

  /**
   * @internal Gets the service.
   * 
   * @value   The service.
   */
  get Service(): ExchangeService {
    return this.service;
  }
  //#endregion

  /**
   * @internal Gets or sets the anchor mailbox associated with the request
   *
   * /remarks/    Setting this value will add special headers to the request which in turn will route the request directly to the mailbox server against which the request is to be executed.
   */
  AnchorMailbox: string = null;

  /** ews-javascript-api specific */
  private SoapFaultDetails: SoapFaultDetails;


  /**
   *  @internal Initializes a new instance of the **ServiceRequestBase** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    if (service == null) {
      throw new ArgumentNullException("service");
    }
    this.service = service;
    this.ThrowIfNotSupportedByRequestedServerVersion();
  }

  // #region abstract Methods for subclasses to override

  /**
   *  @internal Gets a value indicating whether the TimeZoneContext SOAP header should be eimitted.
   * 
   * @value   true if the time zone should be emitted; otherwise, false.
   */
  get EmitTimeZoneHeader(): boolean {
    return false;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name,
   */
  GetXmlElementName(): string { throw new Error("abstract method, must override"); }

  /**
   * @internal Gets the minimum server version required to process this request.
   *
   * @return  {ExchangeVersion}      Exchange server version.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("abstract method, must override"); }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name,
   */
  GetResponseXmlElementName(): string { throw new Error("abstract method, must override"); }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    var serviceResponse: ServiceResponse = new ServiceResponse();
    serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
    return serviceResponse;
  }

  /**
   * @internal Writes XML elements.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract method, must override"); }

  //#endregion

  /**
   * @internal Allows the subclasses to add their own header information
   *
   * @param   {any}   webHeaderCollection   The HTTP request headers
   */
  AddHeaders(webHeaderCollection: any /*WebHeaderCollection*/): void {
    if (!StringHelper.IsNullOrEmpty(this.AnchorMailbox)) {
      webHeaderCollection.Set(ServiceRequestBase.AnchorMailboxHeaderName, this.AnchorMailbox);
      webHeaderCollection.Set(ServiceRequestBase.ExplicitLogonUserHeaderName, this.AnchorMailbox);
    }
  }

  //BuildEwsHttpWebRequest(): IEwsHttpWebRequest { throw new Error("Could not implemented."); }
  BuildXHR(): IXHROptions {

    var request = this.Service.PrepareHttpWebRequest(this.GetXmlElementName());
    //try
    //{
    //    IEwsHttpWebRequest request = this.Service.PrepareHttpWebRequest(this.GetXmlElementName());

    //    this.Service.TraceHttpRequestHeaders(TraceFlags.EwsRequestHttpHeaders, request);

    //    bool needSignature = this.Service.Credentials != null && this.Service.Credentials.NeedSignature;
    //    bool needTrace = this.Service.IsTraceEnabledFor(TraceFlags.EwsRequest);

    //    // If tracing is enabled, we generate the request in-memory so that we
    //    // can pass it along to the ITraceListener. Then we copy the stream to
    //    // the request stream.
    //    if (needSignature || needTrace) {
    //        this.TraceAndEmitRequest(request, needSignature, needTrace);
    //    }
    //    else {
    this.EmitRequest(request);
    //    }

    return request;
    //}
    //catch (WebException ex)
    //{
    //    if (ex.Status == WebExceptionStatus.ProtocolError && ex.Response != null) {
    //        this.ProcessWebException(ex);
    //    }

    //    // Wrap exception if the above code block didn't throw
    //    throw new ServiceRequestException(string.Format(Strings.ServiceRequestFailed, ex.Message), ex);
    //}
    //catch (IOException e)
    //{
    //    // Wrap exception.
    //    throw new ServiceRequestException(string.Format(Strings.ServiceRequestFailed, e.Message), e);
    //}
  }
  BuildResponseObjectFromJson(jsObject: any): any {
    if (jsObject[XmlElementNames.SOAPHeaderElementName]) {
      this.ReadSoapHeader(jsObject[XmlElementNames.SOAPHeaderElementName]);
    }

    return this.ParseResponse(jsObject[XmlElementNames.SOAPBodyElementName]);
  }
  //CreateJsonHeaders(): JsonObject { throw new Error("Could not implemented."); }
  //CreateJsonRequest(): JsonObject { throw new Error("Could not implemented."); }

  /**
   * Emits the request.
   *
   * @param   {IXHROptions}   request   The request.
   */
  private EmitRequest(request: IXHROptions): void {
    if (this.Service.RenderingMethod === RenderingMode.Xml) {

      var writer: EwsServiceXmlWriter = new EwsServiceXmlWriter(this.service);//writer.Service
      this.WriteToXml(writer);
      request.data = writer.GetXML();

    }
    else if (this.Service.RenderingMethod === RenderingMode.JSON) {
      //JsonObject requestObject = this.CreateJsonRequest();

      //using(Stream serviceRequestStream = this.GetWebRequestStream(request))
      //{
      //    requestObject.SerializeToJson(serviceRequestStream);
      //}
      //debugger;
    }
  }
  //EndGetEwsHttpWebResponse(request: IEwsHttpWebRequest, asyncResult: any /*System.IAsyncResult*/): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
  GetEwsHttpWebResponse(request: IXHROptions /*IEwsHttpWebRequest*/): Promise<XMLHttpRequest> { return this.service.XHRApi.xhr(request); }

  /**
   * Gets string representation of requested server version.
   *
   * /remarks/    In order to support E12 RTM servers, ExchangeService has another flag indicating that we should use "Exchange2007" as the server version string rather than Exchange2007_SP1.
   * @return  {string}      String representation of requested server version.
   */
  private GetRequestedServiceVersionString(): string {
    if (this.Service.Exchange2007CompatibilityMode && this.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
      return "Exchange2007";
    }
    else {
      return ExchangeVersion[this.Service.RequestedServerVersion];
    }
  }
  //GetResponseStream(response: IEwsHttpWebResponse): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
  //GetResponseStream(response: IEwsHttpWebResponse, readTimeout: number):any /*System.IO.Stream*/{ throw new Error("ServiceRequestBase.ts - GetResponseStream : Not implemented.");}
  //GetWebRequestStream(request: IEwsHttpWebRequest): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }

  /**
   * Processes the web exception.
   *
   * @param   {XMLHttpRequest}   webException   The web response XHR object.
   * @return  {SoapFaultDetails}      Soap fault details if any.
   */
  protected ProcessWebException(webException: XMLHttpRequest): SoapFaultDetails {
    if (webException instanceof SoapFaultDetails) {
      return webException
    }
    if (webException) {
      //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
      var soapFaultDetails: SoapFaultDetails = null;

      if (webException.status == HttpStatusCode.InternalServerError) {
        //this.Service.ProcessHttpResponseHeaders(TraceFlags.EwsResponseHttpHeaders, httpWebResponse);

        // If tracing is enabled, we read the entire response into a MemoryStream so that we
        // can pass it along to the ITraceListener. Then we parse the response from the
        // MemoryStream.
        //if (this.Service.IsTraceEnabledFor(TraceFlags.EwsResponse)) {
        //    using(MemoryStream memoryStream = new MemoryStream())
        //    {
        //        using(Stream serviceResponseStream = ServiceRequestBase.GetResponseStream(httpWebResponse))
        //        {
        //            // Copy response to in-memory stream and reset position to start.
        //            EwsUtilities.CopyStream(serviceResponseStream, memoryStream);
        //            memoryStream.Position = 0;
        //        }

        //        if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {
        //            this.TraceResponseXml(httpWebResponse, memoryStream);

        //            EwsServiceXmlReader reader = new EwsServiceXmlReader(memoryStream, this.Service);
        //            soapFaultDetails = this.ReadSoapFault(reader);
        //        }
        //        else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
        //            this.TraceResponseJson(httpWebResponse, memoryStream);

        //            try {
        //                JsonObject jsonSoapFault = new JsonParser(memoryStream).Parse();
        //                soapFaultDetails = this.ReadSoapFault(jsonSoapFault);
        //            }
        //            catch (ServiceJsonDeserializationException) {
        //                // If no valid JSON response was returned, just return null SoapFault details
        //            }
        //        }
        //        else {
        //            throw new InvalidOperationException();
        //        }
        //    }
        //}
        //else {
        //    using(Stream stream = ServiceRequestBase.GetResponseStream(httpWebResponse))
        //    {
        //        if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {
        //            EwsServiceXmlReader reader = new EwsServiceXmlReader(stream, this.Service);
        //            soapFaultDetails = this.ReadSoapFault(reader);
        //        }
        //        else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
        //            try {
        //                JsonObject jsonSoapFault = new JsonParser(stream).Parse();
        //                soapFaultDetails = this.ReadSoapFault(jsonSoapFault);
        //            }
        //            catch (ServiceJsonDeserializationException) {
        //                // If no valid JSON response was returned, just return null SoapFault details
        //            }
        //        }
        //        else {
        //            throw new InvalidOperationException();
        //        }
        //    }
        //}
        //todo: fix tracing and other operations here
        var reader = new EwsServiceXmlReader(webException.responseText, this.Service);
        soapFaultDetails = this.ReadSoapFault(reader.JsObject);

        if (soapFaultDetails != null) {
          //todo: implement soap fault error throw
          this.SoapFaultDetails = soapFaultDetails;
          soapFaultDetails.HttpStatusCode = webException.status;

          //    switch (soapFaultDetails.ResponseCode) {
          //        case ServiceError.ErrorInvalidServerVersion:
          //            throw new Exceptions.ServiceVersionException(Strings.ServerVersionNotSupported);

          //        case ServiceError.ErrorSchemaValidation:
          //            // If we're talking to an E12 server (8.00.xxxx.xxx), a schema validation error is the same as a version mismatch error.
          //            // (Which only will happen if we send a request that's not valid for E12).
          //            if ((this.Service.ServerInfo != null) &&
          //                (this.Service.ServerInfo.MajorVersion == 8) && (this.Service.ServerInfo.MinorVersion == 0)) {
          //                throw new Exceptions.ServiceVersionException(Strings.ServerVersionNotSupported);
          //            }

          //            break;

          //        case ServiceError.ErrorIncorrectSchemaVersion:
          //            // This shouldn't happen. It indicates that a request wasn't valid for the version that was specified.
          //            EwsUtilities.Assert(
          //                false,
          //                "ServiceRequestBase.ProcessWebException",
          //                "Exchange server supports requested version but request was invalid for that version");
          //            break;

          //        case ServiceError.ErrorServerBusy:
          //            throw new ServerBusyException(new ServiceResponse(soapFaultDetails));

          //        default:
          //            // Other error codes will be reported as remote error
          //            break;
          //    }

          //    // General fall-through case: throw a ServiceResponseException
          //    throw new ServiceResponseException(new ServiceResponse(soapFaultDetails));
        }
      }
      else {
        soapFaultDetails = new SoapFaultDetails(webException && (<any>webException).message ? (<any>webException).message : '');
        soapFaultDetails.HttpStatusCode = webException.status;
        if ((<any>webException).stack)
          soapFaultDetails.stack = (<any>webException).stack;

        this.Service.ProcessHttpErrorResponse(webException, soapFaultDetails);
      }

      return soapFaultDetails;
    }
    return null;
  }

  /**
   * Reads the response from converted XML JS Object Soap enevlop is is omited, object has Body and Header as direct member.
   *
   * @param   {any}   jsObject    The converted XMl JS Object.
   * @return  {any}               Service response.
   */
  protected ReadResponseXmlJsObject(jsObject: any): any {
    if (jsObject[XmlElementNames.SOAPHeaderElementName]) {
      this.ReadSoapHeader(jsObject[XmlElementNames.SOAPHeaderElementName]);
    }

    if (!jsObject[XmlElementNames.SOAPBodyElementName]) {
      throw new Error("invalid soap message");
    }
    var serviceResponse: any;
    let jsBody = jsObject[XmlElementNames.SOAPBodyElementName]
    let jsResponse = jsBody[this.GetResponseXmlElementName()];
    serviceResponse = this.ParseResponse(jsResponse);
    return serviceResponse;
  }

  /**
   * Reads the SOAP fault.
   *
   * @param   {any}   jsonSoapFault   The SOAP fault.
   * @return  {SoapFaultDetails}      Parsed SoapFaultDetails
   */
  private ReadSoapFault(jsSoapFault: any): SoapFaultDetails {
    let soapFaultDetails: SoapFaultDetails = null;

    if (jsSoapFault[XmlElementNames.SOAPHeaderElementName]) {
      this.ReadSoapHeader(jsSoapFault[XmlElementNames.SOAPHeaderElementName]);
    }

    if (jsSoapFault[XmlElementNames.SOAPBodyElementName]) {
      let jsSoapBody = jsSoapFault[XmlElementNames.SOAPBodyElementName];
      if (jsSoapBody[XmlElementNames.SOAPFaultElementName]) {
        soapFaultDetails = SoapFaultDetails.Parse(jsSoapBody[XmlElementNames.SOAPFaultElementName]);
      }
    }

    return soapFaultDetails;
  }

  /**
   * Read SOAP header and extract server version
   *
   * @param   {any}   jsObject   Header value in JsObject
   */
  private ReadSoapHeader(jsObject: any): void {
    if (jsObject[XmlElementNames.ServerVersionInfo]) {
      this.Service.ServerInfo = ExchangeServerInfo.Parse(jsObject[XmlElementNames.ServerVersionInfo]);
    }
  }

  /**
   * @internal Throw exception if request is not supported in requested server version.
   * 
   * @exception   {ServiceVersionException}   Raised if request requires a later version of Exchange.
   */
  ThrowIfNotSupportedByRequestedServerVersion(): void {

    if (this.Service.RequestedServerVersion < this.GetMinimumRequiredServerVersion()) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.RequestIncompatibleWithRequestVersion,
          this.GetXmlElementName(),
          ExchangeVersion[this.GetMinimumRequiredServerVersion()]), null);
    }
  }

  //TraceAndEmitRequest(request: IEwsHttpWebRequest, needSignature: boolean, needTrace: boolean): any { throw new Error("Could not implemented."); }
  //TraceJsonRequest(requestObject: JsonObject): any { throw new Error("Could not implemented."); }
  //TraceResponseJson(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
  //TraceResponseXml(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
  //TraceXmlRequest(memoryStream: any): any { throw new Error("Could not implemented."); }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    this.Service.Validate();
  }

  /**
   * Validates request parameters, and emits the request to the server.
   *
   * @param   {IXHROptions}               request   The request.
   * @return  {Promise<XMLHttpRequest>}  The response returned by the server.
   */
  protected ValidateAndEmitRequest(request: IXHROptions): Promise<XMLHttpRequest> {
    this.Validate();

    //var request = this.BuildXHR();

    if (this.service.SendClientLatencies) {
      var clientStatisticsToAdd: string = '';

      //lock(clientStatisticsCache)
      //{
      if (ServiceRequestBase.clientStatisticsCache.length > 0) {
        clientStatisticsToAdd = ServiceRequestBase.clientStatisticsCache[0];
        ServiceRequestBase.clientStatisticsCache.splice(0, 1);
      }
      //}

      if (!StringHelper.IsNullOrEmpty(clientStatisticsToAdd)) {
        if (request.headers[ServiceRequestBase.ClientStatisticsRequestHeader]) {
          request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] =
            request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] + clientStatisticsToAdd;
        }
        else {
          request.headers[ServiceRequestBase.ClientStatisticsRequestHeader] = clientStatisticsToAdd;
        }
      }
    }

    //var startTime = Date.now();// DateTime.UtcNow;
    //var response = XHR(request);
    EwsLogging.DebugLog("sending ews request");
    EwsLogging.DebugLog({ ...request, ...{ headers: { ...request.headers, Authorization: "REDACTED" } } }, true);

    return this.service.XHRApi.xhr(request);

    //try
    //{
    //    var response = this.GetEwsHttpWebResponse(request);
    //}
    //finally {
    //    if (this.service.SendClientLatencies) {
    //        int clientSideLatency = (int)(DateTime.UtcNow - startTime).TotalMilliseconds;
    //        string requestId = string.Empty;
    //        string soapAction = this.GetType().Name.Replace("Request", string.Empty);

    //        if (response != null && response.Headers != null) {
    //            foreach(string requestIdHeader in ServiceRequestBase.RequestIdResponseHeaders)
    //            {
    //                string requestIdValue = response.Headers.Get(requestIdHeader);
    //                if (!string.IsNullOrEmpty(requestIdValue)) {
    //                    requestId = requestIdValue;
    //                    break;
    //                }
    //            }
    //        }

    //        StringBuilder sb = new StringBuilder();
    //        sb.Append("MessageId=");
    //        sb.Append(requestId);
    //        sb.Append(",ResponseTime=");
    //        sb.Append(clientSideLatency);
    //        sb.Append(",SoapAction=");
    //        sb.Append(soapAction);
    //        sb.Append(";");

    //        lock(clientStatisticsCache)
    //        {
    //            clientStatisticsCache.Add(sb.ToString());
    //        }
    //    }
    //}

    //return response;
  }

  //WrapStream(responseStream: any /*System.IO.Stream*/, contentEncoding: string): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }

  /**
   * @internal Writes XML attributes.
   *
   * /remarks/    Subclass will override if it has XML attributes.
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteAttributesToXml(writer: EwsServiceXmlWriter): void { }

  /**
   * @internal Writes XML body.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteBodyToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Messages, this.GetXmlElementName());
    this.WriteAttributesToXml(writer);
    this.WriteElementsToXml(writer);
    writer.WriteEndElement(); // m:this.GetXmlElementName()
  }

  //#region HttpWebRequest-based implementation

  /**
   * @internal Writes XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
    writer.WriteAttributeValue("xmlns", EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, EwsUtilities.EwsXmlSchemaInstanceNamespace);
    writer.WriteAttributeValue("xmlns", EwsUtilities.EwsMessagesNamespacePrefix, EwsUtilities.EwsMessagesNamespace);
    writer.WriteAttributeValue("xmlns", EwsUtilities.EwsTypesNamespacePrefix, EwsUtilities.EwsTypesNamespace);
    if (writer.RequireWSSecurityUtilityNamespace) {
      writer.WriteAttributeValue("xmlns", EwsUtilities.WSSecurityUtilityNamespacePrefix, EwsUtilities.WSSecurityUtilityNamespace);
    }

    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPHeaderElementName);

    if (this.Service.Credentials != null) {
      //todo: fix extra soap headers if required
      this.Service.Credentials.EmitExtraSoapHeaderNamespaceAliases(null);
    }

    // Emit the RequestServerVersion header
    if (!this.Service.SuppressXmlVersionHeader) {
      writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.RequestServerVersion);
      writer.WriteAttributeValue(XmlAttributeNames.Version, this.GetRequestedServiceVersionString());
      writer.WriteEndElement(); // RequestServerVersion
    }

    // Against Exchange 2007 SP1, we always emit the simplified time zone header. It adds very little to
    // the request, so bandwidth consumption is not an issue. Against Exchange 2010 and above, we emit
    // the full time zone header but only when the request actually needs it.
    //
    // The exception to this is if we are in Exchange2007 Compat Mode, in which case we should never emit
    // the header.  (Note: Exchange2007 Compat Mode is enabled for testability purposes only.)
    //
    if ((this.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1 || this.EmitTimeZoneHeader) &&
      (!this.Service.Exchange2007CompatibilityMode)) {
      writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.TimeZoneContext);

      this.Service.TimeZoneDefinition.WriteToXml(writer);

      writer.WriteEndElement(); // TimeZoneContext

      writer.IsTimeZoneHeaderEmitted = true;
    }

    // Emit the MailboxCulture header
    // if (this.Service.PreferredCulture != null) {
    //     //todo: fix preferred culture.
    //     writer.WriteElementValue(
    //         XmlNamespace.Types,
    //         XmlElementNames.MailboxCulture,
    //         this.Service.PreferredCulture.Name);
    // }

    // Emit the DateTimePrecision header
    if (this.Service.DateTimePrecision != DateTimePrecision.Default) {
      writer.WriteElementValue(
        XmlNamespace.Types,
        XmlElementNames.DateTimePrecision,
        DateTimePrecision[this.Service.DateTimePrecision]);
      //this.Service.DateTimePrecision.ToString());
    }

    // Emit the ExchangeImpersonation header
    if (this.Service.ImpersonatedUserId != null) {
      this.Service.ImpersonatedUserId.WriteToXml(writer);
    }
    else if (this.Service.PrivilegedUserId != null) {
      //todo: find scenario if this is used anywhere, did not find any reference in MSDN
      this.Service.PrivilegedUserId.WriteToXml(writer, this.Service.RequestedServerVersion);
    }
    else if (this.Service.ManagementRoles != null) {
      this.Service.ManagementRoles.WriteToXml(writer);
    }

    if (this.Service.Credentials != null) {
      this.Service.Credentials.SerializeExtraSoapHeaders(writer, this.GetXmlElementName());
    }

    this.Service.DoOnSerializeCustomSoapHeaders(writer);

    writer.WriteEndElement(); // soap:Header

    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);

    this.WriteBodyToXml(writer);

    writer.WriteEndElement(); // soap:Body
    writer.WriteEndElement(); // soap:Envelope
  }

  //#endregion
}