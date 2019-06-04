"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var DateTimePrecision_1 = require("../../Enumerations/DateTimePrecision");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceXmlReader_1 = require("../EwsServiceXmlReader");
var EwsServiceXmlWriter_1 = require("../EwsServiceXmlWriter");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeServerInfo_1 = require("../ExchangeServerInfo");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var RenderingMode_1 = require("../../Enumerations/RenderingMode");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var SoapFaultDetails_1 = require("../../Misc/SoapFaultDetails");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * @internal Represents an abstract service request.
 */
var ServiceRequestBase = /** @class */ (function () {
    /**
     *  @internal Initializes a new instance of the **ServiceRequestBase** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function ServiceRequestBase(service) {
        //#endregion
        /**
         * @internal Gets or sets the anchor mailbox associated with the request
         *
         * /remarks/    Setting this value will add special headers to the request which in turn will route the request directly to the mailbox server against which the request is to be executed.
         */
        this.AnchorMailbox = null;
        if (service == null) {
            throw new ArgumentException_1.ArgumentNullException("service");
        }
        this.service = service;
        this.ThrowIfNotSupportedByRequestedServerVersion();
    }
    Object.defineProperty(ServiceRequestBase.prototype, "Service", {
        /**
         * @internal Gets the service.
         *
         * @value   The service.
         */
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequestBase.prototype, "EmitTimeZoneHeader", {
        // #region abstract Methods for subclasses to override
        /**
         *  @internal Gets a value indicating whether the TimeZoneContext SOAP header should be eimitted.
         *
         * @value   true if the time zone should be emitted; otherwise, false.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    ServiceRequestBase.prototype.GetXmlElementName = function () { throw new Error("abstract method, must override"); };
    /**
     * @internal Gets the minimum server version required to process this request.
     *
     * @return  {ExchangeVersion}      Exchange server version.
     */
    ServiceRequestBase.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("abstract method, must override"); };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    ServiceRequestBase.prototype.GetResponseXmlElementName = function () { throw new Error("abstract method, must override"); };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    ServiceRequestBase.prototype.ParseResponse = function (jsonBody) {
        var serviceResponse = new ServiceResponse_1.ServiceResponse();
        serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
        return serviceResponse;
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceRequestBase.prototype.WriteElementsToXml = function (writer) { throw new Error("abstract method, must override"); };
    //#endregion
    /**
     * @internal Allows the subclasses to add their own header information
     *
     * @param   {any}   webHeaderCollection   The HTTP request headers
     */
    ServiceRequestBase.prototype.AddHeaders = function (webHeaderCollection /*WebHeaderCollection*/) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.AnchorMailbox)) {
            webHeaderCollection.Set(ServiceRequestBase.AnchorMailboxHeaderName, this.AnchorMailbox);
            webHeaderCollection.Set(ServiceRequestBase.ExplicitLogonUserHeaderName, this.AnchorMailbox);
        }
    };
    //BuildEwsHttpWebRequest(): IEwsHttpWebRequest { throw new Error("Could not implemented."); }
    ServiceRequestBase.prototype.BuildXHR = function () {
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
    };
    ServiceRequestBase.prototype.BuildResponseObjectFromJson = function (jsObject) {
        if (jsObject[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]) {
            this.ReadSoapHeader(jsObject[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]);
        }
        return this.ParseResponse(jsObject[XmlElementNames_1.XmlElementNames.SOAPBodyElementName]);
    };
    //CreateJsonHeaders(): JsonObject { throw new Error("Could not implemented."); }
    //CreateJsonRequest(): JsonObject { throw new Error("Could not implemented."); }
    /**
     * Emits the request.
     *
     * @param   {IXHROptions}   request   The request.
     */
    ServiceRequestBase.prototype.EmitRequest = function (request) {
        if (this.Service.RenderingMethod === RenderingMode_1.RenderingMode.Xml) {
            var writer = new EwsServiceXmlWriter_1.EwsServiceXmlWriter(this.service); //writer.Service
            this.WriteToXml(writer);
            request.data = writer.GetXML();
        }
        else if (this.Service.RenderingMethod === RenderingMode_1.RenderingMode.JSON) {
            //JsonObject requestObject = this.CreateJsonRequest();
            //using(Stream serviceRequestStream = this.GetWebRequestStream(request))
            //{
            //    requestObject.SerializeToJson(serviceRequestStream);
            //}
            //debugger;
        }
    };
    //EndGetEwsHttpWebResponse(request: IEwsHttpWebRequest, asyncResult: any /*System.IAsyncResult*/): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
    ServiceRequestBase.prototype.GetEwsHttpWebResponse = function (request /*IEwsHttpWebRequest*/) { return this.service.XHRApi.xhr(request); };
    /**
     * Gets string representation of requested server version.
     *
     * /remarks/    In order to support E12 RTM servers, ExchangeService has another flag indicating that we should use "Exchange2007" as the server version string rather than Exchange2007_SP1.
     * @return  {string}      String representation of requested server version.
     */
    ServiceRequestBase.prototype.GetRequestedServiceVersionString = function () {
        if (this.Service.Exchange2007CompatibilityMode && this.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            return "Exchange2007";
        }
        else {
            return ExchangeVersion_1.ExchangeVersion[this.Service.RequestedServerVersion];
        }
    };
    //GetResponseStream(response: IEwsHttpWebResponse): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
    //GetResponseStream(response: IEwsHttpWebResponse, readTimeout: number):any /*System.IO.Stream*/{ throw new Error("ServiceRequestBase.ts - GetResponseStream : Not implemented.");}
    //GetWebRequestStream(request: IEwsHttpWebRequest): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
    /**
     * Processes the web exception.
     *
     * @param   {XMLHttpRequest}   webException   The web response XHR object.
     * @return  {SoapFaultDetails}      Soap fault details if any.
     */
    ServiceRequestBase.prototype.ProcessWebException = function (webException) {
        if (webException) {
            //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
            var soapFaultDetails = null;
            if (webException.status == 500 /*System.Net.HttpStatusCode.InternalServerError*/) {
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
                var reader = new EwsServiceXmlReader_1.EwsServiceXmlReader(webException.responseText, this.Service);
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
                soapFaultDetails = new SoapFaultDetails_1.SoapFaultDetails(webException && webException.message ? webException.message : '');
                soapFaultDetails.HttpStatusCode = webException.status;
                if (webException.stack)
                    soapFaultDetails.stack = webException.stack;
                this.Service.ProcessHttpErrorResponse(webException, soapFaultDetails);
            }
            return soapFaultDetails;
        }
        return null;
    };
    /**
     * Reads the response from converted XML JS Object Soap enevlop is is omited, object has Body and Header as direct member.
     *
     * @param   {any}   jsObject    The converted XMl JS Object.
     * @return  {any}               Service response.
     */
    ServiceRequestBase.prototype.ReadResponseXmlJsObject = function (jsObject) {
        if (jsObject[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]) {
            this.ReadSoapHeader(jsObject[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]);
        }
        if (!jsObject[XmlElementNames_1.XmlElementNames.SOAPBodyElementName]) {
            throw new Error("invalid soap message");
        }
        var serviceResponse;
        var jsBody = jsObject[XmlElementNames_1.XmlElementNames.SOAPBodyElementName];
        var jsResponse = jsBody[this.GetResponseXmlElementName()];
        serviceResponse = this.ParseResponse(jsResponse);
        return serviceResponse;
    };
    /**
     * Reads the SOAP fault.
     *
     * @param   {any}   jsonSoapFault   The SOAP fault.
     * @return  {SoapFaultDetails}      Parsed SoapFaultDetails
     */
    ServiceRequestBase.prototype.ReadSoapFault = function (jsSoapFault) {
        var soapFaultDetails = null;
        if (jsSoapFault[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]) {
            this.ReadSoapHeader(jsSoapFault[XmlElementNames_1.XmlElementNames.SOAPHeaderElementName]);
        }
        if (jsSoapFault[XmlElementNames_1.XmlElementNames.SOAPBodyElementName]) {
            var jsSoapBody = jsSoapFault[XmlElementNames_1.XmlElementNames.SOAPBodyElementName];
            if (jsSoapBody[XmlElementNames_1.XmlElementNames.SOAPFaultElementName]) {
                soapFaultDetails = SoapFaultDetails_1.SoapFaultDetails.Parse(jsSoapBody[XmlElementNames_1.XmlElementNames.SOAPFaultElementName]);
            }
        }
        return soapFaultDetails;
    };
    /**
     * Read SOAP header and extract server version
     *
     * @param   {any}   jsObject   Header value in JsObject
     */
    ServiceRequestBase.prototype.ReadSoapHeader = function (jsObject) {
        if (jsObject[XmlElementNames_1.XmlElementNames.ServerVersionInfo]) {
            this.Service.ServerInfo = ExchangeServerInfo_1.ExchangeServerInfo.Parse(jsObject[XmlElementNames_1.XmlElementNames.ServerVersionInfo]);
        }
    };
    /**
     * @internal Throw exception if request is not supported in requested server version.
     *
     * @exception   {ServiceVersionException}   Raised if request requires a later version of Exchange.
     */
    ServiceRequestBase.prototype.ThrowIfNotSupportedByRequestedServerVersion = function () {
        if (this.Service.RequestedServerVersion < this.GetMinimumRequiredServerVersion()) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.RequestIncompatibleWithRequestVersion, this.GetXmlElementName(), ExchangeVersion_1.ExchangeVersion[this.GetMinimumRequiredServerVersion()]), null);
        }
    };
    //TraceAndEmitRequest(request: IEwsHttpWebRequest, needSignature: boolean, needTrace: boolean): any { throw new Error("Could not implemented."); }
    //TraceJsonRequest(requestObject: JsonObject): any { throw new Error("Could not implemented."); }
    //TraceResponseJson(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
    //TraceResponseXml(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
    //TraceXmlRequest(memoryStream: any): any { throw new Error("Could not implemented."); }
    /**
     * @internal Validate request.
     */
    ServiceRequestBase.prototype.Validate = function () {
        this.Service.Validate();
    };
    /**
     * Validates request parameters, and emits the request to the server.
     *
     * @param   {IXHROptions}               request   The request.
     * @return  {Promise<XMLHttpRequest>}  The response returned by the server.
     */
    ServiceRequestBase.prototype.ValidateAndEmitRequest = function (request) {
        this.Validate();
        //var request = this.BuildXHR();
        if (this.service.SendClientLatencies) {
            var clientStatisticsToAdd = '';
            //lock(clientStatisticsCache)
            //{
            if (ServiceRequestBase.clientStatisticsCache.length > 0) {
                clientStatisticsToAdd = ServiceRequestBase.clientStatisticsCache[0];
                ServiceRequestBase.clientStatisticsCache.splice(0, 1);
            }
            //}
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(clientStatisticsToAdd)) {
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
        EwsLogging_1.EwsLogging.DebugLog("sending ews request");
        EwsLogging_1.EwsLogging.DebugLog(request, true);
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
    };
    //WrapStream(responseStream: any /*System.IO.Stream*/, contentEncoding: string): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
    /**
     * @internal Writes XML attributes.
     *
     * /remarks/    Subclass will override if it has XML attributes.
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceRequestBase.prototype.WriteAttributesToXml = function (writer) { };
    /**
     * @internal Writes XML body.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceRequestBase.prototype.WriteBodyToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement(); // m:this.GetXmlElementName()
    };
    //#region HttpWebRequest-based implementation
    /**
     * @internal Writes XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceRequestBase.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPEnvelopeElementName);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, EwsUtilities_1.EwsUtilities.EwsXmlSchemaInstanceNamespace);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.EwsMessagesNamespacePrefix, EwsUtilities_1.EwsUtilities.EwsMessagesNamespace);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.EwsTypesNamespacePrefix, EwsUtilities_1.EwsUtilities.EwsTypesNamespace);
        if (writer.RequireWSSecurityUtilityNamespace) {
            writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.WSSecurityUtilityNamespacePrefix, EwsUtilities_1.EwsUtilities.WSSecurityUtilityNamespace);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPHeaderElementName);
        if (this.Service.Credentials != null) {
            //todo: fix extra soap headers if required
            this.Service.Credentials.EmitExtraSoapHeaderNamespaceAliases(null);
        }
        // Emit the RequestServerVersion header
        if (!this.Service.SuppressXmlVersionHeader) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RequestServerVersion);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Version, this.GetRequestedServiceVersionString());
            writer.WriteEndElement(); // RequestServerVersion
        }
        // Against Exchange 2007 SP1, we always emit the simplified time zone header. It adds very little to
        // the request, so bandwidth consumption is not an issue. Against Exchange 2010 and above, we emit
        // the full time zone header but only when the request actually needs it.
        //
        // The exception to this is if we are in Exchange2007 Compat Mode, in which case we should never emit
        // the header.  (Note: Exchange2007 Compat Mode is enabled for testability purposes only.)
        //
        if ((this.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1 || this.EmitTimeZoneHeader) &&
            (!this.Service.Exchange2007CompatibilityMode)) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TimeZoneContext);
            this.Service.TimeZoneDefinition.WriteToXml(writer);
            writer.WriteEndElement(); // TimeZoneContext
            writer.IsTimeZoneHeaderEmitted = true;
        }
        // Emit the MailboxCulture header
        if (this.Service.PreferredCulture != null) {
            //todo: fix preferred culture.
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxCulture, this.Service.PreferredCulture.Name);
        }
        // Emit the DateTimePrecision header
        if (this.Service.DateTimePrecision != DateTimePrecision_1.DateTimePrecision.Default) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DateTimePrecision, DateTimePrecision_1.DateTimePrecision[this.Service.DateTimePrecision]);
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
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPBodyElementName);
        this.WriteBodyToXml(writer);
        writer.WriteEndElement(); // soap:Body
        writer.WriteEndElement(); // soap:Envelope
    };
    //#region private static and const
    //ref:this may be from newer code overall i am using, update when updating from ews base code library //todo:
    /**
     * The two contants below are used to set the AnchorMailbox and ExplicitLogonUser values in the request header.
     *
     * /remarks/    Note: Setting this values will route the request directly to the backend hosting the AnchorMailbox. These headers should be used primarily for UnifiedGroup scenario where a request needs to be routed directly to the group mailbox versus the user mailbox.
     */
    ServiceRequestBase.AnchorMailboxHeaderName = "X-AnchorMailbox";
    ServiceRequestBase.ExplicitLogonUserHeaderName = "X-OWA-ExplicitLogonUser";
    ServiceRequestBase.RequestIdResponseHeaders = ["RequestId", "request-id"];
    ServiceRequestBase.XMLSchemaNamespace = "http://www.w3.org/2001/XMLSchema";
    ServiceRequestBase.XMLSchemaInstanceNamespace = "http://www.w3.org/2001/XMLSchema-instance";
    ServiceRequestBase.ClientStatisticsRequestHeader = "X-ClientStatistics";
    /**
     * Maintains the collection of client side statistics for requests already completed
     */
    ServiceRequestBase.clientStatisticsCache = [];
    return ServiceRequestBase;
}());
exports.ServiceRequestBase = ServiceRequestBase;
