import {NotificationEvent} from "./NotificationEvent";

interface NotificationGroup {
    /// <summary>
    /// Subscription Id
    /// </summary>
    SubscriptionId: string;

    /// <summary>
    /// Events in the response associated with the subscription id.
    /// </summary>
    Events: NotificationEvent[];//Collection<NotificationEvent>
}


