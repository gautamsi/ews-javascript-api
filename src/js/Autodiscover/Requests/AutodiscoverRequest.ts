import { AutodiscoverErrorCode } from "../../Enumerations/AutodiscoverErrorCode";
import { AutodiscoverResponse } from "../Responses/AutodiscoverResponse";
import { AutodiscoverResponseException } from "../../Exceptions/AutodiscoverResponseException";
import { AutodiscoverService } from "../AutodiscoverService";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { EwsXmlReader } from "../../Core/EwsXmlReader";
import { ExchangeServerInfo } from "../../Core/ExchangeServerInfo";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { IXHROptions } from "../../Interfaces";
import { Promise } from "../../Promise";
import { ServiceResponse } from "../../Core/Responses/ServiceResponse";
import { ServiceResponseException } from "../../Exceptions/ServiceResponseException";
import { SoapFaultDetails } from "../../Misc/SoapFaultDetails";
import { Uri } from "../../Uri";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { HttpStatusCode } from "../../../lib/HttpStatusCode";

/**
 * @internal Represents the base class for all requested made to the Autodiscover service.
 */
export abstract class AutodiscoverRequest {

  private service: AutodiscoverService;
  private url: Uri = null;

  /**
   * @internal Gets the URL.
   */
  get Service(): AutodiscoverService {
    return this.service;
  }

  /**
   * @internal Gets the service.
   */
  get Url(): Uri {
    return this.url;
  }

  /**
   * @internal Initializes a new instance of the **AutodiscoverRequest** class.
   *
   * @param   {AutodiscoverService}   service   Autodiscover service associated with this request.
   * @param   {Uri}                   url       URL of Autodiscover service.
   */
  constructor(service: AutodiscoverService, url: Uri) {
    this.service = service;
    this.url = url;
  }

