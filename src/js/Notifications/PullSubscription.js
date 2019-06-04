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
 * Represents a pull subscription.
 *
 * @sealed
 */
var PullSubscription = /** @class */ (function (_super) {
    __extends(PullSubscription, _super);
    /**
     * @internal Initializes a new instance of the **PullSubscription** class.
     *
     * @param   {ExchangeService}   service     The service.
     */
    function PullSubscription(service) {
        var _this = _super.call(this, service) || this;
        _this.moreEventsAvailable = null;
        return _this;
    }
    Object.defineProperty(PullSubscription.prototype, "MoreEventsAvailable", {
        /**
         * Gets a value indicating whether more events are available on the server.
         * MoreEventsAvailable is undefined (null) until GetEvents is called.
         */
        get: function () {
            return this.moreEventsAvailable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Obtains a collection of events that occurred on the subscribed folders since the point in time defined by the Watermark property. When GetEvents succeeds, Watermark is updated.
     *
     * @return  {Promise<GetEventsResults>}      Returns a collection of events that occurred since the last watermark	:Promise.
     */
    PullSubscription.prototype.GetEvents = function () {
        var _this = this;
        return this.Service.GetEvents(this.Id, this.Watermark).then(function (results) {
            _this.Watermark = results.NewWatermark;
            _this.moreEventsAvailable = results.MoreEventsAvailable;
            return results;
        });
    };
    /**
     * Unsubscribes from the pull subscription.
     */
    PullSubscription.prototype.Unsubscribe = function () { return this.Service.Unsubscribe(this.Id); };
    return PullSubscription;
}(SubscriptionBase_1.SubscriptionBase));
exports.PullSubscription = PullSubscription;
