import { AddDelegateRequest } from "./Requests/AddDelegateRequest";
import { AffectedTaskOccurrence } from "../Enumerations/AffectedTaskOccurrence";
import { AlternateIdBase } from "../Misc/IdConversion/AlternateIdBase";
import { ApplyConversationActionRequest } from "./Requests/ApplyConversationActionRequest";
import { Appointment } from "./ServiceObjects/Items/Appointment";
import { ArchiveItemRequest } from "./Requests/ArchiveItemRequest";
import { ArchiveItemResponse } from "./Responses/ArchiveItemResponse";
import { ArgumentException, ArgumentOutOfRangeException, ArgumentNullException } from "../Exceptions/ArgumentException";
import { ArrayHelper, StringHelper, UriHelper } from "../ExtensionMethods";
import { Attachment } from "../ComplexProperties/Attachment";
import { AttendeeInfo } from "../Misc/Availability/AttendeeInfo";
import { AutodiscoverErrorCode } from "../Enumerations/AutodiscoverErrorCode";
import { AutodiscoverLocalException } from "../Exceptions/AutodiscoverLocalException";
import { AutodiscoverRedirectionUrlValidationCallback } from "../Autodiscover/AutodiscoverServiceDelegates";
import { AutodiscoverService } from "../Autodiscover/AutodiscoverService";
import { AvailabilityData } from "../Enumerations/AvailabilityData";
import { AvailabilityOptions } from "../Misc/Availability/AvailabilityOptions";
import { BodyType } from "../Enumerations/BodyType";
import { CalendarView } from "../Search/CalendarView";
import { ChangeCollection } from "../Sync/ChangeCollection";
import { ClientAccessTokenRequest } from "../ComplexProperties/ClientAccessTokenRequest";
import { ClientAccessTokenType } from "../Enumerations/ClientAccessTokenType";
import { ClientApp } from "../ComplexProperties/ClientApp";
import { ConflictResolutionMode } from "../Enumerations/ConflictResolutionMode";
import { Conversation } from "./ServiceObjects/Items/Conversation";
import { ConversationAction } from "../Misc/ConversationAction";
import { ConversationActionType } from "../Enumerations/ConversationActionType";
import { ConversationId } from "../ComplexProperties/ConversationId";
import { ConversationRequest } from "../ComplexProperties/ConversationRequest";
import { ConversationResponse } from "../ComplexProperties/ConversationResponse";
import { ConversationSortOrder } from "../Enumerations/ConversationSortOrder";
import { ConvertIdRequest } from "./Requests/ConvertIdRequest";
import { ConvertIdResponse } from "./Responses/ConvertIdResponse";
import { CopyFolderRequest } from "./Requests/CopyFolderRequest";
import { CopyItemRequest } from "./Requests/CopyItemRequest";
import { CreateAttachmentRequest } from "./Requests/CreateAttachmentRequest";
import { CreateAttachmentResponse } from "./Responses/CreateAttachmentResponse";
import { CreateFolderRequest } from "./Requests/CreateFolderRequest";
import { CreateItemRequest } from "./Requests/CreateItemRequest";
import { CreateResponseObjectRequest } from "./Requests/CreateResponseObjectRequest";
import { CreateUserConfigurationRequest } from "./Requests/CreateUserConfigurationRequest";
import { DateTime, TimeZoneInfo } from "../DateTime";
import { DateTimePrecision } from "../Enumerations/DateTimePrecision";
import { DelegateInformation } from "../Misc/DelegateInformation";
import { DelegateManagementResponse } from "./Responses/DelegateManagementResponse";
import { DelegateUser } from "../ComplexProperties/DelegateUser";
import { DelegateUserResponse } from "./Responses/DelegateUserResponse";
import { DeleteAttachmentRequest } from "./Requests/DeleteAttachmentRequest";
import { DeleteAttachmentResponse } from "./Responses/DeleteAttachmentResponse";
import { DeleteFolderRequest } from "./Requests/DeleteFolderRequest";
import { DeleteItemRequest } from "./Requests/DeleteItemRequest";
import { DeleteMode } from "../Enumerations/DeleteMode";
import { DeleteUserConfigurationRequest } from "./Requests/DeleteUserConfigurationRequest";
import { DisableAppRequest } from "./Requests/DisableAppRequest";
import { DisableReasonType } from "../Enumerations/DisableReasonType";
import { EmailAddress } from "../ComplexProperties/EmailAddress";
import { EmailAddressCollection } from "../ComplexProperties/EmailAddressCollection";
import { EmptyFolderRequest } from "./Requests/EmptyFolderRequest";
import { EventType } from "../Enumerations/EventType";
import { EwsLogging } from "./EwsLogging";
import { EwsUtilities } from "./EwsUtilities";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { ExpandGroupRequest } from "./Requests/ExpandGroupRequest";
import { ExpandGroupResults } from "../Misc/ExpandGroupResults";
import { FindConversationRequest } from "./Requests/FindConversationRequest";
import { FindConversationResponse } from "./Responses/FindConversationResponse";
import { FindConversationResults } from "../Search/FindConversationResults";
import { FindFolderRequest } from "./Requests/FindFolderRequest";
import { FindFolderResponse } from "./Responses/FindFolderResponse";
import { FindFoldersResults } from "../Search/FindFoldersResults";
import { FindItemRequest } from "./Requests/FindItemRequest";
import { FindItemResponse } from "./Responses/FindItemResponse";
import { FindItemsResults } from "../Search/FindItemsResults";
import { Flag } from "../ComplexProperties/Flag";
import { Folder } from "./ServiceObjects/Folders/Folder";
import { FolderChange } from "../Sync/FolderChange";
import { FolderId } from "../ComplexProperties/FolderId";
import { FolderIdCollection } from "../ComplexProperties/FolderIdCollection";
import { FolderIdWrapper } from "../Misc/FolderIdWrapper";
import { FolderView } from "../Search/FolderView";
import { GetAppManifestsRequest } from "./Requests/GetAppManifestsRequest";
import { GetAppManifestsResponse } from "./Responses/GetAppManifestsResponse";
import { GetAppMarketplaceUrlRequest } from "./Requests/GetAppMarketplaceUrlRequest";
import { GetAppMarketplaceUrlResponse } from "./Responses/GetAppMarketplaceUrlResponse";
import { GetAttachmentRequest } from "./Requests/GetAttachmentRequest";
import { GetAttachmentResponse } from "./Responses/GetAttachmentResponse";
import { GetClientAccessTokenRequest } from "./Requests/GetClientAccessTokenRequest";
import { GetClientAccessTokenResponse } from "./Responses/GetClientAccessTokenResponse";
import { GetClientExtensionResponse } from "./Responses/GetClientExtensionResponse";
import { GetConversationItemsRequest } from "./Requests/GetConversationItemsRequest";
import { GetConversationItemsResponse } from "./Responses/GetConversationItemsResponse";
import { GetDelegateRequest } from "./Requests/GetDelegateRequest";
import { GetDelegateResponse } from "./Responses/GetDelegateResponse";
import { GetDiscoverySearchConfigurationRequest } from "./Requests/GetDiscoverySearchConfigurationRequest";
import { GetDiscoverySearchConfigurationResponse } from "./Responses/GetDiscoverySearchConfigurationResponse";
import { GetEncryptionConfigurationResponse } from "./Responses/GetEncryptionConfigurationResponse";
import { GetEventsRequest } from "./Requests/GetEventsRequest";
import { GetEventsResults } from "../Notifications/GetEventsResults";
import { GetFolderRequest } from "./Requests/GetFolderRequest";
import { GetFolderRequestForLoad } from "./Requests/GetFolderRequestForLoad";
import { GetFolderResponse } from "./Responses/GetFolderResponse";
import { GetHoldOnMailboxesRequest } from "./Requests/GetHoldOnMailboxesRequest";
import { GetHoldOnMailboxesResponse } from "./Responses/GetHoldOnMailboxesResponse";
import { GetInboxRulesRequest } from "./Requests/GetInboxRulesRequest";
import { GetInboxRulesResponse } from "./Responses/GetInboxRulesResponse";
import { GetItemRequest } from "./Requests/GetItemRequest";
import { GetItemRequestForLoad } from "./Requests/GetItemRequestForLoad";
import { GetItemResponse } from "./Responses/GetItemResponse";
import { GetPasswordExpirationDateRequest } from "./Requests/GetPasswordExpirationDateRequest";
import { GetRoomListsRequest } from "./Requests/GetRoomListsRequest";
import { GetRoomsRequest } from "./Requests/GetRoomsRequest";
import { GetSearchableMailboxesRequest } from "./Requests/GetSearchableMailboxesRequest";
import { GetSearchableMailboxesResponse } from "./Responses/GetSearchableMailboxesResponse";
import { GetUserAvailabilityRequest } from "./Requests/GetUserAvailabilityRequest";
import { GetUserAvailabilityResults } from "../Misc/Availability/GetUserAvailabilityResults";
import { GetUserConfigurationRequest } from "./Requests/GetUserConfigurationRequest";
import { GetUserConfigurationResponse } from "./Responses/GetUserConfigurationResponse";
import { GetUserOofSettingsRequest } from "./Requests/GetUserOofSettingsRequest";
import { GetUserRetentionPolicyTagsRequest } from "./Requests/GetUserRetentionPolicyTagsRequest";
import { GetUserRetentionPolicyTagsResponse } from "./Responses/GetUserRetentionPolicyTagsResponse";
import { GetUserSettingsResponse } from "../Autodiscover/Responses/GetUserSettingsResponse";
import { GroupedFindItemsResults } from "../Search/GroupedFindItemsResults";
import { Grouping } from "../Search/Grouping";
import { Guid } from "../Guid";
import { IdFormat } from "../Enumerations/IdFormat";
import { IFileAttachmentContentHandler } from "../Interfaces/IFileAttachmentContentHandler";
import { ImpersonatedUserId } from "../Misc/ImpersonatedUserId";
import { InstallAppRequest } from "./Requests/InstallAppRequest";
import { IPromise, IXHROptions } from "../Interfaces";
import { Item } from "./ServiceObjects/Items/Item";
import { ItemChange } from "../Sync/ItemChange";
import { ItemId } from "../ComplexProperties/ItemId";
import { KeyValuePair } from "../AltDictionary";
import { Mailbox } from "../ComplexProperties/Mailbox";
import { MailboxSearchLocation } from "../Enumerations/MailboxSearchLocation";
import { ManagementRoles } from "../Misc/ManagementRoles";
import { MarkAllItemsAsReadRequest } from "./Requests/MarkAllItemsAsReadRequest";
import { MarkAsJunkRequest } from "./Requests/MarkAsJunkRequest";
import { MarkAsJunkResponse } from "./Responses/MarkAsJunkResponse";
import { MeetingRequestsDeliveryScope } from "../Enumerations/MeetingRequestsDeliveryScope";
import { MessageDisposition } from "../Enumerations/MessageDisposition";
import { MoveCopyFolderResponse } from "./Responses/MoveCopyFolderResponse";
import { MoveCopyItemResponse } from "./Responses/MoveCopyItemResponse";
import { MoveFolderRequest } from "./Requests/MoveFolderRequest";
import { MoveItemRequest } from "./Requests/MoveItemRequest";
import { NameResolutionCollection } from "../Misc/NameResolutionCollection";
import { OofSettings } from "../ComplexProperties/Availability/OofSettings";
import { PrivilegedUserId } from "../Misc/PrivilegedUserId";
import { PromiseFactory } from "../PromiseFactory";
import { PropertyDefinitionBase } from "../PropertyDefinitions/PropertyDefinitionBase";
import { PropertySet } from "./PropertySet";
import { PullSubscription } from "../Notifications/PullSubscription";
import { PushSubscription } from "../Notifications/PushSubscription";
import { RemoveDelegateRequest } from "./Requests/RemoveDelegateRequest";
import { RenderingMode } from "../Enumerations/RenderingMode";
import { ResolveNameSearchLocation } from "../Enumerations/ResolveNameSearchLocation";
import { ResolveNamesRequest } from "./Requests/ResolveNamesRequest";
import { RetentionType } from "../Enumerations/RetentionType";
import { RuleCollection } from "../ComplexProperties/RuleCollection";
import { RuleOperation } from "../ComplexProperties/RuleOperation";
import { SearchFilter } from "../Search/Filters/SearchFilter";
import { SearchFolder } from "./ServiceObjects/Folders/SearchFolder";
import { SendCancellationsMode } from "../Enumerations/SendCancellationsMode";
import { SendInvitationsMode } from "../Enumerations/SendInvitationsMode";
import { SendInvitationsOrCancellationsMode } from "../Enumerations/SendInvitationsOrCancellationsMode";
import { SendItemRequest } from "./Requests/SendItemRequest";
import { ServiceErrorHandling } from "../Enumerations/ServiceErrorHandling";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceObject } from "./ServiceObjects/ServiceObject";
import { ServiceRemoteException } from "../Exceptions/ServiceRemoteException";
import { ServiceResponse } from "./Responses/ServiceResponse";
import { ServiceResponseCollection } from "./Responses/ServiceResponseCollection";
import { ServiceValidationException } from "../Exceptions/ServiceValidationException";
import { SetTeamMailboxRequest } from "./Requests/SetTeamMailboxRequest";
import { SetUserOofSettingsRequest } from "./Requests/SetUserOofSettingsRequest";
import { SoapFaultDetails } from "../Misc/SoapFaultDetails";
import { StreamingSubscription } from "../Notifications/StreamingSubscription";
import { StringList } from "../ComplexProperties/StringList";
import { Strings } from "../Strings";
import { SubscribeToPullNotificationsRequest } from "./Requests/SubscribeToPullNotificationsRequest";
import { SubscribeToPushNotificationsRequest } from "./Requests/SubscribeToPushNotificationsRequest";
import { SubscribeToStreamingNotificationsRequest } from "./Requests/SubscribeToStreamingNotificationsRequest";
import { SyncFolderHierarchyRequest } from "./Requests/SyncFolderHierarchyRequest";
import { SyncFolderItemsRequest } from "./Requests/SyncFolderItemsRequest";
import { SyncFolderItemsScope } from "../Enumerations/SyncFolderItemsScope";
import { TeamMailboxLifecycleState } from "../Enumerations/TeamMailboxLifecycleState";
import { TimeWindow } from "../Misc/Availability/TimeWindow";
import { TraceFlags } from "../Enumerations/TraceFlags";
import { UnifiedMessaging } from "../UnifiedMessaging/UnifiedMessaging";
import { UninstallAppRequest } from "./Requests/UninstallAppRequest";
import { UnpinTeamMailboxRequest } from "./Requests/UnpinTeamMailboxRequest";
import { UnsubscribeRequest } from "./Requests/UnsubscribeRequest";
import { UpdateDelegateRequest } from "./Requests/UpdateDelegateRequest";
import { UpdateFolderRequest } from "./Requests/UpdateFolderRequest";
import { UpdateInboxRulesRequest } from "./Requests/UpdateInboxRulesRequest";
import { UpdateItemRequest } from "./Requests/UpdateItemRequest";
import { UpdateItemResponse } from "./Responses/UpdateItemResponse";
import { UpdateUserConfigurationRequest } from "./Requests/UpdateUserConfigurationRequest";
import { Uri } from "../Uri";
import { UserConfiguration } from "../Misc/UserConfiguration";
import { UserConfigurationProperties } from "../Enumerations/UserConfigurationProperties";
import { UserId } from "../ComplexProperties/UserId";
import { UserSettingName } from "../Enumerations/UserSettingName";
import { ViewBase } from "../Search/ViewBase";
import { WellKnownFolderName } from "../Enumerations/WellKnownFolderName";
import { XHRFactory } from "../XHRFactory";

