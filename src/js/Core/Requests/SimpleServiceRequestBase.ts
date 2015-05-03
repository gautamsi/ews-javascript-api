import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import {IPromise} from "../../Interfaces";
import {Promise} from "../../PromiseFactory"

import ServiceRequestBase = require("./ServiceRequestBase");
class SimpleServiceRequestBase extends ServiceRequestBase {
    //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("Not implemented.");}
    //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("Not implemented.");}
    InternalExecute(): IPromise<any> {


        //var writer = new Data.EwsServiceXmlWriter();
        //this.WriteSoapRequest(this.url, writer);

        //if (!this.Service && !this.Service.Credentials && (!this.Service.Credentials.UserName || this.service.Credentials.Password))
        //    throw new Error("missing credential");

        //var cred = "Basic " + btoa(this.Service.Credentials.UserName + ":" + this.Service.Credentials.Password);
        //var cc = writer.GetXML();
        //var xhrOptions: IXHROptions = {
        //    type: "POST",
        //    data: cc,
        //    url: "https://pod51045.outlook.com/autodiscover/autodiscover.svc",
        //    headers: { "Content-Type": "text/xml", "Authorization": cred },
        //    //customRequestInitializer: function (x) {
        //    //    var m = x;
        //    //}
        //};

        return Promise((successDelegate, errorDelegate, progressDelegate) => {
            var request = this.BuildXHR();


            //this.ReadResponsePrivate(response);


            this.ValidateAndEmitRequest(request).then((xhrResponse: XMLHttpRequest) => {

                if (xhrResponse.status == 200) {
                    var ewsXmlReader: EwsServiceXmlReader = new EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, this.Service);

                    var serviceResponse = this.ReadResponse(ewsXmlReader);

                    ////////ewsXmlReader.Read();
                    ////////if (ewsXmlReader.NodeType == System.Xml.XmlNodeType.Document) {
                    ////////    ewsXmlReader.ReadStartElement(Data.XmlNamespace.Soap, Data.XmlElementNames.SOAPEnvelopeElementName);
                    ////////}
                    ////////else if ((ewsXmlReader.NodeType != System.Xml.XmlNodeType.Element) || (ewsXmlReader.LocalName != Data.XmlElementNames.SOAPEnvelopeElementName) || (ewsXmlReader.NamespaceUri != Data.EwsUtilities.GetNamespaceUri(Data.XmlNamespace.Soap))) {
                    ////////    throw new Error("Invalid autodiscover service response");//Strings.InvalidAutodiscoverServiceResponse);
                    ////////}

                    ////////this.ReadSoapHeaders(ewsXmlReader);

                    ////////var response: AutodiscoverResponse = this.ReadSoapBody(ewsXmlReader);

                    //ewsXmlReader.ReadEndElement(XmlNamespace.Soap, XmlElementNames.SOAPEnvelopeElementName);

                    //if (serviceResponse.ErrorCode == AutodiscoverErrorCode.NoError) {
                    //    //todo: passon to successDelegate
                    //    //return response;
                    //}
                    //else {
                    //    throw new Error("response error " + response.ErrorCode + response.ErrorMessage);// new AutodiscoverResponseException(response.ErrorCode, response.ErrorMessage);
                    //}

                }

                if (successDelegate)
                    successDelegate(serviceResponse || xhrResponse.responseText || xhrResponse.response);
                else {
                    if (errorDelegate)
                        errorDelegate(xhrResponse.response);
                }
            },(resperr: XMLHttpRequest) => {
                    this.ProcessWebException(resperr);
                    if (errorDelegate) errorDelegate(this.SoapFaultDetails || resperr.responseText || resperr.response);
                });
        });

    }
    private ReadResponsePrivate(response: any /*IEwsHttpWebResponse*/): any {
        var serviceResponse:any;

        //try
        //{
        //    this.Service.ProcessHttpResponseHeaders(TraceFlags.EwsResponseHttpHeaders, response);

        //    // If tracing is enabled, we read the entire response into a MemoryStream so that we
        //    // can pass it along to the ITraceListener. Then we parse the response from the
        //    // MemoryStream.
        //    if (this.Service.IsTraceEnabledFor(TraceFlags.EwsResponse)) {
        //        //using(MemoryStream memoryStream = new MemoryStream())
        //        //{
        //        //    using(Stream serviceResponseStream = ServiceRequestBase.GetResponseStream(response))
        //        //    {
        //        //        // Copy response to in-memory stream and reset position to start.
        //        //        EwsUtilities.CopyStream(serviceResponseStream, memoryStream);
        //        //        memoryStream.Position = 0;
        //        //    }

        //        //    if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {
        //        //        this.TraceResponseXml(response, memoryStream);

        //        //        serviceResponse = this.ReadResponseXml(memoryStream);
        //        //    }
        //        //    else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
        //        //        this.TraceResponseJson(response, memoryStream);

        //        //        serviceResponse = this.ReadResponseJson(memoryStream);
        //        //    }
        //        //    else {
        //        //        throw new InvalidOperationException("Unknown RenderingMethod.");
        //        //    }
        //        //}
        //    }
        //    else {
        //        using(Stream responseStream = ServiceRequestBase.GetResponseStream(response))
        //        {
        //            if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {
        //                serviceResponse = this.ReadResponseXml(responseStream);
        //            }
        //            else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
        //                serviceResponse = this.ReadResponseJson(responseStream);
        //            }
        //            else {
        //                throw new InvalidOperationException("Unknown RenderingMethod.");
        //            }
        //        }
        //    }
        //}
        //catch (WebException e)
        //{
        //    if (e.Response != null) {
        //        IEwsHttpWebResponse exceptionResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(e);
        //        this.Service.ProcessHttpResponseHeaders(TraceFlags.EwsResponseHttpHeaders, exceptionResponse);
        //    }

        //    throw new ServiceRequestException(string.Format(Strings.ServiceRequestFailed, e.Message), e);
        //}
        //catch (IOException e)
        //{
        //    // Wrap exception.
        //    throw new ServiceRequestException(string.Format(Strings.ServiceRequestFailed, e.Message), e);
        //}
        //finally
        //{
        //    if (response != null) {
        //        response.Close();
        //    }
        //}

        return serviceResponse;
    }
    ReadResponseJson(responseStream: any/*System.IO.Stream*/): any { throw new Error("could Not implemented."); }
    ReadResponseXml(responseStream: any/*System.IO.Stream*/): any { throw new Error("Not implemented."); }
    WebRequestAsyncCallback(webAsyncResult: any/*System.IAsyncResult*/): any { throw new Error("Not implemented."); }
}
export = SimpleServiceRequestBase;
    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

