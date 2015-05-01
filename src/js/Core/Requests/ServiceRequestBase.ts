import ExchangeService = require("../ExchangeService");
import SoapFaultDetails = require("../../Misc/SoapFaultDetails");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import XmlElementNames = require("../XmlElementNames");
import XmlNamespace = require("../../Enumerations/XmlNamespace");
import XmlAttributeNames = require("../XmlAttributeNames");
import EwsUtilities = require("../EwsUtilities");
import ExchangeServerInfo = require("../ExchangeServerInfo");
import DateTimePrecision = require("../../Enumerations/DateTimePrecision");
import ServiceVersionException = require("../../Exceptions/ServiceVersionException");

import ExtensionMethods = require("../../ExtensionMethods");
import String = ExtensionMethods.stringFormatting;

class ServiceRequestBase {

    //#region private static and const
    private static XMLSchemaNamespace: string = "http://www.w3.org/2001/XMLSchema";
    private static XMLSchemaInstanceNamespace: string = "http://www.w3.org/2001/XMLSchema-instance";
    private static ClientStatisticsRequestHeader: string = "X-ClientStatistics";
    private static RequestIdResponseHeaders: string[] = ["RequestId", "request-id"];
    private static clientStatisticsCache: string[] = [];//System.Collections.Generic.List<string>;
    get Service(): ExchangeService { return this.Service; }
    private service: ExchangeService;
    //#endregion

    SoapFaultDetails: SoapFaultDetails;

    /// <summary>
    /// Initializes a new instance of the <see cref="ServiceRequestBase"/> class.
    /// </summary>
    /// <param name="service">The service.</param>
    constructor(service: ExchangeService) {
        this.service = service;
        this.ThrowIfNotSupportedByRequestedServerVersion();
    }

    // #region abstract Methods for subclasses to override
    get EmitTimeZoneHeader(): boolean { return false; }