import { ExchangeServiceBase } from "./ExchangeServiceBase";
/**
 * Represents a binding to the **Exchange Web Services**.
 *
 */
export class ExchangeService extends ExchangeServiceBase {

    /* #region Constants */
    private static TargetServerVersionHeaderName: string = "X-EWS-TargetVersion";
    /* #endregion Constants */


    /* #region Fields */
    private url: Uri = null;
    //private preferredCulture: any = null;// System.Globalization.CultureInfo;
    //private dateTimePrecision: DateTimePrecision = DateTimePrecision.Default;
    //private impersonatedUserId: ImpersonatedUserId = null;
    //private privilegedUserId: PrivilegedUserId = null;
    //private managementRoles: ManagementRoles = null;
    //private fileAttachmentContentHandler: IFileAttachmentContentHandler = null;
    private unifiedMessaging: UnifiedMessaging = null;
    //private enableScpLookup: boolean = false; //false for javascript, AD Lookup not implemented 
    private renderingMode: RenderingMode = RenderingMode.Xml;
    //private traceEnablePrettyPrinting: boolean = true;
    private targetServerVersion: string = null;
    //private exchange2007CompatibilityMode: boolean = false;
    /* #endregion Fields */


    /* #region Properties */
    Url: Uri;
    ImpersonatedUserId: ImpersonatedUserId = null;
    PrivilegedUserId: PrivilegedUserId = null;
    ManagementRoles: ManagementRoles = null;
    PreferredCulture: any = null;//System.Globalization.CultureInfo;
    DateTimePrecision: DateTimePrecision = DateTimePrecision.Default;
    FileAttachmentContentHandler: IFileAttachmentContentHandler = null;
    get TimeZone(): TimeZoneInfo {// System.TimeZoneInfo;
        return this.timeZone;
    }
    get UnifiedMessaging(): UnifiedMessaging {
        if (this.unifiedMessaging === null) {
            this.unifiedMessaging = new UnifiedMessaging(this);
        }
        return this.unifiedMessaging;
    }
    get EnableScpLookup(): boolean { return false; } //false for javascript, AD Lookup not implemented
    Exchange2007CompatibilityMode: boolean = false;
    get RenderingMethod(): RenderingMode { return this.renderingMode; }
    TraceEnablePrettyPrinting: boolean = true;
    get TargetServerVersion(): string {
        return this.targetServerVersion;
    }
    set TargetServerVersion(value: string) {
        ExchangeService.ValidateTargetVersion(value);
        this.targetServerVersion = value;
    }
    /* #region Properties */



