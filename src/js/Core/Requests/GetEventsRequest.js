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
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var GetEventsResponse_1 = require("../Responses/GetEventsResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal GetEvents request
 */
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetEventsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetEventsRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.subscriptionId = null;
        _this.watermark = null;
        return _this;
    }
    Object.defineProperty(GetEventsRequest.prototype, "SubscriptionId", {
        /**
         * Gets or sets the subscription id.
         *
         * @value	The subscription id.
         */
        get: function () {
            return this.subscriptionId;
        },
        set: function (value) {
            this.subscriptionId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetEventsRequest.prototype, "Watermark", {
        /**
         * Gets or sets the watermark.
         *
         * @value	The watermark.
         */
        get: function () {
            return this.watermark;
        },
        set: function (value) {
            this.watermark = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {GetEventsResponse}		Service response.
     */
    GetEventsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetEventsResponse_1.GetEventsResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetEventsRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetEventsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    GetEventsRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetEventsResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetEventsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetEventsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetEventsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetEvents;
    };
    /**
     * @internal Validate request.
     */
    GetEventsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParam(this.SubscriptionId, "SubscriptionId");
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParam(this.Watermark, "Watermark");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetEventsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SubscriptionId, this.SubscriptionId);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Watermark, this.Watermark);
    };
    return GetEventsRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetEventsRequest = GetEventsRequest;
