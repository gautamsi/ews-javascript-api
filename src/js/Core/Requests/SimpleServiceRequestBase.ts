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
            var noserver = { value: true };
            if (noserver.value) {
                var rawXML = '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="190" MinorBuildNumber="19" Version="V2_44" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/></s:Header><s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><GetUserAvailabilityResponse xmlns="http://schemas.microsoft.com/exchange/services/2006/messages"><FreeBusyResponseArray><FreeBusyResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><FreeBusyView><FreeBusyViewType xmlns="http://schemas.microsoft.com/exchange/services/2006/types">Detailed</FreeBusyViewType><WorkingHours xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><TimeZone><Bias>300</Bias><StandardTime><Bias>0</Bias><Time>02:00:00</Time><DayOrder>1</DayOrder><Month>11</Month><DayOfWeek>Sunday</DayOfWeek></StandardTime><DaylightTime><Bias>-60</Bias><Time>02:00:00</Time><DayOrder>2</DayOrder><Month>3</Month><DayOfWeek>Sunday</DayOfWeek></DaylightTime></TimeZone><WorkingPeriodArray><WorkingPeriod><DayOfWeek>Monday Tuesday Wednesday Thursday Friday</DayOfWeek><StartTimeInMinutes>480</StartTimeInMinutes><EndTimeInMinutes>1020</EndTimeInMinutes></WorkingPeriod></WorkingPeriodArray></WorkingHours></FreeBusyView></FreeBusyResponse><FreeBusyResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><FreeBusyView><FreeBusyViewType xmlns="http://schemas.microsoft.com/exchange/services/2006/types">FreeBusy</FreeBusyViewType><WorkingHours xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><TimeZone><Bias>480</Bias><StandardTime><Bias>0</Bias><Time>02:00:00</Time><DayOrder>1</DayOrder><Month>11</Month><DayOfWeek>Sunday</DayOfWeek></StandardTime><DaylightTime><Bias>-60</Bias><Time>02:00:00</Time><DayOrder>2</DayOrder><Month>3</Month><DayOfWeek>Sunday</DayOfWeek></DaylightTime></TimeZone><WorkingPeriodArray><WorkingPeriod><DayOfWeek>Monday Tuesday Wednesday Thursday Friday</DayOfWeek><StartTimeInMinutes>480</StartTimeInMinutes><EndTimeInMinutes>1020</EndTimeInMinutes></WorkingPeriod></WorkingPeriodArray></WorkingHours></FreeBusyView></FreeBusyResponse></FreeBusyResponseArray><SuggestionsResponse><ResponseMessage ResponseClass="Success"><ResponseCode>NoError</ResponseCode></ResponseMessage><SuggestionDayResultArray><SuggestionDayResult xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><Date>2015-06-17T00:00:00</Date><DayQuality>Excellent</DayQuality><SuggestionArray><Suggestion><MeetingTime>2015-06-17T15:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T15:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T16:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T16:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T17:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T17:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T18:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T18:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T19:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-17T19:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion></SuggestionArray></SuggestionDayResult><SuggestionDayResult xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><Date>2015-06-18T00:00:00</Date><DayQuality>Excellent</DayQuality><SuggestionArray><Suggestion><MeetingTime>2015-06-18T15:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T15:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T16:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T16:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T17:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T17:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T18:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T18:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T19:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-18T19:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion></SuggestionArray></SuggestionDayResult><SuggestionDayResult xmlns="http://schemas.microsoft.com/exchange/services/2006/types"><Date>2015-06-19T00:00:00</Date><DayQuality>Excellent</DayQuality><SuggestionArray><Suggestion><MeetingTime>2015-06-19T15:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T15:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T16:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T16:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T17:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T17:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T18:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T18:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T19:00:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion><Suggestion><MeetingTime>2015-06-19T19:30:00</MeetingTime><IsWorkTime>true</IsWorkTime><SuggestionQuality>Excellent</SuggestionQuality><AttendeeConflictDataArray><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData><IndividualAttendeeConflictData><BusyType>Free</BusyType></IndividualAttendeeConflictData></AttendeeConflictDataArray></Suggestion></SuggestionArray></SuggestionDayResult></SuggestionDayResultArray></SuggestionsResponse></GetUserAvailabilityResponse></s:Body></s:Envelope>';

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

