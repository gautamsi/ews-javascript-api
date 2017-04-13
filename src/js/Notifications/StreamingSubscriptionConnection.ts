import { ArgumentException, ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { ArrayHelper } from "../ExtensionMethods";
import { Dictionary, DictionaryWithStringKey } from "../AltDictionary";
import { EwsUtilities } from "../Core/EwsUtilities";
import { Exception } from "../Exceptions/Exception";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { GetStreamingEventsRequest } from "../Core/Requests/GetStreamingEventsRequest";
import { GetStreamingEventsResponse } from "../Core/Responses/GetStreamingEventsResponse";
import { HangingRequestDisconnectEventArgs } from "../Core/Requests/HangingRequestDisconnectEventArgs";
import { NotificationEventArgs } from "./NotificationEventArgs";
import { Promise } from "../Promise";
import { ServiceError } from "../Enumerations/ServiceError";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceResponseException } from "../Exceptions/ServiceResponseException";
import { ServiceResult } from "../Enumerations/ServiceResult";
import { StreamingSubscription } from "./StreamingSubscription";
import { Strings } from "../Strings";
import { SubscriptionErrorEventArgs } from "./SubscriptionErrorEventArgs";

/**
 * Represents a connection to an ongoing stream of events.
 * 
 * @sealed
 */
export class StreamingSubscriptionConnection {

	/**
	 * Mapping of streaming id to subscriptions currently on the connection.
	 */
	private subscriptions: Dictionary<string, StreamingSubscription> = new DictionaryWithStringKey<StreamingSubscription>();

	/**
	 * connection lifetime, in minutes
	 */
	private connectionTimeout: number = 0;

	/**
	 * ExchangeService instance used to make the EWS call.
	 */
	private session: ExchangeService = null;

	/**
	 * Value indicating whether the class is disposed.
	 */
	private isDisposed: boolean = false;

	/**
	 * Currently used instance of a GetStreamingEventsRequest connected to EWS.
	 */
	private currentHangingRequest: GetStreamingEventsRequest = null;

	/**
	 * Lock object
	 */
	private lockObject: { isLocked: boolean } = { isLocked: false };

	/**
	 * Occurs when notifications are received from the server.
	 */
	OnNotificationEvent: NotificationEventDelegate[] = [];

	/**
	 * Occurs when a subscription encounters an error.
	 */
	OnSubscriptionError: SubscriptionErrorDelegate[] = [];

	/**
	 * Occurs when a streaming subscription connection is disconnected from the server.
	 */
	OnDisconnect: SubscriptionErrorDelegate[] = [];

	/**
	 * Getting the current subscriptions in this connection.
	 */
	get CurrentSubscriptions(): StreamingSubscription[] {
		var list: StreamingSubscription[] = [];

		//while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.

		//this.lockObject.isLocked = true;

		//try {
		ArrayHelper.AddRange(list, this.subscriptions.Values);
		// } finally {
		// 	this.lockObject.isLocked = false;
		// }

		return list;
	}

	/**
	 * Gets a value indicating whether this connection is opened
	 */
	get IsOpen(): boolean {
		this.ThrowIfDisposed();
		if (this.currentHangingRequest == null) {
			return false
		}
		else {
			return this.currentHangingRequest.IsConnected;
		}
	}


