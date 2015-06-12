import {StreamingSubscription} from "./StreamingSubscription";
import {NotificationEvent} from "./NotificationEvent";
export class NotificationEventArgs {//extends System.EventArgs {
	Subscription: StreamingSubscription;
	Events: NotificationEvent[] /*System.Collections.Generic.IEnumerable<NotificationEvent>*/;
}






			

