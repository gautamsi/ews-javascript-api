import StreamingSubscription = require("./StreamingSubscription");
import NotificationEvent = require("./NotificationEvent");
			
 class NotificationEventArgs {//extends System.EventArgs {
	Subscription: StreamingSubscription;
	Events: NotificationEvent[] /*System.Collections.Generic.IEnumerable<NotificationEvent>*/;
}
export = NotificationEventArgs;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
