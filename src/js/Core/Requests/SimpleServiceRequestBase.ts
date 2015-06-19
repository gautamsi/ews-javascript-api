import {TraceFlags} from "../../Enumerations/TraceFlags";
import {RenderingMode} from "../../Enumerations/RenderingMode";
import {ServiceRequestException} from "../../Exceptions/ServiceRequestException";
import {Strings} from "../../Strings";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {IPromise} from "../../Interfaces";
import {Promise} from "../../PromiseFactory"
import {EwsLogging} from "../EwsLogging";
import {StringHelper, DOMParser, xml2JsObject} from "../../ExtensionMethods";

import {ServiceRequestBase} from "./ServiceRequestBase";
export class SimpleServiceRequestBase extends ServiceRequestBase {
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
            var noserver = { value: false };
            if (noserver.value) {
                //autodiscover - usersettings
                var rawXML = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:a="http://www.w3.org/2005/08/addressing"><s:Header><a:Action s:mustUnderstand="1">http://schemas.microsoft.com/exchange/2010/Autodiscover/Autodiscover/GetUserSettingsResponse</a:Action><h:ServerVersionInfo xmlns:h="http://schemas.microsoft.com/exchange/2010/Autodiscover" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><h:MajorVersion>15</h:MajorVersion><h:MinorVersion>1</h:MinorVersion><h:MajorBuildNumber>49</h:MajorBuildNumber><h:MinorBuildNumber>12</h:MinorBuildNumber><h:Version>Exchange2013_SP1</h:Version></h:ServerVersionInfo></s:Header><s:Body><GetUserSettingsResponseMessage xmlns="http://schemas.microsoft.com/exchange/2010/Autodiscover"><Response xmlns:i="http://www.w3.org/2001/XMLSchema-instance"><ErrorCode>NoError</ErrorCode><ErrorMessage/><UserResponses><UserResponse><ErrorCode>NoError</ErrorCode><ErrorMessage>No error.</ErrorMessage><RedirectTarget i:nil="true"/><UserSettingErrors><UserSettingError><ErrorCode>SettingIsNotAvailable</ErrorCode><ErrorMessage>User setting \'PublicFolderServer\' is not available. </ErrorMessage><SettingName>PublicFolderServer</SettingName></UserSettingError><UserSettingError><ErrorCode>SettingIsNotAvailable</ErrorCode><ErrorMessage>User setting \'ActiveDirectoryServer\' is not available. </ErrorMessage><SettingName>ActiveDirectoryServer</SettingName></UserSettingError></UserSettingErrors><UserSettings><UserSetting i:type="StringSetting"><Name>UserDisplayName</Name><Value>Gautam Singh</Value></UserSetting><UserSetting i:type="StringSetting"><Name>UserDN</Name><Value>/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=d3a8122a309a4ba38da2b92046226d57-gs</Value></UserSetting><UserSetting i:type="StringSetting"><Name>UserDeploymentId</Name><Value>6912b512-2112-48ab-ba64-191c0620d684</Value></UserSetting><UserSetting i:type="StringSetting"><Name>CasVersion</Name><Value>15.01.0049.012</Value></UserSetting><UserSetting i:type="StringSetting"><Name>EwsSupportedSchemas</Name><Value>Exchange2007, Exchange2007_SP1, Exchange2010, Exchange2010_SP1, Exchange2010_SP2, Exchange2013, Exchange2013_SP1</Value></UserSetting><UserSetting i:type="StringSetting"><Name>InternalMailboxServer</Name><Value>DM2PR09MB0206.namprd09.prod.outlook.com</Value></UserSetting><UserSetting i:type="StringSetting"><Name>GroupingInformation</Name><Value>DM2PR09</Value></UserSetting><UserSetting i:type="StringSetting"><Name>MailboxDN</Name><Value>/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Configuration/cn=Servers/cn=d1a570b9-89e9-409f-89f7-860cc25ba410@singhspro.onmicrosoft.com/cn=Microsoft Private MDB</Value></UserSetting><UserSetting i:type="StringSetting"><Name>EcpDeliveryReportUrlFragment</Name><Value>PersonalSettings/DeliveryReport.aspx?rfr=olk&amp;exsvurl=1&amp;IsOWA=&lt;IsOWA&gt;&amp;MsgID=&lt;MsgID&gt;&amp;Mbx=&lt;Mbx&gt;&amp;realm=singhspro.onmicrosoft.com</Value></UserSetting><UserSetting i:type="StringSetting"><Name>EcpTextMessagingUrlFragment</Name><Value>?rfr=olk&amp;p=sms/textmessaging.slab&amp;exsvurl=1&amp;realm=singhspro.onmicrosoft.com</Value></UserSetting><UserSetting i:type="StringSetting"><Name>EcpPublishingUrlFragment</Name><Value>customize/calendarpublishing.slab?rfr=olk&amp;exsvurl=1&amp;FldID=&lt;FldID&gt;&amp;realm=singhspro.onmicrosoft.com</Value></UserSetting><UserSetting i:type="StringSetting"><Name>ExternalEwsUrl</Name><Value>https://outlook.office365.com/EWS/Exchange.asmx</Value></UserSetting><UserSetting i:type="StringSetting"><Name>ExternalMailboxServer</Name><Value>outlook.office365.com</Value></UserSetting></UserSettings></UserResponse></UserResponses></Response></GetUserSettingsResponseMessage></s:Body></s:Envelope>';

                var dom = new DOMParser();
                var xml2js = new xml2JsObject();
                var req = xml2js.parseXMLNode(dom.parseFromString(rawXML, "text/xml").documentElement, true);
                EwsLogging.DebugLog(req, true);
                successDelegate(this.ReadResponsePrivate(req));
                return req;
            }
            //////////////////////////////////////

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

