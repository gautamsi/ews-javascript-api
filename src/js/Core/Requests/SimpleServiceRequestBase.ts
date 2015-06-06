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
            var noserver = { value: true };
            if (noserver.value) {
                var rawXML = '<s:Envelope testns="sent item finditemrequest response" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="172" MinorBuildNumber="25" Version="V2_42" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/></s:Header><s:Body><m:FindItemResponse xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types"><m:ResponseMessages><m:FindItemResponseMessage ResponseClass="Success"><m:ResponseCode>NoError</m:ResponseCode><m:RootFolder IndexedPagingOffset="3" TotalItemsInView="3" IncludesLastItemInRange="false"><t:Items><t:Message><t:ItemId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAABlLnqEAAA=" ChangeKey="CQAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAABlL1+4"/><t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAA=" ChangeKey="AQAAAA=="/><t:ItemClass>IPM.Note</t:ItemClass><t:Subject/><t:Sensitivity>Normal</t:Sensitivity><t:DateTimeReceived>2015-05-31T17:50:34Z</t:DateTimeReceived><t:Size>2993</t:Size><t:Importance>Normal</t:Importance><t:IsSubmitted>false</t:IsSubmitted><t:IsDraft>false</t:IsDraft><t:IsFromMe>false</t:IsFromMe><t:IsResend>false</t:IsResend><t:IsUnmodified>false</t:IsUnmodified><t:DateTimeSent>2015-05-31T17:50:33Z</t:DateTimeSent><t:DateTimeCreated>2015-05-31T17:50:33Z</t:DateTimeCreated><t:DisplayCc/><t:DisplayTo>gs test</t:DisplayTo><t:HasAttachments>false</t:HasAttachments><t:Culture>en-US</t:Culture><t:EffectiveRights><t:CreateAssociated>false</t:CreateAssociated><t:CreateContents>false</t:CreateContents><t:CreateHierarchy>false</t:CreateHierarchy><t:Delete>true</t:Delete><t:Modify>true</t:Modify><t:Read>true</t:Read></t:EffectiveRights><t:LastModifiedName>gs test</t:LastModifiedName><t:LastModifiedTime>2015-05-31T17:50:34Z</t:LastModifiedTime><t:IsAssociated>false</t:IsAssociated><t:WebClientReadFormQueryString>https://outlook.office365.com/owa/?ItemID=AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAABlLnqEAAA%3D&amp;exvsurl=1&amp;viewmodel=ReadMessageItem</t:WebClientReadFormQueryString><t:ConversationId Id="AAQkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAQAK4Gk8eyix1Jh7XBGBFpHIo="/><t:Sender><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:Sender><t:IsReadReceiptRequested>false</t:IsReadReceiptRequested><t:IsDeliveryReceiptRequested>false</t:IsDeliveryReceiptRequested><t:ConversationIndex>AQHQm8pKrgaTx7KLHUmHtcEYEWkcig==</t:ConversationIndex><t:ConversationTopic/><t:From><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:From><t:InternetMessageId>&lt;BN3PR09MB0564BD460ACB5B8C1B3F7A9B89B70@BN3PR09MB0564.namprd09.prod.outlook.com&gt;</t:InternetMessageId><t:IsRead>true</t:IsRead><t:ReceivedBy><t:Mailbox><t:Name>gs test</t:Name><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedBy><t:ReceivedRepresenting><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedRepresenting></t:Message><t:Message><t:ItemId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAABlLnqDAAA=" ChangeKey="CQAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAABlL1+3"/><t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAA=" ChangeKey="AQAAAA=="/><t:ItemClass>IPM.Note</t:ItemClass><t:Subject>test1</t:Subject><t:Sensitivity>Normal</t:Sensitivity><t:DateTimeReceived>2015-05-31T08:58:54Z</t:DateTimeReceived><t:Size>3131</t:Size><t:Importance>Normal</t:Importance><t:IsSubmitted>false</t:IsSubmitted><t:IsDraft>false</t:IsDraft><t:IsFromMe>false</t:IsFromMe><t:IsResend>false</t:IsResend><t:IsUnmodified>false</t:IsUnmodified><t:DateTimeSent>2015-05-31T08:58:53Z</t:DateTimeSent><t:DateTimeCreated>2015-05-31T08:58:53Z</t:DateTimeCreated><t:DisplayCc/><t:DisplayTo>gs test</t:DisplayTo><t:HasAttachments>false</t:HasAttachments><t:Culture>en-US</t:Culture><t:EffectiveRights><t:CreateAssociated>false</t:CreateAssociated><t:CreateContents>false</t:CreateContents><t:CreateHierarchy>false</t:CreateHierarchy><t:Delete>true</t:Delete><t:Modify>true</t:Modify><t:Read>true</t:Read></t:EffectiveRights><t:LastModifiedName>gs test</t:LastModifiedName><t:LastModifiedTime>2015-05-31T08:58:54Z</t:LastModifiedTime><t:IsAssociated>false</t:IsAssociated><t:WebClientReadFormQueryString>https://outlook.office365.com/owa/?ItemID=AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAABlLnqDAAA%3D&amp;exvsurl=1&amp;viewmodel=ReadMessageItem</t:WebClientReadFormQueryString><t:ConversationId Id="AAQkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAQAFLbMLhUNhZKlzXW48PESYU="/><t:Sender><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:Sender><t:IsReadReceiptRequested>false</t:IsReadReceiptRequested><t:IsDeliveryReceiptRequested>false</t:IsDeliveryReceiptRequested><t:ConversationIndex>AQHQm4AEUtswuFQ2FkqXNdbjw8RJhQ==</t:ConversationIndex><t:ConversationTopic>test1</t:ConversationTopic><t:From><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:From><t:InternetMessageId>&lt;BN3PR09MB056458B1443A07E68E82D89789B70@BN3PR09MB0564.namprd09.prod.outlook.com&gt;</t:InternetMessageId><t:IsRead>true</t:IsRead><t:ReceivedBy><t:Mailbox><t:Name>gs test</t:Name><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedBy><t:ReceivedRepresenting><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedRepresenting></t:Message><t:Message><t:ItemId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAAAHlxiEAAA=" ChangeKey="CQAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAAAHlyYn"/><t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAA=" ChangeKey="AQAAAA=="/><t:ItemClass>IPM.Note</t:ItemClass><t:Subject>test</t:Subject><t:Sensitivity>Normal</t:Sensitivity><t:DateTimeReceived>2015-01-08T18:34:17Z</t:DateTimeReceived><t:Size>2958</t:Size><t:Importance>Normal</t:Importance><t:IsSubmitted>false</t:IsSubmitted><t:IsDraft>false</t:IsDraft><t:IsFromMe>false</t:IsFromMe><t:IsResend>false</t:IsResend><t:IsUnmodified>false</t:IsUnmodified><t:DateTimeSent>2015-01-08T18:34:15Z</t:DateTimeSent><t:DateTimeCreated>2015-01-08T18:34:15Z</t:DateTimeCreated><t:DisplayCc/><t:DisplayTo>gs test</t:DisplayTo><t:HasAttachments>false</t:HasAttachments><t:Culture>en-US</t:Culture><t:EffectiveRights><t:CreateAssociated>false</t:CreateAssociated><t:CreateContents>false</t:CreateContents><t:CreateHierarchy>false</t:CreateHierarchy><t:Delete>true</t:Delete><t:Modify>true</t:Modify><t:Read>true</t:Read></t:EffectiveRights><t:LastModifiedName>gs test</t:LastModifiedName><t:LastModifiedTime>2015-01-08T18:34:17Z</t:LastModifiedTime><t:IsAssociated>false</t:IsAssociated><t:WebClientReadFormQueryString>https://outlook.office365.com/owa/?ItemID=AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQBGAAAAAAAt9OU5vf4nTaa38x9WV1pGBwB0vGFf3HZOSb1IxPAYl2sPAAAAAAEJAAB0vGFf3HZOSb1IxPAYl2sPAAAHlxiEAAA%3D&amp;exvsurl=1&amp;viewmodel=ReadMessageItem</t:WebClientReadFormQueryString><t:ConversationId Id="AAQkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAQAJrQcDHVfURPqVDNqP1ipa8="/><t:Sender><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:Sender><t:IsReadReceiptRequested>false</t:IsReadReceiptRequested><t:IsDeliveryReceiptRequested>false</t:IsDeliveryReceiptRequested><t:ConversationIndex>AQHQK3G0mtBwMdV9RE+pUM2o/WKlrw==</t:ConversationIndex><t:ConversationTopic>test</t:ConversationTopic><t:From><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:From><t:InternetMessageId>&lt;BN3PR09MB0564F0951595DDFE11DC76BC89470@BN3PR09MB0564.namprd09.prod.outlook.com&gt;</t:InternetMessageId><t:IsRead>true</t:IsRead><t:ReceivedBy><t:Mailbox><t:Name>gs test</t:Name><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedBy><t:ReceivedRepresenting><t:Mailbox><t:Name>gs test</t:Name><t:EmailAddress>/O=EXCHANGELABS/OU=EXCHANGE ADMINISTRATIVE GROUP (FYDIBOHF23SPDLT)/CN=RECIPIENTS/CN=63A7E24920DA46F9974B330A05270EAD-GSTEST</t:EmailAddress><t:RoutingType>EX</t:RoutingType><t:MailboxType>OneOff</t:MailboxType></t:Mailbox></t:ReceivedRepresenting></t:Message></t:Items></m:RootFolder></m:FindItemResponseMessage></m:ResponseMessages></m:FindItemResponse></s:Body></s:Envelope>';

                var dom = new DOMParser();
                var req = xml2JsObject.parseXMLNode(dom.parseFromString(rawXML, "text/xml").documentElement, true);
                EwsLogging.DebugLog(req, true);
                successDelegate(this.ReadResponsePrivate(req));
                return req;
            }
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

