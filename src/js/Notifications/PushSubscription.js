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
 * Represents a push subscriptions.
 *
 * @sealed
 */
var PushSubscription = /** @class */ (function (_super) {
    __extends(PushSubscription, _super);
    /**
     * @internal Initializes a new instance of the **PushSubscription** class.
     *
     * @param   {ExchangeService}   service     The service.
     */
    function PushSubscription(service) {
        return _super.call(this, service) || this;
    }
    return PushSubscription;
}(SubscriptionBase_1.SubscriptionBase));
exports.PushSubscription = PushSubscription;
