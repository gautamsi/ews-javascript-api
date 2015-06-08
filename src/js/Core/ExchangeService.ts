import GroupedFindItemsResults = require("../Search/GroupedFindItemsResults");
import FindItemsResults = require("../Search/FindItemsResults");
import FindItemRequest = require("./Requests/FindItemRequest");
import Item = require("./ServiceObjects/Items/Item");
import ViewBase = require("../Search/ViewBase");
import Grouping = require("../Search/Grouping");
import FindItemResponse = require("./Responses/FindItemResponse");
import Strings = require("../Strings");
import ManagementRoles = require("../Misc/ManagementRoles");
import ImpersonatedUserId = require("../Misc/ImpersonatedUserId");
import PrivilegedUserId = require("../Misc/PrivilegedUserId");
import IFileAttachmentContentHandler = require("../Interfaces/IFileAttachmentContentHandler");
import UnifiedMessaging = require("../UnifiedMessaging/UnifiedMessaging");
import RetentionType = require("../Enumerations/RetentionType");
import DeleteMode = require("../Enumerations/DeleteMode");
//import DelegateUserResponse = require("./Responses/DelegateUserResponse");
import ConversationActionType = require("../Enumerations/ConversationActionType");
import MeetingRequestsDeliveryScope = require("../Enumerations/MeetingRequestsDeliveryScope");
import ServiceResponse = require("./Responses/ServiceResponse");
import Mailbox = require("../ComplexProperties/Mailbox");
import ServiceObject = require("./ServiceObjects/ServiceObject");
import EwsUtilities = require("./EwsUtilities");
import AutodiscoverService = require("../Autodiscover/AutodiscoverService");
import AutodiscoverServiceDelegates = require("../Autodiscover/AutodiscoverServiceDelegates");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import TraceFlags = require("../Enumerations/TraceFlags");
import RenderingMode = require("../Enumerations/RenderingMode");
import UserSettingName = require("../Enumerations/UserSettingName");
import AutodiscoverErrorCode = require("../Enumerations/AutodiscoverErrorCode");
import GetUserSettingsResponse = require("../Autodiscover/Responses/GetUserSettingsResponse");
import GetFolderRequest = require("./Requests/GetFolderRequest");
import GetFolderResponse = require("./Responses/GetFolderResponse");
import ServiceResponseCollection = require("./Responses/ServiceResponseCollection");
import ServiceErrorHandling = require("../Enumerations/ServiceErrorHandling");
import DateTimePrecision = require("../Enumerations/DateTimePrecision");
import ServiceRemoteException = require("../Exceptions/ServiceRemoteException");
import AutodiscoverLocalException = require("../Exceptions/AutodiscoverLocalException");
import WellKnownFolderName = require("../Enumerations/WellKnownFolderName");
import SearchFilter = require("../Search/Filters/SearchFilter");
import FindFoldersResults = require("../Search/FindFoldersResults");
import FolderView = require("../Search/FolderView");

import Folder = require("./ServiceObjects/Folders/Folder");
import FolderId = require("../ComplexProperties/FolderId");
import PropertySet = require("./PropertySet");

import {StringHelper, UriHelper} from "../ExtensionMethods";


import {IPromise, IXHROptions} from "../Interfaces";
import {Promise} from "../PromiseFactory"
import {XHR} from "../XHRFactory"



