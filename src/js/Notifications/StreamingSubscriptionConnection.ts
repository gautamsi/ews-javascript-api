import {HangingRequestDisconnectEventArgs} from "../Core/Requests/HangingRequestDisconnectEventArgs";
import {SubscriptionErrorEventArgs} from "./SubscriptionErrorEventArgs";
import {NotificationEventArgs} from "./NotificationEventArgs";
import {StreamingSubscription} from "./StreamingSubscription";
import {ExchangeService} from "../Core/ExchangeService";
import {GetStreamingEventsRequest} from "../Core/Requests/GetStreamingEventsRequest";
import {Exception} from "../Exceptions/Exception";
import {GetStreamingEventsResponse} from "../Core/Responses/GetStreamingEventsResponse";
export class StreamingSubscriptionConnection {
	CurrentSubscriptions: StreamingSubscription[] /*System.Collections.Generic.IEnumerable<StreamingSubscription>*/;
	IsOpen: boolean;
	private subscriptions: any /*System.Collections.Generic.Dictionary<string, StreamingSubscription>*/;
	private connectionTimeout: number;
	private session: ExchangeService;
	private isDisposed: boolean;
	private currentHangingRequest: GetStreamingEventsRequest;
	private lockObject: any;
	private OnNotificationEvent: NotificationEventDelegate;
	private OnSubscriptionError: SubscriptionErrorDelegate;
	private OnDisconnect: SubscriptionErrorDelegate;
	AddSubscription(subscription: StreamingSubscription): void { throw new Error("StreamingSubscriptionConnection.ts - AddSubscription : Not implemented."); }
	Close(): void { throw new Error("StreamingSubscriptionConnection.ts - Close : Not implemented."); }
	Dispose(): void { throw new Error("StreamingSubscriptionConnection.ts - Dispose : Not implemented."); }
	//Dispose(suppressFinalizer: boolean): void{ throw new Error("StreamingSubscriptionConnection.ts - Dispose : Not implemented.");}
	Finalize(): void { throw new Error("StreamingSubscriptionConnection.ts - Finalize : Not implemented."); }
	HandleServiceResponseObject(response: any): void { throw new Error("StreamingSubscriptionConnection.ts - HandleServiceResponseObject : Not implemented."); }
	InternalOnDisconnect(ex: Exception): void { throw new Error("StreamingSubscriptionConnection.ts - InternalOnDisconnect : Not implemented."); }
	IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): void { throw new Error("StreamingSubscriptionConnection.ts - IssueGeneralFailure : Not implemented."); }
	IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): void { throw new Error("StreamingSubscriptionConnection.ts - IssueNotificationEvents : Not implemented."); }
	IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): void { throw new Error("StreamingSubscriptionConnection.ts - IssueSubscriptionFailures : Not implemented."); }
	OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): void { throw new Error("StreamingSubscriptionConnection.ts - OnRequestDisconnect : Not implemented."); }
	Open(): void { throw new Error("StreamingSubscriptionConnection.ts - Open : Not implemented."); }
	RemoveSubscription(subscription: StreamingSubscription): void { throw new Error("StreamingSubscriptionConnection.ts - RemoveSubscription : Not implemented."); }
	ThrowIfDisposed(): void { throw new Error("StreamingSubscriptionConnection.ts - ThrowIfDisposed : Not implemented."); }
	ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): void { throw new Error("StreamingSubscriptionConnection.ts - ValidateConnectionState : Not implemented."); }
}

interface NotificationEventDelegate {
	(sender: any, args: NotificationEventArgs): void;
}
interface SubscriptionErrorDelegate {
	(sender: any, args:SubscriptionErrorEventArgs): void;
}






			

