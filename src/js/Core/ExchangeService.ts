import { AccountIsLockedException } from "../Exceptions/AccountIsLockedException";
import { AddDelegateRequest } from "./Requests/AddDelegateRequest";
import { AffectedTaskOccurrence } from "../Enumerations/AffectedTaskOccurrence";
import { AlternateIdBase } from "../Misc/IdConversion/AlternateIdBase";
import { ApplyConversationActionRequest } from "./Requests/ApplyConversationActionRequest";
import { Appointment } from "./ServiceObjects/Items/Appointment";
import { ArchiveItemRequest } from "./Requests/ArchiveItemRequest";
import { ArchiveItemResponse } from "./Responses/ArchiveItemResponse";
import { ArgumentException, ArgumentOutOfRangeException, ArgumentNullException } from "../Exceptions/ArgumentException";
import { ArrayHelper, StringHelper, UriHelper, hasValue } from "../ExtensionMethods";
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
import { CreateResponseObjectResponse } from "./Responses/CreateResponseObjectResponse";
import { CreateUserConfigurationRequest } from "./Requests/CreateUserConfigurationRequest";
import { DateTime } from "../DateTime";
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
import { ExpandGroupResponse } from "./Responses/ExpandGroupResponse";
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
import { GetEventsResponse } from "./Responses/GetEventsResponse";
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
import { GetNonIndexableItemDetailsParameters, GetNonIndexableItemStatisticsParameters } from "../MailboxSearch/NonIndexableItemParameters";
import { GetNonIndexableItemDetailsRequest } from "./Requests/GetNonIndexableItemDetailsRequest";
import { GetNonIndexableItemDetailsResponse } from "./Responses/GetNonIndexableItemDetailsResponse";
import { GetNonIndexableItemStatisticsRequest } from "./Requests/GetNonIndexableItemStatisticsRequest";
import { GetNonIndexableItemStatisticsResponse } from "./Responses/GetNonIndexableItemStatisticsResponse";
import { GetPasswordExpirationDateRequest } from "./Requests/GetPasswordExpirationDateRequest";
import { GetPasswordExpirationDateResponse } from "./Responses/GetPasswordExpirationDateResponse";
import { GetRoomListsRequest } from "./Requests/GetRoomListsRequest";
import { GetRoomListsResponse } from "./Responses/GetRoomListsResponse";
import { GetRoomsRequest } from "./Requests/GetRoomsRequest";
import { GetRoomsResponse } from "./Responses/GetRoomsResponse";
import { GetSearchableMailboxesRequest } from "./Requests/GetSearchableMailboxesRequest";
import { GetSearchableMailboxesResponse } from "./Responses/GetSearchableMailboxesResponse";
import { GetServerTimeZonesRequest } from "./Requests/GetServerTimeZonesRequest";
import { GetServerTimeZonesResponse } from "./Responses/GetServerTimeZonesResponse";
import { GetUserAvailabilityRequest } from "./Requests/GetUserAvailabilityRequest";
import { GetUserAvailabilityResults } from "../Misc/Availability/GetUserAvailabilityResults";
import { GetUserConfigurationRequest } from "./Requests/GetUserConfigurationRequest";
import { GetUserConfigurationResponse } from "./Responses/GetUserConfigurationResponse";
import { GetUserOofSettingsRequest } from "./Requests/GetUserOofSettingsRequest";
import { GetUserOofSettingsResponse } from "./Responses/GetUserOofSettingsResponse";
import { GetUserRetentionPolicyTagsRequest } from "./Requests/GetUserRetentionPolicyTagsRequest";
import { GetUserRetentionPolicyTagsResponse } from "./Responses/GetUserRetentionPolicyTagsResponse";
import { GetUserSettingsResponse } from "../Autodiscover/Responses/GetUserSettingsResponse";
import { GroupedFindItemsResults } from "../Search/GroupedFindItemsResults";
import { Grouping } from "../Search/Grouping";
import { Guid } from "../Guid";
import { HoldAction } from "../Enumerations/HoldAction";
import { IdFormat } from "../Enumerations/IdFormat";
import { IFileAttachmentContentHandler } from "../Interfaces/IFileAttachmentContentHandler";
import { ImpersonatedUserId } from "../Misc/ImpersonatedUserId";
import { InstallAppRequest } from "./Requests/InstallAppRequest";
import { Item } from "./ServiceObjects/Items/Item";
import { ItemChange } from "../Sync/ItemChange";
import { ItemId } from "../ComplexProperties/ItemId";
import { IXHROptions } from "../Interfaces";
import { KeyValuePair } from "../AltDictionary";
import { Mailbox } from "../ComplexProperties/Mailbox";
import { MailboxQuery } from "../MailboxSearch/MailboxQuery";
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
import { Promise } from "../Promise";
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
import { SearchMailboxesParameters } from "../MailboxSearch/SearchMailboxesParameters";
import { SearchMailboxesRequest } from "./Requests/SearchMailboxesRequest";
import { SearchMailboxesResponse } from "./Responses/SearchMailboxesResponse";
import { SearchPageDirection } from "../Enumerations/SearchPageDirection";
import { SearchResultType } from "../Enumerations/SearchResultType";
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
import { SetHoldOnMailboxesParameters } from "../MailboxSearch/SetHoldOnMailboxesParameters";
import { SetHoldOnMailboxesRequest } from "./Requests/SetHoldOnMailboxesRequest";
import { SetHoldOnMailboxesResponse } from "./Responses/SetHoldOnMailboxesResponse";
import { SetTeamMailboxRequest } from "./Requests/SetTeamMailboxRequest";
import { SetUserOofSettingsRequest } from "./Requests/SetUserOofSettingsRequest";
import { SoapFaultDetails } from "../Misc/SoapFaultDetails";
import { SortDirection } from "../Enumerations/SortDirection";
import { StreamingSubscription } from "../Notifications/StreamingSubscription";
import { StringList } from "../ComplexProperties/StringList";
import { Strings } from "../Strings";
import { SubscribeResponse } from "./Responses/SubscribeResponse";
import { SubscribeToPullNotificationsRequest } from "./Requests/SubscribeToPullNotificationsRequest";
import { SubscribeToPushNotificationsRequest } from "./Requests/SubscribeToPushNotificationsRequest";
import { SubscribeToStreamingNotificationsRequest } from "./Requests/SubscribeToStreamingNotificationsRequest";
import { SyncFolderHierarchyRequest } from "./Requests/SyncFolderHierarchyRequest";
import { SyncFolderItemsRequest } from "./Requests/SyncFolderItemsRequest";
import { SyncFolderItemsScope } from "../Enumerations/SyncFolderItemsScope";
import { TeamMailboxLifecycleState } from "../Enumerations/TeamMailboxLifecycleState";
import { TimeWindow } from "../Misc/Availability/TimeWindow";
import { TimeZoneInfo } from "../TimeZoneInfo";
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

import { ExchangeServiceBase } from "./ExchangeServiceBase";
/**
 * Represents a binding to the **Exchange Web Services**.
 *
 */
export class ExchangeService extends ExchangeServiceBase {

  //#region Constants
  private static TargetServerVersionHeaderName: string = "X-EWS-TargetVersion";
  //#endregion


  //#region Fields
  private url: Uri = null;
  //private preferredCulture: any = null;// System.Globalization.CultureInfo;
  private dateTimePrecision: DateTimePrecision = DateTimePrecision.Default;
  private impersonatedUserId: ImpersonatedUserId = null;
  private privilegedUserId: PrivilegedUserId = null;
  private managementRoles: ManagementRoles = null;
  private fileAttachmentContentHandler: IFileAttachmentContentHandler = null;
  private unifiedMessaging: UnifiedMessaging = null;
  private enableScpLookup: boolean = false; //false for javascript, AD Lookup not implemented 
  private renderingMode: RenderingMode = RenderingMode.Xml;
  private traceEnablePrettyPrinting: boolean = true;
  private targetServerVersion: string = null;
  private exchange2007CompatibilityMode: boolean = false;
  //#endregion


  //#region Properties

  /**
   * Gets or sets the URL of the Exchange Web Services.
   */
  get Url(): Uri {
    return this.url;
  }
  set Url(value: Uri) {
    this.url = value;
  }

  /**
   * Gets or sets the Id of the user that EWS should impersonate.
   */
  get ImpersonatedUserId(): ImpersonatedUserId {
    return this.impersonatedUserId;
  }
  set ImpersonatedUserId(value: ImpersonatedUserId) {
    this.impersonatedUserId = value;
  }

  /**
   * @internal Gets or sets the Id of the user that EWS should open his/her mailbox with privileged logon type.
   */
  get PrivilegedUserId(): PrivilegedUserId {
    return this.privilegedUserId;
  }
  set PrivilegedUserId(value: PrivilegedUserId) {
    this.privilegedUserId = value;
  }

  /**
   * [summary]
   */
  get ManagementRoles(): ManagementRoles {
    return this.managementRoles;
  }
  set ManagementRoles(value: ManagementRoles) {
    this.managementRoles = value;
  }

  // /**
  //  * Gets or sets the preferred culture for messages returned by the Exchange Web Services.
  //  */
  // get PreferredCulture(): CultureInfo {
  //   return this.preferredCulture;
  // }
  // set PreferredCulture(value: CultureInfo) {
  //   this.preferredCulture = value;
  // }

  /**
   * Gets or sets the DateTime precision for DateTime values returned from Exchange Web Services.
   */
  get DateTimePrecision(): DateTimePrecision {
    return this.dateTimePrecision;
  }
  set DateTimePrecision(value: DateTimePrecision) {
    this.dateTimePrecision = value;
  }

  /**
   * Gets or sets a file attachment content handler.
   */
  get FileAttachmentContentHandler(): IFileAttachmentContentHandler {
    return this.fileAttachmentContentHandler;
  }
  set FileAttachmentContentHandler(value: IFileAttachmentContentHandler) {
    this.fileAttachmentContentHandler = value;
  }

  /**
   * Gets the time zone this service is scoped to.
   */
  get TimeZone(): TimeZoneInfo {
    return this.timeZone;
  }

  /**
   * Provides access to the Unified Messaging functionalities.
   */
  get UnifiedMessaging(): UnifiedMessaging {
    if (this.unifiedMessaging === null) {
      this.unifiedMessaging = new UnifiedMessaging(this);
    }
    return this.unifiedMessaging;
  }

  /**
   * Gets or sets a value indicating whether the AutodiscoverUrl method should perform SCP (Service Connection Point) record lookup when determining the Autodiscover service URL.
   */
  get EnableScpLookup(): boolean {
    return this.enableScpLookup;
  }
  set EnableScpLookup(value: boolean) {
    this.enableScpLookup = value;
  }

  /**
   * @internal Gets or sets a value indicating whether Exchange2007 compatibility mode is enabled.
   * @remarks In order to support E12 servers, the Exchange2007CompatibilityMode property can be used to indicate that we should use "Exchange2007" as the server version string rather than Exchange2007_SP1.
   */
  get Exchange2007CompatibilityMode(): boolean {
    return this.exchange2007CompatibilityMode;
  }
  set Exchange2007CompatibilityMode(value: boolean) {
    this.exchange2007CompatibilityMode = value;
  }

  /**
   * @internal Gets or sets the method by which the service will serialize the request.
   */
  get RenderingMethod(): RenderingMode {
    return this.renderingMode;
  }
  set RenderingMethod(value: RenderingMode) {
    throw new Error("Rendering mode not used");
    this.renderingMode = value;
  }

