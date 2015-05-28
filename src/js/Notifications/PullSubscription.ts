import SubscriptionBase = require("./SubscriptionBase");
import GetEventsResults = require("./GetEventsResults");
			
 class PullSubscription extends SubscriptionBase {
	MoreEventsAvailable: boolean;
	private moreEventsAvailable: boolean;
	BeginGetEvents(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/{ throw new Error("PullSubscription.ts - BeginGetEvents : Not implemented.");}
	BeginUnsubscribe(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/{ throw new Error("PullSubscription.ts - BeginUnsubscribe : Not implemented.");}
	EndGetEvents(asyncResult: any /*System.IAsyncResult*/): GetEventsResults{ throw new Error("PullSubscription.ts - EndGetEvents : Not implemented.");}
	EndUnsubscribe(asyncResult: any /*System.IAsyncResult*/): void{ throw new Error("PullSubscription.ts - EndUnsubscribe : Not implemented.");}
	GetEvents(): GetEventsResults{ throw new Error("PullSubscription.ts - GetEvents : Not implemented.");}
	Unsubscribe(): void{ throw new Error("PullSubscription.ts - Unsubscribe : Not implemented.");}
}
export = PullSubscription;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
