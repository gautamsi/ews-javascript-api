import MultiResponseServiceRequest = require("../../Core/Requests/MultiResponseServiceRequest");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import JsonObject = require("../../Core/JsonObject");
import ServiceResponse = require("../../Core/Responses/ServiceResponse");
import StreamingSubscriptionConnection = require("../../Notifications/StreamingSubscriptionConnection");
import SubscribeResponse = require("../../Core/Responses/SubscribeResponse");
import ServiceRequestBase = require("../../Core/Requests/ServiceRequestBase");
import LazyMember = require("../../Core/LazyMember");
import FolderId = require("../../ComplexProperties/FolderId");
module Microsoft.Exchange.WebServices.Data {
    export class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {
        SubscriptionId: string;
        Watermark: string;
        private subscriptionId: string;
        private watermark: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetStreamingEventsRequest extends HangingServiceRequestBase {
        HeartbeatFrequency: number;
        private subscriptionIds: string[];//System.Collections.Generic.IEnumerable<string>;
        private connectionTimeout: number;
        private static heartbeatFrequency: number;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class SubscribeRequest<TSubscription extends SubscriptionBase> extends MultiResponseServiceRequest<SubscribeResponse<TSubscription>> {
        FolderIds: FolderIdWrapperList;
        EventTypes: EventType[];//System.Collections.Generic.List<EventType>;
        Watermark: string;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetSubscriptionXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {
        SubscriptionId: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class StreamingSubscription extends SubscriptionBase {
        Service: ExchangeService;
        UsesWatermark: boolean;
        BeginUnsubscribe(callback: any/*System.AsyncCallback*/, state: any): any/*System.IAsyncResult*/{ throw new Error("Not implemented.");}
        EndUnsubscribe(asyncResult: any/*System.IAsyncResult*/): any{ throw new Error("Not implemented.");}
        Unsubscribe(): any{ throw new Error("Not implemented.");}
    }
    export class StreamingSubscriptionConnection {
        CurrentSubscriptions: any;//System.Collections.Generic.IEnumerable<StreamingSubscription>;
        IsOpen: boolean;
        private subscriptions: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
        private connectionTimeout: number;
        private session: ExchangeService;
        private isDisposed: boolean;
        private currentHangingRequest: GetStreamingEventsRequest;
        private lockObject: any;
        private OnNotificationEvent: StreamingSubscriptionConnection.NotificationEventDelegate;
        private OnSubscriptionError: StreamingSubscriptionConnection.SubscriptionErrorDelegate;
        private OnDisconnect: StreamingSubscriptionConnection.SubscriptionErrorDelegate;
        AddSubscription(subscription: StreamingSubscription): any{ throw new Error("Not implemented.");}
        Close(): any{ throw new Error("Not implemented.");}
        //Dispose(): any{ throw new Error("Not implemented.");}
        Dispose(suppressFinalizer?: boolean): any{ throw new Error("Not implemented.");}
        Finalize(): any{ throw new Error("Not implemented.");}
        HandleServiceResponseObject(response: any): any{ throw new Error("Not implemented.");}
        InternalOnDisconnect(ex: any/*System.Exception*/): any{ throw new Error("Not implemented.");}
        IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): any{ throw new Error("Not implemented.");}
        IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): any{ throw new Error("Not implemented.");}
        IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): any{ throw new Error("Not implemented.");}
        OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): any{ throw new Error("Not implemented.");}
        Open(): any{ throw new Error("Not implemented.");}
        RemoveSubscription(subscription: StreamingSubscription): any{ throw new Error("Not implemented.");}
        ThrowIfDisposed(): any{ throw new Error("Not implemented.");}
        ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): any{ throw new Error("Not implemented.");}
    }
    export class PullSubscription extends SubscriptionBase {
        MoreEventsAvailable: boolean;
        private moreEventsAvailable: boolean;
        BeginGetEvents(callback: any/*System.AsyncCallback*/, state: any): any/*System.IAsyncResult*/{ throw new Error("Not implemented.");}
        BeginUnsubscribe(callback: any/*System.AsyncCallback*/, state: any): any/*System.IAsyncResult*/{ throw new Error("Not implemented.");}
        EndGetEvents(asyncResult: any/*System.IAsyncResult*/): GetEventsResults{ throw new Error("Not implemented.");}
        EndUnsubscribe(asyncResult: any/*System.IAsyncResult*/): any{ throw new Error("Not implemented.");}
        GetEvents(): GetEventsResults{ throw new Error("Not implemented.");}
        Unsubscribe(): any{ throw new Error("Not implemented.");}
    }
    export class PushSubscription extends SubscriptionBase {
    }
    export class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
        Timeout: number;
        private timeout: number;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
        Frequency: number;
        Url: string;//System.Uri;
        CallerData: string;
        private frequency: number;
        private url: string;//System.Uri;
        private callerData: string;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription>{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class SubscriptionBase {
        Service: ExchangeService;
        Id: string;
        Watermark: string;
        UsesWatermark: boolean;
        private service: ExchangeService;
        private id: string;
        private watermark: string;
        LoadFromJson(jsonResponse: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
    }
    export class SubscriptionErrorEventArgs /*extends System.EventArgs*/ {
        Subscription: StreamingSubscription;
        Exception: any;//System.Exception;
    }



    export class GetStreamingEventsResults {
        Notifications: GetStreamingEventsResults.NotificationGroup[];//System.Collections.ObjectModel.Collection<GetStreamingEventsResults.NotificationGroup>;
        private events: GetStreamingEventsResults.NotificationGroup[];//System.Collections.ObjectModel.Collection<GetStreamingEventsResults.NotificationGroup>;
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType, notifications: GetStreamingEventsResults.NotificationGroup): any { throw new Error("Not implemented."); }
    }
    export class HangingRequestDisconnectEventArgs /*extends System.EventArgs*/ {
        Reason: HangingRequestDisconnectReason;
        Exception: any;//System.Exception;
    }
    export class HangingServiceRequestBase extends ServiceRequestBase {
        IsConnected: boolean;
        private responseHandler: HangingServiceRequestBase.HandleResponseObject;
        private response: IEwsHttpWebResponse;
        private request: IEwsHttpWebRequest;
        heartbeatFrequencyMilliseconds: number;
        private lockObject: any;
        private OnDisconnect: HangingServiceRequestBase.HangingRequestDisconnectHandler;
        static LogAllWireBytes: boolean;
        //Disconnect(): any { throw new Error("Not implemented."); }
        Disconnect(reason?: HangingRequestDisconnectReason, exception?: any/*System.Exception*/): any { throw new Error("Not implemented."); }
        InternalExecute(): any { throw new Error("Not implemented."); }
        InternalOnConnect(): any { throw new Error("Not implemented."); }
        InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: any/*System.Exception*/): any { throw new Error("Not implemented."); }
        ParseResponses(state: any): any { throw new Error("Not implemented."); }
        ReadPreamble(ewsXmlReader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class GetEventsResponse extends ServiceResponse {
        Results: GetEventsResults;
        private results: GetEventsResults;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetEventsResults {
        static XmlElementNameToEventTypeMap: any;//{ [string]: EventType; }; //System.Collections.Generic.Dictionary<string, EventType>;
        SubscriptionId: string;
        PreviousWatermark: string;
        NewWatermark: string;
        MoreEventsAvailable: boolean;
        FolderEvents: FolderEvent[];//System.Collections.Generic.IEnumerable<FolderEvent>;
        ItemEvents: ItemEvent[];//System.Collections.Generic.IEnumerable<ItemEvent>;
        AllEvents: NotificationEvent[];//System.Collections.ObjectModel.Collection<NotificationEvent>;
        private newWatermark: string;
        private subscriptionId: string;
        private previousWatermark: string;
        private moreEventsAvailable: boolean;
        private events: NotificationEvent[];//System.Collections.ObjectModel.Collection<NotificationEvent>;
        private static xmlElementNameToEventTypeMap: LazyMember<any/*T*/>;
        LoadEventsFromJson(jsonEventsArray: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(eventsResponse: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType): any { throw new Error("Not implemented."); }
    }

    export class NotificationEvent {
        EventType: EventType;
        TimeStamp: Date;
        ParentFolderId: FolderId;
        OldParentFolderId: FolderId;
        private eventType: EventType;
        private timestamp: Date;
        private parentFolderId: FolderId;
        private oldParentFolderId: FolderId;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
    }

    export class FolderEvent extends NotificationEvent {
        FolderId: FolderId;
        OldFolderId: FolderId;
        UnreadCount: number;
        private folderId: FolderId;
        private oldFolderId: FolderId;
        private unreadCount: number;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    }

    export class ItemEvent extends NotificationEvent {
        ItemId: ItemId;
        OldItemId: ItemId;
        private itemId: ItemId;
        private oldItemId: ItemId;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    }

    export class GetStreamingEventsResponse extends ServiceResponse {
        Results: GetStreamingEventsResults;
        ErrorSubscriptionIds: string[];//System.Collections.Generic.List<string>;
        private results: GetStreamingEventsResults;
        private request: HangingServiceRequestBase;
        LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export module GetStreamingEventsResponse {
        export enum ConnectionStatus {
            OK = 0,
            Closed = 1
        }
    }

    export module GetStreamingEventsResults {
        export class NotificationGroup {
            SubscriptionId: string;
            Events: NotificationEvent[];// System.Collections.ObjectModel.Collection<Microsoft.Exchange.WebServices.Data.NotificationEvent>;
        }
    }

    export module HangingServiceRequestBase {
        export interface HandleResponseObject {
            (response: any): any;
        }

        export interface HangingRequestDisconnectHandler {
            (sender: any, args: HangingRequestDisconnectEventArgs): any;
        }

        //export class HandleResponseObject extends System.MulticastDelegate {
        //    BeginInvoke(response: any, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
        //    Invoke(response: any): any{ throw new Error("Not implemented.");}
        //}
        //export class HangingRequestDisconnectHandler extends System.MulticastDelegate {
        //    BeginInvoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
        //    Invoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs): any{ throw new Error("Not implemented.");}
        //}
    }
}



//module Microsoft.Exchange.WebServices.Data.GetStreamingEventsResults {
//    export class NotificationGroup {
//        SubscriptionId: string;
//        Events: NotificationEvent[];// System.Collections.ObjectModel.Collection<Microsoft.Exchange.WebServices.Data.NotificationEvent>;
//    }
//}

//module Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase {
//    export interface HandleResponseObject {
//        (response: any): any;
//    }

//    export interface HangingRequestDisconnectHandler {
//        (sender: any, args: HangingRequestDisconnectEventArgs): any;
//    }

//    //export class HandleResponseObject extends System.MulticastDelegate {
//    //    BeginInvoke(response: any, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //    Invoke(response: any): any{ throw new Error("Not implemented.");}
//    //}
//    //export class HangingRequestDisconnectHandler extends System.MulticastDelegate {
//    //    BeginInvoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
//    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
//    //    Invoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs): any{ throw new Error("Not implemented.");}
//    //}
//}
