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
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var GetStreamingEventsResults_1 = require("../../Notifications/GetStreamingEventsResults");
var HangingRequestDisconnectReason_1 = require("../../Enumerations/HangingRequestDisconnectReason");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Enumeration of ConnectionStatus that can be returned by the server.
 */
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["OK"] = 0] = "OK";
    ConnectionStatus[ConnectionStatus["Closed"] = 1] = "Closed";
})(ConnectionStatus || (ConnectionStatus = {}));
/**
 * @internal Represents the response to a subscription event retrieval operation.
 *
 * @sealed
 */
var GetStreamingEventsResponse = /** @class */ (function (_super) {
    __extends(GetStreamingEventsResponse, _super);
    /**
     * Initializes a new instance of the **GetStreamingEventsResponse** class.
     *
     * @param   {HangingServiceRequestBase}   request   Request to disconnect when we get a close message.
     */
    function GetStreamingEventsResponse(request) {
        var _this = _super.call(this) || this;
        _this.results = new GetStreamingEventsResults_1.GetStreamingEventsResults();
        _this.request = null;
        /**
         * Gets the error subscription ids.
         *
         * @private set
         * @value	The error subscription ids.
         */
        _this.ErrorSubscriptionIds = [];
        _this.ErrorSubscriptionIds = [];
        _this.request = request;
        return _this;
    }
    Object.defineProperty(GetStreamingEventsResponse.prototype, "Results", {
        /**
         * Gets event results from subscription.
         */
        get: function () {
            return this.results;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads extra error details from XML
     *
     * @param   {any}   			responseObject      Json Object converted from XML.
     * @param   {ExchangeService}   service             The service.
     */
    GetStreamingEventsResponse.prototype.LoadExtraErrorDetailsFromXmlJsObject = function (responseObject, service) {
        var _this = this;
        _super.prototype.LoadExtraErrorDetailsFromXmlJsObject.call(this, responseObject, service);
        if (responseObject[XmlElementNames_1.XmlElementNames.ErrorSubscriptionIds]) {
            var errorSubscriptionIds = responseObject[XmlElementNames_1.XmlElementNames.ErrorSubscriptionIds];
            if (errorSubscriptionIds[XmlElementNames_1.XmlElementNames.SubscriptionId]) {
                var subscriptionIds = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(errorSubscriptionIds, XmlElementNames_1.XmlElementNames.SubscriptionId);
                subscriptionIds.forEach(function (subscriptionId) {
                    _this.ErrorSubscriptionIds.push(subscriptionId);
                });
            }
        }
    };
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetStreamingEventsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Notifications]) {
            this.results.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.Notifications], service);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ConnectionStatus]) {
            var connectionStatus = jsObject[XmlElementNames_1.XmlElementNames.ConnectionStatus];
            if (connectionStatus === ConnectionStatus[ConnectionStatus.Closed]) {
                this.request.Disconnect(HangingRequestDisconnectReason_1.HangingRequestDisconnectReason.Clean, null);
            }
        }
    };
    return GetStreamingEventsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetStreamingEventsResponse = GetStreamingEventsResponse;
