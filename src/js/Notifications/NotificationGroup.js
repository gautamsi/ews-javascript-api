"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Structure to track a subscription and its associated notification events.
 */
var NotificationGroup = /** @class */ (function () {
    function NotificationGroup() {
        /**
         * @internal Subscription Id
         */
        this.SubscriptionId = null;
        /**
         * @internal Events in the response associated with the subscription id.
         */
        this.Events = [];
    }
    return NotificationGroup;
}());
exports.NotificationGroup = NotificationGroup;
