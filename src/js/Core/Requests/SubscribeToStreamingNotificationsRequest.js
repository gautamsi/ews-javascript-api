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
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var SubscribeResponse_1 = require("../Responses/SubscribeResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var StreamingSubscription_1 = require("../../Notifications/StreamingSubscription");
var SubscribeRequest_1 = require("./SubscribeRequest");
/**
 * @internal Represents a *Streaming* Subscribe request.
 */
var SubscribeToStreamingNotificationsRequest = /** @class */ (function (_super) {
    __extends(SubscribeToStreamingNotificationsRequest, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeToStreamingNotificationsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SubscribeToStreamingNotificationsRequest(service) {
        return _super.call(this, service) || this;
    }
    /**
     * @internal Creates service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SubscribeResponse<StreamingSubscription>}	Service response.
     */
    SubscribeToStreamingNotificationsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SubscribeResponse_1.SubscribeResponse(new StreamingSubscription_1.StreamingSubscription(service));
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SubscribeToStreamingNotificationsRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1; };
    /**
     * @internal Gets the name of the subscription XML element.
     *
     * @return  {string}      XML element name,
     */
    SubscribeToStreamingNotificationsRequest.prototype.GetSubscriptionXmlElementName = function () { return XmlElementNames_1.XmlElementNames.StreamingSubscriptionRequest; };
    /**
     * @internal Internal method to write XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SubscribeToStreamingNotificationsRequest.prototype.InternalWriteElementsToXml = function (writer) {
    };
    /**
     * @internal Validate request.
     */
    SubscribeToStreamingNotificationsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Watermark)) {
            throw new ArgumentException_1.ArgumentException("Watermarks cannot be used with StreamingSubscriptions.", "Watermark");
        }
    };
    return SubscribeToStreamingNotificationsRequest;
}(SubscribeRequest_1.SubscribeRequest));
exports.SubscribeToStreamingNotificationsRequest = SubscribeToStreamingNotificationsRequest;
