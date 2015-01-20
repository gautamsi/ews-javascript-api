module Microsoft.Exchange.WebServices.Data {


    export class ServiceRequestBase {

        //#region private static and const
        private static XMLSchemaNamespace: string = "http://www.w3.org/2001/XMLSchema";
        private static XMLSchemaInstanceNamespace: string = "http://www.w3.org/2001/XMLSchema-instance";
        private static ClientStatisticsRequestHeader: string = "X-ClientStatistics";
        private static RequestIdResponseHeaders: string[] = ["RequestId", "request-id"];
        private static clientStatisticsCache: string[] = [];//System.Collections.Generic.List<string>;        
        get Service(): ExchangeService { return this.Service; }
        private service: ExchangeService;
        //#endregion

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

        BuildEwsHttpWebRequest(): IEwsHttpWebRequest { throw new Error("Could not implemented."); }
        //BuildResponseObjectFromJson(jsonResponse: JsonObject): any { throw new Error("Could not implemented."); }
        //CreateJsonHeaders(): JsonObject { throw new Error("Could not implemented."); }
        //CreateJsonRequest(): JsonObject { throw new Error("Could not implemented."); }
        EmitRequest(request: IEwsHttpWebRequest): void { throw new Error("Could not implemented."); }
        EndGetEwsHttpWebResponse(request: IEwsHttpWebRequest, asyncResult: any /*System.IAsyncResult*/): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
        GetEwsHttpWebResponse(request: IEwsHttpWebRequest): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
        GetRequestedServiceVersionString(): string {
            if (this.Service.Exchange2007CompatibilityMode && this.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
                return "Exchange2007";
            }
            else {
                return ExchangeVersion[this.Service.RequestedServerVersion];
            }
        }
        GetResponseStream(response: IEwsHttpWebResponse): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
        //GetResponseStream(response: IEwsHttpWebResponse, readTimeout: number):any /*System.IO.Stream*/{ throw new Error("Not implemented.");}
        GetWebRequestStream(request: IEwsHttpWebRequest): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
        private ProcessWebException(webException: XMLHttpRequest): void { 
            if (webException.response) {
                //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
                var soapFaultDetails: SoapFaultDetails = null;

                if (webException.status == System.Net.HttpStatusCode.InternalServerError) {
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
                    var reader = new EwsServiceXmlReader(webException.responseText,this.Service);
                    soapFaultDetails = this.ReadSoapFault(reader);

                    if (soapFaultDetails != null) {
                        //todo: implement soap fault error throw

                    //    switch (soapFaultDetails.ResponseCode) {
                    //        case ServiceError.ErrorInvalidServerVersion:
                    //            throw new ServiceVersionException(Strings.ServerVersionNotSupported);

                    //        case ServiceError.ErrorSchemaValidation:
                    //            // If we're talking to an E12 server (8.00.xxxx.xxx), a schema validation error is the same as a version mismatch error.
                    //            // (Which only will happen if we send a request that's not valid for E12).
                    //            if ((this.Service.ServerInfo != null) &&
                    //                (this.Service.ServerInfo.MajorVersion == 8) && (this.Service.ServerInfo.MinorVersion == 0)) {
                    //                throw new ServiceVersionException(Strings.ServerVersionNotSupported);
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

            this.ReadPreamble(ewsXmlReader);
            ewsXmlReader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
            this.ReadSoapHeader(ewsXmlReader);
            ewsXmlReader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);

            ewsXmlReader.ReadStartElement(XmlNamespace.Messages, this.GetResponseXmlElementName());

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
            debugger;
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
                    string.Format(
                        "not supported operation, soap element {0} not only supported in exchange version {1} onward  ",//Strings.RequestIncompatibleWithRequestVersion,
                        this.GetXmlElementName(),
                        ExchangeVersion[this.GetMinimumRequiredServerVersion()]), null);
            }
        }
        TraceAndEmitRequest(request: IEwsHttpWebRequest, needSignature: boolean, needTrace: boolean): any { throw new Error("Could not implemented."); }
        TraceJsonRequest(requestObject: JsonObject): any { throw new Error("Could not implemented."); }
        TraceResponseJson(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
        TraceResponseXml(response: IEwsHttpWebResponse, memoryStream: any): any { throw new Error("Could not implemented."); }
        TraceXmlRequest(memoryStream: any): any { throw new Error("Could not implemented."); }
        Validate(): void { this.Service.Validate(); }
        ValidateAndEmitRequest(request: any): IEwsHttpWebResponse { throw new Error("Could not implemented."); }
        WrapStream(responseStream: any /*System.IO.Stream*/, contentEncoding: string): any /*System.IO.Stream*/ { throw new Error("Could not implemented."); }
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
    export class SimpleServiceRequestBase extends ServiceRequestBase {
        BeginExecute(callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInternalExecute(asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        InternalExecute(): any; //{ throw new Error("Not implemented.");}
        ReadResponse(response: IEwsHttpWebResponse): any; //{ throw new Error("Not implemented.");}
        ReadResponseJson(responseStream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        ReadResponseXml(responseStream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        WebRequestAsyncCallback(webAsyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
    }


    export class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
        Mailbox: Mailbox;
        private mailbox: Mailbox;
        CreateResponse(): TResponse; //{ throw new Error("Not implemented.");}
        Execute(): TResponse; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class DisableAppRequest extends SimpleServiceRequestBase {
        private Id: string;
        private DisableReason: DisableReasonType;
        Execute(): DisableAppResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
        Id: PhoneCallId;
        private id: PhoneCallId;
        Execute(): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class FindConversationRequest extends SimpleServiceRequestBase {
        View: ViewBase;
        FolderId: FolderIdWrapper;
        QueryString: string;
        ReturnHighlightTerms: boolean;
        MailboxScope: MailboxSearchLocation;
        private view: ViewBase;
        private folderId: FolderIdWrapper;
        private queryString: string;
        private returnHighlightTerms: boolean;
        private mailboxScope: MailboxSearchLocation;
        Execute(): FindConversationResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        ParseResponse(jsonBody: JsonObject): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetAppManifestsRequest extends SimpleServiceRequestBase {
        ApiVersionSupported: string;
        SchemaVersionSupported: string;
        Execute(): GetAppManifestsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
        ApiVersionSupported: string;
        SchemaVersionSupported: string;
        Execute(): GetAppMarketplaceUrlResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetClientExtensionRequest extends SimpleServiceRequestBase {
        private requestedExtensionIds: StringList;
        private shouldReturnEnabledOnly: boolean;
        private isUserScope: boolean;
        private userId: string;
        private userEnabledExtensionIds: StringList;
        private userDisabledExtensionIds: StringList;
        private isDebug: boolean;
        Execute(): GetClientExtensionResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
        SearchId: string;
        ExpandGroupMembership: boolean;
        InPlaceHoldConfigurationOnly: boolean;
        Execute(): GetDiscoverySearchConfigurationResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
        Execute(): GetEncryptionConfigurationResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
        HoldId: string;
        Execute(): GetHoldOnMailboxesResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetInboxRulesRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        private mailboxSmtpAddress: string;
        Execute(): GetInboxRulesResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
        Mailboxes: System.String[];
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
        SearchArchiveOnly: boolean;
        Execute(): GetNonIndexableItemDetailsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
        Mailboxes: System.String[];
        SearchArchiveOnly: boolean;
        Execute(): GetNonIndexableItemStatisticsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetPasswordExpirationDateRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        private mailboxSmtpAddress: string;
        Execute(): GetPasswordExpirationDateResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        ParseResponse(jsonBody: JsonObject): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetPhoneCallRequest extends SimpleServiceRequestBase {
        Id: PhoneCallId;
        private id: PhoneCallId;
        Execute(): GetPhoneCallResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetRoomListsRequest extends SimpleServiceRequestBase {
        Execute(): GetRoomListsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetRoomsRequest extends SimpleServiceRequestBase {
        RoomList: EmailAddress;
        private roomList: EmailAddress;
        Execute(): GetRoomsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
        SearchFilter: string;
        ExpandGroupMembership: boolean;
        Execute(): GetSearchableMailboxesResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
        EmitTimeZoneHeader: boolean;
        IsFreeBusyViewRequested: boolean;
        IsSuggestionsViewRequested: boolean;
        Attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>;
        TimeWindow: TimeWindow;
        RequestedData: AvailabilityData;
        Options: AvailabilityOptions;
        private attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>;
        private timeWindow: TimeWindow;
        private requestedData: AvailabilityData;
        private options: AvailabilityOptions;
        Execute(): GetUserAvailabilityResults; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetUserOofSettingsRequest extends SimpleServiceRequestBase {
        SmtpAddress: string;
        private smtpAddress: string;
        Execute(): GetUserOofSettingsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
        Execute(): GetUserRetentionPolicyTagsResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class InstallAppRequest extends SimpleServiceRequestBase {
        private manifestStream: System.IO.Stream;
        Execute(): InstallAppResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class MultiResponseServiceRequest<TResponse> extends SimpleServiceRequestBase {
        ErrorHandlingMode: ServiceErrorHandling;
        private errorHandlingMode: ServiceErrorHandling;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): TResponse; //{ throw new Error("Not implemented.");}
        EndExecute(asyncResult: System.IAsyncResult): ServiceResponseCollection<TResponse>; //{ throw new Error("Not implemented.");}
        Execute(): ServiceResponseCollection<TResponse>; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        ParseResponse(jsonBody: JsonObject): any; //{ throw new Error("Not implemented.");}
    }
    export class PlayOnPhoneRequest extends SimpleServiceRequestBase {
        ItemId: ItemId;
        DialString: string;
        private itemId: ItemId;
        private dialString: string;
        Execute(): PlayOnPhoneResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        ParseResponse(jsonBody: JsonObject): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
        ImageBase64: string;
        EmailText: string;
        PortalText: string;
        DisclaimerText: string;
        private imageBase64: string;
        private emailText: string;
        private portalText: string;
        private disclaimerText: string;
        Execute(): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
        ActionType: HoldAction;
        HoldId: string;
        Query: string;
        Mailboxes: System.String[];
        Language: string;
        InPlaceHoldIdentity: string;
        ItemHoldPeriod: string;
        Execute(): SetHoldOnMailboxesResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SetTeamMailboxRequest extends SimpleServiceRequestBase {
        private emailAddress: EmailAddress;
        private sharePointSiteUrl: System.Uri;
        private state: TeamMailboxLifecycleState;
        Execute(): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
        SmtpAddress: string;
        OofSettings: OofSettings;
        private smtpAddress: string;
        private oofSettings: OofSettings;
        Execute(): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UninstallAppRequest extends SimpleServiceRequestBase {
        private ID: string;
        Execute(): UninstallAppResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
        private emailAddress: EmailAddress;
        Execute(): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        RemoveOutlookRuleBlob: boolean;
        InboxRuleOperations: System.Collections.Generic.IEnumerable<RuleOperation>;
        private mailboxSmtpAddress: string;
        private removeOutlookRuleBlob: boolean;
        private inboxRuleOperations: System.Collections.Generic.IEnumerable<RuleOperation>;
        Execute(): UpdateInboxRulesResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    

    export class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {
        ConversationActions: System.Collections.Generic.List<ConversationAction>;
        private conversationActions: System.Collections.Generic.List<ConversationAction>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {
        SourceFolderId: FolderId;
        Ids: ItemIdWrapperList;
        private sourceFolderId: FolderId;
        private ids: ItemIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteIdsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class ConvertIdRequest extends MultiResponseServiceRequest<ConvertIdResponse> {
        DestinationFormat: IdFormat;
        Ids: System.Collections.Generic.List<AlternateIdBase>;
        private destinationFormat: IdFormat;
        private ids: System.Collections.Generic.List<AlternateIdBase>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ConvertIdResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> {
        EmitTimeZoneHeader: boolean;
        Attachments: System.Collections.Generic.List<Attachment>;
        ParentItemId: string;
        private parentItemId: string;
        private attachments: System.Collections.Generic.List<Attachment>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateAttachmentResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class CreateRequest<TServiceObject, TResponse> extends MultiResponseServiceRequest<TResponse> {
        Objects: System.Collections.Generic.IEnumerable<TServiceObject>;
        ParentFolderId: FolderId;
        private parentFolderId: FolderId;
        private objects: System.Collections.Generic.IEnumerable<TServiceObject>;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetObjectCollectionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetParentFolderXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class CreateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        UserConfiguration: UserConfiguration;
        userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {
        Attachments: System.Collections.Generic.List<Attachment>;
        private attachments: System.Collections.Generic.List<Attachment>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): DeleteAttachmentResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class DeleteRequest<TResponse> extends MultiResponseServiceRequest<TResponse> {
        DeleteMode: DeleteMode;
        private deleteMode: DeleteMode;
        InternalToJson(body: JsonObject): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Name: string;
        ParentFolderId: FolderId;
        private name: string;
        private parentFolderId: FolderId;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class ExecuteDiagnosticMethodRequest extends MultiResponseServiceRequest<ExecuteDiagnosticMethodResponse> {
        Verb: string;
        Parameter: System.Xml.XmlNode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ExecuteDiagnosticMethodResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class FindRequest<TResponse> extends MultiResponseServiceRequest<TResponse> {
        ParentFolderIds: FolderIdWrapperList;
        SearchFilter: SearchFilter;
        QueryString: string;
        ReturnHighlightTerms: boolean;
        View: ViewBase;
        private parentFolderIds: FolderIdWrapperList;
        private searchFilter: SearchFilter;
        private queryString: string;
        private returnHighlightTerms: boolean;
        private view: ViewBase;
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetGroupBy(): Grouping; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> {
        Attachments: System.Collections.Generic.List<Attachment>;
        AttachmentIds: System.Collections.Generic.List<string>;
        AdditionalProperties: System.Collections.Generic.List<PropertyDefinitionBase>;
        BodyType: BodyType;
        EmitTimeZoneHeader: boolean;
        private attachments: System.Collections.Generic.List<Attachment>;
        private attachmentIds: System.Collections.Generic.List<string>;
        private additionalProperties: System.Collections.Generic.List<PropertyDefinitionBase>;
        private bodyType: BodyType;
        AddJsonAttachmentIdToList(attachmentIds: System.Collections.Generic.List<T>, attachmentId: string): any; //{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
        TokenRequests: ClientAccessTokenRequest[];
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {
        Conversations: System.Collections.Generic.List<ConversationRequest>;
        ItemProperties: PropertySet;
        FoldersToIgnore: FolderIdCollection;
        MaxItemsToReturn: number;
        SortOrder: ConversationSortOrder;
        MailboxScope: MailboxSearchLocation;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetConversationItemsResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {
        SubscriptionId: string;
        Watermark: string;
        private subscriptionId: string;
        private watermark: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetRequest<TServiceObject, TResponse> extends MultiResponseServiceRequest<TResponse> {
        PropertySet: PropertySet;
        private propertySet: PropertySet;
        AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
        Ids: System.Collections.Generic.IEnumerable<string>;
        private ids: System.Collections.Generic.IEnumerable<string>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> {
        Name: string;
        ParentFolderId: FolderId;
        UserConfiguration: UserConfiguration;
        Properties: UserConfigurationProperties;
        private name: string;
        private parentFolderId: FolderId;
        private properties: UserConfigurationProperties;
        private userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class MarkAllItemsAsReadRequest extends MultiResponseServiceRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        ReadFlag: boolean;
        SuppressReadReceipts: boolean;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {
        ItemIds: ItemIdWrapperList;
        IsJunk: boolean;
        MoveItem: boolean;
        private itemIds: ItemIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class MoveCopyRequest<TServiceObject, TResponse> extends MultiResponseServiceRequest<TResponse> {
        DestinationFolderId: FolderId;
        private destinationFolderId: FolderId;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteIdsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {
        NameToResolve: string;
        ReturnFullContactData: boolean;
        SearchLocation: ResolveNameSearchLocation;
        ContactDataPropertySet: PropertySet;
        ParentFolderIds: FolderIdWrapperList;
        private nameToResolve: string;
        private returnFullContactData: boolean;
        private searchLocation: ResolveNameSearchLocation;
        private contactDataPropertySet: PropertySet;
        private parentFolderIds: FolderIdWrapperList;
        private static searchScopeMap: LazyMember<T>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SearchMailboxesRequest extends MultiResponseServiceRequest<SearchMailboxesResponse> {
        SearchQueries: System.Collections.Generic.List<MailboxQuery>;
        ResultType: SearchResultType;
        PreviewItemResponseShape: PreviewItemResponseShape;
        SortOrder: SortDirection;
        SortByProperty: string;
        Language: string;
        PerformDeduplication: boolean;
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
        private IDiscoveryVersionable.ServerVersion: number;
        private searchQueries: System.Collections.Generic.List<MailboxQuery>;
        private searchResultType: SearchResultType;
        private sortOrder: SortDirection;
        private sortByProperty: string;
        private performDeduplication: boolean;
        private pageSize: number;
        private pageItemReference: string;
        private pageDirection: SearchPageDirection;
        private previewItemResponseShape: PreviewItemResponseShape;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SearchMailboxesResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        ParseResponse(jsonBody: JsonObject): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Items: System.Collections.Generic.IEnumerable<Item>;
        SavedCopyDestinationFolderId: FolderId;
        private items: System.Collections.Generic.IEnumerable<Item>;
        private savedCopyDestinationFolderId: FolderId;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SetClientExtensionRequest extends MultiResponseServiceRequest<ServiceResponse> {
        private actions: System.Collections.Generic.List<T>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SubscribeRequest<TSubscription> extends MultiResponseServiceRequest<TResponse> {
        FolderIds: FolderIdWrapperList;
        EventTypes: System.Collections.Generic.List<EventType>;
        Watermark: string;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SyncFolderHierarchyRequest extends MultiResponseServiceRequest<SyncFolderHierarchyResponse> {
        PropertySet: PropertySet;
        SyncFolderId: FolderId;
        SyncState: string;
        private propertySet: PropertySet;
        private syncFolderId: FolderId;
        private syncState: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderHierarchyResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class SyncFolderItemsRequest extends MultiResponseServiceRequest<SyncFolderItemsResponse> {
        PropertySet: PropertySet;
        SyncFolderId: FolderId;
        SyncScope: SyncFolderItemsScope;
        SyncState: string;
        IgnoredItemIds: ItemIdWrapperList;
        MaxChangesReturned: number;
        private propertySet: PropertySet;
        private syncFolderId: FolderId;
        private syncScope: SyncFolderItemsScope;
        private syncState: string;
        private ignoredItemIds: ItemIdWrapperList;
        private maxChangesReturned: number;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {
        SubscriptionId: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Folders: System.Collections.Generic.List<Folder>;
        private folders: System.Collections.Generic.List<Folder>;
        CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {
        EmitTimeZoneHeader: boolean;
        MessageDisposition: MessageDisposition;
        ConflictResolutionMode: ConflictResolutionMode;
        SendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        SuppressReadReceipts: boolean;
        Items: System.Collections.Generic.List<Item>;
        SavedItemsDestinationFolder: FolderId;
        private items: System.Collections.Generic.List<Item>;
        private savedItemsDestinationFolder: FolderId;
        private conflictResolutionMode: ConflictResolutionMode;
        private messageDisposition: MessageDisposition;
        private sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    export class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        UserConfiguration: UserConfiguration;
        userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    

    class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
        Folders: System.Collections.Generic.IEnumerable<Folder>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetObjectCollectionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetParentFolderXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
    }
    class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
    }
    class DeleteItemRequest extends DeleteRequest<ServiceResponse> {
        ItemIds: ItemIdWrapperList;
        AffectedTaskOccurrences: AffectedTaskOccurrence;
        SendCancellationsMode: SendCancellationsMode;
        SuppressReadReceipts: boolean;
        private itemIds: ItemIdWrapperList;
        private affectedTaskOccurrences: AffectedTaskOccurrence;
        private sendCancellationsMode: SendCancellationsMode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(body: JsonObject): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(body: JsonObject): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class EmptyFolderRequest extends DeleteRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        DeleteSubFolders: boolean;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(body: JsonObject): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }


}