    GetXmlElementName(): string { throw new Error("abstract method, must override"); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("abstract method, must override"); }
    GetResponseXmlElementName(): string { throw new Error("abstract method, must override"); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("abstract method, must override"); }
    //ParseResponse(jsonBody: JsonObject): any{ throw new Error("abstract method, must override");}
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("abstract method, must override"); }
    //#endregion

    //BuildEwsHttpWebRequest(): IEwsHttpWebRequest { throw new Error("Could not implemented."); }
    BuildXHR(): WinJS.IXHROptions {

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
    //BuildResponseObjectFromJson(jsonResponse: JsonObject): any { throw new Error("Could not implemented."); }
    //CreateJsonHeaders(): JsonObject { throw new Error("Could not implemented."); }
    //CreateJsonRequest(): JsonObject { throw new Error("Could not implemented."); }
    EmitRequest(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): void {
        if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {

            var writer: EwsServiceXmlWriter = new EwsServiceXmlWriter();//writer.Service
            this.WriteToXml(writer);
            request.data = writer.GetXML();

        }
        else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
            //JsonObject requestObject = this.CreateJsonRequest();

            //using(Stream serviceRequestStream = this.GetWebRequestStream(request))
            //{
            //    requestObject.SerializeToJson(serviceRequestStream);
            //}
            debugger;
        }
    }
    //EndGetEwsHttpWebResponse(request: IEwsHttpWebRequest, asyncResult: any /*System.IAsyncResult*/): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
    GetEwsHttpWebResponse(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): WinJS.Promise<XMLHttpRequest> { return WinJS.xhr(request); }
    GetRequestedServiceVersionString(): string {
        if (this.Service.Exchange2007CompatibilityMode && this.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
            return "Exchange2007";
        }
        else {
            return ExchangeVersion[this.Service.RequestedServerVersion];
        }
    }
    //GetResponseStream(response: IEwsHttpWebResponse): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
    //GetResponseStream(response: IEwsHttpWebResponse, readTimeout: number):any /*System.IO.Stream*/{ throw new Error("Not implemented.");}
    //GetWebRequestStream(request: IEwsHttpWebRequest): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
    protected ProcessWebException(webException: XMLHttpRequest): void {
        if (webException.response) {
            //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
            var soapFaultDetails: SoapFaultDetails = null;

            if (webException.status == 500  /*System.Net.HttpStatusCode.InternalServerError*/) {
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
                soapFaultDetails = this.ReadSoapFault(reader);

                if (soapFaultDetails != null) {
                    //todo: implement soap fault error throw
                    this.SoapFaultDetails = soapFaultDetails;

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
                //todo: fix this
                debugger;
                this.Service.ProcessHttpErrorResponse(webException, webException);
            }
        }
    }
    ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void {
        this.ReadXmlDeclaration(ewsXmlReader);
    }
    ReadResponse(ewsXmlReader: EwsServiceXmlReader): any /*object return*/ {
        var serviceResponse;

        //this.ReadPreamble(ewsXmlReader);
        //ewsXmlReader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
        this.ReadSoapHeader(ewsXmlReader);
        //ewsXmlReader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);

        //ewsXmlReader.ReadStartElement(XmlNamespace.Messages, this.GetResponseXmlElementName());

        serviceResponse = this.ParseResponse(ewsXmlReader);

        debugger;

        //ewsXmlReader.ReadEndElementIfNecessary(XmlNamespace.Messages, this.GetResponseXmlElementName());

        ewsXmlReader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);
        ewsXmlReader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
        return serviceResponse;
    }
    ReadSoapFault(reader: EwsServiceXmlReader): SoapFaultDetails {
        var soapFaultDetails: SoapFaultDetails = null;
        debugger;
        try {
            this.ReadXmlDeclaration(reader);

            reader.Read();
            if (reader.LocalName != XmlElementNames.SOAPEnvelopeElementName) {
                return soapFaultDetails;
            }

            // EWS can sometimes return SOAP faults using the SOAP 1.2 namespace. Get the
            // namespace URI from the envelope element and use it for the rest of the parsing.
            // If it's not 1.1 or 1.2, we can't continue.
            var soapNamespace: XmlNamespace = EwsUtilities.GetNamespaceFromUri(reader.NamespaceUri);
            if (soapNamespace == XmlNamespace.NotSpecified) {
                return soapFaultDetails;
            }

            reader.Read();

            // EWS doesn't always return a SOAP header. If this response contains a header element,
            // read the server version information contained in the header.
            if (reader.IsElement(soapNamespace, XmlElementNames.SOAPHeaderElementName)) {
                do {
                    reader.Read();

                    if (reader.IsElement(XmlNamespace.Types, XmlElementNames.ServerVersionInfo)) {
                        this.Service.ServerInfo = ExchangeServerInfo.Parse(reader);
                    }
                }
                while (reader.HasRecursiveParent(XmlElementNames.SOAPHeaderElementName));

                // Queue up the next read
                //reader.Read(); - not needed as this is done as part of TreeWalker
            }

            // Parse the fault element contained within the SOAP body.
            if (reader.IsElement(soapNamespace, XmlElementNames.SOAPBodyElementName)) {
                do {
                    reader.Read();

                    // Parse Fault element
                    if (reader.IsElement(soapNamespace, XmlElementNames.SOAPFaultElementName)) {
                        soapFaultDetails = SoapFaultDetails.Parse(reader, soapNamespace);
                    }
                }
                while (reader.HasRecursiveParent(XmlElementNames.SOAPBodyElementName));
            }

            //reader.ReadEndElement(soapNamespace, XmlElementNames.SOAPEnvelopeElementName); - not needed, treewalker reads it to the next node
        }
        catch (XmlException) {
            // If response doesn't contain a valid SOAP fault, just ignore exception and
            // return null for SOAP fault details.
        }

        return soapFaultDetails;
    }
    //ReadSoapFault(jsonSoapFault: JsonObject): SoapFaultDetails { throw new Error("Could not implemented."); }
    ReadSoapHeader(reader: EwsServiceXmlReader): void {
        this.service.ServerInfo = reader.JsonObject.Header.ServerVersionInfo;
        debugger;
        return;
        reader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPHeaderElementName);
        do {
            reader.Read();

            // Is this the ServerVersionInfo?
            if (reader.IsElement(XmlNamespace.Types, XmlElementNames.ServerVersionInfo)) {
                this.Service.ServerInfo = ExchangeServerInfo.Parse(reader);
            }

            // Ignore anything else inside the SOAP header
        }
        while (!reader.HasRecursiveParent(XmlElementNames.SOAPHeaderElementName));

    }
    //ReadSoapHeader(jsonHeader: JsonObject): any { throw new Error("Could not implemented."); }
    private ReadXmlDeclaration(reader: EwsServiceXmlReader): void {
        debugger;
        //try {
        //    reader.Read(System.Xml.XmlNodeType.XmlDeclaration);
        //}
        //catch (XmlException ex)
        //{
        //    throw new ServiceRequestException(Strings.ServiceResponseDoesNotContainXml, ex);
        //}
        //catch (ServiceXmlDeserializationException ex)
        //{
        //    throw new ServiceRequestException(Strings.ServiceResponseDoesNotContainXml, ex);
        //}
    }
    ThrowIfNotSupportedByRequestedServerVersion(): void {

        if (this.Service.RequestedServerVersion < this.GetMinimumRequiredServerVersion()) {
            throw new ServiceVersionException(
                String.Format(
                    "not supported operation, soap element {0} not only supported in exchange version {1} onward  ",//Strings.RequestIncompatibleWithRequestVersion,
                    this.GetXmlElementName(),
                    ExchangeVersion[this.GetMinimumRequiredServerVersion()]), null);
        }
    }
    //TraceAndEmitRequest(request: IEwsHttpWebRequest, needSignature: boolean, needTrace: boolean): any { throw new Error("Could not implemented."); }
    //TraceJsonRequest(requestObject: JsonObject): any { throw new Error("Could not implemented."); }
    //TraceResponseJson(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
    //TraceResponseXml(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
    //TraceXmlRequest(memoryStream: any): any { throw new Error("Could not implemented."); }
    Validate(): void { this.Service.Validate(); }
    ValidateAndEmitRequest(request: WinJS.IXHROptions): WinJS.Promise<XMLHttpRequest> {
        this.Validate();

        var request = this.BuildXHR();

        if (this.service.SendClientLatencies) {
            var clientStatisticsToAdd: string = '';

            //lock(clientStatisticsCache)
            //{
            if (ServiceRequestBase.clientStatisticsCache.length > 0) {
                clientStatisticsToAdd = ServiceRequestBase.clientStatisticsCache[0];
                ServiceRequestBase.clientStatisticsCache.splice(0, 1);
            }
            //}

            if (!String.IsNullOrEmpty(clientStatisticsToAdd)) {
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
        //var response = WinJS.xhr(request);
        return WinJS.xhr(request);

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
    /// <summary>
    /// Writes XML attributes.
    /// </summary>
    /// <remarks>
    /// Subexport class will override if it has XML attributes.
    /// </remarks>
    /// <param name="writer">The writer.</param>
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { }
    /// <summary>
    /// Writes XML body.
    /// </summary>
    /// <param name="writer">The writer.</param>
    WriteBodyToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement(); // m:this.GetXmlElementName()
    }

    //#region HttpWebRequest-based implementation
    /// <summary>
    /// Writes XML.
    /// </summary>
    /// <param name="writer">The writer.</param>
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
            writer.WriteAttributeValue("", XmlAttributeNames.Version, this.GetRequestedServiceVersionString());
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
        if (this.Service.PreferredCulture != null) {
            //todo: fix preferred culture.
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MailboxCulture,
                XmlElementNames.MailboxCulture,
                this.Service.PreferredCulture.Name);
        }

        // Emit the DateTimePrecision header
        if (this.Service.DateTimePrecision != DateTimePrecision.Default) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DateTimePrecision,
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

export = ServiceRequestBase;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;