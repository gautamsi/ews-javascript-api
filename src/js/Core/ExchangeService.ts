import {AffectedTaskOccurrence} from "../Enumerations/AffectedTaskOccurrence";
import {Appointment} from "./ServiceObjects/Items/Appointment";
import {ArchiveItemRequest} from "./Requests/ArchiveItemRequest";
import {ArchiveItemResponse} from "./Responses/ArchiveItemResponse";
import {ArgumentException, ArgumentOutOfRangeException, ArgumentNullException} from "../Exceptions/ArgumentException";
import {Attachment} from "../ComplexProperties/Attachment";
import {AttendeeInfo} from "../Misc/Availability/AttendeeInfo";
import {AutodiscoverErrorCode} from "../Enumerations/AutodiscoverErrorCode";
import {AutodiscoverLocalException} from "../Exceptions/AutodiscoverLocalException";
import {AutodiscoverRedirectionUrlValidationCallback} from "../Autodiscover/AutodiscoverServiceDelegates";
import {AutodiscoverService} from "../Autodiscover/AutodiscoverService";
import {AvailabilityData} from "../Enumerations/AvailabilityData";
import {AvailabilityOptions} from "../Misc/Availability/AvailabilityOptions";
import {BodyType} from "../Enumerations/BodyType";
import {CalendarView} from "../Search/CalendarView";
import {ConflictResolutionMode} from "../Enumerations/ConflictResolutionMode";
import {ConversationActionType} from "../Enumerations/ConversationActionType";
import {CopyFolderRequest} from "./Requests/CopyFolderRequest";
import {CopyItemRequest} from "./Requests/CopyItemRequest";
import {CreateAttachmentRequest} from "./Requests/CreateAttachmentRequest";
import {CreateAttachmentResponse} from "./Responses/CreateAttachmentResponse";
import {CreateFolderRequest} from "./Requests/CreateFolderRequest";
import {CreateItemRequest} from "./Requests/CreateItemRequest";
import {CreateResponseObjectRequest} from "./Requests/CreateResponseObjectRequest";
import {DateTime, TimeZoneInfo} from "../DateTime";
import {DateTimePrecision} from "../Enumerations/DateTimePrecision";
import {DeleteAttachmentRequest} from "./Requests/DeleteAttachmentRequest";
import {DeleteAttachmentResponse} from "./Responses/DeleteAttachmentResponse";
import {DeleteFolderRequest} from "./Requests/DeleteFolderRequest";
import {DeleteItemRequest} from "./Requests/DeleteItemRequest";
import {DeleteMode} from "../Enumerations/DeleteMode";
import {EmailAddress} from "../ComplexProperties/EmailAddress";
import {EmptyFolderRequest} from "./Requests/EmptyFolderRequest";
import {EventType} from "../Enumerations/EventType";
import {EwsUtilities} from "./EwsUtilities";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {ExpandGroupRequest} from "./Requests/ExpandGroupRequest";
import {ExpandGroupResults} from "../Misc/ExpandGroupResults";
import {FindFolderRequest} from "./Requests/FindFolderRequest";
import {FindFolderResponse} from "./Responses/FindFolderResponse";
import {FindFoldersResults} from "../Search/FindFoldersResults";
import {FindItemRequest} from "./Requests/FindItemRequest";
import {FindItemResponse} from "./Responses/FindItemResponse";
import {FindItemsResults} from "../Search/FindItemsResults";
import {FolderId} from "../ComplexProperties/FolderId";
import {FolderView} from "../Search/FolderView";
import {Folder} from "./ServiceObjects/Folders/Folder";
import {GetAttachmentRequest} from "./Requests/GetAttachmentRequest";
import {GetAttachmentResponse} from "./Responses/GetAttachmentResponse";
import {GetEventsRequest} from "./Requests/GetEventsRequest";
import {GetEventsResults} from "../Notifications/GetEventsResults";
import {GetFolderRequestForLoad} from "./Requests/GetFolderRequestForLoad";
import {GetFolderRequest} from "./Requests/GetFolderRequest";
import {GetFolderResponse} from "./Responses/GetFolderResponse";
import {GetItemRequestForLoad} from "./Requests/GetItemRequestForLoad";
import {GetItemRequest} from "./Requests/GetItemRequest";
import {GetItemResponse} from "./Responses/GetItemResponse";
import {GetPasswordExpirationDateRequest} from "./Requests/GetPasswordExpirationDateRequest";
import {GetUserAvailabilityRequest} from "./Requests/GetUserAvailabilityRequest";
import {GetUserAvailabilityResults} from "../Misc/Availability/GetUserAvailabilityResults";
import {GetUserOofSettingsRequest} from "./Requests/GetUserOofSettingsRequest";
import {GetUserSettingsResponse} from "../Autodiscover/Responses/GetUserSettingsResponse";
import {GroupedFindItemsResults} from "../Search/GroupedFindItemsResults";
import {Grouping} from "../Search/Grouping";
import {IFileAttachmentContentHandler} from "../Interfaces/IFileAttachmentContentHandler";
import {IPromise, IXHROptions} from "../Interfaces";
import {ImpersonatedUserId} from "../Misc/ImpersonatedUserId";
import {ItemId} from "../ComplexProperties/ItemId";
import {Item} from "./ServiceObjects/Items/Item";
import {Mailbox} from "../ComplexProperties/Mailbox";
import {ManagementRoles} from "../Misc/ManagementRoles";
import {MarkAllItemsAsReadRequest} from "./Requests/MarkAllItemsAsReadRequest";
import {MarkAsJunkRequest} from "./Requests/MarkAsJunkRequest";
import {MarkAsJunkResponse} from "./Responses/MarkAsJunkResponse";
import {MeetingRequestsDeliveryScope} from "../Enumerations/MeetingRequestsDeliveryScope";
import {MessageDisposition} from "../Enumerations/MessageDisposition";
import {MoveCopyFolderResponse} from "./Responses/MoveCopyFolderResponse";
import {MoveCopyItemResponse} from "./Responses/MoveCopyItemResponse";
import {MoveFolderRequest} from "./Requests/MoveFolderRequest";
import {MoveItemRequest} from "./Requests/MoveItemRequest";
import {NameResolutionCollection} from "../Misc/NameResolutionCollection";
import {OofSettings} from "../ComplexProperties/Availability/OofSettings";
import {PrivilegedUserId} from "../Misc/PrivilegedUserId";
import {PromiseFactory} from "../PromiseFactory";
import {PropertyDefinitionBase} from '../PropertyDefinitions/PropertyDefinitionBase';
import {PropertySet} from "./PropertySet";
import {PullSubscription} from "../Notifications/PullSubscription";
import {PushSubscription} from "../Notifications/PushSubscription";
import {RenderingMode} from "../Enumerations/RenderingMode";
import {ResolveNameSearchLocation} from "../Enumerations/ResolveNameSearchLocation";
import {ResolveNamesRequest} from "./Requests/ResolveNamesRequest";
import {RetentionType} from "../Enumerations/RetentionType";
import {SearchFilter} from "../Search/Filters/SearchFilter";
import {SearchFolder} from "./ServiceObjects/Folders/SearchFolder";
import {SendCancellationsMode} from "../Enumerations/SendCancellationsMode";
import {SendInvitationsMode} from "../Enumerations/SendInvitationsMode";
import {SendInvitationsOrCancellationsMode} from "../Enumerations/SendInvitationsOrCancellationsMode";
import {SendItemRequest} from "./Requests/SendItemRequest";
import {ServiceErrorHandling} from "../Enumerations/ServiceErrorHandling";
import {ServiceLocalException} from "../Exceptions/ServiceLocalException";
import {ServiceObject} from "./ServiceObjects/ServiceObject";
import {ServiceRemoteException} from "../Exceptions/ServiceRemoteException";
import {ServiceResponseCollection} from "./Responses/ServiceResponseCollection";
import {ServiceResponse} from "./Responses/ServiceResponse";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {SetTeamMailboxRequest} from "./Requests/SetTeamMailboxRequest";
import {SetUserOofSettingsRequest} from "./Requests/SetUserOofSettingsRequest";
import {SoapFaultDetails} from "../Misc/SoapFaultDetails";
import {StreamingSubscription} from "../Notifications/StreamingSubscription";
import {StringHelper, UriHelper, ArrayHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";
import {SubscribeToPullNotificationsRequest} from "./Requests/SubscribeToPullNotificationsRequest";
import {SubscribeToPushNotificationsRequest} from "./Requests/SubscribeToPushNotificationsRequest";
import {SubscribeToStreamingNotificationsRequest} from "./Requests/SubscribeToStreamingNotificationsRequest";
import {TeamMailboxLifecycleState} from "../Enumerations/TeamMailboxLifecycleState";
import {TimeWindow} from "../Misc/Availability/TimeWindow";
import {TraceFlags} from "../Enumerations/TraceFlags";
import {UnifiedMessaging} from "../UnifiedMessaging/UnifiedMessaging";
import {UnpinTeamMailboxRequest} from "./Requests/UnpinTeamMailboxRequest";
import {UnsubscribeRequest} from "./Requests/UnsubscribeRequest";
import {UpdateFolderRequest} from "./Requests/UpdateFolderRequest";
import {UpdateItemRequest} from "./Requests/UpdateItemRequest";
import {UpdateItemResponse} from "./Responses/UpdateItemResponse";
import {Uri} from "../Uri";
import {UserSettingName} from "../Enumerations/UserSettingName";
import {ViewBase} from "../Search/ViewBase";
import {WellKnownFolderName} from "../Enumerations/WellKnownFolderName";
import {XHRFactory}  from "../XHRFactory";

import {ExchangeServiceBase} from "./ExchangeServiceBase";
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
    //BuildSyncFolderItemsRequest(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): SyncFolderItemsRequest { throw new Error("ExchangeService.ts - BuildSyncFolderItemsRequest : Not implemented."); }
    //EndSyncFolderItems(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - EndSyncFolderItems : Not implemented."); }
    //SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - SyncFolderItems : Not implemented."); }
    //SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): ChangeCollection<ItemChange> { throw new Error("ExchangeService.ts - SyncFolderItems : Not implemented."); }

    // BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }
    // //BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSyncFolderHierarchy : Not implemented."); }
    //BuildSyncFolderHierarchyRequest(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): SyncFolderHierarchyRequest { throw new Error("ExchangeService.ts - BuildSyncFolderHierarchyRequest : Not implemented."); }
    //EndSyncFolderHierarchy(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - EndSyncFolderHierarchy : Not implemented."); }
    ////SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - SyncFolderHierarchy : Not implemented."); }
    //SyncFolderHierarchy(propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("ExchangeService.ts - SyncFolderHierarchy : Not implemented."); }
    /* #endregion Synchronization operations */


    /* #region Availability operations */

    //GetRoomLists(): EmailAddressCollection { throw new Error("ExchangeService.ts - GetRoomLists : Not implemented."); }
    //GetRooms(emailAddress: EmailAddress): System.Collections.ObjectModel.Collection<EmailAddress> { throw new Error("ExchangeService.ts - GetRooms : Not implemented."); }
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


    // ApplyConversationAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processRightAway: boolean, categories: StringList, enableAlwaysDelete: boolean, destinationFolderId: FolderId, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ApplyConversationAction<TResponse extends ServiceResponse> : Not implemented."); }
    // ApplyConversationOneTimeAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, idTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId, deleteType: DeleteMode, isRead: boolean, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/, flag: Flag, suppressReadReceipts: boolean, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ApplyConversationOneTimeAction<TResponse extends ServiceResponse> : Not implemented."); }
    //DisableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysCategorizeItemsInConversations : Not implemented."); }
    //DisableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysDeleteItemsInConversations : Not implemented."); }
    //DisableAlwaysMoveItemsInConversations(conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DisableAlwaysMoveItemsInConversations : Not implemented."); }
    //EnableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, categories: System.Collections.Generic.IEnumerable<string>, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysCategorizeItemsInConversations : Not implemented."); }
    //EnableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysDeleteItemsInConversations : Not implemented."); }
    //EnableAlwaysMoveItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EnableAlwaysMoveItemsInConversations : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId): System.Collections.Generic.ICollection<T> { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): FindConversationResults { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string): System.Collections.Generic.ICollection<T> { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): FindConversationResults { throw new Error("ExchangeService.ts - FindConversation : Not implemented."); }
    //GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    ////GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ConversationResponse { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    ////GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetConversationItems : Not implemented."); }
    //InternalGetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation, maxItemsToReturn: number, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalGetConversationItems : Not implemented."); }

    //CopyItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItemsInConversations : Not implemented."); }
    //DeleteItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, deleteMode: DeleteMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItemsInConversations : Not implemented."); }
    //MoveItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItemsInConversations : Not implemented."); }
    //SetFlagStatusForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, flagStatus: Flag): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetFlagStatusForItemsInConversations : Not implemented."); }
    //SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetReadStateForItemsInConversations : Not implemented."); }
    ////SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetReadStateForItemsInConversations : Not implemented."); }
    //SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SetRetentionPolicyForItemsInConversations : Not implemented."); }
    /* #end region Conversation */


    /** #region Id conversion operations */

    //ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): AlternateIdBase { throw new Error("ExchangeService.ts - ConvertId : Not implemented."); }
    //ConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ConvertIds : Not implemented."); }
    //InternalConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalConvertIds : Not implemented."); }
    /* #endregion Id conversion operations */


    /* #region Delegate management operations */

    // AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateUserResponse[]/*System.Collections.ObjectModel.Collection<DelegateUserResponse>*/ { throw new Error("ExchangeService.ts - AddDelegates : Not implemented."); }
    // //AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - AddDelegates : Not implemented."); }
    //GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateInformation { throw new Error("ExchangeService.ts - GetDelegates : Not implemented."); }
    ////GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any): DelegateInformation { throw new Error("ExchangeService.ts - GetDelegates : Not implemented."); }
    //RemoveDelegates(mailbox: Mailbox, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - RemoveDelegates : Not implemented."); }
    ////RemoveDelegates(mailbox: Mailbox, userIds: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - RemoveDelegates : Not implemented."); }
    //UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - UpdateDelegates : Not implemented."); }
    ////UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("ExchangeService.ts - UpdateDelegates : Not implemented."); }
    /* #endregion Delegate management operations */


    /* #region UserConfiguration operations */

    //CreateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("ExchangeService.ts - CreateUserConfiguration : Not implemented."); }
    //DeleteUserConfiguration(name: string, parentFolderId: FolderId): any { throw new Error("ExchangeService.ts - DeleteUserConfiguration : Not implemented."); }
    //GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration { throw new Error("ExchangeService.ts - GetUserConfiguration : Not implemented."); }
    //LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): any { throw new Error("ExchangeService.ts - LoadPropertiesForUserConfiguration : Not implemented."); }
    //UpdateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("ExchangeService.ts - UpdateUserConfiguration : Not implemented."); }
    /* #endregion UserConfiguration operations */


    /* #region InboxRule operations */

    //GetInboxRules(): RuleCollection { throw new Error("ExchangeService.ts - GetInboxRules : Not implemented."); }
    ////GetInboxRules(mailboxSmtpAddress: string): RuleCollection { throw new Error("ExchangeService.ts - GetInboxRules : Not implemented."); }
    //UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): any { throw new Error("ExchangeService.ts - UpdateInboxRules : Not implemented."); }
    ////UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean): any { throw new Error("ExchangeService.ts - UpdateInboxRules : Not implemented."); }
    /* #endregion InboxRule operations */


    /* #region eDiscovery/Compliance operations */

    // BeginGetNonIndexableItemDetails(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemDetailsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemDetails : Not implemented."); }
    // BeginGetNonIndexableItemStatistics(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemStatisticsParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginGetNonIndexableItemStatistics : Not implemented."); }
    // BeginSearchMailboxes(callback: Function /*System.AsyncCallback*/, state: any, searchParameters: SearchMailboxesParameters): Function /*System.IAsyncResult*/ { throw new Error("ExchangeService.ts - BeginSearchMailboxes : Not implemented."); }
    //CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemDetailsRequest : Not implemented."); }
    //CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest { throw new Error("ExchangeService.ts - CreateGetNonIndexableItemStatisticsRequest : Not implemented."); }
    //CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest { throw new Error("ExchangeService.ts - CreateSearchMailboxesRequest : Not implemented."); }
    //EndGetNonIndexableItemDetails(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemDetails : Not implemented."); }
    //EndGetNonIndexableItemStatistics(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - EndGetNonIndexableItemStatistics : Not implemented."); }
    //EndSearchMailboxes(asyncResult: Function /*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - EndSearchMailboxes : Not implemented."); }
    //GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): GetDiscoverySearchConfigurationResponse { throw new Error("ExchangeService.ts - GetDiscoverySearchConfiguration : Not implemented."); }
    //GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): GetSearchableMailboxesResponse { throw new Error("ExchangeService.ts - GetSearchableMailboxes : Not implemented."); }
    //SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    ////SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    ////SearchMailboxes(searchParameters: SearchMailboxesParameters): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - SearchMailboxes : Not implemented."); }
    //SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: System.String[]): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): SetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - SetHoldOnMailboxes : Not implemented."); }
    //GetHoldOnMailboxes(holdId: string): GetHoldOnMailboxesResponse { throw new Error("ExchangeService.ts - GetHoldOnMailboxes : Not implemented."); }
    //GetNonIndexableItemDetails(mailboxes: System.String[]): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    ////GetNonIndexableItemDetails(mailboxes: System.String[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    ////GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemDetails : Not implemented."); }
    //GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    ////GetNonIndexableItemStatistics(mailboxes: System.String[]): GetNonIndexableItemStatisticsResponse { throw new Error("ExchangeService.ts - GetNonIndexableItemStatistics : Not implemented."); }
    /* #endregion eDiscovery/Compliance operations */


    /* #region MRM operations */

    //GetUserRetentionPolicyTags(): GetUserRetentionPolicyTagsResponse { throw new Error("ExchangeService.ts - GetUserRetentionPolicyTags : Not implemented."); }
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

    //GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetClientAccessToken : Not implemented."); }
    ////GetClientAccessToken(idAndTypes: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetClientAccessToken : Not implemented."); }
    /* #end region ClientAccessTokens */


    /* #region Client Extensibility */
    //GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): System.Collections.ObjectModel.Collection<ClientApp> { throw new Error("ExchangeService.ts - GetAppManifests : Not implemented."); }
    ////GetAppManifests(): System.Collections.ObjectModel.Collection<System.Xml.XmlDocument> { throw new Error("ExchangeService.ts - GetAppManifests : Not implemented."); }
    //GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): string { throw new Error("ExchangeService.ts - GetAppMarketplaceUrl : Not implemented."); }
    ////GetAppMarketplaceUrl(): string { throw new Error("ExchangeService.ts - GetAppMarketplaceUrl : Not implemented."); }
    //DisableApp(id: string, disableReason: DisableReasonType): any { throw new Error("ExchangeService.ts - DisableApp : Not implemented."); }
    //InstallApp(manifestStream: any /*System.IO.Stream*/): any { throw new Error("ExchangeService.ts - InstallApp : Not implemented."); }
    //UninstallApp(id: string): any { throw new Error("ExchangeService.ts - UninstallApp : Not implemented."); }
    //GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse { throw new Error("ExchangeService.ts - GetClientExtension : Not implemented."); }
    //SetClientExtension(actions: Function[] /*System.Collections.Generic.List<T>*/): any { throw new Error("ExchangeService.ts - SetClientExtension : Not implemented."); }
    //GetEncryptionConfiguration(): GetEncryptionConfigurationResponse { throw new Error("ExchangeService.ts - GetEncryptionConfiguration : Not implemented."); }
    //SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any { throw new Error("ExchangeService.ts - SetEncryptionConfiguration : Not implemented."); }
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


