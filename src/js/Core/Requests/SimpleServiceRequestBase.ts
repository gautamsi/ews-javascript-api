import TraceFlags = require("../../Enumerations/TraceFlags");
import RenderingMode = require("../../Enumerations/RenderingMode");
import ServiceRequestException = require("../../Exceptions/ServiceRequestException");
import Strings = require("../../Strings");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import {IPromise} from "../../Interfaces";
import {Promise} from "../../PromiseFactory"
import {EwsLogging} from "../EwsLogging";
import {StringHelper, DOMParser, xml2JsObject} from "../../ExtensionMethods";

import ServiceRequestBase = require("./ServiceRequestBase");
class SimpleServiceRequestBase extends ServiceRequestBase {
    //BeginExecute(callback: System.AsyncCallback, state: any): any/*System.IAsyncResult*/ { throw new Error("SimpleServiceRequestBase.ts - BeginExecute : Not implemented.");}
    //EndInternalExecute(asyncResult: any/*System.IAsyncResult*/): any { throw new Error("SimpleServiceRequestBase.ts - EndInternalExecute : Not implemented.");}
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
            ////////////////////////
            // var rawXML = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"> <s:Header> <h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="154" MinorBuildNumber="18" Version="V2_42" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> </s:Header> <s:Body> <m:GetFolderResponse xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types"> <m:ResponseMessages> <m:GetFolderResponseMessage ResponseClass="Success"> <m:ResponseCode>NoError</m:ResponseCode> <m:Folders> <t:CalendarFolder> <t:FolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAENAAA=" ChangeKey="AgAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAAAAAAA3"/> <t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEIAAA=" ChangeKey="AQAAAA=="/> <t:FolderClass>IPF.Appointment</t:FolderClass> <t:DisplayName>Calendar</t:DisplayName> <t:TotalCount>0</t:TotalCount> <t:ChildFolderCount>0</t:ChildFolderCount> <t:EffectiveRights> <t:CreateAssociated>true</t:CreateAssociated> <t:CreateContents>true</t:CreateContents> <t:CreateHierarchy>true</t:CreateHierarchy> <t:Delete>true</t:Delete> <t:Modify>true</t:Modify> <t:Read>true</t:Read> <t:ViewPrivateItems>true</t:ViewPrivateItems> </t:EffectiveRights> <t:PermissionSet> <t:CalendarPermissions> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Default</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>TimeOnly</t:ReadItems> <t:CalendarPermissionLevel>FreeBusyTimeOnly</t:CalendarPermissionLevel> </t:CalendarPermission> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Anonymous</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>None</t:ReadItems> <t:CalendarPermissionLevel>None</t:CalendarPermissionLevel> </t:CalendarPermission> </t:CalendarPermissions> </t:PermissionSet> </t:CalendarFolder> </m:Folders> </m:GetFolderResponseMessage> </m:ResponseMessages> </m:GetFolderResponse> </s:Body> </s:Envelope>';

            // var dom = new DOMParser();
            // var req = xml2JsObject.parseXMLNode(dom.parseFromString(rawXML, "text/xml").documentElement, true);
            //  successDelegate(this.ReadResponsePrivate(req));
            // EwsLogging.DebugLog(req, true);
            // return req;
            //////////////////////////////////////

            this.ValidateAndEmitRequest(request).then((xhrResponse: XMLHttpRequest) => {
                EwsLogging.DebugLog("sending ews request");
                EwsLogging.DebugLog(request, true);
                var dom = new DOMParser();
                var req = xml2JsObject.parseXMLNode(dom.parseFromString(request.data, "text/xml").documentElement, true);
                EwsLogging.DebugLog(req, true);
                if (xhrResponse.status == 200) {
                    EwsLogging.DebugLog(xhrResponse, true);
                    var ewsXmlReader: EwsServiceXmlReader = new EwsServiceXmlReader(xhrResponse.responseText || xhrResponse.response, this.Service);
                    //EwsLogging.DebugLog(ewsXmlReader.JsObject, true);
                    var serviceResponse = this.ReadResponsePrivate(ewsXmlReader.JsObject);

                }

                if (successDelegate)
                    successDelegate(serviceResponse || xhrResponse.responseText || xhrResponse.response);
                else {
                    if (errorDelegate)
                        errorDelegate(xhrResponse.response);
                }
            }, (resperr: XMLHttpRequest) => {
                EwsLogging.Log("Error in calling service, error code:" + resperr.status);
                    this.ProcessWebException(resperr);
                    if (errorDelegate) errorDelegate(this.SoapFaultDetails || resperr.responseText || resperr.response);
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
export = SimpleServiceRequestBase;
    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

