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
var AvailabilityData_1 = require("../../Enumerations/AvailabilityData");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceError_1 = require("../../Enumerations/ServiceError");
var GetUserAvailabilityResults_1 = require("../../Misc/Availability/GetUserAvailabilityResults");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var AttendeeAvailability_1 = require("../Responses/AttendeeAvailability");
var SuggestionsResponse_1 = require("../Responses/SuggestionsResponse");
var ServiceResponseCollection_1 = require("../Responses/ServiceResponseCollection");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/** @internal */
var GetUserAvailabilityRequest = /** @class */ (function (_super) {
    __extends(GetUserAvailabilityRequest, _super);
    // private attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>; - no need of backing field
    // private timeWindow: TimeWindow;
    // private requestedData: AvailabilityData;
    // private options: AvailabilityOptions;
    function GetUserAvailabilityRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.Attendees = []; //System.Collections.Generic.IEnumerable<AttendeeInfo>;
        _this.TimeWindow = null;
        _this.RequestedData = AvailabilityData_1.AvailabilityData.FreeBusyAndSuggestions;
        _this.Options = null;
        return _this;
    }
    Object.defineProperty(GetUserAvailabilityRequest.prototype, "EmitTimeZoneHeader", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUserAvailabilityRequest.prototype, "IsFreeBusyViewRequested", {
        get: function () { return this.RequestedData == AvailabilityData_1.AvailabilityData.FreeBusy || this.RequestedData == AvailabilityData_1.AvailabilityData.FreeBusyAndSuggestions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUserAvailabilityRequest.prototype, "IsSuggestionsViewRequested", {
        get: function () { return this.RequestedData == AvailabilityData_1.AvailabilityData.Suggestions || this.RequestedData == AvailabilityData_1.AvailabilityData.FreeBusyAndSuggestions; },
        enumerable: true,
        configurable: true
    });
    GetUserAvailabilityRequest.prototype.Execute = function () { return this.InternalExecute(); };
    GetUserAvailabilityRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    GetUserAvailabilityRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetUserAvailabilityResponse; };
    GetUserAvailabilityRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetUserAvailabilityRequest; };
    GetUserAvailabilityRequest.prototype.ParseResponse = function (jsonBody) {
        var serviceResponse = new GetUserAvailabilityResults_1.GetUserAvailabilityResults();
        if (this.IsFreeBusyViewRequested) {
            serviceResponse.AttendeesAvailability = new ServiceResponseCollection_1.ServiceResponseCollection();
            var responseArray = jsonBody[XmlElementNames_1.XmlElementNames.FreeBusyResponseArray];
            var responseMessages = responseArray[XmlElementNames_1.XmlElementNames.FreeBusyResponse];
            if (!Array.isArray(responseMessages)) {
                responseMessages = [responseMessages];
            }
            for (var _i = 0, responseMessages_1 = responseMessages; _i < responseMessages_1.length; _i++) {
                var responseMessage = responseMessages_1[_i];
                var freeBusyResponse = new AttendeeAvailability_1.AttendeeAvailability();
                freeBusyResponse.LoadFromXmlJsObject(responseMessage[XmlElementNames_1.XmlElementNames.ResponseMessage], this.Service);
                if (freeBusyResponse.ErrorCode == ServiceError_1.ServiceError.NoError) {
                    freeBusyResponse.LoadFreeBusyViewFromXmlJsObject(responseMessage[XmlElementNames_1.XmlElementNames.FreeBusyView], this.Options.RequestedFreeBusyView, this.Service);
                }
                serviceResponse.AttendeesAvailability.Add(freeBusyResponse);
            }
        }
        if (this.IsSuggestionsViewRequested) {
            serviceResponse.SuggestionsResponse = new SuggestionsResponse_1.SuggestionsResponse();
            var suggestionResponse = jsonBody[XmlElementNames_1.XmlElementNames.SuggestionsResponse];
            serviceResponse.SuggestionsResponse.LoadFromXmlJsObject(suggestionResponse[XmlElementNames_1.XmlElementNames.ResponseMessage], this.Service);
            if (serviceResponse.SuggestionsResponse.ErrorCode == ServiceError_1.ServiceError.NoError) {
                serviceResponse.SuggestionsResponse.LoadSuggestedDaysFromXml(suggestionResponse, this.Service);
            }
        }
        return serviceResponse;
    };
    GetUserAvailabilityRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        this.Options.Validate(this.TimeWindow.Duration);
    };
    /**@internal */
    GetUserAvailabilityRequest.prototype.WriteElementsToXml = function (writer) {
        // Only serialize the TimeZone property against an Exchange 2007 SP1 server.
        // Against Exchange 2010, the time zone is emitted in the request's SOAP header.
        if (writer.Service.RequestedServerVersion == ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            //todo: implement TimeZone and then LegacyAvailabilityTimeZone
            // var legacyTimeZone:LegacyAvailabilityTimeZone = new LegacyAvailabilityTimeZone(writer.Service.TimeZone);
            // legacyTimeZone.WriteToXml(writer, XmlElementNames.TimeZone);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxDataArray);
        for (var _i = 0, _a = this.Attendees; _i < _a.length; _i++) {
            var attendee = _a[_i];
            attendee.WriteToXml(writer);
        }
        writer.WriteEndElement(); // MailboxDataArray
        this.Options.WriteToXml(writer, this);
    };
    return GetUserAvailabilityRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetUserAvailabilityRequest = GetUserAvailabilityRequest;
