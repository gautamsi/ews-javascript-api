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
var SubscriptionBase_1 = require("./SubscriptionBase");
/**
 * Represents a streaming subscription.
 *
 * @sealed
 */
var StreamingSubscription = /** @class */ (function (_super) {
    __extends(StreamingSubscription, _super);
    /**
     * @internal Initializes a new instance of the **StreamingSubscription** class.
     *
     * @param   {ExchangeService}   service     The service.
     */
    function StreamingSubscription(service) {
        var _this = _super.call(this, service) || this;
        _this.service = service;
        return _this;
    }
    Object.defineProperty(StreamingSubscription.prototype, "Service", {
        /**
         * Gets the service used to create this subscription.
         */
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamingSubscription.prototype, "UsesWatermark", {
        /**
         * Gets a value indicating whether this subscription uses watermarks.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unsubscribes from the streaming subscription.
     */
    StreamingSubscription.prototype.Unsubscribe = function () { return this.Service.Unsubscribe(this.Id); };
    return StreamingSubscription;
}(SubscriptionBase_1.SubscriptionBase));
exports.StreamingSubscription = StreamingSubscription;
