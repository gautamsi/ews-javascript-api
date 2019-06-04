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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var SubscribeResponse_1 = require("../Responses/SubscribeResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var PullSubscription_1 = require("../../Notifications/PullSubscription");
var SubscribeRequest_1 = require("./SubscribeRequest");
/**
 * @internal Represents a "pull" Subscribe request.
 */
var SubscribeToPullNotificationsRequest = /** @class */ (function (_super) {
    __extends(SubscribeToPullNotificationsRequest, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeToPullNotificationsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SubscribeToPullNotificationsRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.timeout = 30;
        return _this;
    }
    Object.defineProperty(SubscribeToPullNotificationsRequest.prototype, "Timeout", {
        /**
         * Gets or sets the timeout.
         *
         * @value	The timeout.
         */
        get: function () {
            return this.timeout;
        },
        set: function (value) {
            this.timeout = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SubscribeResponse<PullSubscription>}		Service response.
     */
    SubscribeToPullNotificationsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SubscribeResponse_1.SubscribeResponse(new PullSubscription_1.PullSubscription(service));
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SubscribeToPullNotificationsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the subscription XML element.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SubscribeToPullNotificationsRequest.prototype.GetSubscriptionXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.PullSubscriptionRequest;
    };
    /**
     * @internal Internal method to write XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SubscribeToPullNotificationsRequest.prototype.InternalWriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Timeout, this.Timeout);
    };
    /**
     * @internal Validate request.
     */
    SubscribeToPullNotificationsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if ((this.Timeout < 1) || (this.Timeout > 1440)) {
            throw new ArgumentException_1.ArgumentException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidTimeoutValue, this.Timeout));
        }
    };
    return SubscribeToPullNotificationsRequest;
}(SubscribeRequest_1.SubscribeRequest));
exports.SubscribeToPullNotificationsRequest = SubscribeToPullNotificationsRequest;
