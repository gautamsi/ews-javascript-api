import {AttendeeInfo} from "../Misc/Availability/AttendeeInfo";
import {TimeWindow} from "../Misc/Availability/TimeWindow";
import {AvailabilityData} from "../Enumerations/AvailabilityData";
import {AvailabilityOptions} from "../Misc/Availability/AvailabilityOptions";
import {GetUserAvailabilityResults} from "../Misc/Availability/GetUserAvailabilityResults";
import {GetUserAvailabilityRequest} from "./Requests/GetUserAvailabilityRequest";
import {GroupedFindItemsResults} from "../Search/GroupedFindItemsResults";
import {FindItemsResults} from "../Search/FindItemsResults";
import {FindItemRequest} from "./Requests/FindItemRequest";
import {DeleteFolderRequest} from "./Requests/DeleteFolderRequest";
import {MoveFolderRequest} from "./Requests/MoveFolderRequest";
import {MarkAllItemsAsReadRequest} from "./Requests/MarkAllItemsAsReadRequest";
import {UpdateFolderRequest} from "./Requests/UpdateFolderRequest";
import {CreateFolderRequest} from "./Requests/CreateFolderRequest";
import {EmptyFolderRequest} from "./Requests/EmptyFolderRequest";
import {FindFolderRequest} from "./Requests/FindFolderRequest";
import {CopyFolderRequest} from "./Requests/CopyFolderRequest";
import {CreateResponseObjectRequest} from "./Requests/CreateResponseObjectRequest";
import {Item} from "./ServiceObjects/Items/Item";
import {ViewBase} from "../Search/ViewBase";
import {Grouping} from "../Search/Grouping";
import {FindItemResponse} from "./Responses/FindItemResponse";
import {FindFolderResponse} from "./Responses/FindFolderResponse";
import {MoveCopyFolderResponse} from "./Responses/MoveCopyFolderResponse";
import {Strings} from "../Strings";
import {ManagementRoles} from "../Misc/ManagementRoles";
import {ImpersonatedUserId} from "../Misc/ImpersonatedUserId";
import {PrivilegedUserId} from "../Misc/PrivilegedUserId";
import {IFileAttachmentContentHandler} from "../Interfaces/IFileAttachmentContentHandler";
import {UnifiedMessaging} from "../UnifiedMessaging/UnifiedMessaging";
import {RetentionType} from "../Enumerations/RetentionType";
import {DeleteMode} from "../Enumerations/DeleteMode";
//import DelegateUserResponse = require("./Responses/DelegateUserResponse");
import {ConversationActionType} from "../Enumerations/ConversationActionType";
import {MeetingRequestsDeliveryScope} from "../Enumerations/MeetingRequestsDeliveryScope";
import {ServiceResponse} from "./Responses/ServiceResponse";
import {Mailbox} from "../ComplexProperties/Mailbox";
import {ServiceObject} from "./ServiceObjects/ServiceObject";
import {EwsUtilities} from "./EwsUtilities";
import {AutodiscoverService} from "../Autodiscover/AutodiscoverService";
import {AutodiscoverRedirectionUrlValidationCallback} from "../Autodiscover/AutodiscoverServiceDelegates";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {TraceFlags} from "../Enumerations/TraceFlags";
import {RenderingMode} from "../Enumerations/RenderingMode";
import {MessageDisposition} from "../Enumerations/MessageDisposition";
import {UserSettingName} from "../Enumerations/UserSettingName";
import {AutodiscoverErrorCode} from "../Enumerations/AutodiscoverErrorCode";
import {GetUserSettingsResponse} from "../Autodiscover/Responses/GetUserSettingsResponse";
import {GetFolderRequest} from "./Requests/GetFolderRequest";
import {GetFolderRequestForLoad} from "./Requests/GetFolderRequestForLoad";
import {GetFolderResponse} from "./Responses/GetFolderResponse";
import {ServiceResponseCollection} from "./Responses/ServiceResponseCollection";
import {ServiceErrorHandling} from "../Enumerations/ServiceErrorHandling";
import {DateTimePrecision} from "../Enumerations/DateTimePrecision";
import {ServiceRemoteException} from "../Exceptions/ServiceRemoteException";
import {ServiceLocalException} from "../Exceptions/ServiceLocalException";
import {AutodiscoverLocalException} from "../Exceptions/AutodiscoverLocalException";
import {WellKnownFolderName} from "../Enumerations/WellKnownFolderName";
import {SearchFilter} from "../Search/Filters/SearchFilter";
import {FindFoldersResults} from "../Search/FindFoldersResults";
import {FolderView} from "../Search/FolderView";
import {Uri} from "../Uri";
import {Folder} from "./ServiceObjects/Folders/Folder";
import {FolderId} from "../ComplexProperties/FolderId";
import {PropertySet} from "./PropertySet";

