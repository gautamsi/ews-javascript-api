"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutodiscoverErrorCode_1 = require("../../Enumerations/AutodiscoverErrorCode");
var EwsLogging_1 = require("../../Core/EwsLogging");
var EwsServiceXmlWriter_1 = require("../../Core/EwsServiceXmlWriter");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var EwsXmlReader_1 = require("../../Core/EwsXmlReader");
var ExchangeServerInfo_1 = require("../../Core/ExchangeServerInfo");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var Promise_1 = require("../../Promise");
var ServiceResponse_1 = require("../../Core/Responses/ServiceResponse");
var ServiceResponseException_1 = require("../../Exceptions/ServiceResponseException");
var SoapFaultDetails_1 = require("../../Misc/SoapFaultDetails");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var AutodiscoverRequest = /** @class */ (function () {
    function AutodiscoverRequest(service, url) {
        this.url = null;
        this.service = service;
        this.url = url;
    }
    Object.defineProperty(AutodiscoverRequest.prototype, "Service", {
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutodiscoverRequest.prototype, "Url", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    AutodiscoverRequest.prototype.CreateRedirectionResponse = function (httpWebResponse /*IEwsHttpWebResponse*/) {
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
    };
    AutodiscoverRequest.prototype.CreateServiceResponse = function () { throw new Error("AutodiscoverRequest.ts - CreateServiceResponse : Not implemented."); };
    AutodiscoverRequest.prototype.GetRequestXmlElementName = function () { throw new Error("AutodiscoverRequest.ts - GetRequestXmlElementName : Not implemented."); };
    AutodiscoverRequest.prototype.GetResponseStream = function (response /*IEwsHttpWebResponse*/) {
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
    };
    AutodiscoverRequest.prototype.GetResponseXmlElementName = function () { throw new Error("AutodiscoverRequest.ts - GetResponseXmlElementName : Not implemented."); };
    AutodiscoverRequest.prototype.GetWsAddressingActionName = function () { throw new Error("AutodiscoverRequest.ts - GetWsAddressingActionName : Not implemented."); };
    AutodiscoverRequest.prototype.InternalExecute = function () {
        var _this = this;
        var writer = new EwsServiceXmlWriter_1.EwsServiceXmlWriter(this.service);
        this.WriteSoapRequest(this.url, writer);
        if (!this.service)
            throw new Error("Missing Service");
        //var cred = "Basic " + btoa(this.Service.Credentials.UserName + ":" + this.Service.Credentials.Password);
        var cc = writer.GetXML();
        var xhrOptions = {
            type: "POST",
            data: cc,
            //url: "https://pod51045.outlook.com/autodiscover/autodiscover.svc",
            url: this.url.ToString(),
            //headers: { "Content-Type": "text/xml", "Authorization": cred },
            headers: { "Content-Type": "text/xml" },
        };
        //If not set, credentials might come from custom XHRApi
        if (this.service.Credentials)
            this.service.Credentials.PrepareWebRequest(xhrOptions);
        return new Promise_1.Promise(function (successDelegate, errorDelegate) {
            EwsLogging_1.EwsLogging.DebugLog("sending ews request");
            EwsLogging_1.EwsLogging.DebugLog(xhrOptions, true);
            _this.service.XHRApi.xhr(xhrOptions)
                .then(function (xhrResponse) {
                var ewsXmlReader = new EwsXmlReader_1.EwsXmlReader(xhrResponse.responseText || xhrResponse.response);
                //EwsLogging.log(util.inspect(xhrResponse.response, { showHidden: false, depth: null, colors: true }));
                EwsLogging_1.EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                if (xhrResponse.status == 200) {
                    //ewsXmlReader.Read();
                    //if (ewsXmlReader.NodeType == Node.DOCUMENT_NODE /*System.Xml.XmlNodeType.Document*/) {
                    //    ewsXmlReader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
                    //}
                    //else if ((ewsXmlReader.NodeType != Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) || (ewsXmlReader.LocalName != XmlElementNames.SOAPEnvelopeElementName) || (ewsXmlReader.NamespaceUri != EwsUtilities.GetNamespaceUri(XmlNamespace.Soap))) {
                    //    throw new Error(Strings.InvalidAutodiscoverServiceResponse);
                    //}
                    _this.ReadSoapHeaders(ewsXmlReader);
                    var response = _this.ReadSoapBody(ewsXmlReader);
                    //ewsXmlReader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
                    if (response.ErrorCode == AutodiscoverErrorCode_1.AutodiscoverErrorCode.NoError) {
                        //todo: passon to successDelegate
                        //return response;
                    }
                    else {
                        throw new Error("response error " + response.ErrorCode + response.ErrorMessage); // new AutodiscoverResponseException(response.ErrorCode, response.ErrorMessage);
                    }
                }
                else {
                    EwsLogging_1.EwsLogging.Log("status !== 200", true, true);
                    EwsLogging_1.EwsLogging.Log(xhrResponse.response, true, true);
                    EwsLogging_1.EwsLogging.Log(ewsXmlReader, true, true);
                }
                if (successDelegate)
                    successDelegate(response || xhrResponse.responseText || xhrResponse.response);
            }, function (resperr) {
                var exception;
                try {
                    _this.ProcessWebException(resperr);
                }
                catch (exc) {
                    exception = exc;
                }
                if (errorDelegate)
                    errorDelegate(exception || resperr.responseText || resperr.response);
            });
        });
    };
    AutodiscoverRequest.IsRedirectionResponse = function (httpWebResponse) {
        return (httpWebResponse.status == 302 /*System.Net.HttpStatusCode.Redirect*/) ||
            (httpWebResponse.status == 301 /*System.Net.HttpStatusCode.Moved*/) ||
            (httpWebResponse.status == 307 /*System.Net.HttpStatusCode.RedirectKeepVerb*/) ||
            (httpWebResponse.status == 303 /*System.Net.HttpStatusCode.RedirectMethod*/);
    };
    /**@internal */
    AutodiscoverRequest.prototype.LoadFromXml = function (reader) {
        var elementName = this.GetResponseXmlElementName();
        reader.ReadStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, elementName);
        var response = this.CreateServiceResponse();
        response.LoadFromXml(reader, elementName);
        return response;
    };
    AutodiscoverRequest.prototype.LoadFromObject = function (obj) {
        var elementName = this.GetResponseXmlElementName();
        obj = obj.Body[elementName];
        var response = this.CreateServiceResponse();
        response.LoadFromJson(obj[XmlElementNames_1.XmlElementNames.Response]);
        return response;
    };
    AutodiscoverRequest.prototype.ProcessWebException = function (webException) {
        if (webException.response) {
            //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
            var soapFaultDetails = null;
            if (webException.status == 500 /*System.Net.HttpStatusCode.InternalServerError*/) {
                // If tracing is enabled, we read the entire response into a MemoryStream so that we
                // can pass it along to the ITraceListener. Then we parse the response from the
                // MemoryStream.
                //if (this.Service.IsTraceEnabledFor(TraceFlags.AutodiscoverRequest)) {
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
                //var reader = new EwsXmlReader(webException.responseText);
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
                var reader = new EwsXmlReader_1.EwsXmlReader(webException.responseText || webException.response);
                soapFaultDetails = this.ReadSoapFault(reader);
                if (soapFaultDetails) {
                    //todo: implement soap fault error throw
                    throw new ServiceResponseException_1.ServiceResponseException(new ServiceResponse_1.ServiceResponse(soapFaultDetails));
                }
            }
            else {
                //todo: fix this
                this.Service.ProcessHttpErrorResponse(webException, webException);
            }
        }
    };
    /**@internal */
    AutodiscoverRequest.prototype.ReadServerVersionInfo = function (reader) {
        var serverInfo = new ExchangeServerInfo_1.ExchangeServerInfo();
        do {
            reader.Read();
            switch (reader.LocalName) {
                case XmlElementNames_1.XmlElementNames.MajorVersion:
                    serverInfo.MajorVersion = +(reader.ReadElementValue());
                    break;
                case XmlElementNames_1.XmlElementNames.MinorVersion:
                    serverInfo.MinorVersion = +(reader.ReadElementValue());
                    break;
                case XmlElementNames_1.XmlElementNames.MajorBuildNumber:
                    serverInfo.MajorBuildNumber = +(reader.ReadElementValue());
                    break;
                case XmlElementNames_1.XmlElementNames.MinorBuildNumber:
                    serverInfo.MinorBuildNumber = +(reader.ReadElementValue());
                    break;
                case XmlElementNames_1.XmlElementNames.Version:
                    serverInfo.VersionString = reader.ReadElementValue();
                    break;
                default:
                    break;
            }
        } while (reader.ParentNode.localName === XmlElementNames_1.XmlElementNames.ServerVersionInfo);
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.ServerVersionInfo));
        return serverInfo;
    };
    /**@internal */
    AutodiscoverRequest.prototype.ReadSoapBody = function (reader) {
        var responses = this.LoadFromObject(reader.JsObject);
        return responses;
        reader.ReadStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPBodyElementName);
        var responses = this.LoadFromXml(reader);
        //reader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);
        return responses;
    };
    /**@internal */
    AutodiscoverRequest.prototype.ReadSoapFault = function (reader) {
        var soapFaultDetails = undefined;
        if (reader.JsObject && reader.JsObject[XmlElementNames_1.XmlElementNames.SOAPBodyElementName]) {
            var obj = reader.JsObject[XmlElementNames_1.XmlElementNames.SOAPBodyElementName];
            if (obj[XmlElementNames_1.XmlElementNames.SOAPFaultElementName])
                soapFaultDetails = SoapFaultDetails_1.SoapFaultDetails.Parse(obj[XmlElementNames_1.XmlElementNames.SOAPFaultElementName]);
        }
        return soapFaultDetails;
        //skipped xml section, using Json only.
        //////try {
        //////    // WCF may not generate an XML declaration.
        //////    reader.Read();
        //////    //if (reader.NodeType == Node.  System.Xml.XmlNodeType.XmlDeclaration) {
        //////    //    reader.Read();
        //////    //}
        //////    if (reader.LocalName != XmlElementNames.SOAPEnvelopeElementName) {
        //////        return soapFaultDetails;
        //////    }
        //////    // Get the namespace URI from the envelope element and use it for the rest of the parsing.
        //////    // If it's not 1.1 or 1.2, we can't continue.
        //////    var soapNamespace: XmlNamespace = EwsUtilities.GetNamespaceFromUri(reader.NamespaceUri);
        //////    if (soapNamespace == XmlNamespace.NotSpecified) {
        //////        return soapFaultDetails;
        //////    }
        //////    reader.Read();
        //////    // Skip SOAP header.
        //////    if (reader.IsElement(soapNamespace, XmlElementNames.SOAPHeaderElementName)) {
        //////        do {
        //////            reader.Read();
        //////        }
        //////        while (reader.HasRecursiveParent(XmlElementNames.SOAPHeaderElementName));
        //////        // Queue up the next read
        //////        //reader.Read(); - no need with nodeiterator/treewalker as the node is already a body Node
        //////    }
        //////    // Parse the fault element contained within the SOAP body.
        //////    if (reader.IsElement(soapNamespace, XmlElementNames.SOAPBodyElementName)) {
        //////        do {
        //////            reader.Read();
        //////            // Parse Fault element
        //////            if (reader.IsElement(soapNamespace, XmlElementNames.SOAPFaultElementName)) {
        //////                soapFaultDetails = SoapFaultDetails.Parse(reader, soapNamespace);
        //////            }
        //////        }
        //////        while (reader.HasRecursiveParent(XmlElementNames.SOAPBodyElementName));
        //////    }
        //////}
        //////catch (XmlException) {
        //////    // If response doesn't contain a valid SOAP fault, just ignore exception and
        //////    // return null for SOAP fault details.
        //////}
        //////return soapFaultDetails;
    };
    /**@internal */
    AutodiscoverRequest.prototype.ReadSoapHeader = function (reader) {
        // Is this the ServerVersionInfo?
        if (reader.IsElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.ServerVersionInfo)) {
            this.service.ServerInfo = this.ReadServerVersionInfo(reader);
        }
    };
    /**@internal */
    AutodiscoverRequest.prototype.ReadSoapHeaders = function (reader) {
        this.service.ServerInfo = reader.JsObject.Header.ServerVersionInfo;
        //return;
        //reader.ReadStartElement(XmlNamespace.Soap, XmlElementNames.SOAPHeaderElementName);
        //do {
        //    reader.Read();
        //    this.ReadSoapHeader(reader);
        //}
        //while (reader.HasRecursiveParent(XmlElementNames.SOAPHeaderElementName));
    };
    AutodiscoverRequest.prototype.Validate = function () {
        //this.Service.Validate();
    };
    /**@internal */
    AutodiscoverRequest.prototype.WriteAttributesToXml = function (writer) { throw new Error("Not implemented. overridden"); };
    /**@internal */
    AutodiscoverRequest.prototype.WriteBodyToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, this.GetRequestXmlElementName());
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement(); // m:this.GetXmlElementName()
    };
    /**@internal */
    AutodiscoverRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("Not implemented. overridden"); };
    /**@internal */
    AutodiscoverRequest.prototype.WriteExtraCustomSoapHeadersToXml = function (writer) { };
    /**@internal */
    AutodiscoverRequest.prototype.WriteSoapRequest = function (requestUrl, writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPEnvelopeElementName);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespacePrefix, EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespace);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.WSAddressingNamespacePrefix, EwsUtilities_1.EwsUtilities.WSAddressingNamespace);
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, EwsUtilities_1.EwsUtilities.EwsXmlSchemaInstanceNamespace);
        if (writer.RequireWSSecurityUtilityNamespace) {
            writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.WSSecurityUtilityNamespacePrefix, EwsUtilities_1.EwsUtilities.WSSecurityUtilityNamespace);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPHeaderElementName);
        //if (this.Service.Credentials != null) {
        //    this.Service.Credentials.EmitExtraSoapHeaderNamespaceAliases(writer.InternalWriter);
        //}
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.RequestedServerVersion, ExchangeVersion_1.ExchangeVersion[this.Service.RequestedServerVersion]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.WSAddressing, XmlElementNames_1.XmlElementNames.Action, this.GetWsAddressingActionName());
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.WSAddressing, XmlElementNames_1.XmlElementNames.To, requestUrl.ToString()); //.AbsoluteUri);
        this.WriteExtraCustomSoapHeadersToXml(writer);
        //if (this.Service.Credentials != null) {
        //    this.Service.Credentials.SerializeWSSecurityHeaders(writer.InternalWriter);
        //}
        //this.Service.DoOnSerializeCustomSoapHeaders(writer.InternalWriter);
        writer.WriteEndElement(); // soap:Header
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Soap, XmlElementNames_1.XmlElementNames.SOAPBodyElementName);
        this.WriteBodyToXml(writer);
        writer.WriteEndElement(); // soap:Body
        writer.WriteEndElement(); // soap:Envelope
        writer.Flush();
    };
    return AutodiscoverRequest;
}());
exports.AutodiscoverRequest = AutodiscoverRequest;
