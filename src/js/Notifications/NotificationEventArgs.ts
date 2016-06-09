import {NotificationEvent} from "./NotificationEvent";
import {StreamingSubscription} from "./StreamingSubscription";

/**
 * Provides data to a StreamingSubscriptionConnection's OnNotificationEvent event.
 */
export class NotificationEventArgs {//extends System.EventArgs {

	/**
	 * Gets the subscription for which notifications have been received.
	 * 
	 * internal set
	 */
	Subscription: StreamingSubscription;

	/**
	 * Gets the events that were received.
	 * 
	 * internal set
	 */
	Events: NotificationEvent[];

	/**
	 * @internal Initializes a new instance of the **NotificationEventArgs** class.
	 *
	 * @param   {StreamingSubscription}   	subscription   The subscription for which notifications have been received.
	 * @param   {NotificationEvent[]}   	events         The events that were received.
	 */
	constructor(subscription: StreamingSubscription, events: NotificationEvent[]) {
		this.Events = events;
		this.Subscription = subscription;
	}
}