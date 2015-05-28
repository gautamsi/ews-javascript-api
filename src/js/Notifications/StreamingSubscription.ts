import SubscriptionBase = require("./SubscriptionBase");
import ExchangeService = require("../Core/ExchangeService");
			
 class StreamingSubscription extends SubscriptionBase {
	Service: ExchangeService;
	UsesWatermark: boolean;
	BeginUnsubscribe(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/{ throw new Error("StreamingSubscription.ts - BeginUnsubscribe : Not implemented.");}
	EndUnsubscribe(asyncResult: any /*System.IAsyncResult*/): void{ throw new Error("StreamingSubscription.ts - EndUnsubscribe : Not implemented.");}
	Unsubscribe(): void{ throw new Error("StreamingSubscription.ts - Unsubscribe : Not implemented.");}
}
export = StreamingSubscription;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