	/**
	 * Initializes a new instance of the **StreamingSubscriptionConnection** class.
	 *
	 * @param   {ExchangeService}   		service         The ExchangeService instance this connection uses to connect to the server.
	 * @param   {number}   					lifetime        The maximum time, in minutes, the connection will remain open. Lifetime must be between 1 and 30.
	 */
	constructor(service: ExchangeService, lifetime: number);
	/**
	 * Initializes a new instance of the **StreamingSubscriptionConnection** class.
	 *
	 * @param   {ExchangeService}   		service         The ExchangeService instance this connection uses to connect to the server.
	 * @param   {StreamingSubscription[]}   subscriptions   The streaming subscriptions this connection is receiving events for.
	 * @param   {number}   					lifetime        The maximum time, in minutes, the connection will remain open. Lifetime must be between 1 and 30.
	 */
	constructor(service: ExchangeService, subscriptions: StreamingSubscription[], lifetime: number);
	constructor(service: ExchangeService, lifetimeOrSubscriptions: number | StreamingSubscription[], lifetime?: number) {
		EwsUtilities.ValidateParam(service, "service");
		EwsUtilities.ValidateClassVersion(
			service,
			ExchangeVersion.Exchange2010_SP1,
			"StreamingSubscriptionConnection");

		let argsLength = arguments.length;
		let lifeTime: number = argsLength === 2 ? <number>lifetimeOrSubscriptions : lifetime;

		if (lifeTime < 1 || lifeTime > 30) {
			throw new ArgumentOutOfRangeException("lifetime");
		}

		this.session = service;
		this.connectionTimeout = lifeTime;

		if (argsLength === 3) {
			let subscriptions: StreamingSubscription[] = <StreamingSubscription[]>lifetimeOrSubscriptions;
			EwsUtilities.ValidateParamCollection(subscriptions, "subscriptions");
			subscriptions.forEach((subscription: StreamingSubscription) => {
				this.subscriptions.Add(subscription.Id, subscription);
			})
		}
	}

	/**
	 * Adds a subscription to this connection.
	 *
	 * @param   {StreamingSubscription}   subscription   The subscription to add.
	 */
	AddSubscription(subscription: StreamingSubscription): void {
		this.ThrowIfDisposed();

		EwsUtilities.ValidateParam(subscription, "subscription");

		this.ValidateConnectionState(false, Strings.CannotAddSubscriptionToLiveConnection);

		//while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.

		//this.lockObject.isLocked = true;

		//try {
		if (!this.subscriptions.containsKey(subscription.Id)) {
			this.subscriptions.Add(subscription.Id, subscription);
		}
		// } finally {
		// 	this.lockObject.isLocked = false;
		// }
	}

	/**
	 * Closes this connection so it stops receiving events from the server.
	 * This terminates a long-standing call to EWS.
	 * 
	 * @exception	{InvalidOperationException}		Thrown when Close is called while not connected.
	 */
	Close(): void {
		//todo: implement blocking and non blocking multi threading when available.
		//lock(this.lockObject) {
		this.ThrowIfDisposed();

		this.ValidateConnectionState(true, Strings.CannotCallDisconnectWithNoLiveConnection);

		// Further down in the stack, this will result in a call to our OnRequestDisconnect event handler,
		// doing the necessary cleanup.
		this.currentHangingRequest.Disconnect();
		//}
	}

	/**
	 * Frees resources associated with this StreamingSubscriptionConnection.
	 */
	Dispose(): void;
	/**
	 * @private Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
	 *
	 * @param   {boolean}   suppressFinalizer   Value indicating whether to suppress the garbage collector's finalizer..
	 */
	Dispose(suppressFinalizer: boolean): void;
	Dispose(suppressFinalizer: boolean = false): void {
		if (suppressFinalizer) {
			//GC.SuppressFinalize(this);
		}

		//todo: implement blocking and non blocking multi threading when available.
		//lock(this.lockObject) {
		if (!this.isDisposed) {
			if (this.currentHangingRequest != null) {
				this.currentHangingRequest = null;
			}

			this.subscriptions = null;
			this.session = null;

			this.isDisposed = true;
		}
		//}
	}

