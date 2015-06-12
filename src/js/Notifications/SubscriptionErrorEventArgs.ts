import {StreamingSubscription} from "./StreamingSubscription";
import {Exception} from "../Exceptions/Exception";
export class SubscriptionErrorEventArgs /*extends System.EventArgs*/ {
	Subscription: StreamingSubscription;
	Exception: Exception;
}






			