import ExchangeServiceBase = require("./ExchangeServiceBase");
class ExchangeService extends ExchangeServiceBase {
    private static TargetServerVersionHeaderName: string = "X-EWS-TargetVersion";
    Url: string;//System.Uri;
    ImpersonatedUserId: ImpersonatedUserId;
    PrivilegedUserId: PrivilegedUserId;
    ManagementRoles: ManagementRoles;
    PreferredCulture: any;//System.Globalization.CultureInfo;
    DateTimePrecision: DateTimePrecision = DateTimePrecision.Default;
    FileAttachmentContentHandler: IFileAttachmentContentHandler;
    TimeZone: any;// System.TimeZoneInfo;
    UnifiedMessaging: UnifiedMessaging;
    EnableScpLookup: boolean;
    Exchange2007CompatibilityMode: boolean;
    get RenderingMethod(): RenderingMode { return this.renderingMode; }
    TraceEnablePrettyPrinting: boolean;
    TargetServerVersion: string;
    private url: string;//System.Uri;
    private preferredCulture: any;// System.Globalization.CultureInfo;
    private dateTimePrecision: DateTimePrecision;
    private impersonatedUserId: ImpersonatedUserId;
    private privilegedUserId: PrivilegedUserId;
    private managementRoles: ManagementRoles;
    private fileAttachmentContentHandler: IFileAttachmentContentHandler;
    private unifiedMessaging: UnifiedMessaging;
    private enableScpLookup: boolean;
    private renderingMode: RenderingMode = RenderingMode.Xml;
    private traceEnablePrettyPrinting: boolean;
    private targetServerVersion: string;
    private exchange2007CompatibilityMode: boolean;
    // AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateUserResponse[]/*System.Collections.ObjectModel.Collection<DelegateUserResponse>*/ { throw new Error("ExchangeService.ts - AddDelegates : Not implemented."); }
    // //AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - AddDelegates : Not implemented."); }
    AdjustServiceUriFromCredentials(uri: string /*System.Uri*/): string/*System.Uri*/ {
        return (this.Credentials != null)
            ? this.Credentials.AdjustUrl(uri)
            : uri;
    }
    // ApplyConversationAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processRightAway: boolean, categories: StringList, enableAlwaysDelete: boolean, destinationFolderId: FolderId, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ApplyConversationAction<TResponse extends ServiceResponse> : Not implemented."); }
    // ApplyConversationOneTimeAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, idTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId, deleteType: DeleteMode, isRead: boolean, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/, flag: Flag, suppressReadReceipts: boolean, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ApplyConversationOneTimeAction<TResponse extends ServiceResponse> : Not implemented."); }
    // ArchiveItems<TResponse extends ServiceResponse>(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, sourceFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ArchiveItems<TResponse extends ServiceResponse> : Not implemented."); }
    // //AutodiscoverUrl(emailAddress: string): any { throw new Error("ExchangeService.ts - AutodiscoverUrl : Not implemented."); }
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback?: AutodiscoverServiceDelegates.AutodiscoverRedirectionUrlValidationCallback/*Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRedirectionUrlValidationCallback*/): IPromise<any> {
        validateRedirectionUrlCallback = validateRedirectionUrlCallback || this.DefaultAutodiscoverRedirectionUrlValidationCallback;

        var exchangeServiceUrl: string;

        if (this.RequestedServerVersion > ExchangeVersion.Exchange2007_SP1) {

            return this.GetAutodiscoverUrl(
                emailAddress,
                this.RequestedServerVersion,
                validateRedirectionUrlCallback).then((url) => {
                    exchangeServiceUrl = url;
                    this.Url = this.AdjustServiceUriFromCredentials(exchangeServiceUrl);
                    //return;
                }, (err) => {
                    //catch (AutodiscoverLocalException ex)
                    this.TraceMessage(
                        TraceFlags.AutodiscoverResponse,
                        StringHelper.Format("Autodiscover service call failed with error '{0}'. Will try legacy service", err));
                    //catch (ServiceRemoteException ex)

                    // Special case: if the caller's account is locked we want to return this exception, not continue.
                    //        if (ex is AccountIsLockedException)
                    //{
                    //    throw;
                    //}

                    //this.TraceMessage(
                    //    TraceFlags.AutodiscoverResponse,
                    //    string.Format("Autodiscover service call failed with error '{0}'. Will try legacy service", ex.Message));


                    // Try legacy Autodiscover provider

                    var exchangeServiceUrl = this.GetAutodiscoverUrl(
                        emailAddress,
                        ExchangeVersion.Exchange2007_SP1,
                        validateRedirectionUrlCallback).then((url) => {

                            this.Url = this.AdjustServiceUriFromCredentials(url);
                        });

                });
        }







    }
    // BeginGetEvents(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string, watermark: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetEvents : Not implemented."); }
    // BeginGetNonIndexableItemDetails(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemDetailsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemDetails : Not implemented."); }
    // BeginGetNonIndexableItemStatistics(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemStatisticsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemStatistics : Not implemented."); }
    // BeginSearchMailboxes(callback: Function /*System.AsyncCallback*/, state: any, searchParameters: SearchMailboxesParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSearchMailboxes : Not implemented."); }
    // BeginSubscribeToPullNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPullNotifications : Not implemented."); }
    // BeginSubscribeToPullNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPullNotificationsOnAllFolders : Not implemented."); }
    // BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotifications : Not implemented."); }
    // //BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotifications : Not implemented."); }
    // BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    // //BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    // BeginSubscribeToStreamingNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToStreamingNotifications : Not implemented."); }
    // BeginSubscribeToStreamingNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToStreamingNotificationsOnAllFolders : Not implemented."); }
    // BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }
    // //BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }
    // BeginSyncFolderItems(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderItems : Not implemented."); }
    // BeginUnsubscribe(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginUnsubscribe : Not implemented."); }
    //BuildGetEventsRequest(subscriptionId: string, watermark: string): GetEventsRequest { throw new Error("ExchangeService.ts - BuildGetEventsRequest : Not implemented."); }
    //BuildSubscribeToPullNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): SubscribeToPullNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToPullNotificationsRequest : Not implemented."); }
    //BuildSubscribeToPushNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): SubscribeToPushNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToPushNotificationsRequest : Not implemented."); }
    //BuildSubscribeToStreamingNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): SubscribeToStreamingNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToStreamingNotificationsRequest : Not implemented."); }
    //BuildSyncFolderHierarchyRequest(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): SyncFolderHierarchyRequest { throw new Error("ExchangeService.ts - BuildSyncFolderHierarchyRequest : Not implemented."); }
    //BuildSyncFolderItemsRequest(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): SyncFolderItemsRequest { throw new Error("ExchangeService.ts - BuildSyncFolderItemsRequest : Not implemented."); }
    //BuildUnsubscribeRequest(subscriptionId: string): UnsubscribeRequest { throw new Error("ExchangeService.ts - BuildUnsubscribeRequest : Not implemented."); }
    //ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): AlternateIdBase { throw new Error("ExchangeService.ts - ConvertId : Not implemented."); }
    //ConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ConvertIds : Not implemented."); }
    //CreateAttachments(parentItemId: string, attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<CreateAttachmentResponse> { throw new Error("ExchangeService.ts - CreateAttachments : Not implemented."); }
    //CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemDetailsRequest : Not implemented."); }
    //CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemStatisticsRequest : Not implemented."); }
    //CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest { throw new Error("ExchangeService.ts - CreateSearchMailboxesRequest : Not implemented."); }
    //CreateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("ExchangeService.ts - CreateUserConfiguration : Not implemented."); }
    DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean {

        throw new AutodiscoverLocalException(StringHelper.Format(Strings.AutodiscoverRedirectBlocked, redirectionUrl));
    }
    //DeleteAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<DeleteAttachmentResponse> { throw new Error("ExchangeService.ts - DeleteAttachments : Not implemented."); }
    //DeleteUserConfiguration(name: string, parentFolderId: FolderId): any { throw new Error("ExchangeService.ts - DeleteUserConfiguration : Not implemented."); }
    //DisableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysCategorizeItemsInConversations : Not implemented."); }
    //DisableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysDeleteItemsInConversations : Not implemented."); }
    //DisableAlwaysMoveItemsInConversations(conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysMoveItemsInConversations : Not implemented."); }
    //DisableApp(id: string, disableReason: DisableReasonType): any { throw new Error("ExchangeService.ts - DisableApp : Not implemented."); }
    //EnableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, categories: System.Collections.Generic.IEnumerable<string>, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysCategorizeItemsInConversations : Not implemented."); }
    //EnableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysDeleteItemsInConversations : Not implemented."); }
    //EnableAlwaysMoveItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysMoveItemsInConversations : Not implemented."); }
    //EndGetEvents(asyncResult: Function /*System.IAsyncResult*/): GetEventsResults { throw new Error("ExchangeService.ts - EndGetEvents : Not implemented."); }
    //EndGetNonIndexableItemDetails(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemDetails : Not implemented."); }
    //EndGetNonIndexableItemStatistics(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemStatistics : Not implemented."); }
    //EndSearchMailboxes(asyncResult: Function /*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EndSearchMailboxes : Not implemented."); }
    //EndSubscribeToPullNotifications(asyncResult: Function /*System.IAsyncResult*/): PullSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPullNotifications : Not implemented."); }
    //EndSubscribeToPushNotifications(asyncResult: Function /*System.IAsyncResult*/): PushSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPushNotifications : Not implemented."); }
    //EndSubscribeToStreamingNotifications(asyncResult: Function /*System.IAsyncResult*/): StreamingSubscription { throw new Error("ExchangeService.ts - EndSubscribeToStreamingNotifications : Not implemented."); }
    //EndSyncFolderHierarchy(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - EndSyncFolderHierarchy : Not implemented."); }
    //EndSyncFolderItems(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - EndSyncFolderItems : Not implemented."); }
    //EndUnsubscribe(asyncResult: Function /*System.IAsyncResult*/): any { throw new Error("ExchangeService.ts - EndUnsubscribe : Not implemented."); }
    //ExecuteDiagnosticMethod(verb: string, parameter: System.Xml.XmlNode): System.Xml.XmlDocument { throw new Error("ExchangeService.ts - ExecuteDiagnosticMethod : Not implemented."); }
    //ExpandGroup(address: string, routingType: string): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(groupId: ItemId): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(smtpAddress: string): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(emailAddress: EmailAddress): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    //FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("ExchangeService.ts - FindAppointments : Not implemented."); }
    ////FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("ExchangeService.ts - FindAppointments : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId): System.Collections.Generic.ICollection<T> { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): FindConversationResults { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string): System.Collections.Generic.ICollection<T> { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): FindConversationResults { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    //GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): System.Collections.ObjectModel.Collection<ClientApp> { throw new Error("ExchangeService.ts - GetAppManifests : Not implemented."); }
    ////GetAppManifests(): System.Collections.ObjectModel.Collection<System.Xml.XmlDocument> { throw new Error("ExchangeService.ts - GetAppManifests : Not implemented."); }
    //GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): string { throw new Error("ExchangeService.ts - GetAppMarketplaceUrl : Not implemented."); }
    ////GetAppMarketplaceUrl(): string { throw new Error("ExchangeService.ts - GetAppMarketplaceUrl : Not implemented."); }
    //GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("ExchangeService.ts - GetAttachment : Not implemented."); }
    ////GetAttachments(attachments: any, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetAttachments : Not implemented."); }
    ////GetAttachments(attachmentIds: System.String[], bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetAttachments : Not implemented."); }
    GetAutodiscoverUrl(emailAddress: string, requestedServerVersion: ExchangeVersion, validateRedirectionUrlCallback: AutodiscoverServiceDelegates.AutodiscoverRedirectionUrlValidationCallback): IPromise<string> /*System.Uri*/ {
        var autodiscoverService: AutodiscoverService = new AutodiscoverService(null, null, requestedServerVersion);
        autodiscoverService.Credentials = this.Credentials;
        autodiscoverService.RedirectionUrlValidationCallback = validateRedirectionUrlCallback,
        autodiscoverService.EnableScpLookup = this.EnableScpLookup

        return autodiscoverService.GetUserSettings(
            emailAddress,
            UserSettingName.InternalEwsUrl,
            UserSettingName.ExternalEwsUrl).then((response) => {
                switch (response.ErrorCode) {
                    case AutodiscoverErrorCode.NoError:
                        return this.GetEwsUrlFromResponse(response, autodiscoverService.IsExternal);

                    case AutodiscoverErrorCode.InvalidUser:
                        throw new ServiceRemoteException(
                            StringHelper.Format(Strings.InvalidUser, emailAddress));

                    case AutodiscoverErrorCode.InvalidRequest:
                        throw new ServiceRemoteException(
                            StringHelper.Format(Strings.InvalidAutodiscoverRequest, response.ErrorMessage));

                    default:
                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("No EWS Url returned for user {0}, error code is {1}", emailAddress, response.ErrorCode));

                        throw new ServiceRemoteException(response.ErrorMessage);
                }
            }, (err) => {
                throw err;
            });

    }
    //GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetClientAccessToken : Not implemented."); }
    ////GetClientAccessToken(idAndTypes: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetClientAccessToken : Not implemented."); }
    //GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse { throw new Error("ExchangeService.ts - GetClientExtension : Not implemented."); }
    //GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    ////GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ConversationResponse { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    ////GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    //GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateInformation { throw new Error("ExchangeService.ts - GetDelegates : Not implemented."); }
    ////GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any): DelegateInformation { throw new Error("ExchangeService.ts - GetDelegates : Not implemented."); }
    //GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): GetDiscoverySearchConfigurationResponse { throw new Error("ExchangeService.ts - GetDiscoverySearchConfiguration : Not implemented."); }
    //GetEncryptionConfiguration(): GetEncryptionConfigurationResponse { throw new Error("ExchangeService.ts - GetEncryptionConfiguration : Not implemented."); }
    //GetEvents(subscriptionId: string, watermark: string): GetEventsResults { throw new Error("ExchangeService.ts - GetEvents : Not implemented."); }
    GetEwsUrlFromResponse(response: GetUserSettingsResponse, isExternal: boolean): string /*System.Uri*/ {

        var uriString = response.GetSettingValue<string>(UserSettingName.ExternalEwsUrl)

        // Figure out which URL to use: Internal or External.
        // AutoDiscover may not return an external protocol. First try external, then internal.
        // Either protocol may be returned without a configured URL.
        if ((isExternal &&
            uriString) &&
            !StringHelper.IsNullOrEmpty(uriString)) {
            return uriString;
        }
        else {
            uriString = response.GetSettingValue<string>(UserSettingName.InternalEwsUrl) || uriString;
            if (!StringHelper.IsNullOrEmpty(uriString)) {
                return uriString;
            }
        }
        // If Autodiscover doesn't return an internal or external EWS URL, throw an exception.
        throw new AutodiscoverLocalException(Strings.AutodiscoverDidNotReturnEwsUrl);
    }
    //GetHoldOnMailboxes(holdId: string): GetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - GetHoldOnMailboxes : Not implemented."); }
    //GetInboxRules(): RuleCollection { throw new Error("ExchangeService.ts - GetInboxRules : Not implemented."); }
    ////GetInboxRules(mailboxSmtpAddress: string): RuleCollection { throw new Error("ExchangeService.ts - GetInboxRules : Not implemented."); }
    //GetNonIndexableItemDetails(mailboxes: System.String[]): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    ////GetNonIndexableItemDetails(mailboxes: System.String[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    ////GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    //GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    ////GetNonIndexableItemStatistics(mailboxes: System.String[]): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    //GetPasswordExpirationDate(mailboxSmtpAddress: string): Date { throw new Error("ExchangeService.ts - GetPasswordExpirationDate : Not implemented."); }
    //GetRoomLists(): EmailAddressCollection { throw new Error("ExchangeService.ts - GetRoomLists : Not implemented."); }
    //GetRooms(emailAddress: EmailAddress): System.Collections.ObjectModel.Collection<EmailAddress> { throw new Error("ExchangeService.ts - GetRooms : Not implemented."); }
    //GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): GetSearchableMailboxesResponse { throw new Error("ExchangeService.ts - GetSearchableMailboxes : Not implemented."); }
    //GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): GetUserAvailabilityResults { throw new Error("ExchangeService.ts - GetUserAvailability : Not implemented."); }
    ////GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData): GetUserAvailabilityResults { throw new Error("ExchangeService.ts - GetUserAvailability : Not implemented."); }
    //GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration { throw new Error("ExchangeService.ts - GetUserConfiguration : Not implemented."); }
    //GetUserOofSettings(smtpAddress: string): OofSettings { throw new Error("ExchangeService.ts - GetUserOofSettings : Not implemented."); }
    //GetUserRetentionPolicyTags(): GetUserRetentionPolicyTagsResponse { throw new Error("ExchangeService.ts - GetUserRetentionPolicyTags : Not implemented."); }
    //InstallApp(manifestStream: any /*System.IO.Stream*/): any { throw new Error("ExchangeService.ts - InstallApp : Not implemented."); }
    //InternalBindToItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalBindToItems : Not implemented."); }
    //InternalConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalConvertIds : Not implemented."); }
    //InternalCopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalCopyItems : Not implemented."); }
    //InternalCreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalCreateItems : Not implemented."); }
    //InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): System.Collections.Generic.List<Item> { throw new Error("ExchangeService.ts - InternalCreateResponseObject : Not implemented."); }
    //InternalDeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalDeleteItems : Not implemented."); }
    //InternalFindFolders(parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalFindFolders : Not implemented."); }
    //InternalGetAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalGetAttachments : Not implemented."); }
    //InternalGetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation, maxItemsToReturn: number, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalGetConversationItems : Not implemented."); }
    //InternalMoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalMoveItems : Not implemented."); }
    //InternalUpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalUpdateItems : Not implemented."); }
    //IsMajorMinor(versionPart: string): boolean { throw new Error("ExchangeService.ts - IsMajorMinor : Not implemented."); }
    //LoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - LoadPropertiesForItems : Not implemented."); }
    //LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): any { throw new Error("ExchangeService.ts - LoadPropertiesForUserConfiguration : Not implemented."); }
    //MarkAsJunk(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, isJunk: boolean, moveItem: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MarkAsJunk : Not implemented."); }
    ////PrepareHttpWebRequest(methodName: string): IEwsHttpWebRequest { throw new Error("ExchangeService.ts - PrepareHttpWebRequest : Not implemented."); }
    PrepareHttpWebRequest(methodName: string): IXHROptions {
        var endpoint = this.Url;
        //this.RegisterCustomBasicAuthModule();

        if (this.RenderingMethod === RenderingMode.JSON) {
            //endpoint = new Uri(
            //    endpoint,
            //    string.Format("{0}/{1}{2}", endpoint.AbsolutePath, methodName, endpoint.Query));
        }
        else {
            endpoint = this.AdjustServiceUriFromCredentials(endpoint);
        }

        var request = this.PrepareHttpWebRequestForUrl(
            endpoint,
            this.AcceptGzipEncoding,
            true);

        if (!StringHelper.IsNullOrEmpty(this.TargetServerVersion)) {
            request.headers[ExchangeService.TargetServerVersionHeaderName] = this.TargetServerVersion;
        }

        return request;
    }
    //ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest /*IEwsHttpWebResponse*/, webException: any): any { throw new Error("ExchangeService.ts - ProcessHttpErrorResponse : Not implemented."); }
    //RemoveDelegates(mailbox: Mailbox, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - RemoveDelegates : Not implemented."); }
    ////RemoveDelegates(mailbox: Mailbox, userIds: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - RemoveDelegates : Not implemented."); }
    //ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    //SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    ////SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    ////SearchMailboxes(searchParameters: SearchMailboxesParameters): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    //SendItem(item: Item, savedCopyDestinationFolderId: FolderId): any { throw new Error("ExchangeService.ts - SendItem : Not implemented."); }
    //SetClientExtension(actions: Function[] /*System.Collections.Generic.List<T>*/): any { throw new Error("ExchangeService.ts - SetClientExtension : Not implemented."); }
    SetContentType(request: IXHROptions /*IEwsHttpWebRequest*/): void {
        if (this.renderingMode == RenderingMode.Xml) {
            request.headers["Content-Type"] = "text/xml; charset=utf-8";
            request.headers["Accept"] = "text/xml";
        }
        else if (this.renderingMode == RenderingMode.JSON) {
            request.headers["Content-Type"] = "application/json; charset=utf-8";
            request.headers["Accept"] = "application/json";
        }
        else {
            super.SetContentType(request);
        }
    }
    //SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any { throw new Error("ExchangeService.ts - SetEncryptionConfiguration : Not implemented."); }
    //SetFlagStatusForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, flagStatus: Flag): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetFlagStatusForItemsInConversations : Not implemented."); }
    //SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: System.String[]): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    //SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetReadStateForItemsInConversations : Not implemented."); }
    ////SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetReadStateForItemsInConversations : Not implemented."); }
    //SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetRetentionPolicyForItemsInConversations : Not implemented."); }
    //SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: string /*System.Uri*/, state: TeamMailboxLifecycleState): any { throw new Error("ExchangeService.ts - SetTeamMailbox : Not implemented."); }
    //SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): any { throw new Error("ExchangeService.ts - SetUserOofSettings : Not implemented."); }
    //SubscribeToPullNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("ExchangeService.ts - SubscribeToPullNotifications : Not implemented."); }
    //SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("ExchangeService.ts - SubscribeToPullNotificationsOnAllFolders : Not implemented."); }
    //SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotifications : Not implemented."); }
    ////SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotifications : Not implemented."); }
    //SubscribeToPushNotificationsOnAllFolders(url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    ////SubscribeToPushNotificationsOnAllFolders(url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    //SubscribeToStreamingNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): StreamingSubscription { throw new Error("ExchangeService.ts - SubscribeToStreamingNotifications : Not implemented."); }
    //SubscribeToStreamingNotificationsOnAllFolders(eventTypes: any): StreamingSubscription { throw new Error("ExchangeService.ts - SubscribeToStreamingNotificationsOnAllFolders : Not implemented."); }
    //SyncFolderHierarchy(propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - SyncFolderHierarchy : Not implemented."); }
    ////SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - SyncFolderHierarchy : Not implemented."); }
    //SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - SyncFolderItems : Not implemented."); }
    //UninstallApp(id: string): any { throw new Error("ExchangeService.ts - UninstallApp : Not implemented."); }
    //UnpinTeamMailbox(emailAddress: EmailAddress): any { throw new Error("ExchangeService.ts - UnpinTeamMailbox : Not implemented."); }
    //Unsubscribe(subscriptionId: string): any { throw new Error("ExchangeService.ts - Unsubscribe : Not implemented."); }
    //UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - UpdateDelegates : Not implemented."); }
    ////UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - UpdateDelegates : Not implemented."); }
    //UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): any { throw new Error("ExchangeService.ts - UpdateInboxRules : Not implemented."); }
    ////UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean): any { throw new Error("ExchangeService.ts - UpdateInboxRules : Not implemented."); }
    //UpdateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("ExchangeService.ts - UpdateUserConfiguration : Not implemented."); }
    //Validate(): any { throw new Error("ExchangeService.ts - Validate : Not implemented."); }
    //ValidateTargetVersion(version: string): any { throw new Error("ExchangeService.ts - ValidateTargetVersion : Not implemented."); }
    
    // Folder Operations
    CreateFolder(folder: Folder, parentFolderId: FolderId): any { throw new Error("ExchangeService.ts - CreateFolder : Not implemented."); }
    BindToFolderAs<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet): IPromise<TFolder> {
        // debugger;
        return this.BindToFolder(folderId, propertySet);
        // if (result instanceof ServiceObject) //todo: implement instanceOf TFolder
        // {
        //     return <any>result;//<TFolder>
        // }
        // else {
        //     //throw new ServiceLocalException(
        //     //    string.Format(
        //     //        Strings.FolderTypeNotCompatible,
        //     //        result.GetType().Name,
        //     //        typeof (TFolder).Name));
        // }
    }

    BindToFolder(folderId: FolderId, propertySet: PropertySet): IPromise<Folder> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        var request: GetFolderRequest = new GetFolderRequest(this, ServiceErrorHandling.ThrowOnError);

        request.FolderIds.Add(folderId);
        request.PropertySet = propertySet;

        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Folder;
        });


    }
    CopyFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> { throw new Error("ExchangeService.ts - CopyFolder : Not implemented."); }
    DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): IPromise<void> { throw new Error("ExchangeService.ts - DeleteFolder : Not implemented."); }
    EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void> { throw new Error("ExchangeService.ts - EmptyFolder : Not implemented."); }
    //FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("ExchangeService.ts - FindFolders : Not implemented."); }
    //FindFolders(parentFolderId: FolderId, view: FolderView): FindFoldersResults { throw new Error("ExchangeService.ts - FindFolders : Not implemented."); }
    //FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("ExchangeService.ts - FindFolders : Not implemented."); }
    //FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): FindFoldersResults { throw new Error("ExchangeService.ts - FindFolders : Not implemented."); }
    FindFolders(parentFolderIdOrName: FolderId | WellKnownFolderName, view: FolderView, searchFilter?: SearchFilter): IPromise<FindFoldersResults> { throw new Error("ExchangeService.ts - FindFolders : Not implemented."); }

    LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): IPromise<void> { throw new Error("ExchangeService.ts - LoadPropertiesForFolder : Not implemented."); }
    MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): IPromise<any> { throw new Error("ExchangeService.ts - MarkAllItemsAsRead : Not implemented."); }
    MoveFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> { throw new Error("ExchangeService.ts - MoveFolder : Not implemented."); }
    UpdateFolder(folder: Folder): IPromise<void> { throw new Error("ExchangeService.ts - UpdateFolder : Not implemented."); }

    // Item Operations
    //BindToItem(itemId: ItemId, propertySet: PropertySet): Item { throw new Error("ExchangeService.ts - BindToItem : Not implemented."); }
    ////BindToItem(itemId: ItemId, propertySet: PropertySet): any { throw new Error("ExchangeService.ts - BindToItem : Not implemented."); }
    //BindToItems(itemIds: TResponse[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - BindToItems : Not implemented."); }
    
    //CopyItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("ExchangeService.ts - CopyItem : Not implemented."); }
    //CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItems : Not implemented."); }
    ////CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItems : Not implemented."); }
    //CopyItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItemsInConversations : Not implemented."); }
    //CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any { throw new Error("ExchangeService.ts - CreateItem : Not implemented."); }
    //CreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CreateItems : Not implemented."); }
    //DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("ExchangeService.ts - DeleteItem : Not implemented."); }
    ////DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("ExchangeService.ts - DeleteItem : Not implemented."); }
    ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItems : Not implemented."); }
    ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItems : Not implemented."); }
    //DeleteItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, deleteMode: DeleteMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItemsInConversations : Not implemented."); }
    
    
    
                        FindItems(parentFolderName: WellKnownFolderName,    view: ViewBase                                                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 view: ViewBase                                                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 view: ViewBase,                 groupBy: Grouping                                                                                                               ): IPromise<GroupedFindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 queryString: string,            view: ViewBase                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderName: WellKnownFolderName,    queryString: string,            view: ViewBase                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderName: WellKnownFolderName,    searchFilter: SearchFilter,     view: ViewBase                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 searchFilter: SearchFilter,     view: ViewBase                                                                                                                  ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 searchFilter: SearchFilter,     view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<GroupedFindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 queryString: string,            view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<GroupedFindItemsResults<Item>>;
                        FindItems(parentFolderName: WellKnownFolderName,    searchFilter: SearchFilter,     view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<GroupedFindItemsResults<Item>>;
                        FindItems(parentFolderName: WellKnownFolderName,    queryString: string,            view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<GroupedFindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 queryString: string,            returnHighlightTerms: boolean,      view: ViewBase                                                                              ): IPromise<FindItemsResults<Item>>;
                        FindItems(parentFolderId: FolderId,                 queryString: string,            returnHighlightTerms: boolean,      view: ViewBase,         groupBy: Grouping                                                   ): IPromise<GroupedFindItemsResults<Item>>;
    FindItems<TItem extends Item>(parentFolderIds: FolderId[] ,             searchFilter: SearchFilter,     queryString: string,                view: ViewBase,         groupBy: Grouping,          errorHandlingMode: ServiceErrorHandling ): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    
    // not needed, no calls coming in to this internal function in ews managed api c3 library, future use possible until them keep it muted   - FindItems<TItem extends Item>(parentFolderId: FolderId,                 searchFilter: SearchFilter,     view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    FindItems<TItem extends Item>(
        nameIdOrIds: WellKnownFolderName | FolderId | FolderId[],
        viewQueryStringOrSearchFilter: ViewBase | string| SearchFilter,
        groupByViewRHTOrQueryString?: Grouping | ViewBase | boolean | string,
        groupByOrView?: Grouping | ViewBase,
        groupBy?: Grouping,
        errorHandlingMode: ServiceErrorHandling = ServiceErrorHandling.ThrowOnError
        ): IPromise<FindItemsResults<Item> | GroupedFindItemsResults<Item> | ServiceResponseCollection<FindItemResponse<TItem>>> {
            
        var argsLength = arguments.length;
        if (argsLength < 2 && argsLength > 6) {
            throw new Error("invalid arguments, check documentation and try again.");
        }
        
        //position 1 - nameIdOrIds
        var parentIds: FolderId[] = []
        if (typeof nameIdOrIds === 'number') {
            parentIds.push(new FolderId(nameIdOrIds));
        }
        else if (nameIdOrIds instanceof FolderId) {
            parentIds.push(nameIdOrIds);
        }
        else if (Array.isArray(nameIdOrIds)) {
            parentIds = <FolderId[]> nameIdOrIds;
        }

        var queryString: string = null;
        var searchFilter: SearchFilter = null;
        var view: ViewBase = null;
        
        //position 2 - viewQueryStringOrSearchFilter
        if (typeof viewQueryStringOrSearchFilter === 'string') {
            queryString = viewQueryStringOrSearchFilter;
        }
        else if (viewQueryStringOrSearchFilter instanceof SearchFilter) {
            searchFilter = viewQueryStringOrSearchFilter;
        }
        else if (viewQueryStringOrSearchFilter instanceof ViewBase) {
            view = viewQueryStringOrSearchFilter;
        }
        else {
            throw new Error("ExchangeService.ts - FindItems - incorrect uses of parameters at 2nd position, must be string, ViewBase or SearchFilter");
        }

        var groupResultBy: Grouping = null;
        var returnHighlightTerms: boolean = false;
        var isGroupped: boolean = false; // to resturn GroupedFindItemsResults<Item>
        
        //position 3 - groupByViewRHTOrQueryString
        if (argsLength >= 3) {
            if (groupByViewRHTOrQueryString instanceof Grouping) {
                if (!(viewQueryStringOrSearchFilter instanceof ViewBase)) {
                    throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3nd position, it must be ViewBase when using Grouping at 4th place");
                }
                groupResultBy = groupByViewRHTOrQueryString;
                isGroupped = true;
            }
            else if (groupByViewRHTOrQueryString instanceof ViewBase) {
                view = groupByViewRHTOrQueryString;
            }
            else if (typeof groupByViewRHTOrQueryString === 'string') {
                queryString = groupByViewRHTOrQueryString;
            }
            else if (typeof groupByViewRHTOrQueryString === 'boolean') {
                returnHighlightTerms = groupByViewRHTOrQueryString;
            }
            else {
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, must be string, boolean, ViewBase or Grouping");
            }
        }
        
        //position 4 - groupByOrView
        if (argsLength >= 4) {
            if (groupByOrView instanceof Grouping) {
                if (!(groupByViewRHTOrQueryString instanceof ViewBase)) {
                    throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, it must be ViewBase when using Grouping at 3rd place");
                }
                groupResultBy = groupByOrView;
                isGroupped = true;
            }
            else if (groupByOrView instanceof ViewBase) {
                view = groupByOrView;
            }
            else {
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 4th  position, must be  ViewBase or Grouping");
            }
        }
        
        //position 5 - groupBy
        if (argsLength >= 5) {
            if (!(groupByOrView instanceof ViewBase)) {
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 4th position, it must be ViewBase when using Grouping at 5th place");
            }
            groupResultBy = groupBy;
            isGroupped = true;
        }
        var isRaw: boolean = false; // to return ServiceResponseCollection<FindItemResponse<TItem>>
        //position 6 - errorHandlingMode
        if (argsLength === 6) {
            isRaw = true;
        }

        var request: FindItemRequest<TItem> = new FindItemRequest<TItem>(this, errorHandlingMode | ServiceErrorHandling.ThrowOnError);

        request.ParentFolderIds.AddRange(parentIds);

        request.SearchFilter = searchFilter;

        request.QueryString = queryString;

        request.View = view;

        request.GroupBy = groupResultBy;

        return request.Execute().then((responses) => {
            if (isRaw) {
                return responses;
            }
            if (isGroupped) {
                return responses.__thisIndexer(0).GroupedFindResults;
            }
            return responses.__thisIndexer(0).Results;
            return
        });

    }

    InternalLoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<ServiceResponse> { throw new Error("ExchangeService.ts - InternalLoadPropertiesForItems : Not implemented."); }
    
    //MoveItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("ExchangeService.ts - MoveItem : Not implemented."); }
    //MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItems : Not implemented."); }
    ////MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItems : Not implemented."); }
    //MoveItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItemsInConversations : Not implemented."); }
    

    //UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("ExchangeService.ts - UpdateItem : Not implemented."); }
    ////UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("ExchangeService.ts - UpdateItem : Not implemented."); }
    //UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - UpdateItems : Not implemented."); }
    ////UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - UpdateItems : Not implemented."); }
    


}

//module ExchangeService { -> moved to its own file to remove circular dependency.
//    export enum RenderingMode {
//        Xml = 0,
//        JSON = 1
//    }
//}


export = ExchangeService;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