    /* #region Response object operations */
    /**
     * @internal Create response object.
     * 
     * @param   {ServiceObject}          responseObject       The response object.
     * @param   {FolderId}               parentFolderId       The parent folder id.
     * @param   {MessageDisposition}     messageDisposition   The message disposition.
     * @return  {IPromise<Item[]>}       The list of items created or modified as a result of the "creation" of the response object :Promise.
     */
    InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]> {
        var request: CreateResponseObjectRequest = new CreateResponseObjectRequest(this, ServiceErrorHandling.ThrowOnError);
        request.ParentFolderId = parentFolderId;
        request.Items = [responseObject];
        request.MessageDisposition = messageDisposition;
        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Items;
        });
    }
    /* #endregion Response object operations */


    /* #region Folder operations */

    /**
     * @internal Binds to folder.
     *
     * @param   {FolderId}           folderId      The folder id.
     * @param   {PropertySet}        propertySet   The property set.
     * @return  {IPromise<TFolder>}  Folder object :Promise.
     */
    BindToFolder(folderId: FolderId, propertySet: PropertySet): IPromise<Folder>;
    /**
     * @internal Binds to folder.
     *
     * @param   {FolderId}           folderId      The folder id.
     * @param   {PropertySet}        propertySet   The property set.
     * @param   {folderType}         propertySet   Type to Cast - pass Folder or subclass itself, not an instance
     * @return  {IPromise<TFolder>}  Folder object :Promise.
     */
    BindToFolder<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet,/** pass Folder or subclass itself, not an instance */ folderType: any): IPromise<TFolder>;
    BindToFolder(folderId: FolderId, propertySet: PropertySet, /** pass Folder or subclass itself, not an instance */ folderType: any = null): IPromise<Folder> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        var request: GetFolderRequest = new GetFolderRequest(this, ServiceErrorHandling.ThrowOnError);

        request.FolderIds.Add(folderId);
        request.PropertySet = propertySet;

        return request.Execute().then((responses) => {
            var result = responses.__thisIndexer(0).Folder;
            if (folderType != null && !(result instanceof folderType)) { //todo: validate folderType to be not a constructor
                throw new ServiceLocalException(
                    StringHelper.Format(
                        Strings.FolderTypeNotCompatible,
                        "Type detection not implemented - ExchangeService.ts - BindToFolder<TFolder>",
                        "Type detection not implemented"));
            }
            return result;
        });


    }
    /**
     * @internal Copies a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {IPromise<Folder>}   Copy of folder :Promise.
     */
    CopyFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> {
        var request: CopyFolderRequest = new CopyFolderRequest(this, ServiceErrorHandling.ThrowOnError);

        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);

        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Folder;
        });
    }
    /**
     * @internal Creates a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   folder           The folder.
     * @param   {FolderId}   parentFolderId   The parent folder id.
     */
    CreateFolder(folder: Folder, parentFolderId: FolderId): IPromise<void> {
        var request: CreateFolderRequest = new CreateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.Folders = [folder];
        request.ParentFolderId = parentFolderId;
        return <any>request.Execute();
    }

    /**
     * @internal Deletes a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId     The folder id.
     * @param   {DeleteMode}    deleteMode   The delete mode.
     */
    DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        var request: DeleteFolderRequest = new DeleteFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        return <any>request.Execute();
    }
    /**
     * @internal Empties a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId           The folder id.
     * @param   {DeleteMode}    deleteMode         The delete mode.
     * @param   {boolean}       deleteSubFolders   if set to true empty folder should also delete sub folders.
     */
    EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        var request: EmptyFolderRequest = new EmptyFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        request.DeleteSubFolders = deleteSubFolders;
        return <any>request.Execute();
    }

    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter     The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter       The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;

    FindFolders(
        parentFolderIdOrName: FolderId | WellKnownFolderName,
        viewOrSearchFilter: FolderView | SearchFilter,
        folderView?: FolderView): IPromise<FindFoldersResults> {
        //todo: better argument check with ewsutilities
        //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        //EwsUtilities.ValidateParam(view, "view");
        //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
        var argsLength = arguments.length;
        if (argsLength < 2 && argsLength > 3) {
            throw new Error("ExchangeService.ts - FindFolders - invalid number of arguments, check documentation and try again.");
        }

        //position 1 - parentFolderIdOrName
        var parentFolderIds: FolderId[] = []
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderIds.push(new FolderId(parentFolderIdOrName));
        }
        else if (parentFolderIdOrName instanceof FolderId) {
            parentFolderIds.push(parentFolderIdOrName);
        }
        else {
            throw new Error("ExchangeService.ts - FindFolders - incorrect use of parameters, 1st argument must be Folder ID or WellKnownFolderName");
        }

        var searchFilter: SearchFilter = null;
        var view: FolderView = null;

        //position 2 - viewOrSearchFilter
        if (viewOrSearchFilter instanceof SearchFilter) {
            if (!(folderView instanceof FolderView)) {
                throw new Error("ExchangeService.ts - FindFolders with " + argsLength + " parameters - incorrect uses of parameter at 3nd position, it must be FolderView when using SearchFilter at 2nd place");
            }
            searchFilter = viewOrSearchFilter;
        }
        else if (viewOrSearchFilter instanceof FolderView) {
            view = viewOrSearchFilter;
        }
        else {
            throw new Error("ExchangeService.ts - FindFolders - incorrect uses of parameters at 2nd position, must be FolderView or SearchFilter");
        }

        //position 3 - folderView
        if (argsLength == 3) {
            view = folderView;
        }

        return this.InternalFindFolders(
            parentFolderIds,
            searchFilter, /* searchFilter */
            view,
            ServiceErrorHandling.ThrowOnError).then((responses) => {
                return responses.__thisIndexer(0).Results;
            });
    }
    /**
     * Finds folders.
     *
     * @param   {FolderId[]}             parentFolderIds     The parent folder ids.
     * @param   {SearchFilter}           searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}             view                The view controlling the number of folders returned.
     * @param   {ServiceErrorHandling}   errorHandlingMode   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<FindFolderResponse>>}    Collection of service responses :Promise.
     */
    private InternalFindFolders(parentFolderIds: FolderId[], searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindFolderResponse>> {

        var request: FindFolderRequest = new FindFolderRequest(this, errorHandlingMode);

        request.ParentFolderIds.AddRange(parentFolderIds);
        request.SearchFilter = searchFilter;
        request.View = view;

        return request.Execute();
    }
    /**
     * @internal Load specified properties for a folder.
     *
     * @param   {Folder}         folder        The folder.
     * @param   {PropertySet}    propertySet   The property set.
     */
    LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): IPromise<void> {
        EwsUtilities.ValidateParam(folder, "folder");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        var request: GetFolderRequestForLoad = new GetFolderRequestForLoad(this, ServiceErrorHandling.ThrowOnError);

        request.FolderIds.Add(folder);
        request.PropertySet = propertySet;

        return <any>request.Execute();
    }
    /**
     * @internal Marks all items in folder as read/unread. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId               The folder id.
     * @param   {boolean}       readFlag               If true, items marked as read, otherwise unread.
     * @param   {boolean}       suppressReadReceipts   If true, suppress read receipts for items.
     */
    MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "MarkAllItemsAsRead");
        var request: MarkAllItemsAsReadRequest = new MarkAllItemsAsReadRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.ReadFlag = readFlag;
        request.SuppressReadReceipts = suppressReadReceipts;
        return <any>request.Execute();
    }
    /**
     * @internal Move a folder.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {IPromise<Folder>}   Moved folder :Promise.
     */
    MoveFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> {
        var request: MoveFolderRequest = new MoveFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);
        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Folder;
        });
    }
    /**
     * @internal Updates a folder.
     *
     * @param   {Folder}   folder   The folder.
     */
    UpdateFolder(folder: Folder): IPromise<void> {
        var request: UpdateFolderRequest = new UpdateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.Folders.push(folder);
        return request.Execute().then((value) => {
            return null;
        });
    }
    /* #endregion Folder operations */


    /* #region Item operations */

    /**
     * Archives multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds          The Ids of the items to move.
     * @param   {FolderId}   sourceFolderId   The Id of the folder in primary corresponding to which items are being archived to.
     * @return  {IPromise<ServiceResponseCollection<ArchiveItemResponse>>}                    A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ArchiveItems<TResponse extends ServiceResponse>(itemIds: ItemId[], sourceFolderId: FolderId): IPromise<ServiceResponseCollection<ArchiveItemResponse>> {
        var request: ArchiveItemRequest = new ArchiveItemRequest(this, ServiceErrorHandling.ReturnErrors);
        request.Ids.AddRange(itemIds);
        request.SourceFolderId = sourceFolderId;
        return request.Execute();
    }
    /* //ref: new method, //todo: implement other newer code from ews managed api repo  */
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet     The set of properties to load.
     * @param   {string}        anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}                   A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToGroupItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string): IPromise<ServiceResponseCollection<GetItemResponse>> {
        EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        EwsUtilities.ValidateParam(propertySet, "propertySet");
        EwsUtilities.ValidateParam(propertySet, "anchorMailbox");

        return this.InternalBindToItems(
            itemIds,
            propertySet,
            anchorMailbox,
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * @internal Binds to item.
     *
     * @param   {ItemId}            itemId        The item id.
     * @param   {PropertySet}       propertySet   The property set.
     * @return  {IPromise<Item>}    Item :Promise.
     */
    BindToItem(itemId: ItemId, propertySet: PropertySet): IPromise<Item>;
    /**
     * @internal Binds to item.
     *
     * @param   {ItemId}            itemId        The item id.
     * @param   {PropertySet}       propertySet   The property set.
     * @param   {<TItem>}          itemType      Item type class ex: Item, EmailMessage etc..
     * @return  {IPromise<Item>}    Item :Promise.
     */
    BindToItem<TItem extends Item>(itemId: ItemId, propertySet: PropertySet, itemType: any /* pass Item or subclass itself, not instance */): IPromise<TItem>;
    BindToItem(itemId: ItemId, propertySet: PropertySet,/** pass Item or subclass itself, not an instance */ itemType: any = null): IPromise<Item> {

        EwsUtilities.ValidateParam(itemId, "itemId");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        return this.InternalBindToItems(
            [itemId],
            propertySet,
            null, /* anchorMailbox */
            ServiceErrorHandling.ThrowOnError).then((response) => {
                var result = response.__thisIndexer(0).Item;
                if (itemType != null && !(result instanceof itemType)) { //todo: validate itemType to be not a constructor
                    throw new ServiceLocalException(
                        StringHelper.Format(
                            Strings.ItemTypeNotCompatible,
                            "Type detection not implemented - ExchangeService.ts - BindToItem<TItem>",
                            "Type detection not implemented"));
                }

                return result;
            });
    }
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds       The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}                 A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToItems(itemIds: ItemId[], propertySet: PropertySet): IPromise<ServiceResponseCollection<GetItemResponse>> {
        EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        return this.InternalBindToItems(
            itemIds,
            propertySet,
            null, /* anchorMailbox */
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * @internal Copies an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}        itemId                The Id of the item to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the item to.
     * @return  {IPromise<Item>}    The copy of the item :Promise.
     */
    CopyItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item> {
        return this.InternalCopyItems(
            [itemId],
            destinationFolderId,
            null,
            ServiceErrorHandling.ThrowOnError).then((response) => {
                return response.__thisIndexer(0).Item;
            });
    }
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}                         A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @param   {boolean}       returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}                         A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean = null): IPromise<ServiceResponseCollection<MoveCopyItemResponse>> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "CopyItems");

        return this.InternalCopyItems(
            itemIds,
            destinationFolderId,
            returnNewItemIds,
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * @internal Creates an item. Calling this method results in a call to EWS.
     *
     * @param   {Item}                  item                  The item to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created item. If null, the item is created in its default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for item of type Appointment. Required if item is an Appointment instance.
     */
    CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void> {
        return <any>this.InternalCreateItems(
            [item],
            parentFolderId,
            messageDisposition,
            sendInvitationsMode,
            ServiceErrorHandling.ThrowOnError);
    }
    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}                         A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */
    CreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<ServiceResponseCollection<ServiceResponse>> {
        // All items have to be new.
        if (!items.every((item) => item.IsNew)) {
            throw new ServiceValidationException(Strings.CreateItemsDoesNotHandleExistingItems);
        }

        // Make sure that all items do *not* have unprocessed attachments.
        if (!items.every((item) => !item.HasUnprocessedAttachmentChanges())) {
            throw new ServiceValidationException(Strings.CreateItemsDoesNotAllowAttachments);
        }

        return this.InternalCreateItems(
            items,
            parentFolderId,
            messageDisposition,
            sendInvitationsMode,
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * @internal Deletes an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}                    itemId                    The Id of the item to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     */
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * @internal Deletes an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}                    itemId                    The Id of the item to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     */
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean = false): IPromise<void> {
        EwsUtilities.ValidateParam(itemId, "itemId");

        return <any>this.InternalDeleteItems(
            [itemId],
            deleteMode,
            sendCancellationsMode,
            affectedTaskOccurrences,
            ServiceErrorHandling.ThrowOnError,
            suppressReadReceipts);
    }
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean = false): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        return this.InternalDeleteItems(
            itemIds,
            deleteMode,
            sendCancellationsMode,
            affectedTaskOccurrences,
            ServiceErrorHandling.ReturnErrors,
            suppressReadReceipt);
    }
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the calendar folder in which to search for items.
     * @param   {CalendarView}          calendarView     The calendar view controlling the number of appointments returned.
     * @return  {IPromise<FindItemsResults<Appointment>>}                    A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId   The id of the calendar folder in which to search for items.
     * @param   {CalendarView}  calendarView     The calendar view controlling the number of appointments returned.
     * @return  {IPromise<FindItemsResults<Appointment>>}                    A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    FindAppointments(parentFolderIdOrName: FolderId | WellKnownFolderName, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>> {
        var parentFolderId: FolderId = <FolderId>parentFolderIdOrName;
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderId = new FolderId(parentFolderIdOrName);
        }
        return this.FindItems<Appointment>(
            [parentFolderId],
            null, /* searchFilter */
            null, /* queryString */
            calendarView,
            null, /* groupBy */
            ServiceErrorHandling.ThrowOnError).then((response) => {
                return response.__thisIndexer(0).Results;
            });
    }

    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            The search string to be used for indexed search, if any.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {string}        queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.     
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @param   {Grouping}  groupBy                The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * @internal Finds items.
     *
     * @param   {FolderId[]}                parentFolderIds     The parent folder ids.
     * @param   {SearchFilter}              searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {string}                    queryString         query string to be used for indexed search.
     * @param   {ViewBase}                  view                The view controlling the number of items returned.
     * @param   {Grouping}                  groupBy             The group by.
     * @param   {ServiceErrorHandling}      errorHandlingMode   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>}      Service response collection :Promise.
     */
    FindItems<TItem extends Item>(parentFolderIds: FolderId[], searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    //skipped: not needed, no calls coming in to this internal function in ews managed api, future use possible until them keep it muted   - 
    //FindItems<TItem extends Item>(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;

    FindItems<TItem extends Item>(
        nameIdOrIds: WellKnownFolderName | FolderId | FolderId[],
        viewQueryStringOrSearchFilter: ViewBase | string | SearchFilter,
        groupByViewRHTOrQueryString?: Grouping | ViewBase | boolean | string,
        groupByOrView?: Grouping | ViewBase,
        groupBy?: Grouping,
        errorHandlingMode: ServiceErrorHandling = ServiceErrorHandling.ThrowOnError
    ): IPromise<FindItemsResults<Item> | GroupedFindItemsResults<Item> | ServiceResponseCollection<FindItemResponse<TItem>>> {

        //todo: better argument check with ewsutilities

        //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
        //EwsUtilities.ValidateParam(groupBy, "groupBy");
        //EwsUtilities.ValidateParamAllowNull(queryString, "queryString");
        //EwsUtilities.ValidateParamCollection(parentFolderIds, "parentFolderIds");
        //EwsUtilities.ValidateParam(view, "view");
        //EwsUtilities.ValidateParam(groupBy, "groupBy");
        //EwsUtilities.ValidateParamAllowNull(queryString, "queryString");
        //EwsUtilities.ValidateParamAllowNull(returnHighlightTerms, "returnHighlightTerms");
        //EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "FindItems");

        var argsLength = arguments.length;
        if (argsLength < 2 && argsLength > 6) {
            throw new Error("ExchangeService.ts - FindItems - invalid number of arguments, check documentation and try again.");
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
            parentIds = <FolderId[]>nameIdOrIds;
        }

        var queryString: string = null;
        var searchFilter: SearchFilter = null;
        var view: ViewBase = null;

        //position 2 - viewQueryStringOrSearchFilter
        if (argsLength >= 2)
            if (typeof viewQueryStringOrSearchFilter === 'string') {
                queryString = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter instanceof SearchFilter) {
                searchFilter = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter instanceof ViewBase) {
                view = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter) { //error if not null
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
                EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "FindItems");
            }
            else if (groupByViewRHTOrQueryString) {//error if not null
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
            else if (groupByOrView) {//error if not null
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 4th  position, must be  ViewBase or Grouping");
            }
        }

        //position 5 - groupBy
        if (argsLength >= 5) {
            if (groupByOrView && !(groupByOrView instanceof ViewBase)) {//error if not null
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
        });

    }
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {string}                anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @param   {ServiceErrorHandling}  errorHandling   Type of error handling to perform.
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}      A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    private InternalBindToItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<GetItemResponse>> {
        var request: GetItemRequest = new GetItemRequest(this, errorHandling);

        request.ItemIds.AddRange(itemIds);
        request.PropertySet = propertySet;
        request.AnchorMailbox = anchorMailbox;

        return request.Execute();
    }
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds                 The Ids of the items to bind to.
     * @param   {FolderId}              destinationFolderId     The Id of the folder to copy the items to.
     * @param   {boolean}               returnNewItemIds        Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling           What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    private InternalCopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<MoveCopyItemResponse>> {
        var request: CopyItemRequest = new CopyItemRequest(this, errorHandling);
        request.ItemIds.AddRange(itemIds);
        request.DestinationFolderId = destinationFolderId;
        request.ReturnNewItemIds = returnNewItemIds;

        return request.Execute();
    }
    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @param   {ServiceErrorHandling}  errorHandling         What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */
    private InternalCreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>> {
        var request: CreateItemRequest = new CreateItemRequest(this, errorHandling);

        request.ParentFolderId = parentFolderId;
        request.Items = items;
        request.MessageDisposition = messageDisposition;
        request.SendInvitationsMode = sendInvitationsMode;

        return request.Execute();
    }
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if any of the item Ids represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if any of the item Ids represents a Task.
     * @param   {ServiceErrorHandling}      errorHandling             Type of error handling to perform.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    private InternalDeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        var request: DeleteItemRequest = new DeleteItemRequest(this, errorHandling);

        request.ItemIds.AddRange(itemIds);
        request.DeleteMode = deleteMode;
        request.SendCancellationsMode = sendCancellationsMode;
        request.AffectedTaskOccurrences = affectedTaskOccurrences;
        request.SuppressReadReceipts = suppressReadReceipts;

        return request.Execute();
    }
    /**
     * @internal Loads the properties of multiple items in a single call to EWS.
     *
     * @param   {Item[]}                items           The items to load the properties of.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {ServiceErrorHandling}  errorHandling   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    InternalLoadPropertiesForItems(items: Item[], propertySet: PropertySet, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>> {
        var request: GetItemRequestForLoad = new GetItemRequestForLoad(this, errorHandling);
        request.ItemIds.AddRange(items);
        request.PropertySet = propertySet;

        return request.Execute();
    }
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds               The Ids of the items to move.
     * @param   {FolderId}              destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}               returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling         What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    private InternalMoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<MoveCopyItemResponse>> {
        var request: MoveItemRequest = new MoveItemRequest(this, errorHandling);

        request.ItemIds.AddRange(itemIds);
        request.DestinationFolderId = destinationFolderId;
        request.ReturnNewItemIds = returnNewItemIds;

        return request.Execute();
    }
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the messages, meeting invitation or cancellations are saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @param   {ServiceErrorHandling}                  errorHandling                        What type of error handling should be performed.
     * @param   {boolean}                               suppressReadReceipt                  Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<UpdateItemResponse>>}                    A ServiceResponseCollection providing update results for each of the specified items :Promise.
     */
    private InternalUpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): IPromise<ServiceResponseCollection<UpdateItemResponse>> {
        var request: UpdateItemRequest = new UpdateItemRequest(this, errorHandling);


        //request.Items.AddRange(items);
        ArrayHelper.AddRange(request.Items, items);

        request.SavedItemsDestinationFolder = savedItemsDestinationFolderId;
        request.MessageDisposition = messageDisposition;
        request.ConflictResolutionMode = conflictResolution;
        request.SendInvitationsOrCancellationsMode = sendInvitationsOrCancellationsMode;
        request.SuppressReadReceipts = suppressReadReceipt;

        return request.Execute();
    }
    /**
     * Loads the properties of multiple items in a single call to EWS. **Unstable for Extended Properties**
     *
     * @param   {Item[]}        items         The items to load the properties of.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    LoadPropertiesForItems(items: Item[], propertySet: PropertySet): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsUtilities.ValidateParamCollection(items, "items");
        EwsUtilities.ValidateParam(propertySet, "propertySet");
        return this.InternalLoadPropertiesForItems(
            items,
            propertySet,
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * Mark items as junk.
     *
     * @param   {ItemId[]}      itemIds    ItemIds for the items to mark
     * @param   {boolean}       isJunk     Whether the items are junk.  If true, senders are add to blocked sender list. If false, senders are removed.
     * @param   {boolean}       moveItem   Whether to move the item.  Items are moved to junk folder if isJunk is true, inbox if isJunk is false.
     * @return  {IPromise<ServiceResponseCollection<MarkAsJunkResponse>>}       A ServiceResponseCollection providing itemIds for each of the moved items :Promise.
     */
    MarkAsJunk(itemIds: ItemId[], isJunk: boolean, moveItem: boolean): IPromise<ServiceResponseCollection<MarkAsJunkResponse>> {
        var request: MarkAsJunkRequest = new MarkAsJunkRequest(this, ServiceErrorHandling.ReturnErrors);
        request.ItemIds.AddRange(itemIds);
        request.IsJunk = isJunk;
        request.MoveItem = moveItem;
        return request.Execute();
    }
    /**
     * @internal Move an item.
     *
     * @param   {ItemId}    itemId                The Id of the item to move.
     * @param   {FolderId}  destinationFolderId   The Id of the folder to move the item to.
     * @return  {IPromise<Item>}                  The moved item :Promise.
     */
    MoveItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item> {
        return this.InternalMoveItems(
            [itemId],
            destinationFolderId,
            null,
            ServiceErrorHandling.ThrowOnError).then((responses) => {
                return responses.__thisIndexer(0).Item;
            });
    }
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}    returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean = null): IPromise<ServiceResponseCollection<MoveCopyItemResponse>> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "MoveItems");

        return this.InternalMoveItems(
            itemIds,
            destinationFolderId,
            returnNewItemIds,
            ServiceErrorHandling.ReturnErrors);
    }
    /**
     * @internal Sends an item.
     *
     * @param   {Item}      item                           The item.
     * @param   {FolderId}  savedCopyDestinationFolderId   The saved copy destination folder id.
     */
    SendItem(item: Item, savedCopyDestinationFolderId: FolderId): IPromise<void> {
        var request: SendItemRequest = new SendItemRequest(this, ServiceErrorHandling.ThrowOnError);
        request.Items = [item];
        request.SavedCopyDestinationFolderId = savedCopyDestinationFolderId;
        return <any>request.Execute();
    }
    /**
     * @internal Updates an item.
     *
     * @param   {Item}                                  item                                 The item to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @return  {IPromise<Item>}                                                             Updated item : Promise.
     */
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    /**
     * @internal Updates an item.
     *
     * @param   {Item}                                  item                                 The item to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {IPromise<Item>}                                                             Updated item : Promise.
     */
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): IPromise<Item> {
        return this.InternalUpdateItems(
            [item],
            savedItemsDestinationFolderId,
            conflictResolution,
            messageDisposition,
            sendInvitationsOrCancellationsMode,
            ServiceErrorHandling.ThrowOnError,
            suppressReadReceipts).then((responses) => {

                return responses.__thisIndexer(0).ReturnedItem;

            });
    }
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @return  {IPromise<Item>}                                                             A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {IPromise<Item>}                                                             A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): IPromise<ServiceResponseCollection<UpdateItemResponse>> {
        // All items have to exist on the server (!new) and modified (dirty)
        if (!items.every((item) => (!item.IsNew && item.IsDirty))) {
            throw new ServiceValidationException(Strings.UpdateItemsDoesNotSupportNewOrUnchangedItems);
        }

        // Make sure that all items do *not* have unprocessed attachments.
        if (!items.every((item) => !item.HasUnprocessedAttachmentChanges())) {
            throw new ServiceValidationException(Strings.UpdateItemsDoesNotAllowAttachments);
        }

        return this.InternalUpdateItems(
            items,
            savedItemsDestinationFolderId,
            conflictResolution,
            messageDisposition,
            sendInvitationsOrCancellationsMode,
            ServiceErrorHandling.ReturnErrors,
            suppressReadReceipts);
    }
    /* #endregion Item operations 47*/


    /* #region Attachment operations */

    /**
     * @internal Creates attachments.
     *
     * @param   {string}            parentItemId   The parent item id.
     * @param   {Attachment[]}      attachments            The attachments.
     * @return  {IPromise<ServiceResponseCollection<CreateAttachmentResponse>>}     Service response collection :Promise.
     */
    CreateAttachments(parentItemId: string, attachments: Attachment[]): IPromise<ServiceResponseCollection<CreateAttachmentResponse>> {
        let request: CreateAttachmentRequest = new CreateAttachmentRequest(this, ServiceErrorHandling.ReturnErrors);

        request.ParentItemId = parentItemId;
        ArrayHelper.AddRange(request.Attachments, attachments); //request.Attachments.AddRange(attachments);

        return request.Execute();
    }

    /**
     * @internal Deletes attachments.
     *
     * @param   {Attachment[]}   attachments   The attachments.
     * @return  {IPromise<ServiceResponseCollection<DeleteAttachmentResponse>>}     Service response collection :Promise.
     */
    DeleteAttachments(attachments: Attachment[]): IPromise<ServiceResponseCollection<DeleteAttachmentResponse>> {
        let request: DeleteAttachmentRequest = new DeleteAttachmentRequest(this, ServiceErrorHandling.ReturnErrors);

        ArrayHelper.AddRange(request.Attachments, attachments); //request.Attachments.AddRange(attachments);

        return request.Execute();
    }

    /**
     * @internal Gets an attachment.
     *
     * @param   {Attachment}                    attachment             The attachment.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<void> {
        return <any>this.InternalGetAttachments(
            [attachment],
            bodyType,
            additionalProperties,
            ServiceErrorHandling.ThrowOnError);
    }
    /**
     * Gets attachments.
     *
     * @param   {Attachment[]}                  attachments            The attachments.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */
    GetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<ServiceResponseCollection<GetAttachmentResponse>>;
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */
    GetAttachments(attachmentIds: string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<ServiceResponseCollection<GetAttachmentResponse>>;
    GetAttachments(attachmentsOrIds: Attachment[] | string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<ServiceResponseCollection<GetAttachmentResponse>> {
        var ids = ArrayHelper.OfType<string, any[]>(<any[]>attachmentsOrIds, (attachment: any) => { return typeof attachment === 'string'; });
        if (ids && ids.length > 0) {
            var request: GetAttachmentRequest = new GetAttachmentRequest(this, ServiceErrorHandling.ReturnErrors);
            ArrayHelper.AddRange(request.AttachmentIds, <string[]>attachmentsOrIds);
            request.BodyType = bodyType;

            if (additionalProperties != null) {
                ArrayHelper.AddRange(request.AdditionalProperties, additionalProperties);
                //request.AdditionalProperties.AddRange(additionalProperties);
            }
            return request.Execute();

        }
        else {
            return this.InternalGetAttachments(
                <Attachment[]>attachmentsOrIds,
                bodyType,
                additionalProperties,
                ServiceErrorHandling.ReturnErrors);
        }
    }
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */
    private InternalGetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[], errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<GetAttachmentResponse>> {
        var request: GetAttachmentRequest = new GetAttachmentRequest(this, errorHandling);
        ArrayHelper.AddRange(request.Attachments, attachments);
        request.BodyType = bodyType;

        if (additionalProperties != null) {
            ArrayHelper.AddRange(request.AdditionalProperties, additionalProperties);
            //request.AdditionalProperties.AddRange(additionalProperties);
        }
        return request.Execute();
    }

    /* #endregion Attachment operations */


    /* #region AD related operations */

    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}   groupId   The Id of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(groupId: ItemId): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(smtpAddress: string): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the group.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(emailAddress: EmailAddress): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   address       The SMTP address of the group to expand.
     * @param   {string}   routingType   The routing type of the address of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(address: string, routingType: string): IPromise<ExpandGroupResults>;
    ExpandGroup(emailAddressOrsmtpAddressOrGroupId: EmailAddress | string | ItemId, routingType?: string): IPromise<ExpandGroupResults> {
        // EwsUtilities.ValidateParam(emailAddressOrsmtpAddressOrGroupId, "address");
        // EwsUtilities.ValidateParam(routingType, "routingType");
        //EwsUtilities.ValidateParam(emailAddress, "emailAddress");
        var emailAddress: EmailAddress = new EmailAddress();

        if (emailAddressOrsmtpAddressOrGroupId instanceof EmailAddress) {
            emailAddress = emailAddressOrsmtpAddressOrGroupId;
        }
        else if (emailAddressOrsmtpAddressOrGroupId instanceof ItemId) {
            emailAddress.Id = emailAddressOrsmtpAddressOrGroupId;
        }
        else if (typeof emailAddressOrsmtpAddressOrGroupId === 'string') {
            emailAddress = new EmailAddress(emailAddressOrsmtpAddressOrGroupId);
        }

        if (routingType) {
            emailAddress.RoutingType = routingType;
        }

        var request: ExpandGroupRequest = new ExpandGroupRequest(this);

        request.EmailAddress = emailAddress;

        return request.Execute().then((response) => {
            return response.__thisIndexer(0).Members;
        });

    }
    /**
     * Get the password expiration date
     *
     * @param   {string}   mailboxSmtpAddress   The e-mail address of the user.
     * @return  {IPromise<DateTime>}            The password expiration date :Promise.
     */
    GetPasswordExpirationDate(mailboxSmtpAddress: string): IPromise<DateTime> {
        var request: GetPasswordExpirationDateRequest = new GetPasswordExpirationDateRequest(this);
        request.MailboxSmtpAddress = mailboxSmtpAddress;

        return request.Execute().then((response) => {
            return response.PasswordExpirationDate;
        });
    }

    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}    nameToResolve               The name to resolve.
     * @return  {IPromise<NameResolutionCollection>}    A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;

    ResolveName(
        nameToResolve: string,
        parentFolderIdsOrSearchScope?: ResolveNameSearchLocation | FolderId[],
        searchScopeOrReturnContactDetails?: ResolveNameSearchLocation | boolean,
        returnContactDetailsOrContactDataPropertySet?: boolean | PropertySet,
        contactDataPropertySet: PropertySet = null
    ): IPromise<NameResolutionCollection> {


        var argsLength = arguments.length;
        if (argsLength < 1 && argsLength > 5) {
            throw new Error("ExchangeService.ts - ResolveName - invalid number of arguments, check documentation and try again.");
        }

        //position 1 - nameToResolve - no change, same for all overload

        var searchScope: ResolveNameSearchLocation = null;
        var parentFolderIds: FolderId[] = null;

        //position 2 - parentFolderIdsOrSearchScope
        if (argsLength >= 2) {
            if (typeof parentFolderIdsOrSearchScope === 'number') {
                searchScope = parentFolderIdsOrSearchScope;
            }
            else if (Array.isArray(parentFolderIdsOrSearchScope)) {
                parentFolderIds = parentFolderIdsOrSearchScope;
            }
            //could be null        
            // else {
            //     throw new Error("ExchangeService.ts - FindItems - incorrect uses of parameters at 2nd position, must be string, ViewBase or SearchFilter");
            // }
        }

        var returnContactDetails: boolean = false;

        //position 3 - searchScopeOrReturnContactDetails
        if (argsLength >= 3) {
            if (typeof searchScopeOrReturnContactDetails === 'boolean') {
                if (typeof parentFolderIdsOrSearchScope !== 'number') {
                    throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 2nd position, it must be ResolveNameSearchLocation when using boolean at 3rd place");
                }
                returnContactDetails = searchScopeOrReturnContactDetails;
            }
            else if (typeof searchScopeOrReturnContactDetails === 'number') {
                if (!Array.isArray(parentFolderIdsOrSearchScope)) {
                    throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 2nd position, it must be FolderId[] when using ResolveNameSearchLocation at 3rd place");
                }
                searchScope = searchScopeOrReturnContactDetails;
            }
            else {
                throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, must be boolean, or ResolveNameSearchLocation");
            }
        }

        //position 4 - returnContactDetailsOrContactDataPropertySet
        if (argsLength >= 4) {
            if (returnContactDetailsOrContactDataPropertySet instanceof PropertySet) {
                if (typeof searchScopeOrReturnContactDetails !== 'boolean') {
                    throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, it must be boolean when using PropertySet at 4th place");
                }
                contactDataPropertySet = returnContactDetailsOrContactDataPropertySet;
            }
            else if (typeof returnContactDetailsOrContactDataPropertySet === 'boolean') {
                if (typeof searchScopeOrReturnContactDetails !== 'number') {
                    throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, it must be ResolveNameSearchLocation when using boolean at 4th place");
                }
                returnContactDetails = returnContactDetailsOrContactDataPropertySet;
            }
            else {
                throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 4th  position, must be  PropertySet or boolean");
            }
        }

        //position 5 - contactDataPropertySet
        if (argsLength >= 5) {
            if (typeof returnContactDetailsOrContactDataPropertySet !== 'boolean') {
                throw new Error("ExchangeService.ts - ResolveName with " + argsLength + " parameters - incorrect uses of parameter at 4th position, it must be boolean when using PropertySet at 5th place");
            }
        }

        var request: ResolveNamesRequest = new ResolveNamesRequest(this);

        request.NameToResolve = nameToResolve;
        request.ReturnFullContactData = returnContactDetails;
        request.ParentFolderIds.AddRange(parentFolderIds);
        request.SearchLocation = searchScope;
        request.ContactDataPropertySet = contactDataPropertySet;

        return request.Execute().then((response) => {
            return response.__thisIndexer(0).Resolutions;
        });
    }

    /* #endregion AD related operations */


    /* #region Notification operations */

    // BeginGetEvents(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string, watermark: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetEvents : Not implemented."); }
    // BeginSubscribeToPullNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPullNotifications : Not implemented."); }
    // BeginSubscribeToPullNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPullNotificationsOnAllFolders : Not implemented."); }
    // BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: Uri, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotifications : Not implemented."); }
    // //BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotifications : Not implemented."); }
    // BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: Uri, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    // //BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    // BeginSubscribeToStreamingNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToStreamingNotifications : Not implemented."); }
    // BeginSubscribeToStreamingNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSubscribeToStreamingNotificationsOnAllFolders : Not implemented."); }
    // BeginUnsubscribe(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginUnsubscribe : Not implemented."); }

    /**
     * Builds an request to retrieve the latests events associated with a pull subscription.
     *
     * @param   {string}   subscriptionId   The Id of the pull subscription for which to get the events.
     * @param   {string}   watermark        The watermark representing the point in time where to start receiving events.
     * @return  {GetEventsRequest}          An request to retrieve the latests events associated with a pull subscription.
     */
    private BuildGetEventsRequest(subscriptionId: string, watermark: string): GetEventsRequest {
        EwsUtilities.ValidateParam(subscriptionId, "subscriptionId");
        EwsUtilities.ValidateParam(watermark, "watermark");

        let request: GetEventsRequest = new GetEventsRequest(this);

        request.SubscriptionId = subscriptionId;
        request.Watermark = watermark;

        return request;
    }

    /**
     * Builds a request to subscribe to pull notifications in the authenticated user's mailbox.
     *
     * @param   {FolderId[]}    folderIds    The Ids of the folder to subscribe to.
     * @param   {number}        timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}        watermark    An optional watermark representing a previously opened subscription.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {SubscribeToPullNotificationsRequest}   A request to subscribe to pull notifications in the authenticated user's mailbox.
     */
    private BuildSubscribeToPullNotificationsRequest(folderIds: FolderId[], timeout: number, watermark: string, eventTypes: EventType[]): SubscribeToPullNotificationsRequest {
        if (timeout < 1 || timeout > 1440) {
            throw new ArgumentOutOfRangeException("timeout", Strings.TimeoutMustBeBetween1And1440);
        }

        EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");

        let request: SubscribeToPullNotificationsRequest = new SubscribeToPullNotificationsRequest(this);

        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }

        request.Timeout = timeout;
        ArrayHelper.AddRange(request.EventTypes, eventTypes); //request.EventTypes.AddRange(eventTypes);
        request.Watermark = watermark;

        return request;
    }

    /**
     * Builds an request to request to subscribe to push notifications in the authenticated user's mailbox.
     *
     * @param   {FolderId[]}    folderIds    The Ids of the folder to subscribe to.
     * @param   {Uri}           url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}        frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}        watermark    An optional watermark representing a previously opened subscription.
     * @param   {string}        callerData   Optional caller data that will be returned the call back.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {SubscribeToPushNotificationsRequest}       A request to request to subscribe to push notifications in the authenticated user's mailbox.
     */
    private BuildSubscribeToPushNotificationsRequest(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: EventType[]): SubscribeToPushNotificationsRequest {
        EwsUtilities.ValidateParam(url, "url");

        if (frequency < 1 || frequency > 1440) {
            throw new ArgumentOutOfRangeException("frequency", Strings.FrequencyMustBeBetween1And1440);
        }

        EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");

        let request: SubscribeToPushNotificationsRequest = new SubscribeToPushNotificationsRequest(this);

        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }

        request.Url = url;
        request.Frequency = frequency;
        ArrayHelper.AddRange(request.EventTypes, eventTypes);//request.EventTypes.AddRange(eventTypes);
        request.Watermark = watermark;
        request.CallerData = callerData;

        return request;
    }

    /**
     * Builds request to subscribe to streaming notifications in the authenticated user's mailbox.
     *
     * @param   {FolderId[]}    folderIds    The Ids of the folder to subscribe to.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {SubscribeToStreamingNotificationsRequest}      A request to subscribe to streaming notifications in the authenticated user's mailbox.
     */
    private BuildSubscribeToStreamingNotificationsRequest(folderIds: FolderId[], eventTypes: EventType[]): SubscribeToStreamingNotificationsRequest {
        EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");

        let request: SubscribeToStreamingNotificationsRequest = new SubscribeToStreamingNotificationsRequest(this);

        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }

        ArrayHelper.AddRange(request.EventTypes, eventTypes); //request.EventTypes.AddRange(eventTypes);

        return request;
    }

    /**
     * Buids a request to unsubscribe from a subscription.
     *
     * @param   {string}   subscriptionId   The Id of the subscription for which to get the events.
     * @return  {UnsubscribeRequest}        A request to unsubscribe from a subscription.
     */
    private BuildUnsubscribeRequest(subscriptionId: string): UnsubscribeRequest {
        EwsUtilities.ValidateParam(subscriptionId, "subscriptionId");

        let request: UnsubscribeRequest = new UnsubscribeRequest(this);

        request.SubscriptionId = subscriptionId;

        return request;
    }
    //EndGetEvents(asyncResult: Function /*System.IAsyncResult*/): GetEventsResults { throw new Error("ExchangeService.ts - EndGetEvents : Not implemented."); }
    //EndSubscribeToPullNotifications(asyncResult: Function /*System.IAsyncResult*/): PullSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPullNotifications : Not implemented."); }
    //EndSubscribeToPushNotifications(asyncResult: Function /*System.IAsyncResult*/): PushSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPushNotifications : Not implemented."); }
    //EndSubscribeToStreamingNotifications(asyncResult: Function /*System.IAsyncResult*/): StreamingSubscription { throw new Error("ExchangeService.ts - EndSubscribeToStreamingNotifications : Not implemented."); }
    //EndUnsubscribe(asyncResult: Function /*System.IAsyncResult*/): any { throw new Error("ExchangeService.ts - EndUnsubscribe : Not implemented."); }

    /**
     * Retrieves the latests events associated with a pull subscription. Calling this method results in a call to EWS.
     *
     * @param   {string}   subscriptionId   The Id of the pull subscription for which to get the events.
     * @param   {string}   watermark        The watermark representing the point in time where to start receiving events.
     * @return  {IPromise<GetEventsResults>}    A GetEventsResults containing a list of events associated with the subscription.
     */
    GetEvents(subscriptionId: string, watermark: string): IPromise<GetEventsResults> {
        return this.BuildGetEventsRequest(subscriptionId, watermark).Execute().then((response) => {
            return response.__thisIndexer(0).Results;
        });
    }

    /**
     * Set a TeamMailbox
     *
     * @param   {EmailAddress}                  emailAddress        TeamMailbox email address
     * @param   {Uri}                           sharePointSiteUrl   SharePoint site URL
     * @param   {TeamMailboxLifecycleState}     state               TeamMailbox lifecycle state
     * @return  {IPromise<void>}    Promise.
     */
    SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: Uri, state: TeamMailboxLifecycleState): IPromise<void> {
        EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "SetTeamMailbox");

        if (emailAddress == null) {
            throw new ArgumentNullException("emailAddress");
        }

        if (sharePointSiteUrl == null) {
            throw new ArgumentNullException("sharePointSiteUrl");
        }

        let request: SetTeamMailboxRequest = new SetTeamMailboxRequest(this, emailAddress, sharePointSiteUrl, state);
        return <any>request.Execute();
    }

    /**
     * Subscribes to pull notifications. Calling this method results in a call to EWS   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PullSubscription>}    A PullSubscription representing the new subscription.
     */
    SubscribeToPullNotifications(folderIds: FolderId[], timeout: number, watermark: string, ...eventTypes: EventType[]): IPromise<PullSubscription> {
        EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

        return this.BuildSubscribeToPullNotificationsRequest(
            folderIds,
            timeout,
            watermark,
            eventTypes).Execute().then((response) => {
                return response.__thisIndexer(0).Subscription;
            });
    }

    /**
     * Subscribes to pull notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PullSubscription>}    A PullSubscription representing the new subscription.
     */
    SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, ...eventTypes: EventType[]): IPromise<PullSubscription> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010,
            "SubscribeToPullNotificationsOnAllFolders");

        return this.BuildSubscribeToPullNotificationsRequest(
            null,
            timeout,
            watermark,
            eventTypes).Execute().then((response) => {
                return response.__thisIndexer(0).Subscription;
            });
    }

    /**
     * Subscribes to push notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PushSubscription>}        A PushSubscription representing the new subscription  :Promise.
     */
    SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): IPromise<PushSubscription>;
    /**
     * Subscribes to push notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {string}            callerData   Optional caller data that will be returned the call back.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PushSubscription>}        A PushSubscription representing the new subscription  :Promise.
     */
    SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): IPromise<PushSubscription>;
    SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerDataOrEventTypes: string | EventType, ...eventTypes: EventType[]): IPromise<PushSubscription> {

        EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

        let callerData: string = null;

        if (typeof callerDataOrEventTypes === 'string') {
            callerData = callerDataOrEventTypes;
        }
        else {
            eventTypes.push(callerDataOrEventTypes); //info: ref: typescript generates eventTypes from arguments.length, need to push to it.
        }

        return this.BuildSubscribeToPushNotificationsRequest(
            folderIds,
            url,
            frequency,
            watermark,
            callerData,
            eventTypes).Execute().then((response) => {
                return response.__thisIndexer(0).Subscription;
            });
    }

    /**
     * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PushSubscription>}    A PushSubscription representing the new subscription    :Promise.
     */
    SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): IPromise<PushSubscription>;
    /**
     * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {string}            callerData   Optional caller data that will be returned the call back.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {IPromise<PushSubscription>}    A PushSubscription representing the new subscription    :Promise.
     */
    SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): IPromise<PushSubscription>;
    SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerDataOrEventTypes: string | EventType, ...eventTypes: EventType[]): IPromise<PushSubscription> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010,
            "SubscribeToPushNotificationsOnAllFolders");

        let callerData: string = null;

        if (typeof callerDataOrEventTypes === 'string') {
            callerData = callerDataOrEventTypes;
        }
        else {
            eventTypes.push(callerDataOrEventTypes); //info: ref: typescript generates eventTypes from arguments.length, need to push to it.
        }

        return this.BuildSubscribeToPushNotificationsRequest(
            null,
            url,
            frequency,
            watermark,
            callerData,
            eventTypes).Execute().then((response) => {
                return response.__thisIndexer(0).Subscription;
            });
    }

    /**
     * Subscribes to streaming notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}   folderIds    The Ids of the folder to subscribe to.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {IPromise<StreamingSubscription>}       A StreamingSubscription representing the new subscription   :Promise.
     */
    SubscribeToStreamingNotifications(folderIds: FolderId[], ...eventTypes: EventType[]): IPromise<StreamingSubscription> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "SubscribeToStreamingNotifications");

        EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

        return this.BuildSubscribeToStreamingNotificationsRequest(folderIds, eventTypes).Execute().then((responses) => {
            return responses.__thisIndexer(0).Subscription;
        });

    }

    /**
     * Subscribes to streaming notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {IPromise<StreamingSubscription>}       A StreamingSubscription representing the new subscription   :Promise.
     */
    SubscribeToStreamingNotificationsOnAllFolders(...eventTypes: EventType[]): IPromise<StreamingSubscription> {
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "SubscribeToStreamingNotificationsOnAllFolders");

        return this.BuildSubscribeToStreamingNotificationsRequest(null, eventTypes).Execute().then((responses) => {
            return responses.__thisIndexer(0).Subscription;
        });
    }

    /**
     * Unpin a TeamMailbox
     *
     * @param   {EmailAddress}      emailAddress        TeamMailbox email address
     * @return  {IPromise<void>}    Promise.
     */
    UnpinTeamMailbox(emailAddress: EmailAddress): IPromise<void> {
        EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "UnpinTeamMailbox");

        if (emailAddress == null) {
            throw new ArgumentNullException("emailAddress");
        }

        let request: UnpinTeamMailboxRequest = new UnpinTeamMailboxRequest(this, emailAddress);
        return <any>request.Execute();
    }

    /**
     * @internal Unsubscribes from a subscription. Calling this method results in a call to EWS.
     *
     * @param   {string}   subscriptionId   The Id of the pull subscription to unsubscribe from.
     */
    Unsubscribe(subscriptionId: string): IPromise<void> {
        return <any>this.BuildUnsubscribeRequest(subscriptionId).Execute();
    }

    /* #endregion Notification operations */


    /* #region Synchronization operations */

    // BeginSyncFolderItems(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderItems : Not implemented."); }
    // BeginSyncFolderItems(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderItems : Not implemented."); }

    /**
     * Builds a request to synchronize the items of a specific folder.
     *
     * @param   {FolderId}              syncFolderId         The Id of the folder containing the items to synchronize with.
     * @param   {PropertySet}           propertySet          The set of properties to retrieve for synchronized items.
     * @param   {ItemId[]}              ignoredItemIds       The optional list of item Ids that should be ignored.
     * @param   {number}                maxChangesReturned   The maximum number of changes that should be returned.
     * @param   {number}                numberOfDays         Limit the changes returned to this many days ago; 0 means no limit.
     * @param   {SyncFolderItemsScope}  syncScope            The sync scope identifying items to include in the ChangeCollection.
     * @param   {string}                syncState            The optional sync state representing the point in time when to start the synchronization.
     * @return  {SyncFolderItemsRequest}        A request to synchronize the items of a specific folder.
     */
    private BuildSyncFolderItemsRequest(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): SyncFolderItemsRequest {
        EwsUtilities.ValidateParam(syncFolderId, "syncFolderId");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        let request: SyncFolderItemsRequest = new SyncFolderItemsRequest(this);

        request.SyncFolderId = syncFolderId;
        request.PropertySet = propertySet;
        if (ignoredItemIds != null) {
            request.IgnoredItemIds.AddRange(ignoredItemIds);
        }
        request.MaxChangesReturned = maxChangesReturned;
        request.NumberOfDays = numberOfDays;
        request.SyncScope = syncScope;
        request.SyncState = syncState;

        return request;
    }
    //EndSyncFolderItems(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - EndSyncFolderItems : Not implemented."); }

    /**
     * Synchronizes the items of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}              syncFolderId         The Id of the folder containing the items to synchronize with.
     * @param   {PropertySet}           propertySet          The set of properties to retrieve for synchronized items.
     * @param   {ItemId[]}              ignoredItemIds       The optional list of item Ids that should be ignored.
     * @param   {number}                maxChangesReturned   The maximum number of changes that should be returned.
     * @param   {number}                numberOfDays         Limit the changes returned to this many days ago; 0 means no limit.
     * @param   {SyncFolderItemsScope}  syncScope            The sync scope identifying items to include in the ChangeCollection.
     * @param   {string}                syncState            The optional sync state representing the point in time when to start the synchronization.
     * @return  {IPromise<ChangeCollection<ItemChange>>}        A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): IPromise<ChangeCollection<ItemChange>>;
    /**
     * Synchronizes the items of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}              syncFolderId         The Id of the folder containing the items to synchronize with.
     * @param   {PropertySet}           propertySet          The set of properties to retrieve for synchronized items.
     * @param   {ItemId[]}              ignoredItemIds       The optional list of item Ids that should be ignored.
     * @param   {number}                maxChangesReturned   The maximum number of changes that should be returned.
     * @param   {number}                numberOfDays         Limit the changes returned to this many days ago; 0 means no limit.
     * @param   {SyncFolderItemsScope}  syncScope            The sync scope identifying items to include in the ChangeCollection.
     * @param   {string}                syncState            The optional sync state representing the point in time when to start the synchronization.
     * @return  {IPromise<ChangeCollection<ItemChange>>}        A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): IPromise<ChangeCollection<ItemChange>>;
    SyncFolderItems(
        syncFolderId: FolderId,
        propertySet: PropertySet,
        ignoredItemIds: ItemId[],
        maxChangesReturned: number,
        numberOfDaysOrSyncScope: number | SyncFolderItemsScope,
        syncScopeOrSyncState: SyncFolderItemsScope | string,
        syncState: string = null): IPromise<ChangeCollection<ItemChange>> {

        let numberOfDays: number = 0;
        let syncScope: SyncFolderItemsScope;

        if (arguments.length === 6) {
            syncState = <string>syncScopeOrSyncState;
            syncScope = numberOfDaysOrSyncScope;
        }
        else {
            numberOfDays = numberOfDaysOrSyncScope;
            syncScope = <SyncFolderItemsScope>syncScopeOrSyncState;
        }

        return this.BuildSyncFolderItemsRequest(
            syncFolderId,
            propertySet,
            ignoredItemIds,
            maxChangesReturned,
            numberOfDays,
            syncScope,
            syncState).Execute().then((responses) => {
                return responses.__thisIndexer(0).Changes;
            });
    }

    // BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }
    // //BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }

    /**
     * Builds a request to synchronize the specified folder hierarchy of the mailbox this Service is connected to.
     *
     * @param   {FolderId}      syncFolderId   The Id of the folder containing the items to synchronize with. A null value indicates the root folder of the mailbox.
     * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
     * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
     * @return  {SyncFolderHierarchyRequest}        A request to synchronize the specified folder hierarchy of the mailbox this Service is connected to.
     */
    private BuildSyncFolderHierarchyRequest(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): SyncFolderHierarchyRequest {
        EwsUtilities.ValidateParamAllowNull(syncFolderId, "syncFolderId");  // Null syncFolderId is allowed
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        let request: SyncFolderHierarchyRequest = new SyncFolderHierarchyRequest(this);

        request.PropertySet = propertySet;
        request.SyncFolderId = syncFolderId;
        request.SyncState = syncState;

        return request;
    }

    //EndSyncFolderHierarchy(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - EndSyncFolderHierarchy : Not implemented."); }

    /**
     * Synchronizes the sub-folders of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      syncFolderId   The Id of the folder containing the items to synchronize with. A null value indicates the root folder of the mailbox.
     * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
     * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
     * @return  {IPromise<ChangeCollection<FolderChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): IPromise<ChangeCollection<FolderChange>>;
    /**
     * Synchronizes the entire folder hierarchy of the mailbox this Service is connected to. Calling this method results in a call to EWS.
     *
     * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
     * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
     * @return  {IPromise<ChangeCollection<FolderChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderHierarchy(propertySet: PropertySet, syncState: string): IPromise<ChangeCollection<FolderChange>>;
    SyncFolderHierarchy(
        syncFolderIdOrPropertySet: FolderId | PropertySet,
        propertySetOrSyncState: PropertySet | string,
        syncState: string = null): IPromise<ChangeCollection<FolderChange>> {

        let syncFolderId: FolderId = null;
        let propertySet: PropertySet;

        if (arguments.length === 2) {
            propertySet = <PropertySet>syncFolderIdOrPropertySet;
            syncState = <string>propertySetOrSyncState;
        }
        else {
            syncFolderId = <FolderId>syncFolderIdOrPropertySet;
            propertySet = <PropertySet>propertySetOrSyncState;
        }

        return this.BuildSyncFolderHierarchyRequest(
            syncFolderId,
            propertySet,
            syncState).Execute().then((responses) => {
                return responses.__thisIndexer(0).Changes;
            });
    }
    /* #endregion Synchronization operations */


    /* #region Availability operations */

    /**
     * Retrieves a collection of all room lists in the organization.
     *
     * @return  {IPromise<EmailAddressCollection[]>}    A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    GetRoomLists(): IPromise<EmailAddressCollection> {
        let request: GetRoomListsRequest = new GetRoomListsRequest(this);

        return request.Execute().then((response) => {
            return response.RoomLists;
        });
    }

    /**
     * Retrieves a collection of all rooms in the specified room list in the organization.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the room list.
     * @return  {IPromise<EmailAddress[]>}      A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    GetRooms(emailAddress: EmailAddress): IPromise<EmailAddress[]> {
        EwsUtilities.ValidateParam(emailAddress, "emailAddress");

        let request: GetRoomsRequest = new GetRoomsRequest(this);

        request.RoomList = emailAddress;

        return request.Execute().then((response) => {
            return response.Rooms;
        });
    }

    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @return  {IPromise<GetUserAvailabilityResults>}      The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): IPromise<GetUserAvailabilityResults>;
    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @param   {AvailabilityOptions}   options             The options controlling the information returned.
     * @return  {IPromise<GetUserAvailabilityResults>}      The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): IPromise<GetUserAvailabilityResults>;
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions = new AvailabilityOptions()): IPromise<GetUserAvailabilityResults> {
        EwsUtilities.ValidateParamCollection(attendees, "attendees");
        EwsUtilities.ValidateParam(timeWindow, "timeWindow");
        EwsUtilities.ValidateParam(options, "options");
        var request = new GetUserAvailabilityRequest(this);

        request.Attendees = attendees;
        request.TimeWindow = timeWindow;
        request.RequestedData = requestedData;
        request.Options = options;

        return request.Execute().then((responses) => {
            return responses;
        });

    }

    /**
     * Gets Out of Office (OOF) settings for a specific user. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the user for which to retrieve OOF settings.
     * @return  {IPromise<OofSettings>}     An OofSettings instance containing OOF information for the specified user.
     */
    GetUserOofSettings(smtpAddress: string): IPromise<OofSettings> {
        EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");

        var request: GetUserOofSettingsRequest = new GetUserOofSettingsRequest(this);

        request.SmtpAddress = smtpAddress;

        return request.Execute().then((response) => {
            return response.OofSettings;
        });
    }

    /**
     * Sets the Out of Office (OOF) settings for a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the user for which to set OOF settings.
     * @param   {OofSettings}   oofSettings   The OOF settings.
     * @return  {IPromise<void>}     Promise.
     */
    SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): IPromise<void> {
        EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");
        EwsUtilities.ValidateParam(oofSettings, "oofSettings");

        var request: SetUserOofSettingsRequest = new SetUserOofSettingsRequest(this);

        request.SmtpAddress = smtpAddress;
        request.OofSettings = oofSettings;

        return <any>request.Execute();
    }
    /* #endregion Availability operations */


    /* #region Conversation */

    /**
     * Applies ConversationAction on the specified conversation.
     *
     * @param   {ConversationActionType}    actionType            ConversationAction
     * @param   {ConversationId[]}          conversationIds       The conversation ids.
     * @param   {boolean}                   processRightAway      True to process at once . This is blocking and false to let the Assistant process it in the back ground
     * @param   {StringList}                categories            Catgories that need to be stamped can be null or empty
     * @param   {boolean}                   enableAlwaysDelete    True moves every current and future messages in the conversation to deleted items folder. False stops the alwasy delete action. This is applicable only if the action is AlwaysDelete
     * @param   {FolderId}                  destinationFolderId   Applicable if the action is AlwaysMove. This moves every current message and future  message in the conversation to the specified folder. Can be null if tis is then it stops the always move action
     * @param   {ServiceErrorHandling}      errorHandlingMode     The error handling mode.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    private ApplyConversationAction(
        actionType: ConversationActionType,
        conversationIds: ConversationId[],
        processRightAway: boolean,
        categories: StringList,
        enableAlwaysDelete: boolean,
        destinationFolderId: FolderId,
        errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsLogging.Assert(
            actionType == ConversationActionType.AlwaysCategorize ||
            actionType == ConversationActionType.AlwaysMove ||
            actionType == ConversationActionType.AlwaysDelete,
            "ApplyConversationAction",
            "Invalic actionType");

        EwsUtilities.ValidateParam(conversationIds, "conversationId");
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "ApplyConversationAction");

        let request: ApplyConversationActionRequest = new ApplyConversationActionRequest(this, errorHandlingMode);
        let action: ConversationAction = new ConversationAction();

        for (let conversationId of conversationIds) {
            action.Action = actionType;
            action.ConversationId = conversationId;
            action.ProcessRightAway = processRightAway;
            action.Categories = categories;
            action.EnableAlwaysDelete = enableAlwaysDelete;
            action.DestinationFolderId = destinationFolderId != null ? new FolderIdWrapper(destinationFolderId) : null;
            request.ConversationActions.push(action);
        }

        return request.Execute();
    }

    /**
     * Applies one time conversation action on items in specified folder inside the conversation.
     *
     * @param   {ConversationActionType}                        actionType             The action.
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idTimePairs            The id time pairs.
     * @param   {FolderId}                                      contextFolderId        The context folder id.
     * @param   {FolderId}                                      destinationFolderId    The destination folder id.
     * @param   {DeleteMode}                                    deleteType             Type of the delete.
     * @param   {boolean}                                       isRead                 The is read.
     * @param   {RetentionType}                                 retentionPolicyType    Retention policy type.
     * @param   {Guid}                                          retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @param   {Flag}                                          flag                   Flag status.
     * @param   {boolean}                                       suppressReadReceipts   Suppress read receipts flag.
     * @param   {ServiceErrorHandling}                          errorHandlingMode      The error handling mode.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    private ApplyConversationOneTimeAction(
        actionType: ConversationActionType,
        idTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs,
        contextFolderId: FolderId,
        destinationFolderId: FolderId,
        deleteType: DeleteMode,
        isRead: boolean,
        retentionPolicyType: RetentionType,
        retentionPolicyTagId: Guid,
        flag: Flag,
        suppressReadReceipts: boolean,
        errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsLogging.Assert(
            actionType == ConversationActionType.Move ||
            actionType == ConversationActionType.Delete ||
            actionType == ConversationActionType.SetReadState ||
            actionType == ConversationActionType.SetRetentionPolicy ||
            actionType == ConversationActionType.Copy ||
            actionType == ConversationActionType.Flag,
            "ApplyConversationOneTimeAction",
            "Invalid actionType");

        EwsUtilities.ValidateParamCollection(idTimePairs, "idTimePairs");
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2010_SP1,
            "ApplyConversationAction");

        let request: ApplyConversationActionRequest = new ApplyConversationActionRequest(this, errorHandlingMode);

        for (let idTimePair of idTimePairs) {
            let action: ConversationAction = new ConversationAction();

            action.Action = actionType;
            action.ConversationId = idTimePair.key;
            action.ContextFolderId = contextFolderId != null ? new FolderIdWrapper(contextFolderId) : null;
            action.DestinationFolderId = destinationFolderId != null ? new FolderIdWrapper(destinationFolderId) : null;
            action.ConversationLastSyncTime = idTimePair.value;
            action.IsRead = isRead;
            action.DeleteType = deleteType;
            action.RetentionPolicyType = retentionPolicyType;
            action.RetentionPolicyTagId = retentionPolicyTagId;
            action.Flag = flag;
            action.SuppressReadReceipts = suppressReadReceipts;

            request.ConversationActions.push(action);
        }

        return request.Execute();
    }

    /**
     * Sets up a conversation so that any item received within that conversation is no longer categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    DisableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysCategorize,
            conversationId,
            processSynchronously,
            null,
            false,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    DisableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysDelete,
            conversationId,
            processSynchronously,
            null,
            false,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationIds        The conversation ids.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    DisableAlwaysMoveItemsInConversations(conversationIds: ConversationId[], processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysMove,
            conversationIds,
            processSynchronously,
            null,
            false,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets up a conversation so that any item received within that conversation is always categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {string[]}          categories             The categories that should be stamped on items in the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    EnableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], categories: string[], processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsUtilities.ValidateParamCollection(categories, "categories");
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysCategorize,
            conversationId,
            processSynchronously,
            new StringList(categories),
            false,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    EnableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysDelete,
            conversationId,
            processSynchronously,
            null,
            true,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets up a conversation so that any item received within that conversation is always moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {FolderId}          destinationFolderId    The Id of the folder to which conversation items should be moved.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    EnableAlwaysMoveItemsInConversations(conversationId: ConversationId[], destinationFolderId: FolderId, processSynchronously: boolean): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationAction(
            ConversationActionType.AlwaysMove,
            conversationId,
            processSynchronously,
            null,
            false,
            destinationFolderId,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}   view       The view controlling the number of conversations returned.
     * @param   {FolderId}   folderId   The Id of the folder in which to search for conversations.
     * @return  {IPromise<Conversation[]>}      Collection of conversations.
     */
    FindConversation(view: ViewBase, folderId: FolderId): IPromise<Conversation[]>;
    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}    queryString            The query string for which the search is being performed
     * @return  {IPromise<FindConversationResults>}     FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string): IPromise<Conversation[]>;
    /**
     * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
     *
     * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}    queryString            The query string for which the search is being performed
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @return  {IPromise<FindConversationResults>}     FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): IPromise<FindConversationResults>;
    /**
     * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
     *
     * @param   {ViewBase}                  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}                  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}                    queryString            The query string for which the search is being performed
     * @param   {boolean}                   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {MailboxSearchLocation?}    mailboxScope           The mailbox scope to reference.
     * @return  {IPromise<FindConversationResults>}     FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): IPromise<FindConversationResults>;
    FindConversation(
        view: ViewBase,
        folderId: FolderId,
        queryString: string = null,
        returnHighlightTerms: boolean = null,
        mailboxScope: MailboxSearchLocation = null): IPromise<FindConversationResults | Conversation[]> {

        let argsLength = arguments.length;

        EwsUtilities.ValidateParam(view, "view");
        EwsUtilities.ValidateParam(folderId, "folderId");

        let request: FindConversationRequest = new FindConversationRequest(this);
        request.View = view;
        request.FolderId = new FolderIdWrapper(folderId);

        if (argsLength > 2) {
            EwsUtilities.ValidateParamAllowNull(queryString, "queryString");
            request.QueryString = queryString;
        }

        if (argsLength > 3) {
            EwsUtilities.ValidateParam(returnHighlightTerms, "returnHighlightTerms");
            request.ReturnHighlightTerms = returnHighlightTerms;

            EwsUtilities.ValidateMethodVersion(
                this,
                ExchangeVersion.Exchange2013, // This method is only applicable for Exchange2013
                "FindConversation");
        }

        if (argsLength > 4) {
            request.MailboxScope = mailboxScope;
        }
        return request.Execute().then((responses: FindConversationResponse) => {
            if (argsLength > 3) {
                return responses.Results; // based on arguments it can return this or either Results.
            }
            else {
                return responses.Conversations;
            }
        });
    }

    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}  view            The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId        The Id of the folder in which to search for conversations.
     * @param   {string}    anchorMailbox   The anchorMailbox Smtp address to route the request directly to group mailbox.
     * @return  {IPromise<Conversation[]>}  Collection of conversations :Promise.
     */
    FindGroupConversation(view: ViewBase, folderId: FolderId, anchorMailbox: string): IPromise<Conversation[]> {

        EwsUtilities.ValidateParam(view, "view");
        EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities.ValidateParam(anchorMailbox, "anchorMailbox");
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2015,
            "FindConversation");

        let request: FindConversationRequest = new FindConversationRequest(this);

        request.View = view;
        request.FolderId = new FolderIdWrapper(folderId);
        request.AnchorMailbox = anchorMailbox;

        return request.Execute().then((responses: FindConversationResponse) => {
            return responses.Conversations;
        });
    }

    /**
     * Gets the items for a set of conversations.
     *
     * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @return  {IPromise<ServiceResponseCollection<GetConversationItemsResponse>>}     GetConversationItems response    :Promise.
     */
    GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */): IPromise<ServiceResponseCollection<GetConversationItemsResponse>>;
    /**
     * Gets the items for a set of conversations.
     *
     * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @param   {MailboxSearchLocation}     mailboxScope      The mailbox scope to reference.
     * @return  {IPromise<ServiceResponseCollection<GetConversationItemsResponse>>}     GetConversationItems response    :Promise.
     */
    GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */, mailboxScope: MailboxSearchLocation /* Nullable */): IPromise<ServiceResponseCollection<GetConversationItemsResponse>>;
    /**
     * Gets the items for a conversation.
     *
     * @param   {ConversationId}            conversationId    The conversation id.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @return  {IPromise<ConversationResponse>}              GetConversationItems response    :Promise.
     */
    GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */): IPromise<ConversationResponse>;
    GetConversationItems(
        conversationsOrConversationId: ConversationRequest[] | ConversationId,
        propertySet: PropertySet,
        foldersToIgnoreOrSyncState: FolderId[] | string,
        sortOrderOrFoldersToIgnore: ConversationSortOrder /* Nullable */ | FolderId[],
        mailboxScopeOrSortOrder: ConversationSortOrder | MailboxSearchLocation /* Nullable */ = null): IPromise<ServiceResponseCollection<GetConversationItemsResponse> | ConversationResponse> {

        let conversations: ConversationRequest[] = [];
        let foldersToIgnore: FolderId[] = [];
        let syncState: string = null;
        let sortOrder: ConversationSortOrder = null;
        let mailboxScope: MailboxSearchLocation = null;
        let returnConversationResponse: boolean = false;

        if (conversationsOrConversationId instanceof ConversationId) {
            conversations.push(new ConversationRequest(conversationsOrConversationId, <string>foldersToIgnoreOrSyncState));
            foldersToIgnore = <FolderId[]>sortOrderOrFoldersToIgnore;
            sortOrder = <ConversationSortOrder>mailboxScopeOrSortOrder;
            returnConversationResponse = true;
        }
        else {
            conversations = conversationsOrConversationId;
            foldersToIgnore = <FolderId[]>foldersToIgnoreOrSyncState;
            sortOrder = <ConversationSortOrder>sortOrderOrFoldersToIgnore;
            mailboxScope = <MailboxSearchLocation>mailboxScopeOrSortOrder;

        }

        return this.InternalGetConversationItems(
            conversations,
            propertySet,
            foldersToIgnore,
            sortOrder, //todo: check why official repo has passed sortOrder as nulll when requested with ConversationRequest[] varient
            mailboxScope,           /* mailboxScope */
            null,           /* maxItemsToReturn */
            null, /* anchorMailbox */
            ServiceErrorHandling.ThrowOnError).then((responses: ServiceResponseCollection<GetConversationItemsResponse>) => {
                return returnConversationResponse ? responses.__thisIndexer(0).Conversation : responses;
            });

    }

    /**
     * Gets the items for a conversation.
     *
     * @param   {ConversationId}            conversationId    The conversation id.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @param   {string}                    anchorMailbox     The smtp address of the mailbox hosting the conversations
     * @return  {IPromise<ConversationResponse>}              ConversationResponseType response :Promise.
     * @remarks This API designed to be used primarily in groups scenarios where we want to set the anchor mailbox header so that request is routed directly to the group mailbox backend server.
     */
    GetGroupConversationItems(conversationId: ConversationId, propertySet: PropertySet,
        syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */, anchorMailbox: string): IPromise<ConversationResponse> {
        EwsUtilities.ValidateParam(anchorMailbox, "anchorMailbox");

        let conversations: ConversationRequest[] = [];
        conversations.push(new ConversationRequest(conversationId, syncState));

        return this.InternalGetConversationItems(
            conversations,
            propertySet,
            foldersToIgnore,
            sortOrder,
            null,           /* mailboxScope */
            null,           /* maxItemsToReturn */
            anchorMailbox, /* anchorMailbox */
            ServiceErrorHandling.ThrowOnError).then((responses: ServiceResponseCollection<GetConversationItemsResponse>) => {
                return responses.__thisIndexer(0).Conversation;
            });
    }

    /**
     * @internal Gets the items for a set of conversations.
     *
     * @param   {ConversationRequest[]}     conversations      Conversations with items to load.
     * @param   {PropertySet}               propertySet        The set of properties to load.
     * @param   {FolderId[]}                foldersToIgnore    The folders to ignore.
     * @param   {ConversationSortOrder?}    sortOrder          Sort order of conversation tree nodes.
     * @param   {MailboxSearchLocation?}    mailboxScope       The mailbox scope to reference.
     * @param   {number?}                   maxItemsToReturn   Maximum number of items to return.
     * @param   {string}                    anchorMailbox      The smtpaddress of the mailbox that hosts the conversations
     * @param   {ServiceErrorHandling}      errorHandling      What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<GetConversationItemsResponse>>}     GetConversationItems response.
     */
    InternalGetConversationItems(
        conversations: ConversationRequest[],
        propertySet: PropertySet,
        foldersToIgnore: FolderId[],
        sortOrder: ConversationSortOrder, //Nullable
        mailboxScope: MailboxSearchLocation, //Nullable
        maxItemsToReturn: number, //nullable
        anchorMailbox: string,
        errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<GetConversationItemsResponse>> {

        EwsUtilities.ValidateParam(conversations, "conversations");
        EwsUtilities.ValidateParam(propertySet, "itemProperties");
        EwsUtilities.ValidateParamAllowNull(foldersToIgnore, "foldersToIgnore");
        EwsUtilities.ValidateMethodVersion(
            this,
            ExchangeVersion.Exchange2013,
            "GetConversationItems");

        let request: GetConversationItemsRequest = new GetConversationItemsRequest(this, errorHandling);
        request.ItemProperties = propertySet;
        request.FoldersToIgnore = new FolderIdCollection(foldersToIgnore);
        request.SortOrder = sortOrder;
        request.MailboxScope = mailboxScope;
        request.MaxItemsToReturn = maxItemsToReturn;
        request.AnchorMailbox = anchorMailbox;
        request.Conversations = conversations;

        return request.Execute();
    }

    /**
     * Copies the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be copied and the date and time conversation was last synced (Items received after that date will not be copied).
     * @param   {FolderId}                                      contextFolderId       The context folder id.
     * @param   {FolderId}                                      destinationFolderId   The destination folder id.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    CopyItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, destinationFolderId: FolderId): IPromise<ServiceResponseCollection<ServiceResponse>> {
        EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationOneTimeAction(
            ConversationActionType.Copy,
            idLastSyncTimePairs,
            contextFolderId,
            destinationFolderId,
            null,
            null,
            null,
            null,
            null,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Deletes the items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be deleted and the date and time conversation was last synced (Items received after that date will not be deleted).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {DeleteMode}                                    deleteMode            The deletion mode.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    DeleteItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, deleteMode: DeleteMode): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationOneTimeAction(
            ConversationActionType.Delete,
            idLastSyncTimePairs,
            contextFolderId,
            null,
            deleteMode,
            null,
            null,
            null,
            null,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Moves the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be moved and the dateTime conversation was last synced (Items received after that dateTime will not be moved).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {FolderId}                                      destinationFolderId   The Id of the destination folder.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    MoveItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, destinationFolderId: FolderId): IPromise<ServiceResponseCollection<ServiceResponse>> {

        EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationOneTimeAction(
            ConversationActionType.Move,
            idLastSyncTimePairs,
            contextFolderId,
            destinationFolderId,
            null,
            null,
            null,
            null,
            null,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets flag status for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}   idLastSyncTimePairs   The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}   contextFolderId       The Id of the folder that contains the conversation.
     * @param   {Flag}   flagStatus            Flag status to apply to conversation items.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    SetFlagStatusForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, flagStatus: Flag): IPromise<ServiceResponseCollection<ServiceResponse>> {

        EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "SetFlagStatusForItemsInConversations");

        return this.ApplyConversationOneTimeAction(
            ConversationActionType.Flag,
            idLastSyncTimePairs,
            contextFolderId,
            null,
            null,
            null,
            null,
            null,
            flagStatus,
            null,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets the read state for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {boolean}                                       isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, isRead: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets the read state for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {boolean}                                       isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @param   {boolean}                                       suppressReadReceipts   if set to *true* read receipts are suppressed.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean = null): IPromise<ServiceResponseCollection<ServiceResponse>> {

        if (arguments.length === 4) {
            EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "SetReadStateForItemsInConversations");
        }

        return this.ApplyConversationOneTimeAction(
            ConversationActionType.SetReadState,
            idLastSyncTimePairs,
            contextFolderId,
            null,
            null,
            isRead,
            null,
            null,
            null,
            suppressReadReceipts, //null when not included in call
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Sets the retention policy for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their retention policy set and the date and time conversation was last synced (Items received after that date will not have their retention policy set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {RetentionType}                                 retentionPolicyType    Retention policy type.
     * @param   {Guid?}                                         retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      :Promise
     */
    SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
        contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: Guid): IPromise<ServiceResponseCollection<ServiceResponse>> {
        return this.ApplyConversationOneTimeAction(
            ConversationActionType.SetRetentionPolicy,
            idLastSyncTimePairs,
            contextFolderId,
            null,
            null,
            null,
            retentionPolicyType,
            retentionPolicyTagId,
            null,
            null,
            ServiceErrorHandling.ReturnErrors);
    }
    /* #end region Conversation */


    /* #region Id conversion operations */

    /**
     * Converts Id from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase}   id                 The Id to convert.
     * @param   {IdFormat}          destinationFormat   The destination format.
     * @return  {IPromise<AlternateIdBase>}    The converted Id :Promise.
     */
    ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): IPromise<AlternateIdBase> {
        EwsUtilities.ValidateParam(id, "id");

        return this.InternalConvertIds(
            [id],
            destinationFormat,
            ServiceErrorHandling.ThrowOnError).then((responses: ServiceResponseCollection<ConvertIdResponse>) => {
                return responses.__thisIndexer(0).ConvertedId;
            })

    }

    /**
     * Converts multiple Ids from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
     * @param   {IdFormat}              destinationFormat   The destination format.
     * @return  {IPromise<ServiceResponseCollection<ConvertIdResponse>>}    A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
     */
    ConvertIds(ids: AlternateIdBase[], destinationFormat: IdFormat): IPromise<ServiceResponseCollection<ConvertIdResponse>> {
        EwsUtilities.ValidateParamCollection(ids, "ids");

        return this.InternalConvertIds(
            ids,
            destinationFormat,
            ServiceErrorHandling.ReturnErrors);
    }

    /**
     * Converts multiple Ids from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
     * @param   {IdFormat}              destinationFormat   The destination format.
     * @param   {ServiceErrorHandling}  errorHandling       Type of error handling to perform.
     * @return  {IPromise<ServiceResponseCollection<ConvertIdResponse>>}    A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
     */
    private InternalConvertIds(ids: AlternateIdBase[], destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<ConvertIdResponse>> {
        EwsUtilities.ValidateParamCollection(ids, "ids");

        let request: ConvertIdRequest = new ConvertIdRequest(this, errorHandling);
        ArrayHelper.AddRange(request.Ids, ids);//request.Ids.AddRange(ids);
        request.DestinationFormat = destinationFormat;

        return request.Execute();
    }
    /* #endregion Id conversion operations */


    /* #region Delegate management operations */

    /**
     * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to add.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]>;
    /**
     * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {DelegateUser[]}                delegateUsers                  The delegate users to add.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]>;
    AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUser: DelegateUser[] | DelegateUser, ...delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]> {

        if (delegateUser) { //info: rest parameters are optional for typescript
            if (ArrayHelper.isArray(delegateUser)) {
                ArrayHelper.AddRange(delegateUsers, <DelegateUser[]>delegateUser);
            }
            else {
                delegateUsers.push(<DelegateUser>delegateUser);
            }
        }
        EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities.ValidateParamCollection(delegateUsers, "delegateUsers");

        let request: AddDelegateRequest = new AddDelegateRequest(this);

        request.Mailbox = mailbox;
        ArrayHelper.AddRange(request.DelegateUsers, delegateUsers); //request.DelegateUsers.AddRange(delegateUsers);
        request.MeetingRequestsDeliveryScope = meetingRequestsDeliveryScope;


        return request.Execute().then((response: DelegateManagementResponse) => {
            return response.DelegateUserResponses;
        })

    }


    /**
     * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}       mailbox                 The mailbox to retrieve the delegates of.
     * @param   {boolean}       includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
     * @param   {...UserId[]}   userIds                 The optional Ids of the delegate users to retrieve.
     * @return  {IPromise<DelegateInformation>}         A GetDelegateResponse providing the results of the operation    :Promise.
     */
    GetDelegates(mailbox: Mailbox, includePermissions: boolean, ...userIds: UserId[]): IPromise<DelegateInformation>;
    /**
     * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}   mailbox                 The mailbox to retrieve the delegates of.
     * @param   {boolean}   includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
     * @param   {UserId[]}  userIds                 The optional Ids of the delegate users to retrieve.
     * @return  {IPromise<DelegateInformation>}     A GetDelegateResponse providing the results of the operation    :Promise.
     */
    GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: UserId[]): IPromise<DelegateInformation>;
    GetDelegates(mailbox: Mailbox, includePermissions: boolean, userId: UserId | UserId[], ...userIds: UserId[]): IPromise<DelegateInformation> {

        if (userId) { //info: rest parameters are optional for typescript
            if (ArrayHelper.isArray(userId)) {
                ArrayHelper.AddRange(userIds, <UserId[]>userId);
            }
            else {
                userIds.push(<UserId>userId);
            }
        }

        EwsUtilities.ValidateParam(mailbox, "mailbox");

        let request: GetDelegateRequest = new GetDelegateRequest(this);

        request.Mailbox = mailbox;
        ArrayHelper.AddRange(request.UserIds, userIds); //request.UserIds.AddRange(userIds);
        request.IncludePermissions = includePermissions;

        return request.Execute().then((response: GetDelegateResponse) => {
            let delegateInformation: DelegateInformation = new DelegateInformation(
                response.DelegateUserResponses,
                response.MeetingRequestsDeliveryScope);

            return delegateInformation;
        });
    }

    /**
     * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}       mailbox   The mailbox to remove delegates from.
     * @param   {...UserId[]}   userIds   The Ids of the delegate users to remove.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    RemoveDelegates(mailbox: Mailbox, ...userIds: UserId[]): IPromise<DelegateUserResponse[]>;
    /**
     * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}   mailbox   The mailbox to remove delegates from.
     * @param   {UserId[]}  userIds   The Ids of the delegate users to remove.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    RemoveDelegates(mailbox: Mailbox, userIds: UserId[]): IPromise<DelegateUserResponse[]>;
    RemoveDelegates(mailbox: Mailbox, userId: UserId | UserId[], ...userIds: UserId[]): IPromise<DelegateUserResponse[]> {

        if (userId) { //info: rest parameters are optional for typescript
            if (ArrayHelper.isArray(userId)) {
                ArrayHelper.AddRange(userIds, <UserId[]>userId);
            }
            else {
                userIds.push(<UserId>userId);
            }
        }
        EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities.ValidateParamCollection(userIds, "userIds");

        let request: RemoveDelegateRequest = new RemoveDelegateRequest(this);

        request.Mailbox = mailbox;
        ArrayHelper.AddRange(request.UserIds, userIds); //request.UserIds.AddRange(userIds);

        return request.Execute().then((response: DelegateManagementResponse) => {
            return response.DelegateUserResponses;
        })
    }

    /**
     * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to update.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]>;
    /**
     * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {DelegateUser[]}                delegateUsers                  The delegate users to update.
     * @return  {IPromise<DelegateUserResponse[]>}      A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]>;
    UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUser: DelegateUser[] | DelegateUser, ...delegateUsers: DelegateUser[]): IPromise<DelegateUserResponse[]> {

        if (delegateUser) { //info: rest parameters are optional for typescript
            if (ArrayHelper.isArray(delegateUser)) {
                ArrayHelper.AddRange(delegateUsers, <DelegateUser[]>delegateUser);
            }
            else {
                delegateUsers.push(<DelegateUser>delegateUser);
            }
        }
        EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities.ValidateParamCollection(delegateUsers, "delegateUsers");

        let request: UpdateDelegateRequest = new UpdateDelegateRequest(this);

        request.Mailbox = mailbox;
        ArrayHelper.AddRange(request.DelegateUsers, delegateUsers); //request.DelegateUsers.AddRange(delegateUsers);
        request.MeetingRequestsDeliveryScope = meetingRequestsDeliveryScope;

        return request.Execute().then((response: DelegateManagementResponse) => {
            return response.DelegateUserResponses;
        })
    }
    /* #endregion Delegate management operations */


    /* #region UserConfiguration operations */

    /**
     * Creates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {IPromise<void>}    :Promise.
     */
    CreateUserConfiguration(userConfiguration: UserConfiguration): IPromise<void> {
        EwsUtilities.ValidateParam(userConfiguration, "userConfiguration");

        let request: CreateUserConfigurationRequest = new CreateUserConfigurationRequest(this);

        request.UserConfiguration = userConfiguration;

        return <any>request.Execute();
    }

    /**
     * Deletes a UserConfiguration.
     *
     * @param   {string}    name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}  parentFolderId   Id of the folder containing the UserConfiguration.
     * @return  {IPromise<void>}    :Promise.
     */
    DeleteUserConfiguration(name: string, parentFolderId: FolderId): IPromise<void> {
        EwsUtilities.ValidateParam(name, "name");
        EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");

        let request: DeleteUserConfigurationRequest = new DeleteUserConfigurationRequest(this);

        request.Name = name;
        request.ParentFolderId = parentFolderId;

        return <any>request.Execute();
    }

    /**
     * Gets a UserConfiguration.
     *
     * @param   {string}                        name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}                      parentFolderId   Id of the folder containing the UserConfiguration.
     * @param   {UserConfigurationProperties}   properties       Properties to retrieve.
     * @return  {IPromise<UserConfiguration>}   A UserConfiguration.
     */
    GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): IPromise<UserConfiguration> {
        EwsUtilities.ValidateParam(name, "name");
        EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");

        let request: GetUserConfigurationRequest = new GetUserConfigurationRequest(this);

        request.Name = name;
        request.ParentFolderId = parentFolderId;
        request.Properties = properties;

        return request.Execute().then((response: ServiceResponseCollection<GetUserConfigurationResponse>) => {
            return response.__thisIndexer(0).UserConfiguration;
        })
    }

    /**
     * Loads the properties of the specified userConfiguration.
     *
     * @param   {UserConfiguration}             userConfiguration   The userConfiguration containing properties to load.
     * @param   {UserConfigurationProperties}   properties          Properties to retrieve.
     * @return  {IPromise<void>}                :Promise.
     */
    LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): IPromise<void> {
        EwsLogging.Assert(
            userConfiguration != null,
            "ExchangeService.LoadPropertiesForUserConfiguration",
            "userConfiguration is null");

        let request: GetUserConfigurationRequest = new GetUserConfigurationRequest(this);

        request.UserConfiguration = userConfiguration;
        request.Properties = properties;

        return <any>request.Execute();
    }

    /**
     * Updates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {IPromise<void>}    :Promise.
     */
    UpdateUserConfiguration(userConfiguration: UserConfiguration): IPromise<void> {
        EwsUtilities.ValidateParam(userConfiguration, "userConfiguration");

        let request: UpdateUserConfigurationRequest = new UpdateUserConfigurationRequest(this);

        request.UserConfiguration = userConfiguration;

        return <any>request.Execute();
    }

    /* #endregion UserConfiguration operations */


    /* #region InboxRule operations */

    /**
     * Retrieves the inbox rules of the specified user.
     *
     * @return  {IPromise<RuleCollection>}      A RuleCollection object containing the inbox rules of the specified user    :Promise.
     */
    GetInboxRules(): IPromise<RuleCollection>;
    /**
     * Retrieves the inbox rules of the specified user.
     *
     * @param   {string}   mailboxSmtpAddress   The SMTP address of the user whose inbox rules should be retrieved.
     * @return  {IPromise<RuleCollection>}      A RuleCollection object containing the inbox rules of the specified user    :Promise.
     */
    GetInboxRules(mailboxSmtpAddress: string): IPromise<RuleCollection>;
    GetInboxRules(mailboxSmtpAddress: string = null): IPromise<RuleCollection> {

        let request: GetInboxRulesRequest = new GetInboxRulesRequest(this);
        if (arguments.length > 0) {
            EwsUtilities.ValidateParam(mailboxSmtpAddress, "MailboxSmtpAddress");
            request.MailboxSmtpAddress = mailboxSmtpAddress;
        }
        return request.Execute().then((response: GetInboxRulesResponse) => {
            return response.Rules;
        });
    }

    /**
     * Update the specified user's inbox rules by applying the specified operations.
     *
     * @param   {RuleOperation[]}   operations              The operations that should be applied to the user's inbox rules.
     * @param   {boolean}           removeOutlookRuleBlob   Indicate whether or not to remove Outlook Rule Blob.
     * @param   {boolean}           mailboxSmtpAddress      The SMTP address of the user whose inbox rules should be updated.
     * @return  {IPromise<void>}    Promise
     */
    UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): IPromise<void>;
    /**
     * Update the specified user's inbox rules by applying the specified operations.
     *
     * @param   {RuleOperation[]}   operations              The operations that should be applied to the user's inbox rules.
     * @param   {boolean}           removeOutlookRuleBlob   Indicate whether or not to remove Outlook Rule Blob.
     * @return  {IPromise<void>}    Promise
     */
    UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean): IPromise<void>;
    UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean, mailboxSmtpAddress?: string): IPromise<void> {
        let request: UpdateInboxRulesRequest = new UpdateInboxRulesRequest(this);
        request.InboxRuleOperations = operations;
        request.RemoveOutlookRuleBlob = removeOutlookRuleBlob;

        if (arguments.length > 2) {
            request.MailboxSmtpAddress = mailboxSmtpAddress;
        }
        return <any>request.Execute();
    }

    /* #endregion InboxRule operations */


    /* #region eDiscovery/Compliance operations */

    //// BeginGetNonIndexableItemDetails(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemDetailsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemDetails : Not implemented."); }
    //// BeginGetNonIndexableItemStatistics(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemStatisticsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemStatistics : Not implemented."); }
    //// BeginSearchMailboxes(callback: Function /*System.AsyncCallback*/, state: any, searchParameters: SearchMailboxesParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSearchMailboxes : Not implemented."); }
    // CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemDetailsRequest : Not implemented."); }
    // CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemStatisticsRequest : Not implemented."); }
    // CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest { throw new Error("ExchangeService.ts - CreateSearchMailboxesRequest : Not implemented."); }
    //// EndGetNonIndexableItemDetails(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemDetails : Not implemented."); }
    //// EndGetNonIndexableItemStatistics(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemStatistics : Not implemented."); }
    //// EndSearchMailboxes(asyncResult: Function /*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EndSearchMailboxes : Not implemented."); }

    /**
     * Get dicovery search configuration
     *
     * @param   {string}    searchId                       Search Id
     * @param   {boolean}   expandGroupMembership          True if want to expand group membership
     * @param   {boolean}   inPlaceHoldConfigurationOnly   True if only want the inplacehold configuration
     * @return  {IPromise<GetDiscoverySearchConfigurationResponse>}     Service response object    :Promise.
     */
    GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): IPromise<GetDiscoverySearchConfigurationResponse> {
        let request: GetDiscoverySearchConfigurationRequest = new GetDiscoverySearchConfigurationRequest(this);
        request.SearchId = searchId;
        request.ExpandGroupMembership = expandGroupMembership;
        request.InPlaceHoldConfigurationOnly = inPlaceHoldConfigurationOnly;

        return request.Execute();
    }

    /**
     * Get searchable mailboxes
     *
     * @param   {string}    searchFilter            Search filter
     * @param   {boolean}   expandGroupMembership   True if want to expand group membership
     * @return  {IPromise<GetSearchableMailboxesResponse>}      Service response object :Promise
     */
    GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): IPromise<GetSearchableMailboxesResponse> {
        let request: GetSearchableMailboxesRequest = new GetSearchableMailboxesRequest(this);
        request.SearchFilter = searchFilter;
        request.ExpandGroupMembership = expandGroupMembership;

        return request.Execute();
    }
    // SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    // SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    // SearchMailboxes(searchParameters: SearchMailboxesParameters): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }

    // SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    // SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    // SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: System.String[]): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    // SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }

    /**
     * Get hold on mailboxes
     *
     * @param   {string}   holdId   Hold id
     * @return  {IPromise<GetHoldOnMailboxesResponse>}      Service response object
     */
    GetHoldOnMailboxes(holdId: string): IPromise<GetHoldOnMailboxesResponse> {
        let request: GetHoldOnMailboxesRequest = new GetHoldOnMailboxesRequest(this);
        request.HoldId = holdId;

        return request.Execute();
    }

    // GetNonIndexableItemDetails(mailboxes: System.String[]): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    // GetNonIndexableItemDetails(mailboxes: System.String[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    // GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }

    // GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    // GetNonIndexableItemStatistics(mailboxes: System.String[]): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    /* #endregion eDiscovery/Compliance operations */


    /* #region MRM operations */

    /**
     * Get user retention policy tags.
     *
     * @return  {IPromise<GetUserRetentionPolicyTagsResponse>}      Service response object.
     */
    GetUserRetentionPolicyTags(): IPromise<GetUserRetentionPolicyTagsResponse> {
        let request: GetUserRetentionPolicyTagsRequest = new GetUserRetentionPolicyTagsRequest(this);

        return request.Execute();
    }
    /* #endregion MRM operations */


    /* #region Autodiscover */

    /**
     * Adjusts the service URI based on the current type of credentials.
     *
     * @param   {Uri}   uri   The URI.
     * @return  {Uri}         Adjusted URL.
     */
    private AdjustServiceUriFromCredentials(uri: Uri): Uri {
        return (this.Credentials != null)
            ? this.Credentials.AdjustUrl(uri)
            : uri;
    }
    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress     The email address to use.
     */
    AutodiscoverUrl(emailAddress: string): IPromise<void>;
    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress                             The email address to use.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}      validateRedirectionUrlCallback   The callback used to validate redirection URL.
     */
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): IPromise<void>;
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback = this.DefaultAutodiscoverRedirectionUrlValidationCallback): IPromise<void> {
        //validateRedirectionUrlCallback = validateRedirectionUrlCallback || this.DefaultAutodiscoverRedirectionUrlValidationCallback;

        var exchangeServiceUrl: Uri = null;

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
    /**
     * Default implementation of AutodiscoverRedirectionUrlValidationCallback. Always returns true indicating that the URL can be used.
     *
     * @param   {string}   redirectionUrl   The redirection URL.
     * @return  {boolean}                    Returns true.
     */
    private DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean { //ref: need to fix this type - Always returns true indicating that the URL can be used

        throw new AutodiscoverLocalException(StringHelper.Format(Strings.AutodiscoverRedirectBlocked, redirectionUrl));
    }
    /**
     * Gets the EWS URL from Autodiscover.
     *
     * @param   {string}                                        emailAddress                     The email address.
     * @param   {ExchangeVersion}                               requestedServerVersion           Exchange version.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}  validateRedirectionUrlCallback   The validate redirection URL callback.
     * @return  {IPromise<Uri>}                                 Ews URL :Promise.
     */
    private GetAutodiscoverUrl(emailAddress: string, requestedServerVersion: ExchangeVersion, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): IPromise<Uri> {
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
    /**
     * Gets the EWS URL from Autodiscover GetUserSettings response.
     *
     * @param   {GetUserSettingsResponse}   response     The response.
     * @param   {boolean}                   isExternal   If true, Autodiscover call was made externally.
     * @return  {Uri}                       EWS URL.
     */
    private GetEwsUrlFromResponse(response: GetUserSettingsResponse, isExternal: boolean): Uri {

        var uriString = response.GetSettingValue<string>(UserSettingName.ExternalEwsUrl)

        // Figure out which URL to use: Internal or External.
        // AutoDiscover may not return an external protocol. First try external, then internal.
        // Either protocol may be returned without a configured URL.
        if ((isExternal &&
            uriString) &&
            !StringHelper.IsNullOrEmpty(uriString)) {
            return new Uri(uriString);
        }
        else {
            uriString = response.GetSettingValue<string>(UserSettingName.InternalEwsUrl) || uriString;
            if (!StringHelper.IsNullOrEmpty(uriString)) {
                return new Uri(uriString);
            }
        }
        // If Autodiscover doesn't return an internal or external EWS URL, throw an exception.
        throw new AutodiscoverLocalException(Strings.AutodiscoverDidNotReturnEwsUrl);
    }
    /* #endregion Autodiscover */


    /* #region ClientAccessTokens */

    /**
     * GetClientAccessToken
     *
     * @param   {KeyValuePair<string, ClientAccessTokenType>[]}   idAndTypes   Id and Types
     * @return  {IPromise<ServiceResponseCollection<GetClientAccessTokenResponse>>}     A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
     */
    GetClientAccessToken(idAndTypes: KeyValuePair<string, ClientAccessTokenType>[]): IPromise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
    /**
     * GetClientAccessToken
     *
     * @param   {ClientAccessTokenRequest[]}   tokenRequests   Token requests array
     * @return  {IPromise<ServiceResponseCollection<GetClientAccessTokenResponse>>}     A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
     */
    GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): IPromise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
    GetClientAccessToken(tokenRequestsOrIdAndTypes: KeyValuePair<string, ClientAccessTokenType>[] | ClientAccessTokenRequest[]): IPromise<ServiceResponseCollection<GetClientAccessTokenResponse>> {
        if (!tokenRequestsOrIdAndTypes && tokenRequestsOrIdAndTypes.length === 0) {
            throw new ArgumentOutOfRangeException(Strings.IndexIsOutOfRange);
        }

        let requestList: ClientAccessTokenRequest[] = [];

        if (tokenRequestsOrIdAndTypes[0] instanceof ClientAccessTokenRequest) {
            requestList = <ClientAccessTokenRequest[]>tokenRequestsOrIdAndTypes;
        }
        else {

            for (let idAndType of <KeyValuePair<string, ClientAccessTokenType>[]>tokenRequestsOrIdAndTypes) {
                let clientAccessTokenRequest: ClientAccessTokenRequest = new ClientAccessTokenRequest(idAndType.key, idAndType.value);
                requestList.push(clientAccessTokenRequest);
            }
        }

        let request: GetClientAccessTokenRequest = new GetClientAccessTokenRequest(this, ServiceErrorHandling.ReturnErrors);
        request.TokenRequests = requestList;
        return request.Execute();
    }
    /* #end region ClientAccessTokens */


    /* #region Client Extensibility */

    /**
     * Get the app manifests.
     *
     * @return  {IPromise<string[]>}             Collection of manifests xml file as base64 encoded string :Promise.
     */
    GetAppManifests(): IPromise<string[]>;
    /**
     * Get the app manifests.  Works with Exchange 2013 SP1 or later EWS.
     *
     * @param   {string}   apiVersionSupported      The api version supported by the client.
     * @param   {string}   schemaVersionSupported   The schema version supported by the client.
     * @return  {IPromise<ClientApp[]>}             Collection of manifests :Promise.
     */
    GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): IPromise<ClientApp[]>;
    GetAppManifests(apiVersionSupported: string = null, schemaVersionSupported: string = null): IPromise<ClientApp[] | string[]> {
        let argsLength = arguments.length;
        let request: GetAppManifestsRequest = new GetAppManifestsRequest(this);

        if (argsLength !== 0) {
            request.ApiVersionSupported = apiVersionSupported;
            request.SchemaVersionSupported = schemaVersionSupported;
        }

        return request.Execute().then((response: GetAppManifestsResponse) => {
            if (argsLength !== 0) {
                return response.Apps;
            }
            else {
                return response.Manifests;
            }
        });


    }

    /**
     * Get App Marketplace Url.
     *
     * @return  {IPromise<string>}      marketplace url as string :Promise.
     * @remarks                         Exception will be thrown for errors. 
     */
    GetAppMarketplaceUrl(): IPromise<string>;
    /**
     * Get App Marketplace Url.  Works with Exchange 2013 SP1 or later EWS.
     *
     * @param   {string}   apiVersionSupported      The api version supported by the client.
     * @param   {string}   schemaVersionSupported   The schema version supported by the client.
     * @return  {IPromise<string>}                  marketplace url as string :Promise.
     * @remarks                                     Exception will be thrown for errors. 
     */
    GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): IPromise<string>;
    GetAppMarketplaceUrl(apiVersionSupported: string = null, schemaVersionSupported: string = null): IPromise<string> {

        let request: GetAppMarketplaceUrlRequest = new GetAppMarketplaceUrlRequest(this);
        request.ApiVersionSupported = apiVersionSupported;
        request.SchemaVersionSupported = schemaVersionSupported;

        return request.Execute().then((response: GetAppMarketplaceUrlResponse) => {

            return response.AppMarketplaceUrl;
        });
    }

    /**
     * Disable an App.
     *
     * @param   {string}                id              App ID
     * @param   {DisableReasonType}     disableReason   Disable reason
     * @return  {IPromise<void>}        :Promise.
     * @remarks Exception will be thrown for errors. 
     */
    DisableApp(id: string, disableReason: DisableReasonType): IPromise<void> {
        EwsUtilities.ValidateParam(id, "id");
        EwsUtilities.ValidateParam(disableReason, "disableReason");

        let request: DisableAppRequest = new DisableAppRequest(this, id, disableReason);

        return <any>request.Execute();
    }

    /**
     * Install an App.
     *
     * @param   {string}   manifestStream   The manifest's plain text XML as base64 encoded string.
     * @return  {IPromise<void>}    :Promise.
     * @remarks Exception will be thrown for errors. 
     */
    InstallApp(manifestStream: string): IPromise<void> {
        EwsUtilities.ValidateParam(manifestStream, "manifestStream");

        let request: InstallAppRequest = new InstallAppRequest(this, manifestStream);

        return <any>request.Execute();
    }

    /**
     * Uninstall an App.
     *
     * @param   {string}   id   App ID
     * @return  {IPromise<void>}    :Promise.
     * @remarks Exception will be thrown for errors. 
     */
    UninstallApp(id: string): IPromise<void> {
        EwsUtilities.ValidateParam(id, "id");

        let request: UninstallAppRequest = new UninstallAppRequest(this, id);

        return <any>request.Execute();
    }

    //info - not used in client side, only server side calls are supported per function documentation.
    // GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse { throw new Error("ExchangeService.ts - GetClientExtension : Not implemented."); }
    // SetClientExtension(actions: Function[] /*System.Collections.Generic.List<T>*/): any { throw new Error("ExchangeService.ts - SetClientExtension : Not implemented."); }
    // GetEncryptionConfiguration(): GetEncryptionConfigurationResponse { throw new Error("ExchangeService.ts - GetEncryptionConfiguration : Not implemented."); }
    // SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any { throw new Error("ExchangeService.ts - SetEncryptionConfiguration : Not implemented."); }
    /* #endregion Client Extensibility */


    /* #region Diagnostic Method -- Only used by test */

    //ExecuteDiagnosticMethod(verb: string, parameter: System.Xml.XmlNode): System.Xml.XmlDocument { throw new Error("ExchangeService.ts - ExecuteDiagnosticMethod : Not implemented."); }    
    /* #endregion Diagnostic Method -- Only used by test */


    /* #region Validation */

    static IsMajorMinor(versionPart: string): boolean {
        var MajorMinorSeparator: string = '.';//char

        var parts: string[] = versionPart.split(MajorMinorSeparator);
        if (parts.length != 2) {
            return false;
        }

        for (var s of parts) {
            for (var c of s.split('')) {
                if (isNaN(<any>c)) {
                    return false;
                }
            }
        }

        return true;
    }
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void {
        super.Validate();

        if (this.Url == null) {
            throw new ServiceLocalException(Strings.ServiceUrlMustBeSet);
        }

        if (this.PrivilegedUserId != null && this.ImpersonatedUserId != null) {
            throw new ServiceLocalException(Strings.CannotSetBothImpersonatedAndPrivilegedUser);
        }

        // only one of PrivilegedUserId|ImpersonatedUserId|ManagementRoles can be set.
    }
    /**
     * @internal Validates a new-style version string. This validation is not as strict as server-side validation.
     *
     * @param   {string}   version   the version string
     */
    static ValidateTargetVersion(version: string): void {
        var ParameterSeparator: string = ';'; //char
        var LegacyVersionPrefix: string = "Exchange20";
        var ParameterValueSeparator: string = '='; //char
        var ParameterName: string = "minimum";

        if (StringHelper.IsNullOrEmpty(version)) {
            throw new ArgumentException("Target version must not be empty.");
        }

        var parts: string[] = version.trim().split(ParameterSeparator);

        if (parts.length > 2) {
            throw new ArgumentException("Target version should have the form.");
        }

        var skipPart1: boolean = true;
        if (parts.length === 2) {
            // Validate the optional minimum version parameter, "minimum=X.Y"
            var part2: string = parts[1].trim();
            var minParts: string[] = part2.split(ParameterValueSeparator);
            if (minParts.length == 2 &&
                minParts[0].trim().toUpperCase() === ParameterName.toUpperCase() &&
                ExchangeService.IsMajorMinor(minParts[1].trim())) {
                skipPart1 = false;
            }
            else {
                throw new ArgumentException("Target version must match X.Y or Exchange20XX.");
            }
        }

        if (parts.length >= 0 && !skipPart1) {
            // Validate the header value. We allow X.Y or Exchange20XX.
            var part1: string = parts[0].trim();
            if (parts[0].indexOf(LegacyVersionPrefix) === 0) {
                // Close enough; misses corner cases like "Exchange2001". Server will do complete validation.
            }
            else if (ExchangeService.IsMajorMinor(part1)) {
                // Also close enough; misses corner cases like ".5".
            }
            else {
                throw new ArgumentException("Target version must match X.Y or Exchange20XX.");
            }
        }
    }
    /* #endregion Validation */


    /* #region Utilities */

    /**
     * @internal Creates an IXHROptions instance and initializes it with the appropriate parameters, based on the configuration of this service object.
     *
     * @param   {string}   methodName   Name of the method.
     * @return  {IXHROptions}           An instance of IXHROptions to call web service with.
     */
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

    /**
     * @internal Processes an HTTP error response.
     *
     * @param   {XMLHttpRequest}   httpWebResponse      The HTTP web response.
     * @param   {SoapFaultDetails}   soapFault          The SoapFault Instance.
     */
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, soapFault: SoapFaultDetails): void {
        this.InternalProcessHttpErrorResponse(
            httpWebResponse,
            soapFault,
            TraceFlags.EwsResponseHttpHeaders,
            TraceFlags.EwsResponse);
    }

    /**
     * Sets the type of the content.
     *
     * @param   {IXHROptions}   request   The request.
     */
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
    /* #endregion Utilities */


}

//module ExchangeService { -> moved to its own file to remove circular dependency.
//    export enum RenderingMode {
//        Xml = 0,
//        JSON = 1
//    }
//}


