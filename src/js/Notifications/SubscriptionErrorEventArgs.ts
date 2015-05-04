import StreamingSubscription = require("./StreamingSubscription");
import Exception = require("../Exceptions/Exception");
			
 class SubscriptionErrorEventArgs extends System.EventArgs {
	Subscription: StreamingSubscription;
	Exception: Exception;
}
export = SubscriptionErrorEventArgs;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
