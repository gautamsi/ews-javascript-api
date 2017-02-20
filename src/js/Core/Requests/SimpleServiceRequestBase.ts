import {TraceFlags} from "../../Enumerations/TraceFlags";
import {RenderingMode} from "../../Enumerations/RenderingMode";
import {ServiceRequestException} from "../../Exceptions/ServiceRequestException";
import {Strings} from "../../Strings";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import { Promise } from "../../Promise";
import {EwsLogging} from "../EwsLogging";
import {StringHelper, DOMParser, xml2JsObject} from "../../ExtensionMethods";

import {ServiceRequestBase} from "./ServiceRequestBase";
/** @internal */
export class SimpleServiceRequestBase extends ServiceRequestBase {
    //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("SimpleServiceRequestBase.ts - BeginExecute : Not implemented.");}
    //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - EndInternalExecute : Not implemented.");}
    InternalExecute(): Promise<any> {


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

        return new Promise((successDelegate, errorDelegate) => {
            var request = this.BuildXHR();

            //this.ReadResponsePrivate(response);
            this.ValidateAndEmitRequest(request).then((xhrResponse: XMLHttpRequest) => {
                var dom = new DOMParser();
                var xml2js = new xml2JsObject();
                var req = xml2js.parseXMLNode(dom.parseFromString(request.data, "text/xml").documentElement, true);
                EwsLogging.DebugLog(req, true);
                if (xhrResponse.status == 200) {
                    EwsLogging.DebugLog(xhrResponse, true);
                    var ewsXmlReader: EwsServiceXmlReader = new EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, this.Service);
                    //EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                    var serviceResponse = this.ReadResponsePrivate(ewsXmlReader.JsObject);
                    
                    if (successDelegate)
                        successDelegate(serviceResponse || xhrResponse.responseText || xhrResponse.response);
                }
                else {
                    if (errorDelegate)
                        errorDelegate(this.ProcessWebException(serviceResponse || xhrResponse.responseText || xhrResponse.response) || serviceResponse);
                }
            }, (resperr: XMLHttpRequest) => {
                EwsLogging.Log("Error in calling service, error code:" + resperr.status + "\r\n" + resperr.getAllResponseHeaders());
                if (errorDelegate) errorDelegate(this.ProcessWebException(resperr) || resperr);
            });
        });

    }
    private ReadResponsePrivate(response: any /*IEwsHttpWebResponse*/): any {
        var serviceResponse: any;

        try {
            this.Service.ProcessHttpResponseHeaders(TraceFlags.EwsResponseHttpHeaders, response);
            // If tracing is enabled, we read the entire response into a MemoryStream so that we
            // can pass it along to the ITraceListener. Then we parse the response from the
            // MemoryStream.
            if (this.Service.IsTraceEnabledFor(TraceFlags.EwsResponse)) { //todo: implement tracing
                //using(MemoryStream memoryStream = new MemoryStream())
                //{
                //    using(Stream serviceResponseStream = ServiceRequestBase.GetResponseStream(response))
                //    {
                //        // Copy response to in-memory stream and reset position to start.
                //        EwsUtilities.CopyStream(serviceResponseStream, memoryStream);
                //        memoryStream.Position = 0;
                //    }
                //    if (this.Service.RenderingMethod == ExchangeService.RenderingMode.Xml) {
                //        this.TraceResponseXml(response, memoryStream);
                //        serviceResponse = this.ReadResponseXml(memoryStream);
                //    }
                //    else if (this.Service.RenderingMethod == ExchangeService.RenderingMode.JSON) {
                //        this.TraceResponseJson(response, memoryStream);
                //        serviceResponse = this.ReadResponseJson(memoryStream);
                //    }
                //    else {
                //        throw new InvalidOperationException("Unknown RenderingMethod.");
                //    }
                //}
            }
            else {


                if (this.Service.RenderingMethod == RenderingMode.Xml) {
                    serviceResponse = this.ReadResponseXmlJsObject(response);
                }
                else if (this.Service.RenderingMethod == RenderingMode.JSON) {
                    serviceResponse = this.ReadResponseJson(response);
                }
                else {
                    throw new Error/*InvalidOperationException*/("Unknown RenderingMethod.");
                }

            }
        }
        catch (ex) {
            if (ex.Response != null) {
                //IEwsHttpWebResponse exceptionResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(e);
                this.Service.ProcessHttpResponseHeaders(TraceFlags.EwsResponseHttpHeaders, response);
            }
            throw new ServiceRequestException(StringHelper.Format(Strings.ServiceRequestFailed, ex.Message), ex);
        }


        return serviceResponse;
    }
    ReadResponseJson(jsObject: any/*System.IO.Stream*/): any {

        //var jsonResponse: JsonObject = new JsonParser(responseStream).Parse();
        return super.BuildResponseObjectFromJson(jsObject);
    }
    WebRequestAsyncCallback(webAsyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - WebRequestAsyncCallback : Not implemented."); }
}

