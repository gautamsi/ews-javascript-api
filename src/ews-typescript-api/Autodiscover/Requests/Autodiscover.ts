
module Microsoft.Exchange.WebServices.Autodiscover {
    export class AutodiscoverRequest {

        get Service(): AutodiscoverService {
            return this.service;
        }
        get Url(): string { //System.Uri;
            return this.url;
        }

        private service: AutodiscoverService;
        private url: string;//System.Uri;

        private soapFaultDetails: Data.SoapFaultDetails;



        constructor(service: AutodiscoverService, url: string) {
            this.service = service;
            this.url = url;
        }

        private CreateRedirectionResponse(httpWebResponse: Data.IEwsHttpWebResponse): AutodiscoverResponse {
            //string location = httpWebResponse.Headers[System.Net.HttpResponseHeader.Location];
            //    if (!string.IsNullOrEmpty(location)) {
            //        try {
            //            Uri redirectionUri = new Uri(this.Url, location);
            //            if ((redirectionUri.Scheme == Uri.UriSchemeHttp) || (redirectionUri.Scheme == Uri.UriSchemeHttps)) {
            //                AutodiscoverResponse response = this.CreateServiceResponse();
            //                response.ErrorCode = AutodiscoverErrorCode.RedirectUrl;
            //                response.RedirectionUrl = redirectionUri;
            //                return response;
            //            }

            //            this.Service.TraceMessage(
            //                TraceFlags.AutodiscoverConfiguration,
            //                string.Format("Invalid redirection URL '{0}' returned by Autodiscover service.", redirectionUri));
            //        }
            //        catch (UriFormatException) {
            //            this.Service.TraceMessage(
            //                TraceFlags.AutodiscoverConfiguration,
            //                string.Format("Invalid redirection location '{0}' returned by Autodiscover service.", location));
            //        }
            //    }
            //    else {
            //        this.Service.TraceMessage(
            //            TraceFlags.AutodiscoverConfiguration,
            //            "Redirection response returned by Autodiscover service without redirection location.");
            //    }

            return null;
        }
        CreateServiceResponse(): AutodiscoverResponse { throw new Error("Not implemented."); }
        GetRequestXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseStream(response: Data.IEwsHttpWebResponse): any { //System.IO.Stream{ 
            //string contentEncoding = response.ContentEncoding;
            //Stream responseStream = response.GetResponseStream();

            //if (contentEncoding.ToLowerInvariant().Contains("gzip")) {
            //    return new GZipStream(responseStream, CompressionMode.Decompress);
            //}
            //else if (contentEncoding.ToLowerInvariant().Contains("deflate")) {
            //    return new DeflateStream(responseStream, CompressionMode.Decompress);
            //}
            //else {
            //    return responseStream;
            //}
        }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetWsAddressingActionName(): string { throw new Error("Not implemented."); }
        InternalExecute(): WinJS.Promise<AutodiscoverResponse> {
            var writer = new Data.EwsServiceXmlWriter();
            this.WriteSoapRequest(this.url, writer);

            if (!this.service && !this.Service.Credentials && (!this.Service.Credentials.userName || this.service.Credentials.password))
                throw new Error("missing credential");

            var cred = "Basic " + btoa(this.Service.Credentials.userName + ":" + this.Service.Credentials.password);
            var cc = writer.GetXML();
            var xhrOptions: WinJS.IXHROptions = {
                type: "POST",
                data: cc,
                url: "https://pod51045.outlook.com/autodiscover/autodiscover.svc",
                headers: { "Content-Type": "text/xml", "Authorization": cred },
                //customRequestInitializer: function (x) {
                //    var m = x;
                //}
            };

            return new WinJS.Promise((successDelegate, errorDelegate, progressDelegate) => {
                WinJS.xhr(xhrOptions)
                    .then((xhrResponse: XMLHttpRequest) => {

                        if (xhrResponse.status == 200) {
                            var ewsXmlReader = new Data.EwsXmlReader(xhrResponse.responseText || xhrResponse.response);
                            ewsXmlReader.Read();
                            if (ewsXmlReader.NodeType == System.Xml.XmlNodeType.Document) {
                                ewsXmlReader.ReadStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPEnvelopeElementName);
                            }
                            else if ((ewsXmlReader.NodeType != System.Xml.XmlNodeType.Element) || (ewsXmlReader.LocalName != Data.XmlElementNames.SOAPEnvelopeElementName) || (ewsXmlReader.NamespaceUri != Data.EwsUtilities.GetNamespaceUri(Data.XmlNamespace.Soap))) {
                                throw new Error("Invalid autodiscover service response");//Strings.InvalidAutodiscoverServiceResponse);
                            }

                            this.ReadSoapHeaders(ewsXmlReader);

                            var response: AutodiscoverResponse = this.ReadSoapBody(ewsXmlReader);

                            //ewsXmlReader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);

                            if (response.ErrorCode == AutodiscoverErrorCode.NoError) {
                                //todo: passon to successDelegate
                                //return response;
                            }
                            else {
                                throw new Error("response error " + response.ErrorCode + response.ErrorMessage);// new AutodiscoverResponseException(response.ErrorCode, response.ErrorMessage);
                            }

                        }

                        if (successDelegate)
                            successDelegate(response|| xhrResponse.responseText || xhrResponse.response);
                        else {
                            if (errorDelegate)
                                errorDelegate(xhrResponse.response);
                        }
                    }, (resperr: XMLHttpRequest) => {
                        this.ProcessWebException(resperr);
                        if (errorDelegate) errorDelegate(this.soapFaultDetails || resperr.responseText || resperr.response);
                    });
            });

        }
        IsRedirectionResponse(httpWebResponse: Data.IEwsHttpWebResponse): boolean {
            return (httpWebResponse.StatusCode == System.Net.HttpStatusCode.Redirect) ||
                (httpWebResponse.StatusCode == System.Net.HttpStatusCode.Moved) ||
                (httpWebResponse.StatusCode == System.Net.HttpStatusCode.RedirectKeepVerb) ||
                (httpWebResponse.StatusCode == System.Net.HttpStatusCode.RedirectMethod);
        }
        LoadFromXml(reader: Data.EwsXmlReader): AutodiscoverResponse {
            var elementName = this.GetResponseXmlElementName();
            reader.ReadStartElement(Data.XmlNamespace.Autodiscover, elementName);
            var response = this.CreateServiceResponse();
            response.LoadFromXml(reader, elementName);
            return response;
        }
        ProcessWebException(webException: XMLHttpRequest): void {
            if (webException.response) {
                //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
                var soapFaultDetails: Data.SoapFaultDetails = null;

                if (webException.status == System.Net.HttpStatusCode.InternalServerError) {
                    // If tracing is enabled, we read the entire response into a MemoryStream so that we
                    // can pass it along to the ITraceListener. Then we parse the response from the 
                    // MemoryStream.
                    //if (this.Service.IsTraceEnabledFor(Data.TraceFlags.AutodiscoverRequest)) {
                    //using(MemoryStream memoryStream = new MemoryStream())
                    //{
                    //    using(Stream serviceResponseStream = AutodiscoverRequest.GetResponseStream(httpWebResponse))
                    //    {
                    //        // Copy response to in-memory stream and reset position to start.
                    //        EwsUtilities.CopyStream(serviceResponseStream, memoryStream);
                    //        memoryStream.Position = 0;
                    //    }

                    //todo implement tracing to base class.
                    //this.Service.TraceResponse(httpWebResponse, memoryStream);

                    //var reader = new Data.EwsXmlReader(webException.responseText);
                    //soapFaultDetails = this.ReadSoapFault(reader);
                    //}
                    //}
                    //else {
                    //    using(Stream stream = AutodiscoverRequest.GetResponseStream(httpWebResponse))
                    //    {
                    //        EwsXmlReader reader = new EwsXmlReader(stream);
                    //        soapFaultDetails = this.ReadSoapFault(reader);
                    //    }
                    //}
                    var reader = new Data.EwsXmlReader(webException.responseText);
                    soapFaultDetails = this.ReadSoapFault(reader);

                    if (soapFaultDetails != null) {
                        //this.soapFaultDetails = soapFaultDetails;
                        //todo: implement soap fault error throw
                        //throw new Error(soapFaultDetails.Message);// ServiceResponseException(new ServiceResponse(soapFaultDetails));
                    }
                    //todo: temporary before properly implement throwing soap fault to app code.
                    this.soapFaultDetails = soapFaultDetails;
                    
                }
                else {
                    //todo: fix this
                    this.Service.ProcessHttpErrorResponse(webException, webException);
                }
            }
        }
        ReadServerVersionInfo(reader: Data.EwsXmlReader): Data.ExchangeServerInfo {
            var serverInfo = new Data.ExchangeServerInfo();
            do {
                reader.Read();
                switch (reader.LocalName) {
                    case Data.XmlElementNames.MajorVersion:
                        serverInfo.MajorVersion = +(reader.ReadElementValue());
                        break;
                    case Data.XmlElementNames.MinorVersion:
                        serverInfo.MinorVersion = +(reader.ReadElementValue());
                        break;
                    case Data.XmlElementNames.MajorBuildNumber:
                        serverInfo.MajorBuildNumber = +(reader.ReadElementValue());
                        break;
                    case Data.XmlElementNames.MinorBuildNumber:
                        serverInfo.MinorBuildNumber = +(reader.ReadElementValue());
                        break;
                    case Data.XmlElementNames.Version:
                        serverInfo.VersionString = reader.ReadElementValue();
                        break;
                    default:
                        break;
                }

            }
            while (reader.ParentNode.localName === Data.XmlElementNames.ServerVersionInfo);
            //while (!reader.IsEndElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.ServerVersionInfo));

            return serverInfo;
        }
        ReadSoapBody(reader: Data.EwsXmlReader): AutodiscoverResponse {
            reader.ReadStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPBodyElementName);
            var responses = this.LoadFromXml(reader);
            //reader.ReadEndElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPBodyElementName);
            return responses;
        }
        ReadSoapFault(reader: Data.EwsXmlReader): Data.SoapFaultDetails {
            var soapFaultDetails: Data.SoapFaultDetails = null;

            try {
                // WCF may not generate an XML declaration.
                reader.Read();
                if (reader.NodeType == System.Xml.XmlNodeType.XmlDeclaration) {
                    reader.Read();
                }

                if (reader.LocalName != Data.XmlElementNames.SOAPEnvelopeElementName) {
                    return soapFaultDetails;
                }

                // Get the namespace URI from the envelope element and use it for the rest of the parsing.
                // If it's not 1.1 or 1.2, we can't continue.
                var soapNamespace: Data.XmlNamespace = Data.EwsUtilities.GetNamespaceFromUri(reader.NamespaceUri);
                if (soapNamespace == Data.XmlNamespace.NotSpecified) {
                    return soapFaultDetails;
                }

                reader.Read();

                // Skip SOAP header.
                if (reader.IsElement(soapNamespace, Data.XmlElementNames.SOAPHeaderElementName)) {
                    do {
                        reader.Read();
                    }
                    while (reader.HasRecursiveParent(Data.XmlElementNames.SOAPHeaderElementName));

                    // Queue up the next read
                    //reader.Read(); - no need with nodeiterator/treewalker as the node is already a body Node
                }

                // Parse the fault element contained within the SOAP body.
                if (reader.IsElement(soapNamespace, Data.XmlElementNames.SOAPBodyElementName)) {
                    do {
                        reader.Read();

                        // Parse Fault element
                        if (reader.IsElement(soapNamespace, Data.XmlElementNames.SOAPFaultElementName)) {
                            soapFaultDetails = Data.SoapFaultDetails.Parse(reader, soapNamespace);
                        }
                    }
                    while (reader.HasRecursiveParent(Data.XmlElementNames.SOAPBodyElementName));
                }
            }
            catch (XmlException) {
                // If response doesn't contain a valid SOAP fault, just ignore exception and
                // return null for SOAP fault details.
            }

            return soapFaultDetails;
        }
        ReadSoapHeader(reader: Data.EwsXmlReader): void {
            // Is this the ServerVersionInfo?
            if (reader.IsElement(Data.XmlNamespace.Autodiscover, Data.XmlElementNames.ServerVersionInfo)) {
                this.service.ServerInfo = this.ReadServerVersionInfo(reader);
            }
        }
        ReadSoapHeaders(reader: Data.EwsXmlReader): void {
            reader.ReadStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPHeaderElementName);
            do {
                reader.Read();

                this.ReadSoapHeader(reader);
            }
            while (reader.HasRecursiveParent(Data.XmlElementNames.SOAPHeaderElementName));
        }
        Validate(): void {
            //this.Service.Validate();
        }
        WriteAttributesToXml(writer: Data.EwsServiceXmlWriter): any { throw new Error("Not implemented. overridden"); }
        WriteBodyToXml(writer: Data.EwsServiceXmlWriter): void {
            writer.WriteStartElement(Data.XmlNamespace.Autodiscover, this.GetRequestXmlElementName());
            this.WriteAttributesToXml(writer);
            this.WriteElementsToXml(writer);

            writer.WriteEndElement(); // m:this.GetXmlElementName()
        }
        WriteElementsToXml(writer: Data.EwsServiceXmlWriter): any { throw new Error("Not implemented. overridden"); }
        WriteExtraCustomSoapHeadersToXml(writer: Data.EwsServiceXmlWriter): void { }
        WriteSoapRequest(requestUrl: string, //System.Uri, 
            writer: Data.EwsServiceXmlWriter): void {

            writer.WriteStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPEnvelopeElementName);
            writer.WriteAttributeValue("xmlns", Data.EwsUtilities.AutodiscoverSoapNamespacePrefix,Data.EwsUtilities.AutodiscoverSoapNamespace);
            writer.WriteAttributeValue("xmlns", Data.EwsUtilities.WSAddressingNamespacePrefix,Data.EwsUtilities.WSAddressingNamespace);
            writer.WriteAttributeValue("xmlns", Data.EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, Data.EwsUtilities.EwsXmlSchemaInstanceNamespace);
            if (writer.RequireWSSecurityUtilityNamespace) {
                writer.WriteAttributeValue("xmlns", Data.EwsUtilities.WSSecurityUtilityNamespacePrefix, Data.EwsUtilities.WSSecurityUtilityNamespace);
            }

            writer.WriteStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPHeaderElementName);

            //if (this.Service.Credentials != null) {
            //    this.Service.Credentials.EmitExtraSoapHeaderNamespaceAliases(writer.InternalWriter);
            //}

            writer.WriteElementValue(
                Data.XmlNamespace.Autodiscover,
                Data.XmlElementNames.RequestedServerVersion, //LocalName
                Data.XmlElementNames.RequestedServerVersion, // displayName
                Data.ExchangeVersion[this.Service.RequestedServerVersion]
                );

            writer.WriteElementValue(
                Data.XmlNamespace.WSAddressing,
                Data.XmlElementNames.Action,
                Data.XmlElementNames.Action,
                this.GetWsAddressingActionName());

            writer.WriteElementValue(
                Data.XmlNamespace.WSAddressing,
                Data.XmlElementNames.To,
                Data.XmlElementNames.To,
                requestUrl);//.AbsoluteUri);

            this.WriteExtraCustomSoapHeadersToXml(writer);

            //if (this.Service.Credentials != null) {
            //    this.Service.Credentials.SerializeWSSecurityHeaders(writer.InternalWriter);
            //}

            //this.Service.DoOnSerializeCustomSoapHeaders(writer.InternalWriter);

            writer.WriteEndElement(); // soap:Header

            writer.WriteStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPBodyElementName);

            this.WriteBodyToXml(writer);

            writer.WriteEndElement(); // soap:Body
            writer.WriteEndElement(); // soap:Envelope
            writer.Flush();
        }
    }

    export class AutodiscoverResponse {
        ErrorCode: AutodiscoverErrorCode;
        ErrorMessage: string;
        RedirectionUrl: string;//System.Uri;
        private errorCode: AutodiscoverErrorCode;
        private errorMessage: string;
        private redirectionUrl: string;//System.Uri;
        LoadFromXml(reader: Data.EwsXmlReader, endElementName: string): void {
            switch (reader.LocalName) {
                case Data.XmlElementNames.ErrorCode:
                    var errorstring = reader.ReadElementValue();
                    this.ErrorCode = AutodiscoverErrorCode[errorstring];
                    break;
                case Data.XmlElementNames.ErrorMessage:
                    this.ErrorMessage = reader.ReadElementValue();
                    break;
                default:
                    break;
            }
        }
    }
    export class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse {
        Count: number;
        Item: TResponse;
        Responses: TResponse[];//System.Collections.Generic.List<TResponse>;
        private responses: TResponse[];//System.Collections.Generic.List<TResponse>;

        constructor() {
            super();
            this.Responses = new Array<TResponse>();
        }

        CreateResponseInstance(): TResponse { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetResponseCollectionXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseInstanceXmlElementName(): string { throw new Error("Not implemented."); }
        LoadFromXml(reader: Data.EwsXmlReader, endElementName: string): void {
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    if (reader.LocalName == this.GetResponseCollectionXmlElementName()) {
                        this.LoadResponseCollectionFromXml(reader);
                    }
                    else {
                        super.LoadFromXml(reader, endElementName);
                    }
                }
            }

            while (reader.HasRecursiveParent(endElementName));
            //while (!reader.IsEndElement(Data.XmlNamespace.Autodiscover, endElementName));
        }
        LoadResponseCollectionFromXml(reader: Data.EwsXmlReader): void {
            if (!reader.IsEmptyElement) {
                do {
                    reader.Read();
                    if ((reader.NodeType == System.Xml.XmlNodeType.Element) && (reader.LocalName == this.GetResponseInstanceXmlElementName())) {
                        var response: TResponse = this.CreateResponseInstance();
                        response.LoadFromXml(reader, this.GetResponseInstanceXmlElementName());
                        this.Responses.push(response);
                    }
                }
                while (reader.HasRecursiveParent(this.GetResponseCollectionXmlElementName()));
                //while (!reader.IsEndElement(XmlNamespace.Autodiscover, this.GetResponseCollectionXmlElementName()));
            }
        }
    }

}