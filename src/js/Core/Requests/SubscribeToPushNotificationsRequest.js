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
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var SubscribeResponse_1 = require("../Responses/SubscribeResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var PushSubscription_1 = require("../../Notifications/PushSubscription");
var SubscribeRequest_1 = require("./SubscribeRequest");
/**
 * @internal Represents a "push" Subscribe request.
 */
var SubscribeToPushNotificationsRequest = /** @class */ (function (_super) {
    __extends(SubscribeToPushNotificationsRequest, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeToPushNotificationsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SubscribeToPushNotificationsRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.frequency = 30;
        _this.url = null;
        _this.callerData = null;
        return _this;
    }
    Object.defineProperty(SubscribeToPushNotificationsRequest.prototype, "Frequency", {
        /**
         * Gets or sets the frequency.
         *
         * @value	The frequency.
         */
        get: function () {
            return this.frequency;
        },
        set: function (value) {
            this.frequency = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscribeToPushNotificationsRequest.prototype, "Url", {
        /**
         * Gets or sets the URL.
         *
         * @value	The URL.
         */
        get: function () {
            return this.url;
        },
        set: function (value) {
            this.url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscribeToPushNotificationsRequest.prototype, "CallerData", {
        /**
         * Gets or sets the CallerData.
         *
         * @value	The CallerData.
         */
        get: function () {
            return this.callerData;
        },
        set: function (value) {
            this.callerData = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SubscribeResponse<PushSubscription>}		Service response.
     */
    SubscribeToPushNotificationsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SubscribeResponse_1.SubscribeResponse(new PushSubscription_1.PushSubscription(service));
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SubscribeToPushNotificationsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the subscription XML element.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SubscribeToPushNotificationsRequest.prototype.GetSubscriptionXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.PushSubscriptionRequest;
    };
    /**
     * @internal Internal method to write XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SubscribeToPushNotificationsRequest.prototype.InternalWriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StatusFrequency, this.Frequency);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.URL, this.Url.ToString());
        if (this.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013
            && !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.callerData)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CallerData, this.CallerData);
        }
    };
    /**
     * @internal Validate request.
     */
    SubscribeToPushNotificationsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.Url, "Url");
        if ((this.Frequency < 1) || (this.Frequency > 1440)) {
            throw new ArgumentException_1.ArgumentException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidFrequencyValue, this.Frequency));
        }
    };
    return SubscribeToPushNotificationsRequest;
}(SubscribeRequest_1.SubscribeRequest));
exports.SubscribeToPushNotificationsRequest = SubscribeToPushNotificationsRequest;
