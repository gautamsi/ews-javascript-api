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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetStreamingEventsResponse_1 = require("../Responses/GetStreamingEventsResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var HangingServiceRequestBase_1 = require("./HangingServiceRequestBase");
/**
 * @internal Represents a GetStreamingEvents request.
 */
var GetStreamingEventsRequest = /** @class */ (function (_super) {
    __extends(GetStreamingEventsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetStreamingEventsRequest** class.
     *
     * @param   {ExchangeService}   	service                The service.
     * @param   {HandleResponseObject} 	serviceObjectHandler   Callback method to handle response objects received.
     * @param   {string[]}   			subscriptionIds        List of subscription ids to listen to on this request.
     * @param   {number}   				connectionTimeout      Connection timeout, in minutes.
     */
    function GetStreamingEventsRequest(service, serviceObjectHandler, subscriptionIds, connectionTimeout) {
        var _this = _super.call(this, service, serviceObjectHandler, GetStreamingEventsRequest.heartbeatFrequency) || this;
        _this.subscriptionIds = subscriptionIds;
        _this.connectionTimeout = connectionTimeout;
        return _this;
    }
    Object.defineProperty(GetStreamingEventsRequest, "HeartbeatFrequency", {
        /**
         * @internal Allow test code to change heartbeat value
         * /remarks/	set only.
         */
        set: function (value) {
            this.heartbeatFrequency = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetStreamingEventsRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetStreamingEventsRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetStreamingEventsResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetStreamingEventsRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetStreamingEvents; };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetStreamingEventsRequest.prototype.ParseResponse = function (jsBody) {
        var jsResponseMessages = jsBody[XmlElementNames_1.XmlElementNames.ResponseMessages];
        var response = new GetStreamingEventsResponse_1.GetStreamingEventsResponse(this);
        response.LoadFromXmlJsObject(jsResponseMessages[XmlElementNames_1.XmlElementNames.GetStreamingEventsResponseMessage], this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetStreamingEventsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SubscriptionIds);
        for (var _i = 0, _a = this.subscriptionIds; _i < _a.length; _i++) {
            var id = _a[_i];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SubscriptionId, id);
        }
        writer.WriteEndElement();
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ConnectionTimeout, this.connectionTimeout);
    };
    GetStreamingEventsRequest.HeartbeatFrequencyDefault = 45000;
    GetStreamingEventsRequest.heartbeatFrequency = GetStreamingEventsRequest.HeartbeatFrequencyDefault;
    return GetStreamingEventsRequest;
}(HangingServiceRequestBase_1.HangingServiceRequestBase));
exports.GetStreamingEventsRequest = GetStreamingEventsRequest;