	/**
	 * Handles the service response object.
	 *
	 * @param   {any}   response   The response.
	 */
	private HandleServiceResponseObject(response: any): void {
		let gseResponse: GetStreamingEventsResponse = response as GetStreamingEventsResponse;

		if (!(gseResponse instanceof GetStreamingEventsResponse)) {
			throw new ArgumentException();
		}
		else {
			if (gseResponse.Result == ServiceResult.Success || gseResponse.Result == ServiceResult.Warning) {
				if (gseResponse.Results.Notifications.length > 0) {
					// We got notifications; dole them out.
					this.IssueNotificationEvents(gseResponse);
				}
				else {
					//// This was just a heartbeat, nothing to do here.
				}
			}
			else if (gseResponse.Result == ServiceResult.Error) {
				if (gseResponse.ErrorSubscriptionIds == null ||
					gseResponse.ErrorSubscriptionIds.length == 0) {
					// General error
					this.IssueGeneralFailure(gseResponse);
				}
				else {
					// subscription-specific errors
					this.IssueSubscriptionFailures(gseResponse);
				}
			}
		}
	}

	/**
	 * Internal helper method called when the request disconnects.
	 *
	 * @param   {Exception}   ex   The exception that caused the disconnection. May be null.
	 */
	private InternalOnDisconnect(ex: Exception): void {
		this.currentHangingRequest = null;

		if (this.OnDisconnect && ArrayHelper.isArray(this.OnDisconnect)) {
			try {
				this.OnDisconnect.forEach((onDisconnect) => { onDisconnect(this, new SubscriptionErrorEventArgs(null, ex)) });
			}
			catch (e) { }
		}
	}

