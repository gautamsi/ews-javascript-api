import { TraceFlags } from "../../Enumerations/TraceFlags";
import { RenderingMode } from "../../Enumerations/RenderingMode";
import { ServiceRequestException } from "../../Exceptions/ServiceRequestException";
import { Strings } from "../../Strings";
import { EwsServiceXmlReader } from "../EwsServiceXmlReader";
import { Promise } from "../../Promise";
import { EwsLogging } from "../EwsLogging";
import { StringHelper, DOMParser, xml2JsObject } from "../../ExtensionMethods";
import { ServiceRequestBase } from "./ServiceRequestBase";
import { SoapFaultDetails } from "../../Misc/SoapFaultDetails";
import { Exception } from "../../Exceptions/Exception";

/** @internal */
export class SimpleServiceRequestBase extends ServiceRequestBase {
  //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("SimpleServiceRequestBase.ts - BeginExecute : Not implemented.");}
  //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - EndInternalExecute : Not implemented.");}
  async InternalExecute(): Promise<any> {


    var request = this.BuildXHR();
    try {
      const xhrResponse: XMLHttpRequest = await this.ValidateAndEmitRequest(request);
      var dom = new DOMParser();
      var xml2js = new xml2JsObject();
      var req = xml2js.parseXMLNode(dom.parseFromString(request.data, "text/xml").documentElement, true);
      EwsLogging.DebugLog(req, true);
      if (xhrResponse.status == 200) {
        EwsLogging.DebugLog(xhrResponse, true);
        try {

          var ewsXmlReader: EwsServiceXmlReader = new EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, this.Service);
          //EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
          var serviceResponse = this.ReadResponsePrivate(xhrResponse, ewsXmlReader.JsObject);

          return (serviceResponse || xhrResponse.responseText || xhrResponse.response);
        } catch (err) {
          if (err instanceof Exception)
            throw err;
          else
            throw new SoapFaultDetails(err.message);
        }

      }
      else {
        throw (this.ProcessWebException(xhrResponse) || xhrResponse);
      }
    } catch (respErr) {
      EwsLogging.Log("Error in calling service, error code:" + respErr.status + "\r\n" + ((respErr.getAllResponseHeaders) ? respErr.getAllResponseHeaders() : ""));
      throw (this.ProcessWebException(respErr) || respErr);
    }

  }
  private ReadResponsePrivate(response: any /*IEwsHttpWebResponse*/, jsObject: any): any {
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
          serviceResponse = this.ReadResponseXmlJsObject(jsObject);
        }
        else if (this.Service.RenderingMethod == RenderingMode.JSON) {
          serviceResponse = this.ReadResponseJson(jsObject);
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
      throw new ServiceRequestException(StringHelper.Format(Strings.ServiceRequestFailed, ex.message /* ex can be generic Error*/), ex);
    }


    return serviceResponse;
  }
  ReadResponseJson(jsObject: any/*System.IO.Stream*/): any {

    //var jsonResponse: JsonObject = new JsonParser(responseStream).Parse();
    return super.BuildResponseObjectFromJson(jsObject);
  }
  WebRequestAsyncCallback(webAsyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - WebRequestAsyncCallback : Not implemented."); }
}