  private CreateRedirectionResponse(httpWebResponse: any /*IEwsHttpWebResponse*/): AutodiscoverResponse {
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

  /**
   * @internal Creates the service response.
   *
   * @return  {AutodiscoverResponse}      AutodiscoverResponse
   */
  abstract CreateServiceResponse(): AutodiscoverResponse;

  /**
   * Gets the name of the request XML element.
   *
   * @return  {string}      [description]
   */
  abstract GetRequestXmlElementName(): string;


  GetResponseStream(response: any /*IEwsHttpWebResponse*/): any { //System.IO.Stream{
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

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      [description]
   */
  abstract GetResponseXmlElementName(): string;

  /**
   * @internal Gets the WS-Addressing action name.
   *
   * @return  {string}      [description]
   */
  abstract GetWsAddressingActionName(): string;

  /**
   * Executes this instance.
   *
   * @return  {Promise<AutodiscoverResponse>}      [description]
   */
  async InternalExecute(): Promise<AutodiscoverResponse> {
    this.Validate();
    try {

      var writer = new EwsServiceXmlWriter(this.service);
      this.WriteSoapRequest(this.url, writer);

      if (!this.service)
        throw new Error("Missing Service");

      var cc = writer.GetXML();
      var xhrOptions: IXHROptions = {
        type: "POST",
        data: cc,
        url: this.url.ToString(),
        headers: { "Content-Type": "text/xml" },
      };

      //If not set, credentials might come from custom XHRApi
      if (this.service.Credentials) {
        this.service.Credentials.PrepareWebRequest(xhrOptions);
      }

      EwsLogging.DebugLog("sending ews request");
      EwsLogging.DebugLog({ ...xhrOptions, ...{ headers: { ...xhrOptions.headers, Authorization: "REDACTED" } }}, true);
      const xhrResponse = await this.service.XHRApi.xhr(xhrOptions)
      const ewsXmlReader = new EwsXmlReader(xhrResponse.responseText || xhrResponse.response);
      const responseObject = ewsXmlReader.JsObject;

      EwsLogging.DebugLog(responseObject, true);
      if (xhrResponse.status == 200) {
        EwsLogging.DebugLog(xhrResponse, true);
        this.ReadSoapHeader(responseObject[XmlElementNames.SOAPHeaderElementName]);

        var response: AutodiscoverResponse = this.ReadSoapBody(responseObject);

        if (response.ErrorCode == AutodiscoverErrorCode.NoError) {
          //todo: passon to successDelegate
          //return response;
        }
        else {
          throw new AutodiscoverResponseException(response.ErrorCode, response.ErrorMessage);
        }

      }
      else {
        EwsLogging.Log("status !== 200", true, true);
        EwsLogging.Log(xhrResponse.response, true, true);
        EwsLogging.Log(ewsXmlReader, true, true);

      }

      return response || xhrResponse.responseText || xhrResponse.response;

    } catch (resperr) {
      let exception: any;
      try {
        this.ProcessWebException(resperr);
      }
      catch (exc) {
        exception = exc;
      }
      throw (exception || resperr.responseText || resperr.response);
    }
  }

  /**
   * @internal Determines whether response is a redirection.
   *
   * @param   {XMLHttpRequest}    httpWebResponse   The HTTP web response.
   * @return  {boolean}           True if redirection response.
   */
  static IsRedirectionResponse(httpWebResponse: XMLHttpRequest): boolean {
    return (httpWebResponse.status == HttpStatusCode.Redirect) ||
      (httpWebResponse.status == HttpStatusCode.Moved) ||
      (httpWebResponse.status == HttpStatusCode.RedirectKeepVerb) ||
      (httpWebResponse.status == HttpStatusCode.RedirectMethod);
  }

  /**
   * @internal Loads response from XML.
   *
   * @param   {any} responseObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): AutodiscoverResponse {
    const elementName = this.GetResponseXmlElementName();
    const responseObject = jsObject[elementName];
    var response = this.CreateServiceResponse();
    response.LoadFromXmlJsObject(responseObject[XmlElementNames.Response]);
    return response;
  }

  /**
   * Processes the web exception.
   *
   * @param   {XMLHttpRequest}   webException   The web exception.
   */
  private ProcessWebException(webException: XMLHttpRequest): void {
    if (webException.response) {
      //IEwsHttpWebResponse httpWebResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(webException);
      var soapFaultDetails: SoapFaultDetails = null;

      if (webException.status == HttpStatusCode.InternalServerError) {
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
        var reader = new EwsXmlReader(webException.responseText || webException.response);
        soapFaultDetails = this.ReadSoapFault(reader.JsObject);

        if (soapFaultDetails) {
          //todo: implement soap fault error throw
          throw new ServiceResponseException(new ServiceResponse(soapFaultDetails));
        }
      }
      else {
        //todo: fix this
        this.Service.ProcessHttpErrorResponse(webException, webException);
      }
    }
  }

  /**
   * @internal Read SOAP body.
   *
   * @param   {object}   jsObject   EwsXmlReader
   * @returns {AutodiscoverResponse}  AutodiscoverResponse
   */
  ReadSoapBody(jsObject: object): AutodiscoverResponse {
    var responses = this.LoadFromXmlJsObject(jsObject[XmlElementNames.SOAPBodyElementName]);
    return responses
  }

  /**
   * Reads the SOAP fault.
   *
   * @param   {any}   jsObject   The reader.
   * @return  {SoapFaultDetails}  SOAP fault details.
   */
  private ReadSoapFault(jsObject: any): SoapFaultDetails {
    var soapFaultDetails: SoapFaultDetails = undefined;
    if (jsObject && jsObject[XmlElementNames.SOAPBodyElementName]) {
      var obj = jsObject[XmlElementNames.SOAPBodyElementName];
      if (obj[XmlElementNames.SOAPFaultElementName])
        soapFaultDetails = SoapFaultDetails.Parse(obj[XmlElementNames.SOAPFaultElementName]);
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
  }


  /**
   * @internal Read SOAP headers.
   *
   * @param   {object}   reader   EwsXmlReader
   */
  ReadSoapHeader(jsobject: object): void {
    this.service.ServerInfo = ExchangeServerInfo.Parse(jsobject[XmlElementNames.ServerVersionInfo]);
  }

  /**
   * @internal Validates the request.
   */
  Validate(): void {
    this.Service.Validate();
  }

  /**
   * @internal Writes attributes to request XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  abstract WriteAttributesToXml(writer: EwsServiceXmlWriter): void;

  /**
   * @internal Writes XML body.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteBodyToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Autodiscover, this.GetRequestXmlElementName());
    this.WriteAttributesToXml(writer);
    this.WriteElementsToXml(writer);

    writer.WriteEndElement(); // m:this.GetXmlElementName()
  }

  /**
   * @internal Writes elements to request XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  abstract WriteElementsToXml(writer: EwsServiceXmlWriter): void;

  /**
   * @internal Write extra headers.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer
   */
  WriteExtraCustomSoapHeadersToXml(writer: EwsServiceXmlWriter): void { }

  /**
   * @internal Writes the autodiscover SOAP request.
   *
   * @param   {Uri}                   requestUrl   Request URL.
   * @param   {EwsServiceXmlWriter}   writer       The writer.
   */
  WriteSoapRequest(requestUrl: Uri, writer: EwsServiceXmlWriter): void {

    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);
    writer.WriteAttributeValue("xmlns", EwsUtilities.AutodiscoverSoapNamespacePrefix, EwsUtilities.AutodiscoverSoapNamespace);
    writer.WriteAttributeValue("xmlns", EwsUtilities.WSAddressingNamespacePrefix, EwsUtilities.WSAddressingNamespace);
    writer.WriteAttributeValue("xmlns", EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, EwsUtilities.EwsXmlSchemaInstanceNamespace);
    if (writer.RequireWSSecurityUtilityNamespace) {
      writer.WriteAttributeValue("xmlns", EwsUtilities.WSSecurityUtilityNamespacePrefix, EwsUtilities.WSSecurityUtilityNamespace);
    }

    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPHeaderElementName);

    if (this.Service.Credentials != null) {
      this.Service.Credentials.EmitExtraSoapHeaderNamespaceAliases(writer);
    }

    writer.WriteElementValue(
      XmlNamespace.Autodiscover,
      XmlElementNames.RequestedServerVersion,
      ExchangeVersion[this.Service.RequestedServerVersion]
    );

    writer.WriteElementValue(
      XmlNamespace.WSAddressing,
      XmlElementNames.Action,
      this.GetWsAddressingActionName());

    writer.WriteElementValue(
      XmlNamespace.WSAddressing,
      XmlElementNames.To,
      requestUrl.AbsoluteUri);

    this.WriteExtraCustomSoapHeadersToXml(writer);

    //if (this.Service.Credentials != null) {
    //    this.Service.Credentials.SerializeWSSecurityHeaders(writer.InternalWriter);
    //}

    //this.Service.DoOnSerializeCustomSoapHeaders(writer.InternalWriter);

    writer.WriteEndElement(); // soap:Header

    writer.WriteStartElement(XmlNamespace.Soap, XmlElementNames.SOAPBodyElementName);

    this.WriteBodyToXml(writer);

    writer.WriteEndElement(); // soap:Body
    writer.WriteEndElement(); // soap:Envelope
    writer.Flush();
  }
}
