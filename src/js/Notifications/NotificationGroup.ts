import {NotificationEvent} from "./NotificationEvent";

/**
 * @internal Structure to track a subscription and its associated notification events.
 */
export class NotificationGroup {

    /**
     * @internal Subscription Id
     */
    SubscriptionId: string = null;

    /**
     * @internal Events in the response associated with the subscription id.
     */
    Events: NotificationEvent[] = [];
}