  /**
   * Gets or sets a value indicating whether trace output is pretty printed.
   */
  get TraceEnablePrettyPrinting(): boolean {
    return this.traceEnablePrettyPrinting;
  }
  set TraceEnablePrettyPrinting(value: boolean) {
    this.traceEnablePrettyPrinting = value;
  }

  /**
   * @internal Gets or sets the target server version string (newer than Exchange2013).
   */
  get TargetServerVersion(): string {
    return this.targetServerVersion;
  }
  set TargetServerVersion(value: string) {
    ExchangeService.ValidateTargetVersion(value);
    this.targetServerVersion = value;
  }

  //#endregion

  //#region Response object operations
  /**
   * @internal Create response object.
   * 
   * @param   {ServiceObject}          responseObject       The response object.
   * @param   {FolderId}               parentFolderId       The parent folder id.
   * @param   {MessageDisposition}     messageDisposition   The message disposition.
   * @return  {Promise<Item[]>}        The list of items created or modified as a result of the "creation" of the response object :Promise.
   */
  async InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): Promise<Item[]> {
    const request: CreateResponseObjectRequest = new CreateResponseObjectRequest(this, ServiceErrorHandling.ThrowOnError);
    request.ParentFolderId = parentFolderId;
    request.Items = [responseObject];
    request.MessageDisposition = messageDisposition;
    const responses: ServiceResponseCollection<CreateResponseObjectResponse> = await request.Execute()
    return responses.__thisIndexer(0).Items;
  }
  //#endregion


  //#region Folder operations

  /**
   * @internal Binds to folder.
   *
   * @param   {FolderId}           folderId      The folder id.
   * @param   {PropertySet}        propertySet   The property set.
   * @return  {Promise<TFolder>}   Folder object :Promise.
   */
  BindToFolder(folderId: FolderId, propertySet: PropertySet): Promise<Folder>;
  /**
   * @internal Binds to folder.
   *
   * @param   {FolderId}           folderId      The folder id.
   * @param   {PropertySet}        propertySet   The property set.
   * @param   {folderType}         propertySet   Type to Cast - pass Folder or subclass itself, not an instance
   * @return  {Promise<TFolder>}   Folder object :Promise.
   */
  BindToFolder<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet,/** pass Folder or subclass itself, not an instance */ folderType: any): Promise<TFolder>;
  async BindToFolder(folderId: FolderId, propertySet: PropertySet, /** pass Folder or subclass itself, not an instance */ folderType: any = null): Promise<Folder> {
    EwsUtilities.ValidateParam(folderId, "folderId");
    EwsUtilities.ValidateParam(propertySet, "propertySet");

    const request: GetFolderRequest = new GetFolderRequest(this, ServiceErrorHandling.ThrowOnError);

    request.FolderIds.Add(folderId);
    request.PropertySet = propertySet;

    const responses: ServiceResponseCollection<GetFolderResponse> = await request.Execute()
    const result = responses.__thisIndexer(0).Folder;
    if (folderType != null && !(result instanceof folderType)) { //todo: validate folderType to be not a constructor
      throw new ServiceLocalException(
        StringHelper.Format(
          Strings.FolderTypeNotCompatible,
          "Type detection not implemented - ExchangeService.ts - BindToFolder<TFolder>",
          "Type detection not implemented"));
    }
    return result;
  }

  /**
   * @internal Copies a folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}           folderId              The folder id.
   * @param   {FolderId}           destinationFolderId   The destination folder id.
   * @return  {Promise<Folder>}    Copy of folder :Promise.
   */
  async CopyFolder(folderId: FolderId, destinationFolderId: FolderId): Promise<Folder> {
    const request: CopyFolderRequest = new CopyFolderRequest(this, ServiceErrorHandling.ThrowOnError);

    request.DestinationFolderId = destinationFolderId;
    request.FolderIds.Add(folderId);

    const responses: ServiceResponseCollection<MoveCopyFolderResponse> = await request.Execute()
    return responses.__thisIndexer(0).Folder;
  }

  /**
   * @internal Creates a folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}   folder           The folder.
   * @param   {FolderId}   parentFolderId   The parent folder id.
   */
  CreateFolder(folder: Folder, parentFolderId: FolderId): Promise<void> {
    const request: CreateFolderRequest = new CreateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
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
  DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): Promise<void> {
    EwsUtilities.ValidateParam(folderId, "folderId");
    const request: DeleteFolderRequest = new DeleteFolderRequest(this, ServiceErrorHandling.ThrowOnError);
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
  EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): Promise<void> {
    EwsUtilities.ValidateParam(folderId, "folderId");
    const request: EmptyFolderRequest = new EmptyFolderRequest(this, ServiceErrorHandling.ThrowOnError);
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
   * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
   */
  FindFolders(parentFolderId: FolderId, view: FolderView): Promise<FindFoldersResults>;
  /**
   * Obtains a list of folders by searching the sub-folders of the specified folder.
   *
   * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
   * @param   {FolderView}                     view               The view controlling the number of folders returned.
   * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
   */
  FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): Promise<FindFoldersResults>;
  /**
   * Obtains a list of folders by searching the sub-folders of the specified folder.
   *
   * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
   * @param   {SearchFilter}                   searchFilter     The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {FolderView}                     view             The view controlling the number of folders returned.
   * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
   */
  FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;
  /**
   * Obtains a list of folders by searching the sub-folders of the specified folder.
   *
   * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
   * @param   {SearchFilter}                   searchFilter       The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {FolderView}                     view               The view controlling the number of folders returned.
   * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
   */
  FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;

  FindFolders(
    parentFolderIdOrName: FolderId | WellKnownFolderName,
    viewOrSearchFilter: FolderView | SearchFilter,
    folderView?: FolderView): Promise<FindFoldersResults> {
    //todo: better argument check with ewsutilities
    //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
    //EwsUtilities.ValidateParam(view, "view");
    //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
    const argsLength = arguments.length;
    if (argsLength < 2 && argsLength > 3) {
      throw new Error("ExchangeService.ts - FindFolders - invalid number of arguments, check documentation and try again.");
    }

    //position 1 - parentFolderIdOrName
    const parentFolderIds: FolderId[] = []
    if (typeof parentFolderIdOrName === 'number') {
      parentFolderIds.push(new FolderId(parentFolderIdOrName));
    }
    else if (parentFolderIdOrName instanceof FolderId) {
      parentFolderIds.push(parentFolderIdOrName);
    }
    else {
      throw new Error("ExchangeService.ts - FindFolders - incorrect use of parameters, 1st argument must be Folder ID or WellKnownFolderName");
    }

    let searchFilter: SearchFilter = null;
    let view: FolderView = null;

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
   * @return  {Promise<ServiceResponseCollection<FindFolderResponse>>}     Collection of service responses :Promise.
   */
  private InternalFindFolders(parentFolderIds: FolderId[], searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): Promise<ServiceResponseCollection<FindFolderResponse>> {

    const request: FindFolderRequest = new FindFolderRequest(this, errorHandlingMode);

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
  LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): Promise<void> {
    EwsUtilities.ValidateParam(folder, "folder");
    EwsUtilities.ValidateParam(propertySet, "propertySet");

    const request: GetFolderRequestForLoad = new GetFolderRequestForLoad(this, ServiceErrorHandling.ThrowOnError);

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
  MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): Promise<void> {
    EwsUtilities.ValidateParam(folderId, "folderId");
    EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "MarkAllItemsAsRead");
    const request: MarkAllItemsAsReadRequest = new MarkAllItemsAsReadRequest(this, ServiceErrorHandling.ThrowOnError);
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
   * @return  {Promise<Folder>}    Moved folder :Promise.
   */
  async MoveFolder(folderId: FolderId, destinationFolderId: FolderId): Promise<Folder> {
    const request: MoveFolderRequest = new MoveFolderRequest(this, ServiceErrorHandling.ThrowOnError);
    request.DestinationFolderId = destinationFolderId;
    request.FolderIds.Add(folderId);
    const responses: ServiceResponseCollection<MoveCopyFolderResponse> = await request.Execute()
    return responses.__thisIndexer(0).Folder;
  }
  /**
   * @internal Updates a folder.
   *
   * @param   {Folder}   folder   The folder.
   */
  async UpdateFolder(folder: Folder): Promise<void> {
    const request: UpdateFolderRequest = new UpdateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
    request.Folders.push(folder);
    await request.Execute();
    return;
  }
  //#endregion


  //#region Item operations

  /**
   * Archives multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}   itemIds          The Ids of the items to move.
   * @param   {FolderId}   sourceFolderId   The Id of the folder in primary corresponding to which items are being archived to.
   * @return  {Promise<ServiceResponseCollection<ArchiveItemResponse>>}                     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  ArchiveItems<TResponse extends ServiceResponse>(itemIds: ItemId[], sourceFolderId: FolderId): Promise<ServiceResponseCollection<ArchiveItemResponse>> {
    const request: ArchiveItemRequest = new ArchiveItemRequest(this, ServiceErrorHandling.ReturnErrors);
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
   * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                    A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
   */
  BindToGroupItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string): Promise<ServiceResponseCollection<GetItemResponse>> {
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
   * @return  {Promise<Item>}     Item :Promise.
   */
  BindToItem(itemId: ItemId, propertySet: PropertySet): Promise<Item>;
  /**
   * @internal Binds to item.
   *
   * @param   {ItemId}            itemId        The item id.
   * @param   {PropertySet}       propertySet   The property set.
   * @param   {<TItem>}           itemType      Item type class ex: Item, EmailMessage etc..
   * @return  {Promise<Item>}     Item :Promise.
   */
  BindToItem<TItem extends Item>(itemId: ItemId, propertySet: PropertySet, itemType: typeof Item /* pass Item or subclass itself, not instance */): Promise<TItem>;
  async BindToItem(itemId: ItemId, propertySet: PropertySet,/** pass Item or subclass itself, not an instance */ itemType: typeof Item = null): Promise<Item> {

    EwsUtilities.ValidateParam(itemId, "itemId");
    EwsUtilities.ValidateParam(propertySet, "propertySet");

    const response: ServiceResponseCollection<GetItemResponse> = await this.InternalBindToItems(
      [itemId],
      propertySet,
      null, /* anchorMailbox */
      ServiceErrorHandling.ThrowOnError);

    const result = response.__thisIndexer(0).Item;
    if (itemType != null && !(result instanceof itemType)) { //todo: validate itemType to be not a constructor
      throw new ServiceLocalException(
        StringHelper.Format(
          Strings.ItemTypeNotCompatible,
          "Type detection not implemented - ExchangeService.ts - BindToItem<TItem>",
          "Type detection not implemented"));
    }

    return result;
  }
  /**
   * Binds to multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}      itemIds       The Ids of the items to bind to.
   * @param   {PropertySet}   propertySet   The set of properties to load.
   * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                  A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
   */
  BindToItems(itemIds: ItemId[], propertySet: PropertySet): Promise<ServiceResponseCollection<GetItemResponse>> {
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
   * @return  {Promise<Item>}     The copy of the item :Promise.
   */
  async CopyItem(itemId: ItemId, destinationFolderId: FolderId): Promise<Item> {
    const response: ServiceResponseCollection<MoveCopyItemResponse> = await this.InternalCopyItems(
      [itemId],
      destinationFolderId,
      null,
      ServiceErrorHandling.ThrowOnError)
    return response.__thisIndexer(0).Item;
  }

  /**
   * Copies multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
   * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}                          A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  CopyItems(itemIds: ItemId[], destinationFolderId: FolderId): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
  /**
   * Copies multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
   * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
   * @param   {boolean}       returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}                          A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
  CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean = null): Promise<ServiceResponseCollection<MoveCopyItemResponse>> {
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
  CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): Promise<void> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}                          A ServiceResponseCollection providing creation results for each of the specified items :Promise.
   */
  CreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): Promise<ServiceResponseCollection<ServiceResponse>> {
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
  DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<void>;
  /**
   * @internal Deletes an item. Calling this method results in a call to EWS.
   *
   * @param   {ItemId}                    itemId                    The Id of the item to delete.
   * @param   {DeleteMode}                deleteMode                The deletion mode.
   * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
   * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
   * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
   */
  DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): Promise<void>;
  DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean = false): Promise<void> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
   */
  DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<ServiceResponseCollection<ServiceResponse>>;
  /**
   * Deletes multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
   * @param   {DeleteMode}                deleteMode                The deletion mode.
   * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
   * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
   * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
   */
  DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
  DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean = false): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<FindItemsResults<Appointment>>}                     A collection of appointments representing the contents of the specified folder :Promise.
   */
  FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): Promise<FindItemsResults<Appointment>>;
  /**
   * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      parentFolderId   The id of the calendar folder in which to search for items.
   * @param   {CalendarView}  calendarView     The calendar view controlling the number of appointments returned.
   * @return  {Promise<FindItemsResults<Appointment>>}                     A collection of appointments representing the contents of the specified folder :Promise.
   */
  FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): Promise<FindItemsResults<Appointment>>;
  async FindAppointments(parentFolderIdOrName: FolderId | WellKnownFolderName, calendarView: CalendarView): Promise<FindItemsResults<Appointment>> {
    let parentFolderId: FolderId = <FolderId>parentFolderIdOrName;
    if (typeof parentFolderIdOrName === 'number') {
      parentFolderId = new FolderId(parentFolderIdOrName);
    }
    const response: ServiceResponseCollection<FindItemResponse<Appointment>> = await this.FindItems<Appointment>(
      [parentFolderId],
      null, /* searchFilter */
      null, /* queryString */
      calendarView,
      null, /* groupBy */
      ServiceErrorHandling.ThrowOnError);
    return response.__thisIndexer(0).Results;
  }

  /**
   * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
   * @param   {ViewBase}              view                    The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
   * @param   {ViewBase}  view                   The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderId: FolderId, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
   * @param   {ViewBase}      view                    The view controlling the number of items returned.
   * @param   {Grouping}      groupBy                 The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
   */
  FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
   * @param   {string}    queryString            The search string to be used for indexed search, if any.
   * @param   {ViewBase}  view                   The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
   * @param   {string}                queryString             The search string to be used for indexed search, if any.
   * @param   {ViewBase}              view                    The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
   * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ViewBase}              view                    The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
   * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ViewBase}      view                    The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
   * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ViewBase}      view                    The view controlling the number of items returned.
   * @param   {Grouping}      groupBy                 The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
   */
  FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
   * @param   {string}        queryString             The search string to be used for indexed search, if any.
   * @param   {ViewBase}      view                    The view controlling the number of items returned.
   * @param   {Grouping}      groupBy                 The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
   */
  FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
   * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {ViewBase}              view                    The view controlling the number of items returned.
   * @param   {Grouping}              groupBy                 The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
   */
  FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
   *
   * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
   * @param   {string}                queryString             The search string to be used for indexed search, if any.
   * @param   {ViewBase}              view                    The view controlling the number of items returned.
   * @param   {Grouping}              groupBy                 The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
   */
  FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
   *
   * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
   * @param   {string}    queryString            the search string to be used for indexed search, if any.
   * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
   * @param   {ViewBase}  view                   The view controlling the number of items returned.
   * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): Promise<FindItemsResults<Item>>;
  /**
   * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.     
   *
   * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
   * @param   {string}    queryString            the search string to be used for indexed search, if any.
   * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
   * @param   {ViewBase}  view                   The view controlling the number of items returned.
   * @param   {Grouping}  groupBy                The group by clause.
   * @return  {Promise<GroupedFindItemsResults<Item>>}        An object representing the results of the search operation :Promise.
   */
  FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
  /**
   * @internal Finds items.
   *
   * @param   {FolderId[]}                parentFolderIds     The parent folder ids.
   * @param   {SearchFilter}              searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
   * @param   {string}                    queryString         query string to be used for indexed search.
   * @param   {ViewBase}                  view                The view controlling the number of items returned.
   * @param   {Grouping}                  groupBy             The group by.
   * @param   {ServiceErrorHandling}      errorHandlingMode   Indicates the type of error handling should be done.
   * @return  {Promise<ServiceResponseCollection<FindItemResponse<TItem>>>}       Service response collection :Promise.
   */
  FindItems<TItem extends Item>(parentFolderIds: FolderId[], searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
  //skipped: not needed, no calls coming in to this internal function in ews managed api, future use possible until them keep it muted   - 
  //FindItems<TItem extends Item>(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;

  FindItems<TItem extends Item>(
    nameIdOrIds: WellKnownFolderName | FolderId | FolderId[],
    viewQueryStringOrSearchFilter: ViewBase | string | SearchFilter,
    groupByViewRHTOrQueryString?: Grouping | ViewBase | boolean | string,
    groupByOrView?: Grouping | ViewBase,
    groupBy?: Grouping,
    errorHandlingMode: ServiceErrorHandling = ServiceErrorHandling.ThrowOnError
  ): Promise<FindItemsResults<Item> | GroupedFindItemsResults<Item> | ServiceResponseCollection<FindItemResponse<TItem>>> {

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

    const argsLength = arguments.length;
    if (argsLength < 2 && argsLength > 6) {
      throw new Error("ExchangeService.ts - FindItems - invalid number of arguments, check documentation and try again.");
    }

    //position 1 - nameIdOrIds
    let parentIds: FolderId[] = []
    if (typeof nameIdOrIds === 'number') {
      parentIds.push(new FolderId(nameIdOrIds));
    }
    else if (nameIdOrIds instanceof FolderId) {
      parentIds.push(nameIdOrIds);
    }
    else if (Array.isArray(nameIdOrIds)) {
      parentIds = <FolderId[]>nameIdOrIds;
    }

    let queryString: string = null;
    let searchFilter: SearchFilter = null;
    let view: ViewBase = null;

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

    let groupResultBy: Grouping = null;
    let returnHighlightTerms: boolean = false;
    let isGroupped: boolean = false; // to resturn GroupedFindItemsResults<Item>

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
    let isRaw: boolean = false; // to return ServiceResponseCollection<FindItemResponse<TItem>>
    //position 6 - errorHandlingMode
    if (argsLength === 6) {
      isRaw = true;
    }

    const request: FindItemRequest<TItem> = new FindItemRequest<TItem>(this, errorHandlingMode | ServiceErrorHandling.ThrowOnError);

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
   * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}       A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
   */
  private InternalBindToItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<GetItemResponse>> {
    const request: GetItemRequest = new GetItemRequest(this, errorHandling);

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
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  private InternalCopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<MoveCopyItemResponse>> {
    const request: CopyItemRequest = new CopyItemRequest(this, errorHandling);
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing creation results for each of the specified items :Promise.
   */
  private InternalCreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<ServiceResponse>> {
    const request: CreateItemRequest = new CreateItemRequest(this, errorHandling);

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
   */
  private InternalDeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
    const request: DeleteItemRequest = new DeleteItemRequest(this, errorHandling);

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing results for each of the specified items :Promise.
   */
  InternalLoadPropertiesForItems(items: Item[], propertySet: PropertySet, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<ServiceResponse>> {
    const request: GetItemRequestForLoad = new GetItemRequestForLoad(this, errorHandling);
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
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  private InternalMoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<MoveCopyItemResponse>> {
    const request: MoveItemRequest = new MoveItemRequest(this, errorHandling);

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
   * @return  {Promise<ServiceResponseCollection<UpdateItemResponse>>}                     A ServiceResponseCollection providing update results for each of the specified items :Promise.
   */
  private InternalUpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): Promise<ServiceResponseCollection<UpdateItemResponse>> {
    const request: UpdateItemRequest = new UpdateItemRequest(this, errorHandling);


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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing results for each of the specified items :Promise.
   */
  LoadPropertiesForItems(items: Item[], propertySet: PropertySet): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<MarkAsJunkResponse>>}        A ServiceResponseCollection providing itemIds for each of the moved items :Promise.
   */
  MarkAsJunk(itemIds: ItemId[], isJunk: boolean, moveItem: boolean): Promise<ServiceResponseCollection<MarkAsJunkResponse>> {
    const request: MarkAsJunkRequest = new MarkAsJunkRequest(this, ServiceErrorHandling.ReturnErrors);
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
   * @return  {Promise<Item>}                   The moved item :Promise.
   */
  async MoveItem(itemId: ItemId, destinationFolderId: FolderId): Promise<Item> {
    const responses: ServiceResponseCollection<MoveCopyItemResponse> = await this.InternalMoveItems(
      [itemId],
      destinationFolderId,
      null,
      ServiceErrorHandling.ThrowOnError)
    return responses.__thisIndexer(0).Item;
  }

  /**
   * Moves multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}   itemIds               The Ids of the items to move.
   * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  MoveItems(itemIds: ItemId[], destinationFolderId: FolderId): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
  /**
   * Moves multiple items in a single call to EWS.
   *
   * @param   {ItemId[]}   itemIds               The Ids of the items to move.
   * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
   * @param   {boolean}    returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
   * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
   */
  MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
  MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean = null): Promise<ServiceResponseCollection<MoveCopyItemResponse>> {
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
  SendItem(item: Item, savedCopyDestinationFolderId: FolderId): Promise<void> {
    const request: SendItemRequest = new SendItemRequest(this, ServiceErrorHandling.ThrowOnError);
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
   * @return  {Promise<Item>}                                                              Updated item : Promise.
   */
  UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Promise<Item>;
  /**
   * @internal Updates an item.
   *
   * @param   {Item}                                  item                                 The item to update.
   * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
   * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
   * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
   * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
   * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
   * @return  {Promise<Item>}                                                              Updated item : Promise.
   */
  UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Promise<Item>;
  async UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): Promise<Item> {
    const responses: ServiceResponseCollection<UpdateItemResponse> = await this.InternalUpdateItems(
      [item],
      savedItemsDestinationFolderId,
      conflictResolution,
      messageDisposition,
      sendInvitationsOrCancellationsMode,
      ServiceErrorHandling.ThrowOnError,
      suppressReadReceipts);
    return responses.__thisIndexer(0).ReturnedItem;
  }
  /**
   * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
   *
   * @param   {Item[]}                                items                                The items to update.
   * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
   * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
   * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
   * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
   * @return  {Promise<Item>}                                                              A ServiceResponseCollection providing update results for each of the specified items : Promise.
   */
  UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Promise<ServiceResponseCollection<UpdateItemResponse>>;
  /**
   * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
   *
   * @param   {Item[]}                                items                                The items to update.
   * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
   * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
   * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
   * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
   * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
   * @return  {Promise<Item>}                                                              A ServiceResponseCollection providing update results for each of the specified items : Promise.
   */
  UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Promise<ServiceResponseCollection<UpdateItemResponse>>;
  UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean = false): Promise<ServiceResponseCollection<UpdateItemResponse>> {
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
  //#endregion Item operations


  //#region Attachment operations

  /**
   * @internal Creates attachments.
   *
   * @param   {string}            parentItemId   The parent item id.
   * @param   {Attachment[]}      attachments            The attachments.
   * @return  {Promise<ServiceResponseCollection<CreateAttachmentResponse>>}      Service response collection :Promise.
   */
  CreateAttachments(parentItemId: string, attachments: Attachment[]): Promise<ServiceResponseCollection<CreateAttachmentResponse>> {
    let request: CreateAttachmentRequest = new CreateAttachmentRequest(this, ServiceErrorHandling.ReturnErrors);

    request.ParentItemId = parentItemId;
    ArrayHelper.AddRange(request.Attachments, attachments); //request.Attachments.AddRange(attachments);

    return request.Execute();
  }

  /**
   * @internal Deletes attachments.
   *
   * @param   {Attachment[]}   attachments   The attachments.
   * @return  {Promise<ServiceResponseCollection<DeleteAttachmentResponse>>}      Service response collection :Promise.
   */
  DeleteAttachments(attachments: Attachment[]): Promise<ServiceResponseCollection<DeleteAttachmentResponse>> {
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
  GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<void> {
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
   * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
   */
  GetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<ServiceResponseCollection<GetAttachmentResponse>>;
  /**
   * Gets attachments.
   *
   * @param   {string[]}                      attachmentIds          The attachment ids.
   * @param   {BodyType}                      bodyType               Type of the body.
   * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
   * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
   */
  GetAttachments(attachmentIds: string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<ServiceResponseCollection<GetAttachmentResponse>>;
  GetAttachments(attachmentsOrIds: Attachment[] | string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<ServiceResponseCollection<GetAttachmentResponse>> {
    const ids = ArrayHelper.OfType<string, any[]>(<any[]>attachmentsOrIds, (attachment: any) => { return typeof attachment === 'string'; });
    if (ids && ids.length > 0) {
      const request: GetAttachmentRequest = new GetAttachmentRequest(this, ServiceErrorHandling.ReturnErrors);
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
   * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
   */
  private InternalGetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[], errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<GetAttachmentResponse>> {
    const request: GetAttachmentRequest = new GetAttachmentRequest(this, errorHandling);
    ArrayHelper.AddRange(request.Attachments, attachments);
    request.BodyType = bodyType;

    if (additionalProperties != null) {
      ArrayHelper.AddRange(request.AdditionalProperties, additionalProperties);
      //request.AdditionalProperties.AddRange(additionalProperties);
    }
    return request.Execute();
  }

  //#endregion


  //#region AD related operations

  /**
   * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
   *
   * @param   {ItemId}   groupId   The Id of the group to expand.
   * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
   */
  ExpandGroup(groupId: ItemId): Promise<ExpandGroupResults>;
  /**
   * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
   *
   * @param   {string}   smtpAddress   The SMTP address of the group to expand.
   * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
   */
  ExpandGroup(smtpAddress: string): Promise<ExpandGroupResults>;
  /**
   * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
   *
   * @param   {EmailAddress}   emailAddress   The e-mail address of the group.
   * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
   */
  ExpandGroup(emailAddress: EmailAddress): Promise<ExpandGroupResults>;
  /**
   * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
   *
   * @param   {string}   address       The SMTP address of the group to expand.
   * @param   {string}   routingType   The routing type of the address of the group to expand.
   * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
   */
  ExpandGroup(address: string, routingType: string): Promise<ExpandGroupResults>;
  async ExpandGroup(emailAddressOrsmtpAddressOrGroupId: EmailAddress | string | ItemId, routingType?: string): Promise<ExpandGroupResults> {
    // EwsUtilities.ValidateParam(emailAddressOrsmtpAddressOrGroupId, "address");
    // EwsUtilities.ValidateParam(routingType, "routingType");
    //EwsUtilities.ValidateParam(emailAddress, "emailAddress");
    let emailAddress: EmailAddress = new EmailAddress();

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

    const request: ExpandGroupRequest = new ExpandGroupRequest(this);

    request.EmailAddress = emailAddress;

    const response: ServiceResponseCollection<ExpandGroupResponse> = await request.Execute();
    return response.__thisIndexer(0).Members;
  }

  /**
   * Get the password expiration date
   *
   * @param   {string}   mailboxSmtpAddress   The e-mail address of the user.
   * @return  {Promise<DateTime>}             The password expiration date :Promise.
   */
  async GetPasswordExpirationDate(mailboxSmtpAddress: string): Promise<DateTime> {
    const request: GetPasswordExpirationDateRequest = new GetPasswordExpirationDateRequest(this);
    request.MailboxSmtpAddress = mailboxSmtpAddress;

    const response: GetPasswordExpirationDateResponse = await request.Execute();
    return response.PasswordExpirationDate;
  }

  /**
   * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
   *
   * @param   {string}    nameToResolve               The name to resolve.
   * @return  {Promise<NameResolutionCollection>}     A collection of name resolutions whose names match the one passed as a parameter :Promise.
   */
  ResolveName(nameToResolve: string): Promise<NameResolutionCollection>;
  /**
   * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
   *
   * @param   {string}                        nameToResolve               The name to resolve.
   * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
   * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
   * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
   */
  ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): Promise<NameResolutionCollection>;
  /**
   * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
   *
   * @param   {string}                        nameToResolve               The name to resolve.
   * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
   * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
   * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
   * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
   */
  ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): Promise<NameResolutionCollection>;
  /**
   * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
   *
   * @param   {string}                        nameToResolve               The name to resolve.
   * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
   * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
   * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
   * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
   */
  ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): Promise<NameResolutionCollection>;
  /**
   * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
   *
   * @param   {string}                        nameToResolve               The name to resolve.
   * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
   * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
   * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
   * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
   * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
   */
  ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): Promise<NameResolutionCollection>;

  ResolveName(
    nameToResolve: string,
    parentFolderIdsOrSearchScope?: ResolveNameSearchLocation | FolderId[],
    searchScopeOrReturnContactDetails?: ResolveNameSearchLocation | boolean,
    returnContactDetailsOrContactDataPropertySet?: boolean | PropertySet,
    contactDataPropertySet: PropertySet = null
  ): Promise<NameResolutionCollection> {


    const argsLength = arguments.length;
    if (argsLength < 1 && argsLength > 5) {
      throw new Error("ExchangeService.ts - ResolveName - invalid number of arguments, check documentation and try again.");
    }

    //position 1 - nameToResolve - no change, same for all overload

    let searchScope: ResolveNameSearchLocation = null;
    let parentFolderIds: FolderId[] = null;

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

    let returnContactDetails: boolean = false;

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

    const request: ResolveNamesRequest = new ResolveNamesRequest(this);

    request.NameToResolve = nameToResolve;
    request.ReturnFullContactData = returnContactDetails;
    request.ParentFolderIds.AddRange(parentFolderIds);
    request.SearchLocation = searchScope;
    request.ContactDataPropertySet = contactDataPropertySet;

    return request.Execute().then((response) => {
      return response.__thisIndexer(0).Resolutions;
    });
  }

  //#endregion


  //#region Notification operations

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
   * @return  {Promise<GetEventsResults>}     A GetEventsResults containing a list of events associated with the subscription.
   */
  async GetEvents(subscriptionId: string, watermark: string): Promise<GetEventsResults> {
    const response: ServiceResponseCollection<GetEventsResponse> = await this.BuildGetEventsRequest(subscriptionId, watermark).Execute();
    return response.__thisIndexer(0).Results;
  }

  /**
   * Set a TeamMailbox
   *
   * @param   {EmailAddress}                  emailAddress        TeamMailbox email address
   * @param   {Uri}                           sharePointSiteUrl   SharePoint site URL
   * @param   {TeamMailboxLifecycleState}     state               TeamMailbox lifecycle state
   * @return  {Promise<void>}     Promise.
   */
  SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: Uri, state: TeamMailboxLifecycleState): Promise<void> {
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
   * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
   */
  async SubscribeToPullNotifications(folderIds: FolderId[], timeout: number, watermark: string, ...eventTypes: EventType[]): Promise<PullSubscription> {
    EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

    const response: ServiceResponseCollection<SubscribeResponse<PullSubscription>> = await this.BuildSubscribeToPullNotificationsRequest(
      folderIds,
      timeout,
      watermark,
      eventTypes).Execute();
    return response.__thisIndexer(0).Subscription;
  }

  /**
   * Subscribes to pull notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.   :Promise.
   *
   * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
   * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
   * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
   * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
   * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
   */
  async SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, ...eventTypes: EventType[]): Promise<PullSubscription> {
    EwsUtilities.ValidateMethodVersion(
      this,
      ExchangeVersion.Exchange2010,
      "SubscribeToPullNotificationsOnAllFolders");

    const response: ServiceResponseCollection<SubscribeResponse<PullSubscription>> = await this.BuildSubscribeToPullNotificationsRequest(
      null,
      timeout,
      watermark,
      eventTypes).Execute();
    return response.__thisIndexer(0).Subscription;
  }

  /**
   * Subscribes to push notifications. Calling this method results in a call to EWS.
   *
   * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
   * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
   * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
   * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
   * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
   * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription  :Promise.
   */
  SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
  /**
   * Subscribes to push notifications. Calling this method results in a call to EWS.
   *
   * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
   * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
   * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
   * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
   * @param   {string}            callerData   Optional caller data that will be returned the call back.
   * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
   * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription  :Promise.
   */
  SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
  async SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerDataOrEventTypes: string | EventType, ...eventTypes: EventType[]): Promise<PushSubscription> {

    EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

    let callerData: string = null;

    if (typeof callerDataOrEventTypes === 'string') {
      callerData = callerDataOrEventTypes;
    }
    else {
      eventTypes.push(callerDataOrEventTypes); //info: ref: typescript generates eventTypes from arguments.length, need to push to it.
    }

    const response: ServiceResponseCollection<SubscribeResponse<PushSubscription>> = await this.BuildSubscribeToPushNotificationsRequest(
      folderIds,
      url,
      frequency,
      watermark,
      callerData,
      eventTypes).Execute();
    return response.__thisIndexer(0).Subscription;
  }

  /**
   * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
   * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
   * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
   * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
   * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription    :Promise.
   */
  SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
  /**
   * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
   * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
   * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
   * @param   {string}            callerData   Optional caller data that will be returned the call back.
   * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
   * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription    :Promise.
   */
  SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
  async SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerDataOrEventTypes: string | EventType, ...eventTypes: EventType[]): Promise<PushSubscription> {
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

    const response: ServiceResponseCollection<SubscribeResponse<PushSubscription>> = await this.BuildSubscribeToPushNotificationsRequest(
      null,
      url,
      frequency,
      watermark,
      callerData,
      eventTypes).Execute();
    return response.__thisIndexer(0).Subscription;
  }

  /**
   * Subscribes to streaming notifications. Calling this method results in a call to EWS.
   *
   * @param   {FolderId[]}   folderIds    The Ids of the folder to subscribe to.
   * @param   {EventType[]}   eventTypes   The event types to subscribe to.
   * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
   */
  async SubscribeToStreamingNotifications(folderIds: FolderId[], ...eventTypes: EventType[]): Promise<StreamingSubscription> {
    EwsUtilities.ValidateMethodVersion(
      this,
      ExchangeVersion.Exchange2010_SP1,
      "SubscribeToStreamingNotifications");

    EwsUtilities.ValidateParamCollection(folderIds, "folderIds");

    const responses: ServiceResponseCollection<SubscribeResponse<StreamingSubscription>> = await this.BuildSubscribeToStreamingNotificationsRequest(folderIds, eventTypes).Execute();
    return responses.__thisIndexer(0).Subscription;
  }

  /**
   * Subscribes to streaming notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
   *
   * @param   {EventType[]}   eventTypes   The event types to subscribe to.
   * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
   */
  async SubscribeToStreamingNotificationsOnAllFolders(...eventTypes: EventType[]): Promise<StreamingSubscription> {
    EwsUtilities.ValidateMethodVersion(
      this,
      ExchangeVersion.Exchange2010_SP1,
      "SubscribeToStreamingNotificationsOnAllFolders");

    const responses: ServiceResponseCollection<SubscribeResponse<StreamingSubscription>> = await this.BuildSubscribeToStreamingNotificationsRequest(null, eventTypes).Execute();
    return responses.__thisIndexer(0).Subscription;
  }

  /**
   * Unpin a TeamMailbox
   *
   * @param   {EmailAddress}      emailAddress        TeamMailbox email address
   * @return  {Promise<void>}     Promise.
   */
  UnpinTeamMailbox(emailAddress: EmailAddress): Promise<void> {
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
  Unsubscribe(subscriptionId: string): Promise<void> {
    return <any>this.BuildUnsubscribeRequest(subscriptionId).Execute();
  }

  //#endregion


  //#region Synchronization operations

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
   * @return  {Promise<ChangeCollection<ItemChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
   */
  SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): Promise<ChangeCollection<ItemChange>>;
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
   * @return  {Promise<ChangeCollection<ItemChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
   */
  SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): Promise<ChangeCollection<ItemChange>>;
  SyncFolderItems(
    syncFolderId: FolderId,
    propertySet: PropertySet,
    ignoredItemIds: ItemId[],
    maxChangesReturned: number,
    numberOfDaysOrSyncScope: number | SyncFolderItemsScope,
    syncScopeOrSyncState: SyncFolderItemsScope | string,
    syncState: string = null): Promise<ChangeCollection<ItemChange>> {

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
   * @return  {Promise<ChangeCollection<FolderChange>>}       A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
   */
  SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Promise<ChangeCollection<FolderChange>>;
  /**
   * Synchronizes the entire folder hierarchy of the mailbox this Service is connected to. Calling this method results in a call to EWS.
   *
   * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
   * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
   * @return  {Promise<ChangeCollection<FolderChange>>}       A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
   */
  SyncFolderHierarchy(propertySet: PropertySet, syncState: string): Promise<ChangeCollection<FolderChange>>;
  SyncFolderHierarchy(
    syncFolderIdOrPropertySet: FolderId | PropertySet,
    propertySetOrSyncState: PropertySet | string,
    syncState: string = null): Promise<ChangeCollection<FolderChange>> {

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
  //#endregion


  //#region Availability operations

  /**
   * Retrieves a collection of all room lists in the organization.
   *
   * @return  {Promise<EmailAddressCollection[]>}     A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
   */
  async GetRoomLists(): Promise<EmailAddressCollection> {
    let request: GetRoomListsRequest = new GetRoomListsRequest(this);

    const response: GetRoomListsResponse = await request.Execute();
    return response.RoomLists;
  }

  /**
   * Retrieves a collection of all rooms in the specified room list in the organization.
   *
   * @param   {EmailAddress}   emailAddress   The e-mail address of the room list.
   * @return  {Promise<EmailAddress[]>}       A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
   */
  async GetRooms(emailAddress: EmailAddress): Promise<EmailAddress[]> {
    EwsUtilities.ValidateParam(emailAddress, "emailAddress");

    let request: GetRoomsRequest = new GetRoomsRequest(this);

    request.RoomList = emailAddress;

    const response: GetRoomsResponse = await request.Execute();
    return response.Rooms;
  }

  /**
   * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
   *
   * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
   * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
   * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
   * @return  {Promise<GetUserAvailabilityResults>}       The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
   */
  GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): Promise<GetUserAvailabilityResults>;
  /**
   * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
   *
   * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
   * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
   * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
   * @param   {AvailabilityOptions}   options             The options controlling the information returned.
   * @return  {Promise<GetUserAvailabilityResults>}       The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
   */
  GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): Promise<GetUserAvailabilityResults>;
  async GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions = new AvailabilityOptions()): Promise<GetUserAvailabilityResults> {
    EwsUtilities.ValidateParamCollection(attendees, "attendees");
    EwsUtilities.ValidateParam(timeWindow, "timeWindow");
    EwsUtilities.ValidateParam(options, "options");
    const request = new GetUserAvailabilityRequest(this);

    request.Attendees = attendees;
    request.TimeWindow = timeWindow;
    request.RequestedData = requestedData;
    request.Options = options;

    return request.Execute()

  }

  /**
   * Gets Out of Office (OOF) settings for a specific user. Calling this method results in a call to EWS.
   *
   * @param   {string}   smtpAddress   The SMTP address of the user for which to retrieve OOF settings.
   * @return  {Promise<OofSettings>}   An OofSettings instance containing OOF information for the specified user.
   */
  async GetUserOofSettings(smtpAddress: string): Promise<OofSettings> {
    EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");

    const request: GetUserOofSettingsRequest = new GetUserOofSettingsRequest(this);

    request.SmtpAddress = smtpAddress;

    const response: GetUserOofSettingsResponse = await request.Execute();
    return response.OofSettings;
  }

  /**
   * Sets the Out of Office (OOF) settings for a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {string}        smtpAddress   The SMTP address of the user for which to set OOF settings.
   * @param   {OofSettings}   oofSettings   The OOF settings.
   * @return  {Promise<void>}      Promise.
   */
  SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): Promise<void> {
    EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");
    EwsUtilities.ValidateParam(oofSettings, "oofSettings");

    const request: SetUserOofSettingsRequest = new SetUserOofSettingsRequest(this);

    request.SmtpAddress = smtpAddress;
    request.OofSettings = oofSettings;

    return <any>request.Execute();
  }
  //#endregion


  //#region Conversation

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  private ApplyConversationAction(
    actionType: ConversationActionType,
    conversationIds: ConversationId[],
    processRightAway: boolean,
    categories: StringList,
    enableAlwaysDelete: boolean,
    destinationFolderId: FolderId,
    errorHandlingMode: ServiceErrorHandling): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
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
    errorHandlingMode: ServiceErrorHandling): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  DisableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  DisableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  DisableAlwaysMoveItemsInConversations(conversationIds: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  EnableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], categories: string[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  EnableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  EnableAlwaysMoveItemsInConversations(conversationId: ConversationId[], destinationFolderId: FolderId, processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<Conversation[]>}       Collection of conversations.
   */
  FindConversation(view: ViewBase, folderId: FolderId): Promise<Conversation[]>;
  /**
   * Retrieves a collection of all Conversations in the specified Folder.
   *
   * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
   * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
   * @param   {string}    queryString            The query string for which the search is being performed
   * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
   */
  FindConversation(view: ViewBase, folderId: FolderId, queryString: string): Promise<Conversation[]>;
  /**
   * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
   *
   * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
   * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
   * @param   {string}    queryString            The query string for which the search is being performed
   * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
   * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
   */
  FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): Promise<FindConversationResults>;
  /**
   * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
   *
   * @param   {ViewBase}                  view                   The view controlling the number of conversations returned.
   * @param   {FolderId}                  folderId               The Id of the folder in which to search for conversations.
   * @param   {string}                    queryString            The query string for which the search is being performed
   * @param   {boolean}                   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
   * @param   {MailboxSearchLocation?}    mailboxScope           The mailbox scope to reference.
   * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
   */
  FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): Promise<FindConversationResults>;
  FindConversation(
    view: ViewBase,
    folderId: FolderId,
    queryString: string = null,
    returnHighlightTerms: boolean = null,
    mailboxScope: MailboxSearchLocation = null): Promise<FindConversationResults | Conversation[]> {

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
   * @return  {Promise<Conversation[]>}   Collection of conversations :Promise.
   */
  async FindGroupConversation(view: ViewBase, folderId: FolderId, anchorMailbox: string): Promise<Conversation[]> {

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

    const responses: FindConversationResponse = await request.Execute();
    return responses.Conversations;
  }

  /**
   * Gets the items for a set of conversations.
   *
   * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
   * @param   {PropertySet}               propertySet       The set of properties to load.
   * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
   * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
   * @return  {Promise<ServiceResponseCollection<GetConversationItemsResponse>>}      GetConversationItems response    :Promise.
   */
  GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */): Promise<ServiceResponseCollection<GetConversationItemsResponse>>;
  /**
   * Gets the items for a set of conversations.
   *
   * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
   * @param   {PropertySet}               propertySet       The set of properties to load.
   * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
   * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
   * @param   {MailboxSearchLocation}     mailboxScope      The mailbox scope to reference.
   * @return  {Promise<ServiceResponseCollection<GetConversationItemsResponse>>}      GetConversationItems response    :Promise.
   */
  GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */, mailboxScope: MailboxSearchLocation /* Nullable */): Promise<ServiceResponseCollection<GetConversationItemsResponse>>;
  /**
   * Gets the items for a conversation.
   *
   * @param   {ConversationId}            conversationId    The conversation id.
   * @param   {PropertySet}               propertySet       The set of properties to load.
   * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
   * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
   * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
   * @return  {Promise<ConversationResponse>}               GetConversationItems response    :Promise.
   */
  GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */): Promise<ConversationResponse>;
  async GetConversationItems(
    conversationsOrConversationId: ConversationRequest[] | ConversationId,
    propertySet: PropertySet,
    foldersToIgnoreOrSyncState: FolderId[] | string,
    sortOrderOrFoldersToIgnore: ConversationSortOrder /* Nullable */ | FolderId[],
    mailboxScopeOrSortOrder: ConversationSortOrder | MailboxSearchLocation /* Nullable */ = null): Promise<ServiceResponseCollection<GetConversationItemsResponse> | ConversationResponse> {

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

    const responses: ServiceResponseCollection<GetConversationItemsResponse> = await this.InternalGetConversationItems(
      conversations,
      propertySet,
      foldersToIgnore,
      sortOrder,    //todo: check why official repo has passed sortOrder as null when requested with ConversationRequest[] variant
      mailboxScope, /* mailboxScope */
      null,         /* maxItemsToReturn */
      null,         /* anchorMailbox */
      ServiceErrorHandling.ThrowOnError);
    return returnConversationResponse ? responses.__thisIndexer(0).Conversation : responses;
  }

  /**
   * Gets the items for a conversation.
   *
   * /remarks/    This API designed to be used primarily in groups scenarios where we want to set the anchor mailbox header so that request is routed directly to the group mailbox backend server.
   * @param   {ConversationId}            conversationId    The conversation id.
   * @param   {PropertySet}               propertySet       The set of properties to load.
   * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
   * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
   * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
   * @param   {string}                    anchorMailbox     The smtp address of the mailbox hosting the conversations
   * @return  {Promise<ConversationResponse>}               ConversationResponseType response :Promise.
   */
  async GetGroupConversationItems(conversationId: ConversationId, propertySet: PropertySet,
    syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder /* Nullable */, anchorMailbox: string): Promise<ConversationResponse> {
    EwsUtilities.ValidateParam(anchorMailbox, "anchorMailbox");

    let conversations: ConversationRequest[] = [];
    conversations.push(new ConversationRequest(conversationId, syncState));

    const responses: ServiceResponseCollection<GetConversationItemsResponse> = await this.InternalGetConversationItems(
      conversations,
      propertySet,
      foldersToIgnore,
      sortOrder,
      null,           /* mailboxScope */
      null,           /* maxItemsToReturn */
      anchorMailbox,  /* anchorMailbox */
      ServiceErrorHandling.ThrowOnError);
    return responses.__thisIndexer(0).Conversation;
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
   * @return  {Promise<ServiceResponseCollection<GetConversationItemsResponse>>}      GetConversationItems response.
   */
  InternalGetConversationItems(
    conversations: ConversationRequest[],
    propertySet: PropertySet,
    foldersToIgnore: FolderId[],
    sortOrder: ConversationSortOrder, //Nullable
    mailboxScope: MailboxSearchLocation, //Nullable
    maxItemsToReturn: number, //nullable
    anchorMailbox: string,
    errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<GetConversationItemsResponse>> {

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  CopyItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, destinationFolderId: FolderId): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  DeleteItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, deleteMode: DeleteMode): Promise<ServiceResponseCollection<ServiceResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  MoveItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, destinationFolderId: FolderId): Promise<ServiceResponseCollection<ServiceResponse>> {

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  SetFlagStatusForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, flagStatus: Flag): Promise<ServiceResponseCollection<ServiceResponse>> {

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, isRead: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
  /**
   * Sets the read state for items in conversation. Calling this method would result in call to EWS.
   *
   * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
   * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
   * @param   {boolean}                                       isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
   * @param   {boolean}                                       suppressReadReceipts   if set to *true* read receipts are suppressed.
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
  SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean = null): Promise<ServiceResponseCollection<ServiceResponse>> {

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
   * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
   */
  SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: Guid): Promise<ServiceResponseCollection<ServiceResponse>> {
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
  //#endregion


  //#region Id conversion operations

  /**
   * Converts Id from one format to another in a single call to EWS.
   *
   * @param   {AlternateIdBase}   id                 The Id to convert.
   * @param   {IdFormat}          destinationFormat   The destination format.
   * @return  {Promise<AlternateIdBase>}     The converted Id :Promise.
   */
  async ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): Promise<AlternateIdBase> {
    EwsUtilities.ValidateParam(id, "id");

    const responses: ServiceResponseCollection<ConvertIdResponse> = await this.InternalConvertIds(
      [id],
      destinationFormat,
      ServiceErrorHandling.ThrowOnError);
    return responses.__thisIndexer(0).ConvertedId;
  }

  /**
   * Converts multiple Ids from one format to another in a single call to EWS.
   *
   * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
   * @param   {IdFormat}              destinationFormat   The destination format.
   * @return  {Promise<ServiceResponseCollection<ConvertIdResponse>>}     A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
   */
  ConvertIds(ids: AlternateIdBase[], destinationFormat: IdFormat): Promise<ServiceResponseCollection<ConvertIdResponse>> {
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
   * @return  {Promise<ServiceResponseCollection<ConvertIdResponse>>}     A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
   */
  private InternalConvertIds(ids: AlternateIdBase[], destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): Promise<ServiceResponseCollection<ConvertIdResponse>> {
    EwsUtilities.ValidateParamCollection(ids, "ids");

    let request: ConvertIdRequest = new ConvertIdRequest(this, errorHandling);
    ArrayHelper.AddRange(request.Ids, ids);//request.Ids.AddRange(ids);
    request.DestinationFormat = destinationFormat;

    return request.Execute();
  }
  //#endregion


  //#region Delegate management operations

  /**
   * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
   * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
   * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to add.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
  /**
   * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
   * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
   * @param   {DelegateUser[]}                delegateUsers                  The delegate users to add.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
  async AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUser: DelegateUser[] | DelegateUser, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]> {

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


    const response: DelegateManagementResponse = await request.Execute();
    return response.DelegateUserResponses;
  }


  /**
   * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}       mailbox                 The mailbox to retrieve the delegates of.
   * @param   {boolean}       includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
   * @param   {...UserId[]}   userIds                 The optional Ids of the delegate users to retrieve.
   * @return  {Promise<DelegateInformation>}          A GetDelegateResponse providing the results of the operation    :Promise.
   */
  GetDelegates(mailbox: Mailbox, includePermissions: boolean, ...userIds: UserId[]): Promise<DelegateInformation>;
  /**
   * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}   mailbox                 The mailbox to retrieve the delegates of.
   * @param   {boolean}   includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
   * @param   {UserId[]}  userIds                 The optional Ids of the delegate users to retrieve.
   * @return  {Promise<DelegateInformation>}      A GetDelegateResponse providing the results of the operation    :Promise.
   */
  GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: UserId[]): Promise<DelegateInformation>;
  async GetDelegates(mailbox: Mailbox, includePermissions: boolean, userId: UserId | UserId[], ...userIds: UserId[]): Promise<DelegateInformation> {

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

    const response: GetDelegateResponse = await request.Execute();
    const delegateInformation: DelegateInformation = new DelegateInformation(
      response.DelegateUserResponses,
      response.MeetingRequestsDeliveryScope);

    return delegateInformation;
  }

  /**
   * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}       mailbox   The mailbox to remove delegates from.
   * @param   {...UserId[]}   userIds   The Ids of the delegate users to remove.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  RemoveDelegates(mailbox: Mailbox, ...userIds: UserId[]): Promise<DelegateUserResponse[]>;
  /**
   * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}   mailbox   The mailbox to remove delegates from.
   * @param   {UserId[]}  userIds   The Ids of the delegate users to remove.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  RemoveDelegates(mailbox: Mailbox, userIds: UserId[]): Promise<DelegateUserResponse[]>;
  async RemoveDelegates(mailbox: Mailbox, userId: UserId | UserId[], ...userIds: UserId[]): Promise<DelegateUserResponse[]> {

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

    const response: DelegateManagementResponse = await request.Execute();
    return response.DelegateUserResponses;
  }

  /**
   * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
   * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
   * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to update.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
  /**
   * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
   *
   * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
   * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
   * @param   {DelegateUser[]}                delegateUsers                  The delegate users to update.
   * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
   */
  UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
  async UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUser: DelegateUser[] | DelegateUser, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]> {

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

    const response: DelegateManagementResponse = await request.Execute();
    return response.DelegateUserResponses;
  }
  //#endregion


  //#region UserConfiguration operations

  /**
   * Creates a UserConfiguration.
   *
   * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
   * @return  {Promise<void>}       :Promise.
   */
  CreateUserConfiguration(userConfiguration: UserConfiguration): Promise<void> {
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
   * @return  {Promise<void>}     :Promise.
   */
  DeleteUserConfiguration(name: string, parentFolderId: FolderId): Promise<void> {
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
   * @return  {Promise<UserConfiguration>}    A UserConfiguration.
   */
  async GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): Promise<UserConfiguration> {
    EwsUtilities.ValidateParam(name, "name");
    EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");

    let request: GetUserConfigurationRequest = new GetUserConfigurationRequest(this);

    request.Name = name;
    request.ParentFolderId = parentFolderId;
    request.Properties = properties;

    const response: ServiceResponseCollection<GetUserConfigurationResponse> = await request.Execute();
    return response.__thisIndexer(0).UserConfiguration;
  }

  /**
   * Loads the properties of the specified userConfiguration.
   *
   * @param   {UserConfiguration}             userConfiguration   The userConfiguration containing properties to load.
   * @param   {UserConfigurationProperties}   properties          Properties to retrieve.
   * @return  {Promise<void>}                 :Promise.
   */
  LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): Promise<void> {
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
   * @return  {Promise<void>}       :Promise.
   */
  UpdateUserConfiguration(userConfiguration: UserConfiguration): Promise<void> {
    EwsUtilities.ValidateParam(userConfiguration, "userConfiguration");

    let request: UpdateUserConfigurationRequest = new UpdateUserConfigurationRequest(this);

    request.UserConfiguration = userConfiguration;

    return <any>request.Execute();
  }

  //#endregion


  //#region InboxRule operations

  /**
   * Retrieves the inbox rules of the specified user.
   *
   * @return  {Promise<RuleCollection>}       A RuleCollection object containing the inbox rules of the specified user    :Promise.
   */
  GetInboxRules(): Promise<RuleCollection>;
  /**
   * Retrieves the inbox rules of the specified user.
   *
   * @param   {string}   mailboxSmtpAddress   The SMTP address of the user whose inbox rules should be retrieved.
   * @return  {Promise<RuleCollection>}       A RuleCollection object containing the inbox rules of the specified user    :Promise.
   */
  GetInboxRules(mailboxSmtpAddress: string): Promise<RuleCollection>;
  GetInboxRules(mailboxSmtpAddress: string = null): Promise<RuleCollection> {

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
   * @return  {Promise<void>}     :Promise
   */
  UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): Promise<void>;
  /**
   * Update the specified user's inbox rules by applying the specified operations.
   *
   * @param   {RuleOperation[]}   operations              The operations that should be applied to the user's inbox rules.
   * @param   {boolean}           removeOutlookRuleBlob   Indicate whether or not to remove Outlook Rule Blob.
   * @return  {Promise<void>}     :Promise
   */
  UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean): Promise<void>;
  UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean, mailboxSmtpAddress?: string): Promise<void> {
    let request: UpdateInboxRulesRequest = new UpdateInboxRulesRequest(this);
    request.InboxRuleOperations = operations;
    request.RemoveOutlookRuleBlob = removeOutlookRuleBlob;

    if (arguments.length > 2) {
      request.MailboxSmtpAddress = mailboxSmtpAddress;
    }
    return <any>request.Execute();
  }

  //#endregion


  //#region eDiscovery/Compliance operations

  //// BeginGetNonIndexableItemDetails(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemDetailsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemDetails : Not implemented."); }
  //// BeginGetNonIndexableItemStatistics(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemStatisticsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemStatistics : Not implemented."); }
  //// BeginSearchMailboxes(callback: Function /*System.AsyncCallback*/, state: any, searchParameters: SearchMailboxesParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSearchMailboxes : Not implemented."); }
  //// EndGetNonIndexableItemDetails(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemDetails : Not implemented."); }
  //// EndGetNonIndexableItemStatistics(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemStatistics : Not implemented."); }
  //// EndSearchMailboxes(asyncResult: Function /*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EndSearchMailboxes : Not implemented."); }

  /**
   * Create get non indexable item details request
   *
   * @param   {GetNonIndexableItemDetailsParameters}   parameters   Get non indexable item details parameters
   * @return  {GetNonIndexableItemDetailsRequest}      GetNonIndexableItemDetails request
   */
  private CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest {
    EwsUtilities.ValidateParam(parameters, "parameters");
    EwsUtilities.ValidateParam(parameters.Mailboxes, "parameters.Mailboxes");

    let request: GetNonIndexableItemDetailsRequest = new GetNonIndexableItemDetailsRequest(this);
    request.Mailboxes = parameters.Mailboxes;
    request.PageSize = parameters.PageSize;
    request.PageItemReference = parameters.PageItemReference;
    request.PageDirection = parameters.PageDirection;
    request.SearchArchiveOnly = parameters.SearchArchiveOnly;

    return request;
  }

  /**
   * Create get non indexable item statistics request
   *
   * @param   {GetNonIndexableItemStatisticsParameters}   parameters   Get non indexable item statistics parameters
   * @return  {GetNonIndexableItemStatisticsRequest}      Service response object
   */
  private CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest {
    EwsUtilities.ValidateParam(parameters, "parameters");
    EwsUtilities.ValidateParam(parameters.Mailboxes, "parameters.Mailboxes");

    let request: GetNonIndexableItemStatisticsRequest = new GetNonIndexableItemStatisticsRequest(this);
    request.Mailboxes = parameters.Mailboxes;
    request.SearchArchiveOnly = parameters.SearchArchiveOnly;

    return request;
  }

  /**
   * Creates SearchMailboxesRequest from SearchMailboxesParameters
   *
   * @param   {SearchMailboxesParameters}   searchParameters   search parameters
   * @return  {SearchMailboxesRequest}      request object
   */
  private CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest {
    let request: SearchMailboxesRequest = new SearchMailboxesRequest(this, ServiceErrorHandling.ReturnErrors);
    ArrayHelper.AddRange(request.SearchQueries, searchParameters.SearchQueries); //request.SearchQueries.AddRange(searchParameters.SearchQueries);
    request.ResultType = searchParameters.ResultType;
    request.PreviewItemResponseShape = searchParameters.PreviewItemResponseShape;
    request.SortByProperty = searchParameters.SortBy;
    request.SortOrder = searchParameters.SortOrder;
    request.Language = searchParameters.Language;
    request.PerformDeduplication = searchParameters.PerformDeduplication;
    request.PageSize = searchParameters.PageSize;
    request.PageDirection = searchParameters.PageDirection;
    request.PageItemReference = searchParameters.PageItemReference;

    return request;
  }

  /**
   * Get dicovery search configuration
   *
   * @param   {string}    searchId                       Search Id
   * @param   {boolean}   expandGroupMembership          True if want to expand group membership
   * @param   {boolean}   inPlaceHoldConfigurationOnly   True if only want the inplacehold configuration
   * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response object    :Promise.
   */
  GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): Promise<GetDiscoverySearchConfigurationResponse> {
    let request: GetDiscoverySearchConfigurationRequest = new GetDiscoverySearchConfigurationRequest(this);
    request.SearchId = searchId;
    request.ExpandGroupMembership = expandGroupMembership;
    request.InPlaceHoldConfigurationOnly = inPlaceHoldConfigurationOnly;

    return request.Execute();
  }

  /**
   * Get hold on mailboxes
   *
   * @param   {string}   holdId   Hold id
   * @return  {Promise<GetHoldOnMailboxesResponse>}       Service response object
   */
  GetHoldOnMailboxes(holdId: string): Promise<GetHoldOnMailboxesResponse> {
    let request: GetHoldOnMailboxesRequest = new GetHoldOnMailboxesRequest(this);
    request.HoldId = holdId;

    return request.Execute();
  }

  /**
   * Get non indexable item details
   *
   * @param   {string[]}  mailboxes           Array of mailbox legacy DN
   * @return  {Promise<GetNonIndexableItemDetailsResponse>}       Service response object :Promise.
   */
  GetNonIndexableItemDetails(mailboxes: string[]): Promise<GetNonIndexableItemDetailsResponse>;
  /**
   * Get non indexable item details
   *
   * @param   {string[]}              mailboxes           Array of mailbox legacy DN
   * @param   {number}                pageSize            The page size
   * @param   {string}                pageItemReference   Page item reference
   * @param   {SearchPageDirection}   pageDirection       Page direction
   * @return  {Promise<GetNonIndexableItemDetailsResponse>}       Service response object :Promise.
   */
  GetNonIndexableItemDetails(mailboxes: string[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): Promise<GetNonIndexableItemDetailsResponse>;
  /**
   * Get non indexable item details
   *
   * @param   {GetNonIndexableItemDetailsParameters}   parameters   Get non indexable item details parameters
   * @return  {Promise<GetNonIndexableItemDetailsResponse>}         Service response object   :Promise.
   */
  GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): Promise<GetNonIndexableItemDetailsResponse>;
  GetNonIndexableItemDetails(mailboxesOrParameters: string[] | GetNonIndexableItemDetailsParameters, pageSize: number = null, pageItemReference: string = null, pageDirection: SearchPageDirection = null): Promise<GetNonIndexableItemDetailsResponse> {
    let parameters: GetNonIndexableItemDetailsParameters = null;
    if (mailboxesOrParameters instanceof GetNonIndexableItemDetailsParameters) {
      parameters = mailboxesOrParameters;
    }
    else {
      parameters = new GetNonIndexableItemDetailsParameters();
      parameters.Mailboxes = mailboxesOrParameters;
      parameters.PageSize = pageSize;
      parameters.PageItemReference = pageItemReference;
      parameters.PageDirection = pageDirection;
      parameters.SearchArchiveOnly = false;
    }

    let request: GetNonIndexableItemDetailsRequest = this.CreateGetNonIndexableItemDetailsRequest(parameters);

    return request.Execute();
  }

  /**
   * Get non indexable item statistics
   *
   * @param   {string[]}   mailboxes   Array of mailbox legacy DN
   * @return  {Promise<GetNonIndexableItemStatisticsResponse>}    Service response object :Promise.
   */
  GetNonIndexableItemStatistics(mailboxes: string[]): Promise<GetNonIndexableItemStatisticsResponse>;
  /**
   * Get non indexable item statistics
   *
   * @param   {GetNonIndexableItemStatisticsParameters}   parameters   Get non indexable item statistics parameters
   * @return  {Promise<GetNonIndexableItemStatisticsResponse>}         Service response object :Promise.
   */
  GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): Promise<GetNonIndexableItemStatisticsResponse>;
  GetNonIndexableItemStatistics(mailboxesOrParameters: string[] | GetNonIndexableItemStatisticsParameters): Promise<GetNonIndexableItemStatisticsResponse> {
    let parameters: GetNonIndexableItemStatisticsParameters = null;
    if (mailboxesOrParameters instanceof GetNonIndexableItemStatisticsParameters) {
      parameters = mailboxesOrParameters;
    } else {
      parameters = new GetNonIndexableItemStatisticsParameters();
      parameters.Mailboxes = mailboxesOrParameters;
      parameters.SearchArchiveOnly = false;
    }

    let request: GetNonIndexableItemStatisticsRequest = this.CreateGetNonIndexableItemStatisticsRequest(parameters);

    return request.Execute();
  }

  /**
   * Get searchable mailboxes
   *
   * @param   {string}    searchFilter            Search filter
   * @param   {boolean}   expandGroupMembership   True if want to expand group membership
   * @return  {Promise<GetSearchableMailboxesResponse>}       Service response object :Promise
   */
  GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): Promise<GetSearchableMailboxesResponse> {
    let request: GetSearchableMailboxesRequest = new GetSearchableMailboxesRequest(this);
    request.SearchFilter = searchFilter;
    request.ExpandGroupMembership = expandGroupMembership;

    return request.Execute();
  }

  /**
   * Search mailboxes
   *
   * @param   {SearchMailboxesParameters}   searchParameters   Search mailboxes parameters
   * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
   */
  SearchMailboxes(searchParameters: SearchMailboxesParameters): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
  /**
   * Search mailboxes
   *
   * @param   {MailboxQuery[]}        mailboxQueries      Collection of query and mailboxes
   * @param   {SearchResultType}      resultType          Search result type
   * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
   */
  SearchMailboxes(mailboxQueries: MailboxQuery[], resultType: SearchResultType): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
  /**
   * Search mailboxes
   *
   * @param   {MailboxQuery[]}        mailboxQueries      Collection of query and mailboxes
   * @param   {SearchResultType}      resultType          Search result type
   * @param   {string}                sortByProperty      Sort by property name
   * @param   {SortDirection}         sortOrder           Sort order
   * @param   {number}                pageSize            Page size
   * @param   {SearchPageDirection}   pageDirection       Page navigation direction
   * @param   {string}                pageItemReference   Item reference used for paging
   * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
   */
  SearchMailboxes(mailboxQueries: MailboxQuery[], resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
  SearchMailboxes(mailboxQueriesOrSearchParameters: MailboxQuery[] | SearchMailboxesParameters, resultType: SearchResultType = SearchResultType.PreviewOnly, sortByProperty: string = null, sortOrder: SortDirection = SortDirection.Ascending, pageSize: number = 0, pageDirection: SearchPageDirection = SearchPageDirection.Next, pageItemReference: string = null): Promise<ServiceResponseCollection<SearchMailboxesResponse>> {
    let request: SearchMailboxesRequest = null;
    if (mailboxQueriesOrSearchParameters instanceof SearchMailboxesParameters) {
      let searchParameters: SearchMailboxesParameters = null;
      searchParameters = mailboxQueriesOrSearchParameters;
      EwsUtilities.ValidateParam(searchParameters, "searchParameters");
      EwsUtilities.ValidateParam(searchParameters.SearchQueries, "searchParameters.SearchQueries");
      request = this.CreateSearchMailboxesRequest(searchParameters);
    }
    else {
      request = new SearchMailboxesRequest(this, ServiceErrorHandling.ReturnErrors);
      if (mailboxQueriesOrSearchParameters != null) {
        ArrayHelper.AddRange(request.SearchQueries, mailboxQueriesOrSearchParameters);
      }
      request.ResultType = resultType;

      if (arguments.length > 2) {
        request.SortByProperty = sortByProperty;
        request.SortOrder = sortOrder;
        request.PageSize = pageSize;
        request.PageDirection = pageDirection;
        request.PageItemReference = pageItemReference;
      }
    }
    return request.Execute();
  }

  /**
   * Set hold on mailboxes
   *
   * @param   {SetHoldOnMailboxesParameters}  parameters      Set hold parameters
   * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
   */
  SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): Promise<SetHoldOnMailboxesResponse>;
  /**
   * Set hold on mailboxes
   *
   * @param   {string}        holdId          Hold id
   * @param   {HoldAction}    actionType      Action type
   * @param   {string}        query           Query string
   * @param   {string[]}      mailboxes       Collection of mailboxes
   * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
   */
  SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: String[]): Promise<SetHoldOnMailboxesResponse>;
  /**
   * Set hold on mailboxes
   *
   * @param   {string}        holdId                Hold id
   * @param   {HoldAction}    actionType            Action type
   * @param   {string}        query                 Query string
   * @param   {string}        inPlaceHoldIdentity   in-place hold identity
   * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
   */
  SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): Promise<SetHoldOnMailboxesResponse>;
  /**
   * Set hold on mailboxes
   *
   * @param   {string}        holdId                Hold id
   * @param   {HoldAction}    actionType            Action type
   * @param   {string}        query                 Query string
   * @param   {string}        inPlaceHoldIdentity   in-place hold identity
   * @param   {string}        itemHoldPeriod        item hold period
   * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
   */
  SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): Promise<SetHoldOnMailboxesResponse>;
  SetHoldOnMailboxes(holdIdOrParameters: string | SetHoldOnMailboxesParameters, _actionType: HoldAction = null, _query: string = null, mailboxesOrInPlaceHoldIdentity: String[] | string = null, _itemHoldPeriod: string = null): Promise<SetHoldOnMailboxesResponse> {

    let holdId: string = <string>holdIdOrParameters;
    let actionType: HoldAction = _actionType;
    let query: string = _query;
    let mailboxes: string[] = <string[]>mailboxesOrInPlaceHoldIdentity;
    let inPlaceHoldIdentity: string = <string>mailboxesOrInPlaceHoldIdentity;
    let itemHoldPeriod: string = _itemHoldPeriod;

    let request: SetHoldOnMailboxesRequest = new SetHoldOnMailboxesRequest(this);
    let argsLength = arguments.length;
    if (argsLength === 1) { //SetHoldOnMailboxesParameters
      let parameters: SetHoldOnMailboxesParameters = <SetHoldOnMailboxesParameters>holdIdOrParameters;

      EwsUtilities.ValidateParam(parameters, "parameters");

      holdId = parameters.HoldId;
      actionType = parameters.ActionType;
      query = parameters.Query;
      mailboxes = parameters.Mailboxes;
      request.Language = parameters.Language;
      inPlaceHoldIdentity = parameters.InPlaceHoldIdentity;

      /** per #120 */
      itemHoldPeriod = request.ItemHoldPeriod;
      request.PerformDeduplication = parameters.PerformDeduplication;
      request.IncludeNonIndexableItems = parameters.IncludeNonIndexableItems;

    }
    else {
      if (ArrayHelper.isArray(mailboxesOrInPlaceHoldIdentity)) {
        inPlaceHoldIdentity = null;
      }
      else {
        mailboxes = null;
      }
    }

    request.HoldId = holdId;
    request.ActionType = actionType;
    request.Query = query;
    request.Mailboxes = mailboxes;
    request.InPlaceHoldIdentity = inPlaceHoldIdentity;
    request.ItemHoldPeriod = itemHoldPeriod;

    return request.Execute();
  }

  //#endregion


  //#region MRM operations

  /**
   * Get user retention policy tags.
   *
   * @return  {Promise<GetUserRetentionPolicyTagsResponse>}       Service response object.
   */
  GetUserRetentionPolicyTags(): Promise<GetUserRetentionPolicyTagsResponse> {
    let request: GetUserRetentionPolicyTagsRequest = new GetUserRetentionPolicyTagsRequest(this);

    return request.Execute();
  }
  //#endregion


  //#region Autodiscover

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
  AutodiscoverUrl(emailAddress: string): Promise<void>;
  /**
   * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
   *
   * @param   {string}   emailAddress                             The email address to use.
   * @param   {AutodiscoverRedirectionUrlValidationCallback}      validateRedirectionUrlCallback   The callback used to validate redirection URL.
   */
  AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): Promise<void>;
  async AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback = this.DefaultAutodiscoverRedirectionUrlValidationCallback): Promise<void> {
    //validateRedirectionUrlCallback = validateRedirectionUrlCallback || this.DefaultAutodiscoverRedirectionUrlValidationCallback;

    let exchangeServiceUrl: Uri = null;

    if (this.RequestedServerVersion > ExchangeVersion.Exchange2007_SP1) {
      try {
        const exchangeServiceUrl = await this.GetAutodiscoverUrl(
          emailAddress,
          this.RequestedServerVersion,
          validateRedirectionUrlCallback);

        this.Url = this.AdjustServiceUriFromCredentials(exchangeServiceUrl);
        return;


      } catch (err) {
        //catch (AutodiscoverLocalException ex)
        if (err instanceof AccountIsLockedException) {
          throw err;
        }
        this.TraceMessage(
          TraceFlags.AutodiscoverResponse,
          StringHelper.Format("Autodiscover service call failed with error '{0}'. Will try legacy service", err.message || err));
        //catch (ServiceRemoteException ex)

        // Special case: if the caller's account is locked we want to return this exception, not continue.
        //        if (ex is AccountIsLockedException)
        //{
        //    throw;
        //}

        //this.TraceMessage(
        //    TraceFlags.AutodiscoverResponse,
        //    string.Format("Autodiscover service call failed with error '{0}'. Will try legacy service", ex.Message));
      }
    }

    // Try legacy Autodiscover provider
    exchangeServiceUrl = await this.GetAutodiscoverUrl(
      emailAddress,
      ExchangeVersion.Exchange2007_SP1,
      validateRedirectionUrlCallback);

    this.Url = this.AdjustServiceUriFromCredentials(exchangeServiceUrl);
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
   * @return  {Promise<Uri>}                                  Ews URL :Promise.
   */
  private GetAutodiscoverUrl(emailAddress: string, requestedServerVersion: ExchangeVersion, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): Promise<Uri> {
    const autodiscoverService: AutodiscoverService = new AutodiscoverService(this, requestedServerVersion);
    autodiscoverService.RedirectionUrlValidationCallback = validateRedirectionUrlCallback;
    autodiscoverService.EnableScpLookup = this.EnableScpLookup;

    return autodiscoverService.GetUserSettings(
      emailAddress,
      [UserSettingName.InternalEwsUrl, UserSettingName.ExternalEwsUrl])
      .then<Uri>((response) => {
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

    let uriString = response.GetSettingValue<string>(UserSettingName.ExternalEwsUrl)

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
  //#endregion


  //#region ClientAccessTokens

  /**
   * GetClientAccessToken
   *
   * @param   {KeyValuePair<string, ClientAccessTokenType>[]}   idAndTypes   Id and Types
   * @return  {Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>}      A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
   */
  GetClientAccessToken(idAndTypes: KeyValuePair<string, ClientAccessTokenType>[]): Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
  /**
   * GetClientAccessToken
   *
   * @param   {ClientAccessTokenRequest[]}   tokenRequests   Token requests array
   * @return  {Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>}      A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
   */
  GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
  GetClientAccessToken(tokenRequestsOrIdAndTypes: KeyValuePair<string, ClientAccessTokenType>[] | ClientAccessTokenRequest[]): Promise<ServiceResponseCollection<GetClientAccessTokenResponse>> {
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
  //#endregion


  //#region Client Extensibility

  /**
   * Get the app manifests.
   *
   * @return  {Promise<string[]>}              Collection of manifests xml file as base64 encoded string :Promise.
   */
  GetAppManifests(): Promise<string[]>;
  /**
   * Get the app manifests.  Works with Exchange 2013 SP1 or later EWS.
   *
   * @param   {string}   apiVersionSupported      The api version supported by the client.
   * @param   {string}   schemaVersionSupported   The schema version supported by the client.
   * @return  {Promise<ClientApp[]>}              Collection of manifests :Promise.
   */
  GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): Promise<ClientApp[]>;
  async GetAppManifests(apiVersionSupported: string = null, schemaVersionSupported: string = null): Promise<ClientApp[] | string[]> {
    let request: GetAppManifestsRequest = new GetAppManifestsRequest(this);

    let hasArguments = false;
    if (hasValue(apiVersionSupported) && hasValue(schemaVersionSupported)) {
      hasArguments = true;
      request.ApiVersionSupported = apiVersionSupported;
      request.SchemaVersionSupported = schemaVersionSupported;
    }

    const response: GetAppManifestsResponse = await request.Execute();
    if (hasArguments) {
      return response.Apps;
    }
    else {
      return response.Manifests;
    }
  }

  /**
   * Get App Marketplace Url.
   *
   * /remarks/                        Exception will be thrown for errors. 
   * @return  {Promise<string>}       marketplace url as string :Promise.
   */
  GetAppMarketplaceUrl(): Promise<string>;
  /**
   * Get App Marketplace Url.  Works with Exchange 2013 SP1 or later EWS.
   *
   * /remarks/                                    Exception will be thrown for errors. 
   * @param   {string}   apiVersionSupported      The api version supported by the client.
   * @param   {string}   schemaVersionSupported   The schema version supported by the client.
   * @return  {Promise<string>}                   marketplace url as string :Promise.
   */
  GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): Promise<string>;
  async GetAppMarketplaceUrl(apiVersionSupported: string = null, schemaVersionSupported: string = null): Promise<string> {

    let request: GetAppMarketplaceUrlRequest = new GetAppMarketplaceUrlRequest(this);
    request.ApiVersionSupported = apiVersionSupported;
    request.SchemaVersionSupported = schemaVersionSupported;

    const response: GetAppMarketplaceUrlResponse = await request.Execute();
    return response.AppMarketplaceUrl;
  }

  /**
   * Disable an App.
   *
   * /remarks/    Exception will be thrown for errors. 
   * @param   {string}                id              App ID
   * @param   {DisableReasonType}     disableReason   Disable reason
   * @return  {Promise<void>}         :Promise.
   */
  DisableApp(id: string, disableReason: DisableReasonType): Promise<void> {
    EwsUtilities.ValidateParam(id, "id");
    EwsUtilities.ValidateParam(disableReason, "disableReason");

    let request: DisableAppRequest = new DisableAppRequest(this, id, disableReason);

    return <any>request.Execute();
  }

  /**
   * Install an App.
   *
   * /remarks/    Exception will be thrown for errors. 
   * @param   {string}   manifestStream   The manifest's plain text XML as base64 encoded string.
   * @return  {Promise<void>}     :Promise.
   */
  InstallApp(manifestStream: string): Promise<void> {
    EwsUtilities.ValidateParam(manifestStream, "manifestStream");

    let request: InstallAppRequest = new InstallAppRequest(this, manifestStream);

    return <any>request.Execute();
  }

  /**
   * Uninstall an App.
   *
   * /remarks/    Exception will be thrown for errors. 
   * @param   {string}   id   App ID
   * @return  {Promise<void>}     :Promise.
   */
  UninstallApp(id: string): Promise<void> {
    EwsUtilities.ValidateParam(id, "id");

    let request: UninstallAppRequest = new UninstallAppRequest(this, id);

    return <any>request.Execute();
  }

  //info - not used in client side, only server side calls are supported per function documentation.
  // GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse { throw new Error("ExchangeService.ts - GetClientExtension : Not implemented."); }
  // SetClientExtension(actions: Function[] /*System.Collections.Generic.List<T>*/): any { throw new Error("ExchangeService.ts - SetClientExtension : Not implemented."); }
  // GetEncryptionConfiguration(): GetEncryptionConfigurationResponse { throw new Error("ExchangeService.ts - GetEncryptionConfiguration : Not implemented."); }
  // SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any { throw new Error("ExchangeService.ts - SetEncryptionConfiguration : Not implemented."); }
  //#endregion


  //#region Diagnostic Method -- Only used by test

  //ExecuteDiagnosticMethod(verb: string, parameter: System.Xml.XmlNode): System.Xml.XmlDocument { throw new Error("ExchangeService.ts - ExecuteDiagnosticMethod : Not implemented."); }    
  //#endregion


  //#region Validation

  static IsMajorMinor(versionPart: string): boolean {
    const MajorMinorSeparator: string = '.';//char

    const parts: string[] = versionPart.split(MajorMinorSeparator);
    if (parts.length != 2) {
      return false;
    }

    for (let s of parts) {
      for (let c of s.split('')) {
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
    const ParameterSeparator: string = ';'; //char
    const LegacyVersionPrefix: string = "Exchange20";
    const ParameterValueSeparator: string = '='; //char
    const ParameterName: string = "minimum";

    if (StringHelper.IsNullOrEmpty(version)) {
      throw new ArgumentException("Target version must not be empty.");
    }

    const parts: string[] = version.trim().split(ParameterSeparator);

    if (parts.length > 2) {
      throw new ArgumentException("Target version should have the form.");
    }

    let skipPart1: boolean = true;
    if (parts.length === 2) {
      // Validate the optional minimum version parameter, "minimum=X.Y"
      const part2: string = parts[1].trim();
      const minParts: string[] = part2.split(ParameterValueSeparator);
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
      const part1: string = parts[0].trim();
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
  //#endregion


  //#region Utilities

  /**
   * @internal Creates an IXHROptions instance and initializes it with the appropriate parameters, based on the configuration of this service object.
   *
   * @param   {string}   methodName   Name of the method.
   * @return  {IXHROptions}           An instance of IXHROptions to call web service with.
   */
  PrepareHttpWebRequest(methodName: string): IXHROptions {
    let endpoint = this.Url;
    //this.RegisterCustomBasicAuthModule();

    if (this.RenderingMethod === RenderingMode.JSON) {
      //endpoint = new Uri(
      //    endpoint,
      //    string.Format("{0}/{1}{2}", endpoint.AbsolutePath, methodName, endpoint.Query));
    }
    else {
      endpoint = this.AdjustServiceUriFromCredentials(endpoint);
    }

    const request = this.PrepareHttpWebRequestForUrl(
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
  //#endregion

  //#region Additional Operations not in official EWS Managed Api in the commit

  /**
   * Get the TimeZoneInfo objects from server
   * 
   * @returns {Promise<TimeZoneInfo[]>} 
   */
  async GetServerTimeZones(): Promise<TimeZoneInfo[]> {
    const request: GetServerTimeZonesRequest = new GetServerTimeZonesRequest(this);

    const response: ServiceResponseCollection<GetServerTimeZonesResponse> = await request.Execute();
    return response.Responses[0].TimeZones;
  }

  //#endregion
}

//module ExchangeService { -> moved to its own file to remove circular dependency.
//    export enum RenderingMode {
//        Xml = 0,
//        JSON = 1
//    }
//}
