import SubscriptionBase = require("./SubscriptionBase");
import GetEventsResults = require("./GetEventsResults");
			
 class PullSubscription extends SubscriptionBase {
	MoreEventsAvailable: boolean;
	private moreEventsAvailable: boolean;
	BeginGetEvents(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/{ throw new Error("Not implemented.");}
	BeginUnsubscribe(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/{ throw new Error("Not implemented.");}
	EndGetEvents(asyncResult: any /*System.IAsyncResult*/): GetEventsResults{ throw new Error("Not implemented.");}
	EndUnsubscribe(asyncResult: any /*System.IAsyncResult*/): void{ throw new Error("Not implemented.");}
	GetEvents(): GetEventsResults{ throw new Error("Not implemented.");}
	Unsubscribe(): void{ throw new Error("Not implemented.");}
}
export = PullSubscription;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
