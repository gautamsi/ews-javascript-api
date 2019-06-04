"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var GetStreamingEventsRequest_1 = require("../Core/Requests/GetStreamingEventsRequest");
var GetStreamingEventsResponse_1 = require("../Core/Responses/GetStreamingEventsResponse");
var NotificationEventArgs_1 = require("./NotificationEventArgs");
var ServiceError_1 = require("../Enumerations/ServiceError");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var ServiceResponseException_1 = require("../Exceptions/ServiceResponseException");
var ServiceResult_1 = require("../Enumerations/ServiceResult");
var Strings_1 = require("../Strings");
var SubscriptionErrorEventArgs_1 = require("./SubscriptionErrorEventArgs");
/**
 * Represents a connection to an ongoing stream of events.
 *
 * @sealed
 */
var StreamingSubscriptionConnection = /** @class */ (function () {
    function StreamingSubscriptionConnection(service, lifetimeOrSubscriptions, lifetime) {
        var _this = this;
        /**
         * Mapping of streaming id to subscriptions currently on the connection.
         */
        this.subscriptions = new AltDictionary_1.DictionaryWithStringKey();
        /**
         * connection lifetime, in minutes
         */
        this.connectionTimeout = 0;
        /**
         * ExchangeService instance used to make the EWS call.
         */
        this.session = null;
        /**
         * Value indicating whether the class is disposed.
         */
        this.isDisposed = false;
        /**
         * Currently used instance of a GetStreamingEventsRequest connected to EWS.
         */
        this.currentHangingRequest = null;
        /**
         * Lock object
         */
        this.lockObject = { isLocked: false };
        /**
         * Occurs when notifications are received from the server.
         */
        this.OnNotificationEvent = [];
        /**
         * Occurs when a subscription encounters an error.
         */
        this.OnSubscriptionError = [];
        /**
         * Occurs when a streaming subscription connection is disconnected from the server.
         */
        this.OnDisconnect = [];
        /**
         * Occurs when a streaming subscription connection gets headers from the server.
         */
        this.OnResponseHeader = [];
        EwsUtilities_1.EwsUtilities.ValidateParam(service, "service");
        EwsUtilities_1.EwsUtilities.ValidateClassVersion(service, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "StreamingSubscriptionConnection");
        var argsLength = arguments.length;
        var lifeTime = argsLength === 2 ? lifetimeOrSubscriptions : lifetime;
        if (lifeTime < 1 || lifeTime > 30) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("lifetime");
        }
        this.session = service;
        this.connectionTimeout = lifeTime;
        if (argsLength === 3) {
            var subscriptions = lifetimeOrSubscriptions;
            EwsUtilities_1.EwsUtilities.ValidateParamCollection(subscriptions, "subscriptions");
            subscriptions.forEach(function (subscription) {
                _this.subscriptions.Add(subscription.Id, subscription);
            });
        }
    }
    Object.defineProperty(StreamingSubscriptionConnection.prototype, "CurrentSubscriptions", {
        /**
         * Getting the current subscriptions in this connection.
         */
        get: function () {
            var list = [];
            //while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.
            //this.lockObject.isLocked = true;
            //try {
            ExtensionMethods_1.ArrayHelper.AddRange(list, this.subscriptions.Values);
            // } finally {
            // 	this.lockObject.isLocked = false;
            // }
            return list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamingSubscriptionConnection.prototype, "IsOpen", {
        /**
         * Gets a value indicating whether this connection is opened
         */
        get: function () {
            this.ThrowIfDisposed();
            if (this.currentHangingRequest == null) {
                return false;
            }
            else {
                return this.currentHangingRequest.IsConnected;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a subscription to this connection.
     *
     * @param   {StreamingSubscription}   subscription   The subscription to add.
     */
    StreamingSubscriptionConnection.prototype.AddSubscription = function (subscription) {
        this.ThrowIfDisposed();
        EwsUtilities_1.EwsUtilities.ValidateParam(subscription, "subscription");
        this.ValidateConnectionState(false, Strings_1.Strings.CannotAddSubscriptionToLiveConnection);
        //while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.
        //this.lockObject.isLocked = true;
        //try {
        if (!this.subscriptions.containsKey(subscription.Id)) {
            this.subscriptions.Add(subscription.Id, subscription);
        }
        // } finally {
        // 	this.lockObject.isLocked = false;
        // }
    };
    /**
     * Closes this connection so it stops receiving events from the server.
     * This terminates a long-standing call to EWS.
     *
     * @exception	{InvalidOperationException}		Thrown when Close is called while not connected.
     */
    StreamingSubscriptionConnection.prototype.Close = function () {
        //todo: implement blocking and non blocking multi threading when available.
        //lock(this.lockObject) {
        this.ThrowIfDisposed();
        this.ValidateConnectionState(true, Strings_1.Strings.CannotCallDisconnectWithNoLiveConnection);
        // Further down in the stack, this will result in a call to our OnRequestDisconnect event handler,
        // doing the necessary cleanup.
        this.currentHangingRequest.Disconnect();
        //}
    };
    StreamingSubscriptionConnection.prototype.Dispose = function (suppressFinalizer) {
        if (suppressFinalizer === void 0) { suppressFinalizer = false; }
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
    };
    /**
     * Handles the service response object.
     *
     * @param   {any}   response   The response.
     */
    StreamingSubscriptionConnection.prototype.HandleServiceResponseObject = function (response) {
        var gseResponse = response;
        if (!(gseResponse instanceof GetStreamingEventsResponse_1.GetStreamingEventsResponse)) {
            throw new ArgumentException_1.ArgumentException();
        }
        else {
            if (gseResponse.Result == ServiceResult_1.ServiceResult.Success || gseResponse.Result == ServiceResult_1.ServiceResult.Warning) {
                if (gseResponse.Results.Notifications.length > 0) {
                    // We got notifications; dole them out.
                    this.IssueNotificationEvents(gseResponse);
                }
                else {
                    //// This was just a heartbeat, nothing to do here.
                }
            }
            else if (gseResponse.Result == ServiceResult_1.ServiceResult.Error) {
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
    };
    /**
     * Internal helper method called when the request disconnects.
     *
     * @param   {Exception}   ex   The exception that caused the disconnection. May be null.
     */
    StreamingSubscriptionConnection.prototype.InternalOnDisconnect = function (ex) {
        var _this = this;
        this.currentHangingRequest = null;
        if (this.OnDisconnect && ExtensionMethods_1.ArrayHelper.isArray(this.OnDisconnect)) {
            try {
                this.OnDisconnect.forEach(function (onDisconnect) { onDisconnect(_this, new SubscriptionErrorEventArgs_1.SubscriptionErrorEventArgs(null, ex)); });
            }
            catch (e) { }
        }
    };
    /**
     * Internal helper method called when the request receives headers.
     *
     * @param   {any}   headers   The headerf from server.
     */
    StreamingSubscriptionConnection.prototype.InternalOnResponseHeader = function (headers) {
        if (this.OnResponseHeader && ExtensionMethods_1.ArrayHelper.isArray(this.OnResponseHeader)) {
            try {
                this.OnResponseHeader.forEach(function (onHeader) { onHeader(headers); });
            }
            catch (e) { }
        }
    };
    /**
     * Issues the general failure.
     *
     * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
     */
    StreamingSubscriptionConnection.prototype.IssueGeneralFailure = function (gseResponse) {
        var _this = this;
        var eventArgs = new SubscriptionErrorEventArgs_1.SubscriptionErrorEventArgs(null, new ServiceResponseException_1.ServiceResponseException(gseResponse));
        if (this.OnSubscriptionError && ExtensionMethods_1.ArrayHelper.isArray(this.OnSubscriptionError)) {
            try {
                this.OnSubscriptionError.forEach(function (OnSubscriptionError) { OnSubscriptionError(_this, eventArgs); });
            }
            catch (e) { }
        }
    };
    /**
     * Issues the notification events.
     *
     * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
     */
    StreamingSubscriptionConnection.prototype.IssueNotificationEvents = function (gseResponse) {
        var _this = this;
        var _loop_1 = function (events) {
            var subscription = null;
            //todo: implement blocking and non blocking multi threading when available.
            //lock(this.lockObject) {
            // Client can do any good or bad things in the below event handler
            if (this_1.subscriptions != null && this_1.subscriptions.containsKey(events.SubscriptionId)) {
                subscription = this_1.subscriptions.get(events.SubscriptionId);
            }
            //}
            if (subscription != null) {
                var eventArgs_1 = new NotificationEventArgs_1.NotificationEventArgs(subscription, events.Events);
                if (this_1.OnNotificationEvent && ExtensionMethods_1.ArrayHelper.isArray(this_1.OnNotificationEvent)) {
                    try {
                        this_1.OnNotificationEvent.forEach(function (OnNotificationEvent) { OnNotificationEvent(_this, eventArgs_1); });
                    }
                    catch (e) { }
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = gseResponse.Results.Notifications; _i < _a.length; _i++) {
            var events = _a[_i];
            _loop_1(events);
        }
    };
    /**
     * Issues the subscription failures.
     *
     * @param   {GetStreamingEventsResponse}   gseResponse   The GetStreamingEvents response.
     */
    StreamingSubscriptionConnection.prototype.IssueSubscriptionFailures = function (gseResponse) {
        var _this = this;
        var exception = new ServiceResponseException_1.ServiceResponseException(gseResponse);
        var _loop_2 = function (id) {
            var subscription = null;
            //todo: implement blocking and non blocking multi threading when available.
            //lock(this.lockObject) {
            // Client can do any good or bad things in the below event handler
            if (this_2.subscriptions != null && this_2.subscriptions.containsKey(id)) {
                subscription = this_2.subscriptions.get(id);
            }
            //}
            if (subscription != null) {
                var eventArgs_2 = new SubscriptionErrorEventArgs_1.SubscriptionErrorEventArgs(subscription, exception);
                if (this_2.OnSubscriptionError && ExtensionMethods_1.ArrayHelper.isArray(this_2.OnSubscriptionError)) {
                    try {
                        this_2.OnSubscriptionError.forEach(function (OnSubscriptionError) { OnSubscriptionError(_this, eventArgs_2); });
                    }
                    catch (e) { }
                }
            }
            if (gseResponse.ErrorCode != ServiceError_1.ServiceError.ErrorMissedNotificationEvents) {
                // Client can do any good or bad things in the above event handler
                //todo: implement blocking and non blocking multi threading when available.
                //lock(this.lockObject) {
                if (this_2.subscriptions != null && this_2.subscriptions.containsKey(id)) {
                    // We are no longer servicing the subscription.
                    this_2.subscriptions.remove(id);
                }
                //}
            }
        };
        var this_2 = this;
        for (var _i = 0, _a = gseResponse.ErrorSubscriptionIds; _i < _a.length; _i++) {
            var id = _a[_i];
            _loop_2(id);
        }
    };
    /**
     * Called when the request is disconnected.
     *
     * @param   {any}   								sender   The sender.
     * @param   {HangingRequestDisconnectEventArgs}   	args     The  instance containing the event data.
     */
    StreamingSubscriptionConnection.prototype.OnRequestDisconnect = function (sender, args) {
        this.InternalOnDisconnect(args.Exception);
    };
    /**
     * Opens this connection so it starts receiving events from the server.
     * This results in a long-standing call to EWS.
     *
     * @exception	{InvalidOperationException}		Thrown when Open is called while connected.
     */
    StreamingSubscriptionConnection.prototype.Open = function () {
        //todo: implement blocking and non blocking multi threading when available.		
        //lock(this.lockObject) {
        this.ThrowIfDisposed();
        this.ValidateConnectionState(false, Strings_1.Strings.CannotCallConnectDuringLiveConnection);
        if (this.subscriptions.Count == 0) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.NoSubscriptionsOnConnection);
        }
        this.currentHangingRequest = new GetStreamingEventsRequest_1.GetStreamingEventsRequest(this.session, this.HandleServiceResponseObject.bind(this), this.subscriptions.Keys, this.connectionTimeout);
        this.currentHangingRequest.OnDisconnect.push(this.OnRequestDisconnect.bind(this)); //todo: fix if needed multiple instance new HangingServiceRequestBase.HangingRequestDisconnectHandler(this.OnRequestDisconnect)
        this.currentHangingRequest.OnResponseHeader = this.InternalOnResponseHeader.bind(this); //todo: fix if needed multiple instance new HangingServiceRequestBase.HangingRequestDisconnectHandler(this.OnRequestDisconnect)
        return this.currentHangingRequest.InternalExecute();
        //}
    };
    /**
     * Removes the specified streaming subscription from the connection.
     *
     * @param   {StreamingSubscription}   subscription   The subscription to remove.
     */
    StreamingSubscriptionConnection.prototype.RemoveSubscription = function (subscription) {
        this.ThrowIfDisposed();
        EwsUtilities_1.EwsUtilities.ValidateParam(subscription, "subscription");
        this.ValidateConnectionState(false, Strings_1.Strings.CannotRemoveSubscriptionFromLiveConnection);
        //while (this.lockObject.isLocked) { }; //todo: implement blocking and non blocking multi threading when available.
        //this.lockObject.isLocked = true;
        //try {
        this.subscriptions.remove(subscription.Id);
        // } finally {
        // 	this.lockObject.isLocked = false;
        // }
    };
    /**
     * Throws if disposed.
     */
    StreamingSubscriptionConnection.prototype.ThrowIfDisposed = function () {
        if (this.isDisposed) {
            throw new Error("ObjectDisposedException - StreamingSubscriptionConnection"); //ObjectDisposedException
        }
    };
    /**
     * Validates the state of the connection.
     *
     * @param   {boolean}   isConnectedExpected   Value indicating whether we expect to be currently connected.
     * @param   {string}   	errorMessage          The error message.
     */
    StreamingSubscriptionConnection.prototype.ValidateConnectionState = function (isConnectedExpected, errorMessage) {
        if ((isConnectedExpected && !this.IsOpen) ||
            (!isConnectedExpected && this.IsOpen)) {
            throw new ServiceLocalException_1.ServiceLocalException(errorMessage);
        }
    };
    return StreamingSubscriptionConnection;
}());
exports.StreamingSubscriptionConnection = StreamingSubscriptionConnection;