	/**
	 * Issues the general failure.
	 *
	 * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
	 */
	private IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): void {
		let eventArgs: SubscriptionErrorEventArgs = new SubscriptionErrorEventArgs(
			null,
			new ServiceResponseException(gseResponse));

		if (this.OnSubscriptionError && ArrayHelper.isArray(this.OnSubscriptionError)) {
			try {
				this.OnSubscriptionError.forEach((OnSubscriptionError) => { OnSubscriptionError(this, eventArgs) });
			}
			catch (e) { }
		}
	}

	/**
	 * Issues the notification events.
	 *
	 * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
	 */
	private IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): void {

		for (let events of gseResponse.Results.Notifications) {
			let subscription: StreamingSubscription = null;

			//todo: implement blocking and non blocking multi threading when available.
			//lock(this.lockObject) {
			// Client can do any good or bad things in the below event handler
			if (this.subscriptions != null && this.subscriptions.containsKey(events.SubscriptionId)) {
				subscription = this.subscriptions.get(events.SubscriptionId);
			}
			//}

			if (subscription != null) {
				let eventArgs: NotificationEventArgs = new NotificationEventArgs(
					subscription,
					events.Events);

				if (this.OnNotificationEvent && ArrayHelper.isArray(this.OnNotificationEvent)) {
					try {
						this.OnNotificationEvent.forEach((OnNotificationEvent) => { OnNotificationEvent(this, eventArgs) });
					}
					catch (e) { }
				}
			}
		}
	}

	/**
	 * Issues the subscription failures.
	 *
	 * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
	 */
	private IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): void {
		let exception: ServiceResponseException = new ServiceResponseException(gseResponse);

		for (let id of gseResponse.ErrorSubscriptionIds) {
			let subscription: StreamingSubscription = null;

			//todo: implement blocking and non blocking multi threading when available.
			//lock(this.lockObject) {
			// Client can do any good or bad things in the below event handler
			if (this.subscriptions != null && this.subscriptions.containsKey(id)) {
				subscription = this.subscriptions.get(id);
			}
			//}

			if (subscription != null) {
				let eventArgs: SubscriptionErrorEventArgs = new SubscriptionErrorEventArgs(
					subscription,
					exception);

				if (this.OnSubscriptionError && ArrayHelper.isArray(this.OnSubscriptionError)) {
					try {
						this.OnSubscriptionError.forEach((OnSubscriptionError) => { OnSubscriptionError(this, eventArgs) });
					}
					catch (e) { }
				}
			}

			if (gseResponse.ErrorCode != ServiceError.ErrorMissedNotificationEvents) {
				// Client can do any good or bad things in the above event handler
				//todo: implement blocking and non blocking multi threading when available.
				//lock(this.lockObject) {
				if (this.subscriptions != null && this.subscriptions.containsKey(id)) {
					// We are no longer servicing the subscription.
					this.subscriptions.remove(id);
				}
				//}
			}
		}
	}

	/**
	 * Called when the request is disconnected.
	 *
	 * @param   {any}   								sender   The sender.
	 * @param   {HangingRequestDisconnectEventArgs}   	args     The  instance containing the event data.
	 */
	private OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): void {
		this.InternalOnDisconnect(args.Exception);
	}

	/**
	 * Opens this connection so it starts receiving events from the server.
	 * This results in a long-standing call to EWS.
	 * 
	 * @exception	{InvalidOperationException}		Thrown when Open is called while connected.
	 */
	Open(): Promise<void> {
		//todo: implement blocking and non blocking multi threading when available.		
		//lock(this.lockObject) {
		this.ThrowIfDisposed();

		this.ValidateConnectionState(false, Strings.CannotCallConnectDuringLiveConnection);

		if (this.subscriptions.Count == 0) {
			throw new ServiceLocalException(Strings.NoSubscriptionsOnConnection);
		}

		this.currentHangingRequest = new GetStreamingEventsRequest(
			this.session,
			this.HandleServiceResponseObject.bind(this),
			this.subscriptions.Keys,
			this.connectionTimeout);

		this.currentHangingRequest.OnDisconnect.push(this.OnRequestDisconnect.bind(this)); //todo: fix if needed multiple instance new HangingServiceRequestBase.HangingRequestDisconnectHandler(this.OnRequestDisconnect)

		return this.currentHangingRequest.InternalExecute();
		//}
	}

	/**
	 * Removes the specified streaming subscription from the connection.
	 *
	 * @param   {StreamingSubscription}   subscription   The subscription to remove.
	 */
	RemoveSubscription(subscription: StreamingSubscription): void {

		this.ThrowIfDisposed();

		EwsUtilities.ValidateParam(subscription, "subscription");

		this.ValidateConnectionState(false, Strings.CannotRemoveSubscriptionFromLiveConnection);

		//while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.

		//this.lockObject.isLocked = true;

		//try {
		this.subscriptions.remove(subscription.Id);
		// } finally {
		// 	this.lockObject.isLocked = false;
		// }
	}

	/**
	 * Throws if disposed.
	 */
	ThrowIfDisposed(): void {
		if (this.isDisposed) {
			throw new Error("ObjectDisposedException - StreamingSubscriptionConnection"); //ObjectDisposedException
		}
	}

	/**
	 * Validates the state of the connection.
	 *
	 * @param   {boolean}   isConnectedExpected   Value indicating whether we expect to be currently connected.
	 * @param   {string}   	errorMessage          The error message.
	 */
	ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): void {
		if ((isConnectedExpected && !this.IsOpen) ||
			(!isConnectedExpected && this.IsOpen)) {
			throw new ServiceLocalException(errorMessage);
		}
	}
}

/**
 * Represents a delegate that is invoked when notifications are received from the server
 *
 * @param   {any}   					sender   The StreamingSubscriptionConnection instance that received the events.
 * @param   {NotificationEventArgs}   	args     The event data.
 */
export interface NotificationEventDelegate {
	(sender: any, args: NotificationEventArgs): void;
}

/**
 * Represents a delegate that is invoked when an error occurs within a streaming subscription connection.
 *
 * @param   {any}   						sender   The StreamingSubscriptionConnection instance within which the error occurred.
 * @param   {SubscriptionErrorEventArgs}   	args     The event data.
 */
export interface SubscriptionErrorDelegate {
	(sender: any, args: SubscriptionErrorEventArgs): void;
}