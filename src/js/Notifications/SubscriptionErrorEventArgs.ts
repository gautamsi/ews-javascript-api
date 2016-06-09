import {Exception} from "../Exceptions/Exception";
import {StreamingSubscription} from "./StreamingSubscription";

/**
 * Provides data to a StreamingSubscriptionConnection's OnSubscriptionError and OnDisconnect events.
 */
export class SubscriptionErrorEventArgs /*extends System.EventArgs*/ {

	/**
	 * Gets the subscription for which an error occurred. If Subscription is null, the error applies to the entire connection.
	 * 
	 * internal set
	 */
	Subscription: StreamingSubscription;

	/**
	 * Gets the exception representing the error. If Exception is null, the connection was cleanly closed by the server.
	 * 
	 * internal set
	 */
	Exception: Exception;

	/**
	 * @internal Initializes a new instance of the **SubscriptionErrorEventArgs** class.
	 *
	 * @param   {StreamingSubscription}   	subscription   The subscription for which an error occurred. If subscription is null, the error applies to the entire connection.
	 * @param   {Exception}   				exception      The exception representing the error. If exception is null, the connection was cleanly closed by the server.
	 */
	constructor(subscription: StreamingSubscription, exception: Exception) {
		this.Subscription = subscription;
		this.Exception = exception;
	}
}