import {StringHelper, UriHelper} from "../ExtensionMethods";


import {IPromise, IXHROptions} from "../Interfaces";
import {Promise} from "../PromiseFactory"
import {XHR} from "../XHRFactory"



import {ExchangeServiceBase} from "./ExchangeServiceBase";
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
    get TimeZone(): any {// System.TimeZoneInfo;
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
    CopyFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> {
        var request: CopyFolderRequest = new CopyFolderRequest(this, ServiceErrorHandling.ThrowOnError);

        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);

        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Folder;
        });
    }
    CreateFolder(folder: Folder, parentFolderId: FolderId): IPromise<void> {
        var request: CreateFolderRequest = new CreateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.Folders = [folder];
        request.ParentFolderId = parentFolderId;
        return request.Execute().then((value) => {
            return null;
        });
    }
    DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        var request: DeleteFolderRequest = new DeleteFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        return request.Execute().then((value) => {
            return null;
        });
    }
    EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        var request: EmptyFolderRequest = new EmptyFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        request.DeleteSubFolders = deleteSubFolders;
        return request.Execute().then((value) => {
            return null;
        });
    }

    FindFolders(parentFolderId: FolderId, view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
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
    private InternalFindFolders(parentFolderIds: FolderId[], searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindFolderResponse>> {

        var request: FindFolderRequest = new FindFolderRequest(this, errorHandlingMode);

        request.ParentFolderIds.AddRange(parentFolderIds);
        request.SearchFilter = searchFilter;
        request.View = view;

        return request.Execute();
    }

    LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): IPromise<void> {
        EwsUtilities.ValidateParam(folder, "folder");
        EwsUtilities.ValidateParam(propertySet, "propertySet");

        var request: GetFolderRequestForLoad = new GetFolderRequestForLoad(this, ServiceErrorHandling.ThrowOnError);

        request.FolderIds.Add(folder);
        request.PropertySet = propertySet;

        return request.Execute().then((value) => {
            return null;
        });
    }
    MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): IPromise<void> {
        EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "MarkAllItemsAsRead");
        var request: MarkAllItemsAsReadRequest = new MarkAllItemsAsReadRequest(this, ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.ReadFlag = readFlag;
        request.SuppressReadReceipts = suppressReadReceipts;
        return request.Execute().then((value) => {
            return null;
        });
    }
    MoveFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder> {
        var request: MoveFolderRequest = new MoveFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);
        return request.Execute().then((responses) => {
            return responses.__thisIndexer(0).Folder;
        });
    }
    UpdateFolder(folder: Folder): IPromise<void> {
        var request: UpdateFolderRequest = new UpdateFolderRequest(this, ServiceErrorHandling.ThrowOnError);
        request.Folders.push(folder);
        return request.Execute().then((value) => {
            return null;
        });
    }
    /* #endregion Folder operations */
    
    
    /* #region Item operations */
    // ArchiveItems<TResponse extends ServiceResponse>(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, sourceFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - ArchiveItems<TResponse extends ServiceResponse> : Not implemented."); }
    //BindToItem(itemId: ItemId, propertySet: PropertySet): Item { throw new Error("ExchangeService.ts - BindToItem : Not implemented."); }
    ////BindToItem(itemId: ItemId, propertySet: PropertySet): any { throw new Error("ExchangeService.ts - BindToItem : Not implemented."); }
    //BindToItems(itemIds: TResponse[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - BindToItems : Not implemented."); }
    //CopyItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("ExchangeService.ts - CopyItem : Not implemented."); }
    //CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItems : Not implemented."); }
    ////CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CopyItems : Not implemented."); }
    //CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any { throw new Error("ExchangeService.ts - CreateItem : Not implemented."); }
    //CreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - CreateItems : Not implemented."); }
    //DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("ExchangeService.ts - DeleteItem : Not implemented."); }
    ////DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("ExchangeService.ts - DeleteItem : Not implemented."); }
    ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItems : Not implemented."); }
    ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - DeleteItems : Not implemented."); }
    //FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("ExchangeService.ts - FindAppointments : Not implemented."); }
    ////FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("ExchangeService.ts - FindAppointments : Not implemented."); }
    
    
    FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems<TItem extends Item>(parentFolderIds: FolderId[], searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;    
    //skipped: not needed, no calls coming in to this internal function in ews managed api, future use possible until them keep it muted   - FindItems<TItem extends Item>(parentFolderId: FolderId,                 searchFilter: SearchFilter,     view: ViewBase,                     groupBy: Grouping                                                                           ): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
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
                EwsUtilities.ValidateMethodVersion(this, ExchangeVersion.Exchange2013, "FindItems");
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

    //InternalBindToItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalBindToItems : Not implemented."); }
    //InternalCopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalCopyItems : Not implemented."); }
    //InternalCreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalCreateItems : Not implemented."); }
    //InternalDeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalDeleteItems : Not implemented."); }
    InternalLoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<ServiceResponse> { throw new Error("ExchangeService.ts - InternalLoadPropertiesForItems : Not implemented."); }
    //InternalMoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalMoveItems : Not implemented."); }
    //InternalUpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalUpdateItems : Not implemented."); }
    //LoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - LoadPropertiesForItems : Not implemented."); }
    //MarkAsJunk(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, isJunk: boolean, moveItem: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MarkAsJunk : Not implemented."); }
    //MoveItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("ExchangeService.ts - MoveItem : Not implemented."); }
    //MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItems : Not implemented."); }
    ////MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - MoveItems : Not implemented."); }
    //SendItem(item: Item, savedCopyDestinationFolderId: FolderId): any { throw new Error("ExchangeService.ts - SendItem : Not implemented."); }
    //UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("ExchangeService.ts - UpdateItem : Not implemented."); }
    ////UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("ExchangeService.ts - UpdateItem : Not implemented."); }
    //UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - UpdateItems : Not implemented."); }
    ////UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - UpdateItems : Not implemented."); }
    /* #endregion Item operations 47*/
 
    
    /* #region Attachment operations */
    
    //CreateAttachments(parentItemId: string, attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<CreateAttachmentResponse> { throw new Error("ExchangeService.ts - CreateAttachments : Not implemented."); }
    //DeleteAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<DeleteAttachmentResponse> { throw new Error("ExchangeService.ts - DeleteAttachments : Not implemented."); }
    //GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("ExchangeService.ts - GetAttachment : Not implemented."); }
    ////GetAttachments(attachments: any, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetAttachments : Not implemented."); }
    ////GetAttachments(attachmentIds: System.String[], bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - GetAttachments : Not implemented."); }
    //InternalGetAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("ExchangeService.ts - InternalGetAttachments : Not implemented."); }
    /* #endregion Attachment operations */
    
    
    /* #region AD related operations */
    
    //ExpandGroup(address: string, routingType: string): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(groupId: ItemId): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(smtpAddress: string): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    ////ExpandGroup(emailAddress: EmailAddress): ExpandGroupResults { throw new Error("ExchangeService.ts - ExpandGroup : Not implemented."); }
    //GetPasswordExpirationDate(mailboxSmtpAddress: string): Date { throw new Error("ExchangeService.ts - GetPasswordExpirationDate : Not implemented."); }
    //ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
    ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("ExchangeService.ts - ResolveName : Not implemented."); }
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
    //BuildGetEventsRequest(subscriptionId: string, watermark: string): GetEventsRequest { throw new Error("ExchangeService.ts - BuildGetEventsRequest : Not implemented."); }
    //BuildSubscribeToPullNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): SubscribeToPullNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToPullNotificationsRequest : Not implemented."); }
    //BuildSubscribeToPushNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): SubscribeToPushNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToPushNotificationsRequest : Not implemented."); }
    //BuildSubscribeToStreamingNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): SubscribeToStreamingNotificationsRequest { throw new Error("ExchangeService.ts - BuildSubscribeToStreamingNotificationsRequest : Not implemented."); }
    //BuildUnsubscribeRequest(subscriptionId: string): UnsubscribeRequest { throw new Error("ExchangeService.ts - BuildUnsubscribeRequest : Not implemented."); }
    //EndGetEvents(asyncResult: Function /*System.IAsyncResult*/): GetEventsResults { throw new Error("ExchangeService.ts - EndGetEvents : Not implemented."); }
    //EndSubscribeToPullNotifications(asyncResult: Function /*System.IAsyncResult*/): PullSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPullNotifications : Not implemented."); }
    //EndSubscribeToPushNotifications(asyncResult: Function /*System.IAsyncResult*/): PushSubscription { throw new Error("ExchangeService.ts - EndSubscribeToPushNotifications : Not implemented."); }
    //EndSubscribeToStreamingNotifications(asyncResult: Function /*System.IAsyncResult*/): StreamingSubscription { throw new Error("ExchangeService.ts - EndSubscribeToStreamingNotifications : Not implemented."); }
    //EndUnsubscribe(asyncResult: Function /*System.IAsyncResult*/): any { throw new Error("ExchangeService.ts - EndUnsubscribe : Not implemented."); }
    //GetEvents(subscriptionId: string, watermark: string): GetEventsResults { throw new Error("ExchangeService.ts - GetEvents : Not implemented."); }
    //SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: Uri, state: TeamMailboxLifecycleState): any { throw new Error("ExchangeService.ts - SetTeamMailbox : Not implemented."); }
    //SubscribeToPullNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("ExchangeService.ts - SubscribeToPullNotifications : Not implemented."); }
    //SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("ExchangeService.ts - SubscribeToPullNotificationsOnAllFolders : Not implemented."); }
    //SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotifications : Not implemented."); }
    ////SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: Uri, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotifications : Not implemented."); }
    //SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    ////SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("ExchangeService.ts - SubscribeToPushNotificationsOnAllFolders : Not implemented."); }
    //SubscribeToStreamingNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): StreamingSubscription { throw new Error("ExchangeService.ts - SubscribeToStreamingNotifications : Not implemented."); }
    //SubscribeToStreamingNotificationsOnAllFolders(eventTypes: any): StreamingSubscription { throw new Error("ExchangeService.ts - SubscribeToStreamingNotificationsOnAllFolders : Not implemented."); }
    //UnpinTeamMailbox(emailAddress: EmailAddress): any { throw new Error("ExchangeService.ts - UnpinTeamMailbox : Not implemented."); }
    //Unsubscribe(subscriptionId: string): any { throw new Error("ExchangeService.ts - Unsubscribe : Not implemented."); }
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
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): IPromise<GetUserAvailabilityResults>;
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
    //GetUserOofSettings(smtpAddress: string): OofSettings { throw new Error("ExchangeService.ts - GetUserOofSettings : Not implemented."); }
    //SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): any { throw new Error("ExchangeService.ts - SetUserOofSettings : Not implemented."); }
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

    private AdjustServiceUriFromCredentials(uri: Uri): Uri {
        return (this.Credentials != null)
            ? this.Credentials.AdjustUrl(uri)
            : uri;
    }
    AutodiscoverUrl(emailAddress: string): IPromise<void>;
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
    private DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean {

        throw new AutodiscoverLocalException(StringHelper.Format(Strings.AutodiscoverRedirectBlocked, redirectionUrl));
    }
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
    static ValidateTargetVersion(version: string): void {
        var ParameterSeparator: string = ';'; //char
        var LegacyVersionPrefix: string = "Exchange20";
        var ParameterValueSeparator: string = '='; //char
        var ParameterName: string = "minimum";

        if (StringHelper.IsNullOrEmpty(version)) {
            throw new Error("Target version must not be empty."); //ArgumentException
        }

        var parts: string[] = version.trim().split(ParameterSeparator);

        if (parts.length > 2) {
            throw new Error("Target version should have the form.");//ArgumentException            
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
                throw new Error("Target version must match X.Y or Exchange20XX."); //ArgumentException
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
                throw new Error("Target version must match X.Y or Exchange20XX."); //ArgumentException
            }
        }
    }
    /* #endregion Validation */
    
    
    /* #region Utilities */
    
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


