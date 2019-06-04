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
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the base response class to subscription creation operations.
 *
 * @sealed
 * @typeparam	{TSubscription}		The type of the subscription.
 */
var SubscribeResponse = /** @class */ (function (_super) {
    __extends(SubscribeResponse, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeResponse<TSubscription>** class.
     *
     * @param   {TSubscription}   subscription   The subscription.
     */
    function SubscribeResponse(subscription) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(subscription != null, "SubscribeResponse.ctor", "subscription is null");
        _this.subscription = subscription;
        return _this;
    }
    Object.defineProperty(SubscribeResponse.prototype, "Subscription", {
        /**
         * Gets the subscription that was created.
         */
        get: function () {
            return this.subscription;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               responseObject      The response object.
     * @param   {ExchangeService}   service             The service.
     */
    SubscribeResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.subscription.LoadFromXmlJsObject(responseObject, service);
    };
    return SubscribeResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SubscribeResponse = SubscribeResponse;
