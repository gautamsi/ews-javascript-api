"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TraceFlags_1 = require("../../Enumerations/TraceFlags");
var RenderingMode_1 = require("../../Enumerations/RenderingMode");
var ServiceRequestException_1 = require("../../Exceptions/ServiceRequestException");
var Strings_1 = require("../../Strings");
var EwsServiceXmlReader_1 = require("../EwsServiceXmlReader");
var Promise_1 = require("../../Promise");
var EwsLogging_1 = require("../EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ServiceRequestBase_1 = require("./ServiceRequestBase");
var SoapFaultDetails_1 = require("../../Misc/SoapFaultDetails");
var Exception_1 = require("../../Exceptions/Exception");
/** @internal */
var SimpleServiceRequestBase = /** @class */ (function (_super) {
    __extends(SimpleServiceRequestBase, _super);
    function SimpleServiceRequestBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("SimpleServiceRequestBase.ts - BeginExecute : Not implemented.");}
    //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - EndInternalExecute : Not implemented.");}
    SimpleServiceRequestBase.prototype.InternalExecute = function () {
        //var writer = new Data.EwsServiceXmlWriter();
        //this.WriteSoapRequest(this.url, writer);
        var _this = this;
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
        return new Promise_1.Promise(function (successDelegate, errorDelegate) {
            var request = _this.BuildXHR();
            //this.ReadResponsePrivate(response);
            _this.ValidateAndEmitRequest(request).then(function (xhrResponse) {
                var dom = new ExtensionMethods_1.DOMParser();
                var xml2js = new ExtensionMethods_1.xml2JsObject();
                var req = xml2js.parseXMLNode(dom.parseFromString(request.data, "text/xml").documentElement, true);
                EwsLogging_1.EwsLogging.DebugLog(req, true);
                if (xhrResponse.status == 200) {
                    EwsLogging_1.EwsLogging.DebugLog(xhrResponse, true);
                    try {
                        var ewsXmlReader = new EwsServiceXmlReader_1.EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, _this.Service);
                        //EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                        var serviceResponse = _this.ReadResponsePrivate(ewsXmlReader.JsObject, xhrResponse);
                        if (successDelegate)
                            successDelegate(serviceResponse || xhrResponse.responseText || xhrResponse.response);
                    }
                    catch (err) {
                        if (err instanceof Exception_1.Exception)
                            errorDelegate(err);
                        else
                            errorDelegate(new SoapFaultDetails_1.SoapFaultDetails(err.message));
                    }
                }
                else {
                    if (errorDelegate)
                        errorDelegate(_this.ProcessWebException(xhrResponse) || xhrResponse);
                }
            }, function (resperr) {
                EwsLogging_1.EwsLogging.Log("Error in calling service, error code:" + resperr.status + "\r\n" + ((resperr.getAllResponseHeaders) ? resperr.getAllResponseHeaders() : ""));
                if (errorDelegate)
                    errorDelegate(_this.ProcessWebException(resperr) || resperr);
            });
        });
    };
    SimpleServiceRequestBase.prototype.ReadResponsePrivate = function (response /*IEwsHttpWebResponse*/, xhrResponse) {
        var serviceResponse;
        try {
            this.Service.ProcessHttpResponseHeaders(TraceFlags_1.TraceFlags.EwsResponseHttpHeaders, xhrResponse);
            // If tracing is enabled, we read the entire response into a MemoryStream so that we
            // can pass it along to the ITraceListener. Then we parse the response from the
            // MemoryStream.
            if (this.Service.IsTraceEnabledFor(TraceFlags_1.TraceFlags.EwsResponse)) { //todo: implement tracing
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
                if (this.Service.RenderingMethod == RenderingMode_1.RenderingMode.Xml) {
                    serviceResponse = this.ReadResponseXmlJsObject(response);
                }
                else if (this.Service.RenderingMethod == RenderingMode_1.RenderingMode.JSON) {
                    serviceResponse = this.ReadResponseJson(response);
                }
                else {
                    throw new Error /*InvalidOperationException*/("Unknown RenderingMethod.");
                }
            }
        }
        catch (ex) {
            if (ex.Response != null) {
                //IEwsHttpWebResponse exceptionResponse = this.Service.HttpWebRequestFactory.CreateExceptionResponse(e);
                this.Service.ProcessHttpResponseHeaders(TraceFlags_1.TraceFlags.EwsResponseHttpHeaders, response);
            }
            throw new ServiceRequestException_1.ServiceRequestException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ServiceRequestFailed, ex.message /* ex can be generic Error*/), ex);
        }
        return serviceResponse;
    };
    SimpleServiceRequestBase.prototype.ReadResponseJson = function (jsObject /*System.IO.Stream*/) {
        //var jsonResponse: JsonObject = new JsonParser(responseStream).Parse();
        return _super.prototype.BuildResponseObjectFromJson.call(this, jsObject);
    };
    SimpleServiceRequestBase.prototype.WebRequestAsyncCallback = function (webAsyncResult /*System.IAsyncResult*/) { throw new Error("SimpleServiceRequestBase.ts - WebRequestAsyncCallback : Not implemented."); };
    return SimpleServiceRequestBase;
}(ServiceRequestBase_1.ServiceRequestBase));
exports.SimpleServiceRequestBase = SimpleServiceRequestBase;
