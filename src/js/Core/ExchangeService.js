"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AddDelegateRequest_1 = require("./Requests/AddDelegateRequest");
var ApplyConversationActionRequest_1 = require("./Requests/ApplyConversationActionRequest");
var ArchiveItemRequest_1 = require("./Requests/ArchiveItemRequest");
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var AutodiscoverErrorCode_1 = require("../Enumerations/AutodiscoverErrorCode");
var AutodiscoverLocalException_1 = require("../Exceptions/AutodiscoverLocalException");
var AutodiscoverService_1 = require("../Autodiscover/AutodiscoverService");
var AvailabilityOptions_1 = require("../Misc/Availability/AvailabilityOptions");
var ClientAccessTokenRequest_1 = require("../ComplexProperties/ClientAccessTokenRequest");
var ConversationAction_1 = require("../Misc/ConversationAction");
var ConversationActionType_1 = require("../Enumerations/ConversationActionType");
var ConversationId_1 = require("../ComplexProperties/ConversationId");
var ConversationRequest_1 = require("../ComplexProperties/ConversationRequest");
var ConvertIdRequest_1 = require("./Requests/ConvertIdRequest");
var CopyFolderRequest_1 = require("./Requests/CopyFolderRequest");
var CopyItemRequest_1 = require("./Requests/CopyItemRequest");
var CreateAttachmentRequest_1 = require("./Requests/CreateAttachmentRequest");
var CreateFolderRequest_1 = require("./Requests/CreateFolderRequest");
var CreateItemRequest_1 = require("./Requests/CreateItemRequest");
var CreateResponseObjectRequest_1 = require("./Requests/CreateResponseObjectRequest");
var CreateUserConfigurationRequest_1 = require("./Requests/CreateUserConfigurationRequest");
var DateTimePrecision_1 = require("../Enumerations/DateTimePrecision");
var DelegateInformation_1 = require("../Misc/DelegateInformation");
var DeleteAttachmentRequest_1 = require("./Requests/DeleteAttachmentRequest");
var DeleteFolderRequest_1 = require("./Requests/DeleteFolderRequest");
var DeleteItemRequest_1 = require("./Requests/DeleteItemRequest");
var DeleteUserConfigurationRequest_1 = require("./Requests/DeleteUserConfigurationRequest");
var DisableAppRequest_1 = require("./Requests/DisableAppRequest");
var EmailAddress_1 = require("../ComplexProperties/EmailAddress");
var EmptyFolderRequest_1 = require("./Requests/EmptyFolderRequest");
var EwsLogging_1 = require("./EwsLogging");
var EwsUtilities_1 = require("./EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var ExpandGroupRequest_1 = require("./Requests/ExpandGroupRequest");
var FindConversationRequest_1 = require("./Requests/FindConversationRequest");
var FindFolderRequest_1 = require("./Requests/FindFolderRequest");
var FindItemRequest_1 = require("./Requests/FindItemRequest");
var FolderId_1 = require("../ComplexProperties/FolderId");
var FolderIdCollection_1 = require("../ComplexProperties/FolderIdCollection");
var FolderIdWrapper_1 = require("../Misc/FolderIdWrapper");
var FolderView_1 = require("../Search/FolderView");
var GetAppManifestsRequest_1 = require("./Requests/GetAppManifestsRequest");
var GetAppMarketplaceUrlRequest_1 = require("./Requests/GetAppMarketplaceUrlRequest");
var GetAttachmentRequest_1 = require("./Requests/GetAttachmentRequest");
var GetClientAccessTokenRequest_1 = require("./Requests/GetClientAccessTokenRequest");
var GetConversationItemsRequest_1 = require("./Requests/GetConversationItemsRequest");
var GetDelegateRequest_1 = require("./Requests/GetDelegateRequest");
var GetDiscoverySearchConfigurationRequest_1 = require("./Requests/GetDiscoverySearchConfigurationRequest");
var GetEventsRequest_1 = require("./Requests/GetEventsRequest");
var GetFolderRequest_1 = require("./Requests/GetFolderRequest");
var GetFolderRequestForLoad_1 = require("./Requests/GetFolderRequestForLoad");
var GetHoldOnMailboxesRequest_1 = require("./Requests/GetHoldOnMailboxesRequest");
var GetInboxRulesRequest_1 = require("./Requests/GetInboxRulesRequest");
var GetItemRequest_1 = require("./Requests/GetItemRequest");
var GetItemRequestForLoad_1 = require("./Requests/GetItemRequestForLoad");
var NonIndexableItemParameters_1 = require("../MailboxSearch/NonIndexableItemParameters");
var GetNonIndexableItemDetailsRequest_1 = require("./Requests/GetNonIndexableItemDetailsRequest");
var GetNonIndexableItemStatisticsRequest_1 = require("./Requests/GetNonIndexableItemStatisticsRequest");
var GetPasswordExpirationDateRequest_1 = require("./Requests/GetPasswordExpirationDateRequest");
var GetRoomListsRequest_1 = require("./Requests/GetRoomListsRequest");
var GetRoomsRequest_1 = require("./Requests/GetRoomsRequest");
var GetSearchableMailboxesRequest_1 = require("./Requests/GetSearchableMailboxesRequest");
var GetServerTimeZonesRequest_1 = require("./Requests/GetServerTimeZonesRequest");
var GetUserAvailabilityRequest_1 = require("./Requests/GetUserAvailabilityRequest");
var GetUserConfigurationRequest_1 = require("./Requests/GetUserConfigurationRequest");
var GetUserOofSettingsRequest_1 = require("./Requests/GetUserOofSettingsRequest");
var GetUserRetentionPolicyTagsRequest_1 = require("./Requests/GetUserRetentionPolicyTagsRequest");
var Grouping_1 = require("../Search/Grouping");
var InstallAppRequest_1 = require("./Requests/InstallAppRequest");
var ItemId_1 = require("../ComplexProperties/ItemId");
var MarkAllItemsAsReadRequest_1 = require("./Requests/MarkAllItemsAsReadRequest");
var MarkAsJunkRequest_1 = require("./Requests/MarkAsJunkRequest");
var MoveFolderRequest_1 = require("./Requests/MoveFolderRequest");
var MoveItemRequest_1 = require("./Requests/MoveItemRequest");
var PropertySet_1 = require("./PropertySet");
var RemoveDelegateRequest_1 = require("./Requests/RemoveDelegateRequest");
var RenderingMode_1 = require("../Enumerations/RenderingMode");
var ResolveNamesRequest_1 = require("./Requests/ResolveNamesRequest");
var SearchFilter_1 = require("../Search/Filters/SearchFilter");
var SearchMailboxesParameters_1 = require("../MailboxSearch/SearchMailboxesParameters");
var SearchMailboxesRequest_1 = require("./Requests/SearchMailboxesRequest");
var SearchPageDirection_1 = require("../Enumerations/SearchPageDirection");
var SearchResultType_1 = require("../Enumerations/SearchResultType");
var SendItemRequest_1 = require("./Requests/SendItemRequest");
var ServiceErrorHandling_1 = require("../Enumerations/ServiceErrorHandling");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var ServiceRemoteException_1 = require("../Exceptions/ServiceRemoteException");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var SetHoldOnMailboxesRequest_1 = require("./Requests/SetHoldOnMailboxesRequest");
var SetTeamMailboxRequest_1 = require("./Requests/SetTeamMailboxRequest");
var SetUserOofSettingsRequest_1 = require("./Requests/SetUserOofSettingsRequest");
var SortDirection_1 = require("../Enumerations/SortDirection");
var StringList_1 = require("../ComplexProperties/StringList");
var Strings_1 = require("../Strings");
var SubscribeToPullNotificationsRequest_1 = require("./Requests/SubscribeToPullNotificationsRequest");
var SubscribeToPushNotificationsRequest_1 = require("./Requests/SubscribeToPushNotificationsRequest");
var SubscribeToStreamingNotificationsRequest_1 = require("./Requests/SubscribeToStreamingNotificationsRequest");
var SyncFolderHierarchyRequest_1 = require("./Requests/SyncFolderHierarchyRequest");
var SyncFolderItemsRequest_1 = require("./Requests/SyncFolderItemsRequest");
var TraceFlags_1 = require("../Enumerations/TraceFlags");
var UnifiedMessaging_1 = require("../UnifiedMessaging/UnifiedMessaging");
var UninstallAppRequest_1 = require("./Requests/UninstallAppRequest");
var UnpinTeamMailboxRequest_1 = require("./Requests/UnpinTeamMailboxRequest");
var UnsubscribeRequest_1 = require("./Requests/UnsubscribeRequest");
var UpdateDelegateRequest_1 = require("./Requests/UpdateDelegateRequest");
var UpdateFolderRequest_1 = require("./Requests/UpdateFolderRequest");
var UpdateInboxRulesRequest_1 = require("./Requests/UpdateInboxRulesRequest");
var UpdateItemRequest_1 = require("./Requests/UpdateItemRequest");
var UpdateUserConfigurationRequest_1 = require("./Requests/UpdateUserConfigurationRequest");
var Uri_1 = require("../Uri");
var UserSettingName_1 = require("../Enumerations/UserSettingName");
var ViewBase_1 = require("../Search/ViewBase");
var ExchangeServiceBase_1 = require("./ExchangeServiceBase");
/**
 * Represents a binding to the **Exchange Web Services**.
 *
 */
var ExchangeService = /** @class */ (function (_super) {
    __extends(ExchangeService, _super);
    function ExchangeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* #endregion Constants */
        /* #region Fields */
        _this.url = null;
        //private preferredCulture: any = null;// System.Globalization.CultureInfo;
        //private dateTimePrecision: DateTimePrecision = DateTimePrecision.Default;
        //private impersonatedUserId: ImpersonatedUserId = null;
        //private privilegedUserId: PrivilegedUserId = null;
        //private managementRoles: ManagementRoles = null;
        //private fileAttachmentContentHandler: IFileAttachmentContentHandler = null;
        _this.unifiedMessaging = null;
        //private enableScpLookup: boolean = false; //false for javascript, AD Lookup not implemented 
        _this.renderingMode = RenderingMode_1.RenderingMode.Xml;
        //private traceEnablePrettyPrinting: boolean = true;
        _this.targetServerVersion = null;
        _this.ImpersonatedUserId = null;
        /**@internal */
        _this.PrivilegedUserId = null;
        _this.ManagementRoles = null;
        _this.PreferredCulture = null; //System.Globalization.CultureInfo;
        _this.DateTimePrecision = DateTimePrecision_1.DateTimePrecision.Default;
        _this.FileAttachmentContentHandler = null;
        _this.Exchange2007CompatibilityMode = false;
        _this.TraceEnablePrettyPrinting = true;
        return _this;
        //#endregion
    }
    Object.defineProperty(ExchangeService.prototype, "TimeZone", {
        get: function () {
            return this.timeZone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeService.prototype, "UnifiedMessaging", {
        get: function () {
            if (this.unifiedMessaging === null) {
                this.unifiedMessaging = new UnifiedMessaging_1.UnifiedMessaging(this);
            }
            return this.unifiedMessaging;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeService.prototype, "EnableScpLookup", {
        get: function () { return false; } //false for javascript, AD Lookup not implemented
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeService.prototype, "RenderingMethod", {
        get: function () { return this.renderingMode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExchangeService.prototype, "TargetServerVersion", {
        get: function () {
            return this.targetServerVersion;
        },
        set: function (value) {
            ExchangeService.ValidateTargetVersion(value);
            this.targetServerVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    /* #region Properties */
    /* #region Response object operations */
    /**
     * @internal Create response object.
     *
     * @param   {ServiceObject}          responseObject       The response object.
     * @param   {FolderId}               parentFolderId       The parent folder id.
     * @param   {MessageDisposition}     messageDisposition   The message disposition.
     * @return  {Promise<Item[]>}        The list of items created or modified as a result of the "creation" of the response object :Promise.
     */
    ExchangeService.prototype.InternalCreateResponseObject = function (responseObject, parentFolderId, messageDisposition) {
        var request = new CreateResponseObjectRequest_1.CreateResponseObjectRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.ParentFolderId = parentFolderId;
        request.Items = [responseObject];
        request.MessageDisposition = messageDisposition;
        return request.Execute().then(function (responses) {
            return responses.__thisIndexer(0).Items;
        });
    };
    ExchangeService.prototype.BindToFolder = function (folderId, propertySet, /** pass Folder or subclass itself, not an instance */ folderType) {
        if (folderType === void 0) { folderType = null; }
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        var request = new GetFolderRequest_1.GetFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.PropertySet = propertySet;
        return request.Execute().then(function (responses) {
            var result = responses.__thisIndexer(0).Folder;
            if (folderType != null && !(result instanceof folderType)) { //todo: validate folderType to be not a constructor
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.FolderTypeNotCompatible, "Type detection not implemented - ExchangeService.ts - BindToFolder<TFolder>", "Type detection not implemented"));
            }
            return result;
        });
    };
    /**
     * @internal Copies a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {Promise<Folder>}    Copy of folder :Promise.
     */
    ExchangeService.prototype.CopyFolder = function (folderId, destinationFolderId) {
        var request = new CopyFolderRequest_1.CopyFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);
        return request.Execute().then(function (responses) {
            return responses.__thisIndexer(0).Folder;
        });
    };
    /**
     * @internal Creates a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   folder           The folder.
     * @param   {FolderId}   parentFolderId   The parent folder id.
     */
    ExchangeService.prototype.CreateFolder = function (folder, parentFolderId) {
        var request = new CreateFolderRequest_1.CreateFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.Folders = [folder];
        request.ParentFolderId = parentFolderId;
        return request.Execute();
    };
    /**
     * @internal Deletes a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId     The folder id.
     * @param   {DeleteMode}    deleteMode   The delete mode.
     */
    ExchangeService.prototype.DeleteFolder = function (folderId, deleteMode) {
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        var request = new DeleteFolderRequest_1.DeleteFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        return request.Execute();
    };
    /**
     * @internal Empties a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId           The folder id.
     * @param   {DeleteMode}    deleteMode         The delete mode.
     * @param   {boolean}       deleteSubFolders   if set to true empty folder should also delete sub folders.
     */
    ExchangeService.prototype.EmptyFolder = function (folderId, deleteMode, deleteSubFolders) {
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        var request = new EmptyFolderRequest_1.EmptyFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.DeleteMode = deleteMode;
        request.DeleteSubFolders = deleteSubFolders;
        return request.Execute();
    };
    ExchangeService.prototype.FindFolders = function (parentFolderIdOrName, viewOrSearchFilter, folderView) {
        //todo: better argument check with ewsutilities
        //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        //EwsUtilities.ValidateParam(view, "view");
        //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
        var argsLength = arguments.length;
        if (argsLength < 2 && argsLength > 3) {
            throw new Error("ExchangeService.ts - FindFolders - invalid number of arguments, check documentation and try again.");
        }
        //position 1 - parentFolderIdOrName
        var parentFolderIds = [];
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderIds.push(new FolderId_1.FolderId(parentFolderIdOrName));
        }
        else if (parentFolderIdOrName instanceof FolderId_1.FolderId) {
            parentFolderIds.push(parentFolderIdOrName);
        }
        else {
            throw new Error("ExchangeService.ts - FindFolders - incorrect use of parameters, 1st argument must be Folder ID or WellKnownFolderName");
        }
        var searchFilter = null;
        var view = null;
        //position 2 - viewOrSearchFilter
        if (viewOrSearchFilter instanceof SearchFilter_1.SearchFilter) {
            if (!(folderView instanceof FolderView_1.FolderView)) {
                throw new Error("ExchangeService.ts - FindFolders with " + argsLength + " parameters - incorrect uses of parameter at 3nd position, it must be FolderView when using SearchFilter at 2nd place");
            }
            searchFilter = viewOrSearchFilter;
        }
        else if (viewOrSearchFilter instanceof FolderView_1.FolderView) {
            view = viewOrSearchFilter;
        }
        else {
            throw new Error("ExchangeService.ts - FindFolders - incorrect uses of parameters at 2nd position, must be FolderView or SearchFilter");
        }
        //position 3 - folderView
        if (argsLength == 3) {
            view = folderView;
        }
        return this.InternalFindFolders(parentFolderIds, searchFilter, /* searchFilter */ view, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (responses) {
            return responses.__thisIndexer(0).Results;
        });
    };
    /**
     * Finds folders.
     *
     * @param   {FolderId[]}             parentFolderIds     The parent folder ids.
     * @param   {SearchFilter}           searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}             view                The view controlling the number of folders returned.
     * @param   {ServiceErrorHandling}   errorHandlingMode   Indicates the type of error handling should be done.
     * @return  {Promise<ServiceResponseCollection<FindFolderResponse>>}     Collection of service responses :Promise.
     */
    ExchangeService.prototype.InternalFindFolders = function (parentFolderIds, searchFilter, view, errorHandlingMode) {
        var request = new FindFolderRequest_1.FindFolderRequest(this, errorHandlingMode);
        request.ParentFolderIds.AddRange(parentFolderIds);
        request.SearchFilter = searchFilter;
        request.View = view;
        return request.Execute();
    };
    /**
     * @internal Load specified properties for a folder.
     *
     * @param   {Folder}         folder        The folder.
     * @param   {PropertySet}    propertySet   The property set.
     */
    ExchangeService.prototype.LoadPropertiesForFolder = function (folder, propertySet) {
        EwsUtilities_1.EwsUtilities.ValidateParam(folder, "folder");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        var request = new GetFolderRequestForLoad_1.GetFolderRequestForLoad(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folder);
        request.PropertySet = propertySet;
        return request.Execute();
    };
    /**
     * @internal Marks all items in folder as read/unread. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId               The folder id.
     * @param   {boolean}       readFlag               If true, items marked as read, otherwise unread.
     * @param   {boolean}       suppressReadReceipts   If true, suppress read receipts for items.
     */
    ExchangeService.prototype.MarkAllItemsAsRead = function (folderId, readFlag, suppressReadReceipts) {
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "MarkAllItemsAsRead");
        var request = new MarkAllItemsAsReadRequest_1.MarkAllItemsAsReadRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.FolderIds.Add(folderId);
        request.ReadFlag = readFlag;
        request.SuppressReadReceipts = suppressReadReceipts;
        return request.Execute();
    };
    /**
     * @internal Move a folder.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {Promise<Folder>}    Moved folder :Promise.
     */
    ExchangeService.prototype.MoveFolder = function (folderId, destinationFolderId) {
        var request = new MoveFolderRequest_1.MoveFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.DestinationFolderId = destinationFolderId;
        request.FolderIds.Add(folderId);
        return request.Execute().then(function (responses) {
            return responses.__thisIndexer(0).Folder;
        });
    };
    /**
     * @internal Updates a folder.
     *
     * @param   {Folder}   folder   The folder.
     */
    ExchangeService.prototype.UpdateFolder = function (folder) {
        var request = new UpdateFolderRequest_1.UpdateFolderRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.Folders.push(folder);
        return request.Execute().then(function (value) {
            return null;
        });
    };
    /* #endregion Folder operations */
    /* #region Item operations */
    /**
     * Archives multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds          The Ids of the items to move.
     * @param   {FolderId}   sourceFolderId   The Id of the folder in primary corresponding to which items are being archived to.
     * @return  {Promise<ServiceResponseCollection<ArchiveItemResponse>>}                     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.ArchiveItems = function (itemIds, sourceFolderId) {
        var request = new ArchiveItemRequest_1.ArchiveItemRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        request.Ids.AddRange(itemIds);
        request.SourceFolderId = sourceFolderId;
        return request.Execute();
    };
    /* //ref: new method, //todo: implement other newer code from ews managed api repo  */
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet     The set of properties to load.
     * @param   {string}        anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                    A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.BindToGroupItems = function (itemIds, propertySet, anchorMailbox) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "anchorMailbox");
        return this.InternalBindToItems(itemIds, propertySet, anchorMailbox, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    ExchangeService.prototype.BindToItem = function (itemId, propertySet, /** pass Item or subclass itself, not an instance */ itemType) {
        if (itemType === void 0) { itemType = null; }
        EwsUtilities_1.EwsUtilities.ValidateParam(itemId, "itemId");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        return this.InternalBindToItems([itemId], propertySet, null, /* anchorMailbox */ ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (response) {
            var result = response.__thisIndexer(0).Item;
            if (itemType != null && !(result instanceof itemType)) { //todo: validate itemType to be not a constructor
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ItemTypeNotCompatible, "Type detection not implemented - ExchangeService.ts - BindToItem<TItem>", "Type detection not implemented"));
            }
            return result;
        });
    };
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds       The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                  A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.BindToItems = function (itemIds, propertySet) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        return this.InternalBindToItems(itemIds, propertySet, null, /* anchorMailbox */ ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * @internal Copies an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}        itemId                The Id of the item to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the item to.
     * @return  {Promise<Item>}     The copy of the item :Promise.
     */
    ExchangeService.prototype.CopyItem = function (itemId, destinationFolderId) {
        return this.InternalCopyItems([itemId], destinationFolderId, null, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (response) {
            return response.__thisIndexer(0).Item;
        });
    };
    ExchangeService.prototype.CopyItems = function (itemIds, destinationFolderId, returnNewItemIds) {
        if (returnNewItemIds === void 0) { returnNewItemIds = null; }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "CopyItems");
        return this.InternalCopyItems(itemIds, destinationFolderId, returnNewItemIds, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * @internal Creates an item. Calling this method results in a call to EWS.
     *
     * @param   {Item}                  item                  The item to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created item. If null, the item is created in its default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for item of type Appointment. Required if item is an Appointment instance.
     */
    ExchangeService.prototype.CreateItem = function (item, parentFolderId, messageDisposition, sendInvitationsMode) {
        return this.InternalCreateItems([item], parentFolderId, messageDisposition, sendInvitationsMode, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
    };
    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}                          A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */
    ExchangeService.prototype.CreateItems = function (items, parentFolderId, messageDisposition, sendInvitationsMode) {
        // All items have to be new.
        if (!items.every(function (item) { return item.IsNew; })) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.CreateItemsDoesNotHandleExistingItems);
        }
        // Make sure that all items do *not* have unprocessed attachments.
        if (!items.every(function (item) { return !item.HasUnprocessedAttachmentChanges(); })) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.CreateItemsDoesNotAllowAttachments);
        }
        return this.InternalCreateItems(items, parentFolderId, messageDisposition, sendInvitationsMode, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    ExchangeService.prototype.DeleteItem = function (itemId, deleteMode, sendCancellationsMode, affectedTaskOccurrences, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        EwsUtilities_1.EwsUtilities.ValidateParam(itemId, "itemId");
        return this.InternalDeleteItems([itemId], deleteMode, sendCancellationsMode, affectedTaskOccurrences, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError, suppressReadReceipts);
    };
    ExchangeService.prototype.DeleteItems = function (itemIds, deleteMode, sendCancellationsMode, affectedTaskOccurrences, suppressReadReceipt) {
        if (suppressReadReceipt === void 0) { suppressReadReceipt = false; }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(itemIds, "itemIds");
        return this.InternalDeleteItems(itemIds, deleteMode, sendCancellationsMode, affectedTaskOccurrences, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors, suppressReadReceipt);
    };
    ExchangeService.prototype.FindAppointments = function (parentFolderIdOrName, calendarView) {
        var parentFolderId = parentFolderIdOrName;
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderId = new FolderId_1.FolderId(parentFolderIdOrName);
        }
        return this.FindItems([parentFolderId], null, /* searchFilter */ null, /* queryString */ calendarView, null, /* groupBy */ ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (response) {
            return response.__thisIndexer(0).Results;
        });
    };
    //skipped: not needed, no calls coming in to this internal function in ews managed api, future use possible until them keep it muted   - 
    //FindItems<TItem extends Item>(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    ExchangeService.prototype.FindItems = function (nameIdOrIds, viewQueryStringOrSearchFilter, groupByViewRHTOrQueryString, groupByOrView, groupBy, errorHandlingMode) {
        //todo: better argument check with ewsutilities
        if (errorHandlingMode === void 0) { errorHandlingMode = ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError; }
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
        var parentIds = [];
        if (typeof nameIdOrIds === 'number') {
            parentIds.push(new FolderId_1.FolderId(nameIdOrIds));
        }
        else if (nameIdOrIds instanceof FolderId_1.FolderId) {
            parentIds.push(nameIdOrIds);
        }
        else if (Array.isArray(nameIdOrIds)) {
            parentIds = nameIdOrIds;
        }
        var queryString = null;
        var searchFilter = null;
        var view = null;
        //position 2 - viewQueryStringOrSearchFilter
        if (argsLength >= 2)
            if (typeof viewQueryStringOrSearchFilter === 'string') {
                queryString = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter instanceof SearchFilter_1.SearchFilter) {
                searchFilter = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter instanceof ViewBase_1.ViewBase) {
                view = viewQueryStringOrSearchFilter;
            }
            else if (viewQueryStringOrSearchFilter) { //error if not null
                throw new Error("ExchangeService.ts - FindItems - incorrect uses of parameters at 2nd position, must be string, ViewBase or SearchFilter");
            }
        var groupResultBy = null;
        var returnHighlightTerms = false;
        var isGroupped = false; // to resturn GroupedFindItemsResults<Item>
        //position 3 - groupByViewRHTOrQueryString
        if (argsLength >= 3) {
            if (groupByViewRHTOrQueryString instanceof Grouping_1.Grouping) {
                if (!(viewQueryStringOrSearchFilter instanceof ViewBase_1.ViewBase)) {
                    throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3nd position, it must be ViewBase when using Grouping at 4th place");
                }
                groupResultBy = groupByViewRHTOrQueryString;
                isGroupped = true;
            }
            else if (groupByViewRHTOrQueryString instanceof ViewBase_1.ViewBase) {
                view = groupByViewRHTOrQueryString;
            }
            else if (typeof groupByViewRHTOrQueryString === 'string') {
                queryString = groupByViewRHTOrQueryString;
            }
            else if (typeof groupByViewRHTOrQueryString === 'boolean') {
                returnHighlightTerms = groupByViewRHTOrQueryString;
                EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "FindItems");
            }
            else if (groupByViewRHTOrQueryString) { //error if not null
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, must be string, boolean, ViewBase or Grouping");
            }
        }
        //position 4 - groupByOrView
        if (argsLength >= 4) {
            if (groupByOrView instanceof Grouping_1.Grouping) {
                if (!(groupByViewRHTOrQueryString instanceof ViewBase_1.ViewBase)) {
                    throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 3rd position, it must be ViewBase when using Grouping at 3rd place");
                }
                groupResultBy = groupByOrView;
                isGroupped = true;
            }
            else if (groupByOrView instanceof ViewBase_1.ViewBase) {
                view = groupByOrView;
            }
            else if (groupByOrView) { //error if not null
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 4th  position, must be  ViewBase or Grouping");
            }
        }
        //position 5 - groupBy
        if (argsLength >= 5) {
            if (groupByOrView && !(groupByOrView instanceof ViewBase_1.ViewBase)) { //error if not null
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 4th position, it must be ViewBase when using Grouping at 5th place");
            }
            groupResultBy = groupBy;
            isGroupped = true;
        }
        var isRaw = false; // to return ServiceResponseCollection<FindItemResponse<TItem>>
        //position 6 - errorHandlingMode
        if (argsLength === 6) {
            isRaw = true;
        }
        var request = new FindItemRequest_1.FindItemRequest(this, errorHandlingMode | ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.ParentFolderIds.AddRange(parentIds);
        request.SearchFilter = searchFilter;
        request.QueryString = queryString;
        request.View = view;
        request.GroupBy = groupResultBy;
        return request.Execute().then(function (responses) {
            if (isRaw) {
                return responses;
            }
            if (isGroupped) {
                return responses.__thisIndexer(0).GroupedFindResults;
            }
            return responses.__thisIndexer(0).Results;
        });
    };
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {string}                anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @param   {ServiceErrorHandling}  errorHandling   Type of error handling to perform.
     * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}       A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.InternalBindToItems = function (itemIds, propertySet, anchorMailbox, errorHandling) {
        var request = new GetItemRequest_1.GetItemRequest(this, errorHandling);
        request.ItemIds.AddRange(itemIds);
        request.PropertySet = propertySet;
        request.AnchorMailbox = anchorMailbox;
        return request.Execute();
    };
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds                 The Ids of the items to bind to.
     * @param   {FolderId}              destinationFolderId     The Id of the folder to copy the items to.
     * @param   {boolean}               returnNewItemIds        Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling           What type of error handling should be performed.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.InternalCopyItems = function (itemIds, destinationFolderId, returnNewItemIds, errorHandling) {
        var request = new CopyItemRequest_1.CopyItemRequest(this, errorHandling);
        request.ItemIds.AddRange(itemIds);
        request.DestinationFolderId = destinationFolderId;
        request.ReturnNewItemIds = returnNewItemIds;
        return request.Execute();
    };
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
    ExchangeService.prototype.InternalCreateItems = function (items, parentFolderId, messageDisposition, sendInvitationsMode, errorHandling) {
        var request = new CreateItemRequest_1.CreateItemRequest(this, errorHandling);
        request.ParentFolderId = parentFolderId;
        request.Items = items;
        request.MessageDisposition = messageDisposition;
        request.SendInvitationsMode = sendInvitationsMode;
        return request.Execute();
    };
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
    ExchangeService.prototype.InternalDeleteItems = function (itemIds, deleteMode, sendCancellationsMode, affectedTaskOccurrences, errorHandling, suppressReadReceipts) {
        var request = new DeleteItemRequest_1.DeleteItemRequest(this, errorHandling);
        request.ItemIds.AddRange(itemIds);
        request.DeleteMode = deleteMode;
        request.SendCancellationsMode = sendCancellationsMode;
        request.AffectedTaskOccurrences = affectedTaskOccurrences;
        request.SuppressReadReceipts = suppressReadReceipts;
        return request.Execute();
    };
    /**
     * @internal Loads the properties of multiple items in a single call to EWS.
     *
     * @param   {Item[]}                items           The items to load the properties of.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {ServiceErrorHandling}  errorHandling   Indicates the type of error handling should be done.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    ExchangeService.prototype.InternalLoadPropertiesForItems = function (items, propertySet, errorHandling) {
        var request = new GetItemRequestForLoad_1.GetItemRequestForLoad(this, errorHandling);
        request.ItemIds.AddRange(items);
        request.PropertySet = propertySet;
        return request.Execute();
    };
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds               The Ids of the items to move.
     * @param   {FolderId}              destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}               returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling         What type of error handling should be performed.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ExchangeService.prototype.InternalMoveItems = function (itemIds, destinationFolderId, returnNewItemIds, errorHandling) {
        var request = new MoveItemRequest_1.MoveItemRequest(this, errorHandling);
        request.ItemIds.AddRange(itemIds);
        request.DestinationFolderId = destinationFolderId;
        request.ReturnNewItemIds = returnNewItemIds;
        return request.Execute();
    };
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
    ExchangeService.prototype.InternalUpdateItems = function (items, savedItemsDestinationFolderId, conflictResolution, messageDisposition, sendInvitationsOrCancellationsMode, errorHandling, suppressReadReceipt) {
        var request = new UpdateItemRequest_1.UpdateItemRequest(this, errorHandling);
        //request.Items.AddRange(items);
        ExtensionMethods_1.ArrayHelper.AddRange(request.Items, items);
        request.SavedItemsDestinationFolder = savedItemsDestinationFolderId;
        request.MessageDisposition = messageDisposition;
        request.ConflictResolutionMode = conflictResolution;
        request.SendInvitationsOrCancellationsMode = sendInvitationsOrCancellationsMode;
        request.SuppressReadReceipts = suppressReadReceipt;
        return request.Execute();
    };
    /**
     * Loads the properties of multiple items in a single call to EWS. **Unstable for Extended Properties**
     *
     * @param   {Item[]}        items         The items to load the properties of.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    ExchangeService.prototype.LoadPropertiesForItems = function (items, propertySet) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(items, "items");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        return this.InternalLoadPropertiesForItems(items, propertySet, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Mark items as junk.
     *
     * @param   {ItemId[]}      itemIds    ItemIds for the items to mark
     * @param   {boolean}       isJunk     Whether the items are junk.  If true, senders are add to blocked sender list. If false, senders are removed.
     * @param   {boolean}       moveItem   Whether to move the item.  Items are moved to junk folder if isJunk is true, inbox if isJunk is false.
     * @return  {Promise<ServiceResponseCollection<MarkAsJunkResponse>>}        A ServiceResponseCollection providing itemIds for each of the moved items :Promise.
     */
    ExchangeService.prototype.MarkAsJunk = function (itemIds, isJunk, moveItem) {
        var request = new MarkAsJunkRequest_1.MarkAsJunkRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        request.ItemIds.AddRange(itemIds);
        request.IsJunk = isJunk;
        request.MoveItem = moveItem;
        return request.Execute();
    };
    /**
     * @internal Move an item.
     *
     * @param   {ItemId}    itemId                The Id of the item to move.
     * @param   {FolderId}  destinationFolderId   The Id of the folder to move the item to.
     * @return  {Promise<Item>}                   The moved item :Promise.
     */
    ExchangeService.prototype.MoveItem = function (itemId, destinationFolderId) {
        return this.InternalMoveItems([itemId], destinationFolderId, null, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (responses) {
            return responses.__thisIndexer(0).Item;
        });
    };
    ExchangeService.prototype.MoveItems = function (itemIds, destinationFolderId, returnNewItemIds) {
        if (returnNewItemIds === void 0) { returnNewItemIds = null; }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "MoveItems");
        return this.InternalMoveItems(itemIds, destinationFolderId, returnNewItemIds, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * @internal Sends an item.
     *
     * @param   {Item}      item                           The item.
     * @param   {FolderId}  savedCopyDestinationFolderId   The saved copy destination folder id.
     */
    ExchangeService.prototype.SendItem = function (item, savedCopyDestinationFolderId) {
        var request = new SendItemRequest_1.SendItemRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
        request.Items = [item];
        request.SavedCopyDestinationFolderId = savedCopyDestinationFolderId;
        return request.Execute();
    };
    ExchangeService.prototype.UpdateItem = function (item, savedItemsDestinationFolderId, conflictResolution, messageDisposition, sendInvitationsOrCancellationsMode, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        return this.InternalUpdateItems([item], savedItemsDestinationFolderId, conflictResolution, messageDisposition, sendInvitationsOrCancellationsMode, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError, suppressReadReceipts).then(function (responses) {
            return responses.__thisIndexer(0).ReturnedItem;
        });
    };
    ExchangeService.prototype.UpdateItems = function (items, savedItemsDestinationFolderId, conflictResolution, messageDisposition, sendInvitationsOrCancellationsMode, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = false; }
        // All items have to exist on the server (!new) and modified (dirty)
        if (!items.every(function (item) { return (!item.IsNew && item.IsDirty); })) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.UpdateItemsDoesNotSupportNewOrUnchangedItems);
        }
        // Make sure that all items do *not* have unprocessed attachments.
        if (!items.every(function (item) { return !item.HasUnprocessedAttachmentChanges(); })) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.UpdateItemsDoesNotAllowAttachments);
        }
        return this.InternalUpdateItems(items, savedItemsDestinationFolderId, conflictResolution, messageDisposition, sendInvitationsOrCancellationsMode, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors, suppressReadReceipts);
    };
    /* #endregion Item operations 47*/
    /* #region Attachment operations */
    /**
     * @internal Creates attachments.
     *
     * @param   {string}            parentItemId   The parent item id.
     * @param   {Attachment[]}      attachments            The attachments.
     * @return  {Promise<ServiceResponseCollection<CreateAttachmentResponse>>}      Service response collection :Promise.
     */
    ExchangeService.prototype.CreateAttachments = function (parentItemId, attachments) {
        var request = new CreateAttachmentRequest_1.CreateAttachmentRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        request.ParentItemId = parentItemId;
        ExtensionMethods_1.ArrayHelper.AddRange(request.Attachments, attachments); //request.Attachments.AddRange(attachments);
        return request.Execute();
    };
    /**
     * @internal Deletes attachments.
     *
     * @param   {Attachment[]}   attachments   The attachments.
     * @return  {Promise<ServiceResponseCollection<DeleteAttachmentResponse>>}      Service response collection :Promise.
     */
    ExchangeService.prototype.DeleteAttachments = function (attachments) {
        var request = new DeleteAttachmentRequest_1.DeleteAttachmentRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        ExtensionMethods_1.ArrayHelper.AddRange(request.Attachments, attachments); //request.Attachments.AddRange(attachments);
        return request.Execute();
    };
    /**
     * @internal Gets an attachment.
     *
     * @param   {Attachment}                    attachment             The attachment.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    ExchangeService.prototype.GetAttachment = function (attachment, bodyType, additionalProperties) {
        return this.InternalGetAttachments([attachment], bodyType, additionalProperties, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
    };
    ExchangeService.prototype.GetAttachments = function (attachmentsOrIds, bodyType, additionalProperties) {
        var ids = ExtensionMethods_1.ArrayHelper.OfType(attachmentsOrIds, function (attachment) { return typeof attachment === 'string'; });
        if (ids && ids.length > 0) {
            var request = new GetAttachmentRequest_1.GetAttachmentRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
            ExtensionMethods_1.ArrayHelper.AddRange(request.AttachmentIds, attachmentsOrIds);
            request.BodyType = bodyType;
            if (additionalProperties != null) {
                ExtensionMethods_1.ArrayHelper.AddRange(request.AdditionalProperties, additionalProperties);
                //request.AdditionalProperties.AddRange(additionalProperties);
            }
            return request.Execute();
        }
        else {
            return this.InternalGetAttachments(attachmentsOrIds, bodyType, additionalProperties, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        }
    };
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
     */
    ExchangeService.prototype.InternalGetAttachments = function (attachments, bodyType, additionalProperties, errorHandling) {
        var request = new GetAttachmentRequest_1.GetAttachmentRequest(this, errorHandling);
        ExtensionMethods_1.ArrayHelper.AddRange(request.Attachments, attachments);
        request.BodyType = bodyType;
        if (additionalProperties != null) {
            ExtensionMethods_1.ArrayHelper.AddRange(request.AdditionalProperties, additionalProperties);
            //request.AdditionalProperties.AddRange(additionalProperties);
        }
        return request.Execute();
    };
    ExchangeService.prototype.ExpandGroup = function (emailAddressOrsmtpAddressOrGroupId, routingType) {
        // EwsUtilities.ValidateParam(emailAddressOrsmtpAddressOrGroupId, "address");
        // EwsUtilities.ValidateParam(routingType, "routingType");
        //EwsUtilities.ValidateParam(emailAddress, "emailAddress");
        var emailAddress = new EmailAddress_1.EmailAddress();
        if (emailAddressOrsmtpAddressOrGroupId instanceof EmailAddress_1.EmailAddress) {
            emailAddress = emailAddressOrsmtpAddressOrGroupId;
        }
        else if (emailAddressOrsmtpAddressOrGroupId instanceof ItemId_1.ItemId) {
            emailAddress.Id = emailAddressOrsmtpAddressOrGroupId;
        }
        else if (typeof emailAddressOrsmtpAddressOrGroupId === 'string') {
            emailAddress = new EmailAddress_1.EmailAddress(emailAddressOrsmtpAddressOrGroupId);
        }
        if (routingType) {
            emailAddress.RoutingType = routingType;
        }
        var request = new ExpandGroupRequest_1.ExpandGroupRequest(this);
        request.EmailAddress = emailAddress;
        return request.Execute().then(function (response) {
            return response.__thisIndexer(0).Members;
        });
    };
    /**
     * Get the password expiration date
     *
     * @param   {string}   mailboxSmtpAddress   The e-mail address of the user.
     * @return  {Promise<DateTime>}             The password expiration date :Promise.
     */
    ExchangeService.prototype.GetPasswordExpirationDate = function (mailboxSmtpAddress) {
        var request = new GetPasswordExpirationDateRequest_1.GetPasswordExpirationDateRequest(this);
        request.MailboxSmtpAddress = mailboxSmtpAddress;
        return request.Execute().then(function (response) {
            return response.PasswordExpirationDate;
        });
    };
    ExchangeService.prototype.ResolveName = function (nameToResolve, parentFolderIdsOrSearchScope, searchScopeOrReturnContactDetails, returnContactDetailsOrContactDataPropertySet, contactDataPropertySet) {
        if (contactDataPropertySet === void 0) { contactDataPropertySet = null; }
        var argsLength = arguments.length;
        if (argsLength < 1 && argsLength > 5) {
            throw new Error("ExchangeService.ts - ResolveName - invalid number of arguments, check documentation and try again.");
        }
        //position 1 - nameToResolve - no change, same for all overload
        var searchScope = null;
        var parentFolderIds = null;
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
        var returnContactDetails = false;
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
            if (returnContactDetailsOrContactDataPropertySet instanceof PropertySet_1.PropertySet) {
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
        var request = new ResolveNamesRequest_1.ResolveNamesRequest(this);
        request.NameToResolve = nameToResolve;
        request.ReturnFullContactData = returnContactDetails;
        request.ParentFolderIds.AddRange(parentFolderIds);
        request.SearchLocation = searchScope;
        request.ContactDataPropertySet = contactDataPropertySet;
        return request.Execute().then(function (response) {
            return response.__thisIndexer(0).Resolutions;
        });
    };
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
    ExchangeService.prototype.BuildGetEventsRequest = function (subscriptionId, watermark) {
        EwsUtilities_1.EwsUtilities.ValidateParam(subscriptionId, "subscriptionId");
        EwsUtilities_1.EwsUtilities.ValidateParam(watermark, "watermark");
        var request = new GetEventsRequest_1.GetEventsRequest(this);
        request.SubscriptionId = subscriptionId;
        request.Watermark = watermark;
        return request;
    };
    /**
     * Builds a request to subscribe to pull notifications in the authenticated user's mailbox.
     *
     * @param   {FolderId[]}    folderIds    The Ids of the folder to subscribe to.
     * @param   {number}        timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}        watermark    An optional watermark representing a previously opened subscription.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {SubscribeToPullNotificationsRequest}   A request to subscribe to pull notifications in the authenticated user's mailbox.
     */
    ExchangeService.prototype.BuildSubscribeToPullNotificationsRequest = function (folderIds, timeout, watermark, eventTypes) {
        if (timeout < 1 || timeout > 1440) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("timeout", Strings_1.Strings.TimeoutMustBeBetween1And1440);
        }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");
        var request = new SubscribeToPullNotificationsRequest_1.SubscribeToPullNotificationsRequest(this);
        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }
        request.Timeout = timeout;
        ExtensionMethods_1.ArrayHelper.AddRange(request.EventTypes, eventTypes); //request.EventTypes.AddRange(eventTypes);
        request.Watermark = watermark;
        return request;
    };
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
    ExchangeService.prototype.BuildSubscribeToPushNotificationsRequest = function (folderIds, url, frequency, watermark, callerData, eventTypes) {
        EwsUtilities_1.EwsUtilities.ValidateParam(url, "url");
        if (frequency < 1 || frequency > 1440) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("frequency", Strings_1.Strings.FrequencyMustBeBetween1And1440);
        }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");
        var request = new SubscribeToPushNotificationsRequest_1.SubscribeToPushNotificationsRequest(this);
        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }
        request.Url = url;
        request.Frequency = frequency;
        ExtensionMethods_1.ArrayHelper.AddRange(request.EventTypes, eventTypes); //request.EventTypes.AddRange(eventTypes);
        request.Watermark = watermark;
        request.CallerData = callerData;
        return request;
    };
    /**
     * Builds request to subscribe to streaming notifications in the authenticated user's mailbox.
     *
     * @param   {FolderId[]}    folderIds    The Ids of the folder to subscribe to.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {SubscribeToStreamingNotificationsRequest}      A request to subscribe to streaming notifications in the authenticated user's mailbox.
     */
    ExchangeService.prototype.BuildSubscribeToStreamingNotificationsRequest = function (folderIds, eventTypes) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(eventTypes, "eventTypes");
        var request = new SubscribeToStreamingNotificationsRequest_1.SubscribeToStreamingNotificationsRequest(this);
        if (folderIds != null) {
            request.FolderIds.AddRange(folderIds);
        }
        ExtensionMethods_1.ArrayHelper.AddRange(request.EventTypes, eventTypes); //request.EventTypes.AddRange(eventTypes);
        return request;
    };
    /**
     * Buids a request to unsubscribe from a subscription.
     *
     * @param   {string}   subscriptionId   The Id of the subscription for which to get the events.
     * @return  {UnsubscribeRequest}        A request to unsubscribe from a subscription.
     */
    ExchangeService.prototype.BuildUnsubscribeRequest = function (subscriptionId) {
        EwsUtilities_1.EwsUtilities.ValidateParam(subscriptionId, "subscriptionId");
        var request = new UnsubscribeRequest_1.UnsubscribeRequest(this);
        request.SubscriptionId = subscriptionId;
        return request;
    };
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
    ExchangeService.prototype.GetEvents = function (subscriptionId, watermark) {
        return this.BuildGetEventsRequest(subscriptionId, watermark).Execute().then(function (response) {
            return response.__thisIndexer(0).Results;
        });
    };
    /**
     * Set a TeamMailbox
     *
     * @param   {EmailAddress}                  emailAddress        TeamMailbox email address
     * @param   {Uri}                           sharePointSiteUrl   SharePoint site URL
     * @param   {TeamMailboxLifecycleState}     state               TeamMailbox lifecycle state
     * @return  {Promise<void>}     Promise.
     */
    ExchangeService.prototype.SetTeamMailbox = function (emailAddress, sharePointSiteUrl, state) {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "SetTeamMailbox");
        if (emailAddress == null) {
            throw new ArgumentException_1.ArgumentNullException("emailAddress");
        }
        if (sharePointSiteUrl == null) {
            throw new ArgumentException_1.ArgumentNullException("sharePointSiteUrl");
        }
        var request = new SetTeamMailboxRequest_1.SetTeamMailboxRequest(this, emailAddress, sharePointSiteUrl, state);
        return request.Execute();
    };
    /**
     * Subscribes to pull notifications. Calling this method results in a call to EWS   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
     */
    ExchangeService.prototype.SubscribeToPullNotifications = function (folderIds, timeout, watermark) {
        var eventTypes = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            eventTypes[_i - 3] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(folderIds, "folderIds");
        return this.BuildSubscribeToPullNotificationsRequest(folderIds, timeout, watermark, eventTypes).Execute().then(function (response) {
            return response.__thisIndexer(0).Subscription;
        });
    };
    /**
     * Subscribes to pull notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
     */
    ExchangeService.prototype.SubscribeToPullNotificationsOnAllFolders = function (timeout, watermark) {
        var eventTypes = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            eventTypes[_i - 2] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010, "SubscribeToPullNotificationsOnAllFolders");
        return this.BuildSubscribeToPullNotificationsRequest(null, timeout, watermark, eventTypes).Execute().then(function (response) {
            return response.__thisIndexer(0).Subscription;
        });
    };
    ExchangeService.prototype.SubscribeToPushNotifications = function (folderIds, url, frequency, watermark, callerDataOrEventTypes) {
        var eventTypes = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            eventTypes[_i - 5] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(folderIds, "folderIds");
        var callerData = null;
        if (typeof callerDataOrEventTypes === 'string') {
            callerData = callerDataOrEventTypes;
        }
        else {
            eventTypes.push(callerDataOrEventTypes); //info: ref: typescript generates eventTypes from arguments.length, need to push to it.
        }
        return this.BuildSubscribeToPushNotificationsRequest(folderIds, url, frequency, watermark, callerData, eventTypes).Execute().then(function (response) {
            return response.__thisIndexer(0).Subscription;
        });
    };
    ExchangeService.prototype.SubscribeToPushNotificationsOnAllFolders = function (url, frequency, watermark, callerDataOrEventTypes) {
        var eventTypes = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            eventTypes[_i - 4] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010, "SubscribeToPushNotificationsOnAllFolders");
        var callerData = null;
        if (typeof callerDataOrEventTypes === 'string') {
            callerData = callerDataOrEventTypes;
        }
        else {
            eventTypes.push(callerDataOrEventTypes); //info: ref: typescript generates eventTypes from arguments.length, need to push to it.
        }
        return this.BuildSubscribeToPushNotificationsRequest(null, url, frequency, watermark, callerData, eventTypes).Execute().then(function (response) {
            return response.__thisIndexer(0).Subscription;
        });
    };
    /**
     * Subscribes to streaming notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}   folderIds    The Ids of the folder to subscribe to.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
     */
    ExchangeService.prototype.SubscribeToStreamingNotifications = function (folderIds) {
        var eventTypes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            eventTypes[_i - 1] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "SubscribeToStreamingNotifications");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(folderIds, "folderIds");
        return this.BuildSubscribeToStreamingNotificationsRequest(folderIds, eventTypes).Execute().then(function (responses) {
            return responses.__thisIndexer(0).Subscription;
        });
    };
    /**
     * Subscribes to streaming notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
     */
    ExchangeService.prototype.SubscribeToStreamingNotificationsOnAllFolders = function () {
        var eventTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            eventTypes[_i] = arguments[_i];
        }
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "SubscribeToStreamingNotificationsOnAllFolders");
        return this.BuildSubscribeToStreamingNotificationsRequest(null, eventTypes).Execute().then(function (responses) {
            return responses.__thisIndexer(0).Subscription;
        });
    };
    /**
     * Unpin a TeamMailbox
     *
     * @param   {EmailAddress}      emailAddress        TeamMailbox email address
     * @return  {Promise<void>}     Promise.
     */
    ExchangeService.prototype.UnpinTeamMailbox = function (emailAddress) {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "UnpinTeamMailbox");
        if (emailAddress == null) {
            throw new ArgumentException_1.ArgumentNullException("emailAddress");
        }
        var request = new UnpinTeamMailboxRequest_1.UnpinTeamMailboxRequest(this, emailAddress);
        return request.Execute();
    };
    /**
     * @internal Unsubscribes from a subscription. Calling this method results in a call to EWS.
     *
     * @param   {string}   subscriptionId   The Id of the pull subscription to unsubscribe from.
     */
    ExchangeService.prototype.Unsubscribe = function (subscriptionId) {
        return this.BuildUnsubscribeRequest(subscriptionId).Execute();
    };
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
    ExchangeService.prototype.BuildSyncFolderItemsRequest = function (syncFolderId, propertySet, ignoredItemIds, maxChangesReturned, numberOfDays, syncScope, syncState) {
        EwsUtilities_1.EwsUtilities.ValidateParam(syncFolderId, "syncFolderId");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        var request = new SyncFolderItemsRequest_1.SyncFolderItemsRequest(this);
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
    };
    ExchangeService.prototype.SyncFolderItems = function (syncFolderId, propertySet, ignoredItemIds, maxChangesReturned, numberOfDaysOrSyncScope, syncScopeOrSyncState, syncState) {
        if (syncState === void 0) { syncState = null; }
        var numberOfDays = 0;
        var syncScope;
        if (arguments.length === 6) {
            syncState = syncScopeOrSyncState;
            syncScope = numberOfDaysOrSyncScope;
        }
        else {
            numberOfDays = numberOfDaysOrSyncScope;
            syncScope = syncScopeOrSyncState;
        }
        return this.BuildSyncFolderItemsRequest(syncFolderId, propertySet, ignoredItemIds, maxChangesReturned, numberOfDays, syncScope, syncState).Execute().then(function (responses) {
            return responses.__thisIndexer(0).Changes;
        });
    };
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
    ExchangeService.prototype.BuildSyncFolderHierarchyRequest = function (syncFolderId, propertySet, syncState) {
        EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(syncFolderId, "syncFolderId"); // Null syncFolderId is allowed
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "propertySet");
        var request = new SyncFolderHierarchyRequest_1.SyncFolderHierarchyRequest(this);
        request.PropertySet = propertySet;
        request.SyncFolderId = syncFolderId;
        request.SyncState = syncState;
        return request;
    };
    ExchangeService.prototype.SyncFolderHierarchy = function (syncFolderIdOrPropertySet, propertySetOrSyncState, syncState) {
        if (syncState === void 0) { syncState = null; }
        var syncFolderId = null;
        var propertySet;
        if (arguments.length === 2) {
            propertySet = syncFolderIdOrPropertySet;
            syncState = propertySetOrSyncState;
        }
        else {
            syncFolderId = syncFolderIdOrPropertySet;
            propertySet = propertySetOrSyncState;
        }
        return this.BuildSyncFolderHierarchyRequest(syncFolderId, propertySet, syncState).Execute().then(function (responses) {
            return responses.__thisIndexer(0).Changes;
        });
    };
    /* #endregion Synchronization operations */
    /* #region Availability operations */
    /**
     * Retrieves a collection of all room lists in the organization.
     *
     * @return  {Promise<EmailAddressCollection[]>}     A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    ExchangeService.prototype.GetRoomLists = function () {
        var request = new GetRoomListsRequest_1.GetRoomListsRequest(this);
        return request.Execute().then(function (response) {
            return response.RoomLists;
        });
    };
    /**
     * Retrieves a collection of all rooms in the specified room list in the organization.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the room list.
     * @return  {Promise<EmailAddress[]>}       A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    ExchangeService.prototype.GetRooms = function (emailAddress) {
        EwsUtilities_1.EwsUtilities.ValidateParam(emailAddress, "emailAddress");
        var request = new GetRoomsRequest_1.GetRoomsRequest(this);
        request.RoomList = emailAddress;
        return request.Execute().then(function (response) {
            return response.Rooms;
        });
    };
    ExchangeService.prototype.GetUserAvailability = function (attendees, timeWindow, requestedData, options) {
        if (options === void 0) { options = new AvailabilityOptions_1.AvailabilityOptions(); }
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(attendees, "attendees");
        EwsUtilities_1.EwsUtilities.ValidateParam(timeWindow, "timeWindow");
        EwsUtilities_1.EwsUtilities.ValidateParam(options, "options");
        var request = new GetUserAvailabilityRequest_1.GetUserAvailabilityRequest(this);
        request.Attendees = attendees;
        request.TimeWindow = timeWindow;
        request.RequestedData = requestedData;
        request.Options = options;
        return request.Execute().then(function (responses) {
            return responses;
        });
    };
    /**
     * Gets Out of Office (OOF) settings for a specific user. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the user for which to retrieve OOF settings.
     * @return  {Promise<OofSettings>}   An OofSettings instance containing OOF information for the specified user.
     */
    ExchangeService.prototype.GetUserOofSettings = function (smtpAddress) {
        EwsUtilities_1.EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");
        var request = new GetUserOofSettingsRequest_1.GetUserOofSettingsRequest(this);
        request.SmtpAddress = smtpAddress;
        return request.Execute().then(function (response) {
            return response.OofSettings;
        });
    };
    /**
     * Sets the Out of Office (OOF) settings for a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {string}        smtpAddress   The SMTP address of the user for which to set OOF settings.
     * @param   {OofSettings}   oofSettings   The OOF settings.
     * @return  {Promise<void>}      Promise.
     */
    ExchangeService.prototype.SetUserOofSettings = function (smtpAddress, oofSettings) {
        EwsUtilities_1.EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");
        EwsUtilities_1.EwsUtilities.ValidateParam(oofSettings, "oofSettings");
        var request = new SetUserOofSettingsRequest_1.SetUserOofSettingsRequest(this);
        request.SmtpAddress = smtpAddress;
        request.OofSettings = oofSettings;
        return request.Execute();
    };
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
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.ApplyConversationAction = function (actionType, conversationIds, processRightAway, categories, enableAlwaysDelete, destinationFolderId, errorHandlingMode) {
        EwsLogging_1.EwsLogging.Assert(actionType == ConversationActionType_1.ConversationActionType.AlwaysCategorize ||
            actionType == ConversationActionType_1.ConversationActionType.AlwaysMove ||
            actionType == ConversationActionType_1.ConversationActionType.AlwaysDelete, "ApplyConversationAction", "Invalic actionType");
        EwsUtilities_1.EwsUtilities.ValidateParam(conversationIds, "conversationId");
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "ApplyConversationAction");
        var request = new ApplyConversationActionRequest_1.ApplyConversationActionRequest(this, errorHandlingMode);
        var action = new ConversationAction_1.ConversationAction();
        for (var _i = 0, conversationIds_1 = conversationIds; _i < conversationIds_1.length; _i++) {
            var conversationId = conversationIds_1[_i];
            action.Action = actionType;
            action.ConversationId = conversationId;
            action.ProcessRightAway = processRightAway;
            action.Categories = categories;
            action.EnableAlwaysDelete = enableAlwaysDelete;
            action.DestinationFolderId = destinationFolderId != null ? new FolderIdWrapper_1.FolderIdWrapper(destinationFolderId) : null;
            request.ConversationActions.push(action);
        }
        return request.Execute();
    };
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
    ExchangeService.prototype.ApplyConversationOneTimeAction = function (actionType, idTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs,
    contextFolderId, destinationFolderId, deleteType, isRead, retentionPolicyType, retentionPolicyTagId, flag, suppressReadReceipts, errorHandlingMode) {
        EwsLogging_1.EwsLogging.Assert(actionType == ConversationActionType_1.ConversationActionType.Move ||
            actionType == ConversationActionType_1.ConversationActionType.Delete ||
            actionType == ConversationActionType_1.ConversationActionType.SetReadState ||
            actionType == ConversationActionType_1.ConversationActionType.SetRetentionPolicy ||
            actionType == ConversationActionType_1.ConversationActionType.Copy ||
            actionType == ConversationActionType_1.ConversationActionType.Flag, "ApplyConversationOneTimeAction", "Invalid actionType");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(idTimePairs, "idTimePairs");
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, "ApplyConversationAction");
        var request = new ApplyConversationActionRequest_1.ApplyConversationActionRequest(this, errorHandlingMode);
        for (var _i = 0, idTimePairs_1 = idTimePairs; _i < idTimePairs_1.length; _i++) {
            var idTimePair = idTimePairs_1[_i];
            var action = new ConversationAction_1.ConversationAction();
            action.Action = actionType;
            action.ConversationId = idTimePair.key;
            action.ContextFolderId = contextFolderId != null ? new FolderIdWrapper_1.FolderIdWrapper(contextFolderId) : null;
            action.DestinationFolderId = destinationFolderId != null ? new FolderIdWrapper_1.FolderIdWrapper(destinationFolderId) : null;
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
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.DisableAlwaysCategorizeItemsInConversations = function (conversationId, processSynchronously) {
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysCategorize, conversationId, processSynchronously, null, false, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.DisableAlwaysDeleteItemsInConversations = function (conversationId, processSynchronously) {
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysDelete, conversationId, processSynchronously, null, false, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationIds        The conversation ids.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.DisableAlwaysMoveItemsInConversations = function (conversationIds, processSynchronously) {
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysMove, conversationIds, processSynchronously, null, false, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {string[]}          categories             The categories that should be stamped on items in the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.EnableAlwaysCategorizeItemsInConversations = function (conversationId, categories, processSynchronously) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(categories, "categories");
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysCategorize, conversationId, processSynchronously, new StringList_1.StringList(categories), false, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.EnableAlwaysDeleteItemsInConversations = function (conversationId, processSynchronously) {
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysDelete, conversationId, processSynchronously, null, true, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {FolderId}          destinationFolderId    The Id of the folder to which conversation items should be moved.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.EnableAlwaysMoveItemsInConversations = function (conversationId, destinationFolderId, processSynchronously) {
        EwsUtilities_1.EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationAction(ConversationActionType_1.ConversationActionType.AlwaysMove, conversationId, processSynchronously, null, false, destinationFolderId, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    ExchangeService.prototype.FindConversation = function (view, folderId, queryString, returnHighlightTerms, mailboxScope) {
        if (queryString === void 0) { queryString = null; }
        if (returnHighlightTerms === void 0) { returnHighlightTerms = null; }
        if (mailboxScope === void 0) { mailboxScope = null; }
        var argsLength = arguments.length;
        EwsUtilities_1.EwsUtilities.ValidateParam(view, "view");
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        var request = new FindConversationRequest_1.FindConversationRequest(this);
        request.View = view;
        request.FolderId = new FolderIdWrapper_1.FolderIdWrapper(folderId);
        if (argsLength > 2) {
            EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(queryString, "queryString");
            request.QueryString = queryString;
        }
        if (argsLength > 3) {
            EwsUtilities_1.EwsUtilities.ValidateParam(returnHighlightTerms, "returnHighlightTerms");
            request.ReturnHighlightTerms = returnHighlightTerms;
            EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, // This method is only applicable for Exchange2013
            "FindConversation");
        }
        if (argsLength > 4) {
            request.MailboxScope = mailboxScope;
        }
        return request.Execute().then(function (responses) {
            if (argsLength > 3) {
                return responses.Results; // based on arguments it can return this or either Results.
            }
            else {
                return responses.Conversations;
            }
        });
    };
    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}  view            The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId        The Id of the folder in which to search for conversations.
     * @param   {string}    anchorMailbox   The anchorMailbox Smtp address to route the request directly to group mailbox.
     * @return  {Promise<Conversation[]>}   Collection of conversations :Promise.
     */
    ExchangeService.prototype.FindGroupConversation = function (view, folderId, anchorMailbox) {
        EwsUtilities_1.EwsUtilities.ValidateParam(view, "view");
        EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
        EwsUtilities_1.EwsUtilities.ValidateParam(anchorMailbox, "anchorMailbox");
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2015, "FindConversation");
        var request = new FindConversationRequest_1.FindConversationRequest(this);
        request.View = view;
        request.FolderId = new FolderIdWrapper_1.FolderIdWrapper(folderId);
        request.AnchorMailbox = anchorMailbox;
        return request.Execute().then(function (responses) {
            return responses.Conversations;
        });
    };
    ExchangeService.prototype.GetConversationItems = function (conversationsOrConversationId, propertySet, foldersToIgnoreOrSyncState, sortOrderOrFoldersToIgnore, mailboxScopeOrSortOrder) {
        if (mailboxScopeOrSortOrder === void 0) { mailboxScopeOrSortOrder = null; }
        var conversations = [];
        var foldersToIgnore = [];
        var syncState = null;
        var sortOrder = null;
        var mailboxScope = null;
        var returnConversationResponse = false;
        if (conversationsOrConversationId instanceof ConversationId_1.ConversationId) {
            conversations.push(new ConversationRequest_1.ConversationRequest(conversationsOrConversationId, foldersToIgnoreOrSyncState));
            foldersToIgnore = sortOrderOrFoldersToIgnore;
            sortOrder = mailboxScopeOrSortOrder;
            returnConversationResponse = true;
        }
        else {
            conversations = conversationsOrConversationId;
            foldersToIgnore = foldersToIgnoreOrSyncState;
            sortOrder = sortOrderOrFoldersToIgnore;
            mailboxScope = mailboxScopeOrSortOrder;
        }
        return this.InternalGetConversationItems(conversations, propertySet, foldersToIgnore, sortOrder, //todo: check why official repo has passed sortOrder as nulll when requested with ConversationRequest[] varient
        mailboxScope, /* mailboxScope */ null, /* maxItemsToReturn */ null, /* anchorMailbox */ ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (responses) {
            return returnConversationResponse ? responses.__thisIndexer(0).Conversation : responses;
        });
    };
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
    ExchangeService.prototype.GetGroupConversationItems = function (conversationId, propertySet, syncState, foldersToIgnore, sortOrder /* Nullable */, anchorMailbox) {
        EwsUtilities_1.EwsUtilities.ValidateParam(anchorMailbox, "anchorMailbox");
        var conversations = [];
        conversations.push(new ConversationRequest_1.ConversationRequest(conversationId, syncState));
        return this.InternalGetConversationItems(conversations, propertySet, foldersToIgnore, sortOrder, null, /* mailboxScope */ null, /* maxItemsToReturn */ anchorMailbox, /* anchorMailbox */ ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (responses) {
            return responses.__thisIndexer(0).Conversation;
        });
    };
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
    ExchangeService.prototype.InternalGetConversationItems = function (conversations, propertySet, foldersToIgnore, sortOrder, //Nullable
    mailboxScope, //Nullable
    maxItemsToReturn, //nullable
    anchorMailbox, errorHandling) {
        EwsUtilities_1.EwsUtilities.ValidateParam(conversations, "conversations");
        EwsUtilities_1.EwsUtilities.ValidateParam(propertySet, "itemProperties");
        EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(foldersToIgnore, "foldersToIgnore");
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "GetConversationItems");
        var request = new GetConversationItemsRequest_1.GetConversationItemsRequest(this, errorHandling);
        request.ItemProperties = propertySet;
        request.FoldersToIgnore = new FolderIdCollection_1.FolderIdCollection(foldersToIgnore);
        request.SortOrder = sortOrder;
        request.MailboxScope = mailboxScope;
        request.MaxItemsToReturn = maxItemsToReturn;
        request.AnchorMailbox = anchorMailbox;
        request.Conversations = conversations;
        return request.Execute();
    };
    /**
     * Copies the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be copied and the date and time conversation was last synced (Items received after that date will not be copied).
     * @param   {FolderId}                                      contextFolderId       The context folder id.
     * @param   {FolderId}                                      destinationFolderId   The destination folder id.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.CopyItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, destinationFolderId) {
        EwsUtilities_1.EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.Copy, idLastSyncTimePairs, contextFolderId, destinationFolderId, null, null, null, null, null, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Deletes the items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be deleted and the date and time conversation was last synced (Items received after that date will not be deleted).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {DeleteMode}                                    deleteMode            The deletion mode.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.DeleteItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, deleteMode) {
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.Delete, idLastSyncTimePairs, contextFolderId, null, deleteMode, null, null, null, null, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Moves the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be moved and the dateTime conversation was last synced (Items received after that dateTime will not be moved).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {FolderId}                                      destinationFolderId   The Id of the destination folder.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.MoveItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, destinationFolderId) {
        EwsUtilities_1.EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.Move, idLastSyncTimePairs, contextFolderId, destinationFolderId, null, null, null, null, null, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets flag status for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}   idLastSyncTimePairs   The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}   contextFolderId       The Id of the folder that contains the conversation.
     * @param   {Flag}   flagStatus            Flag status to apply to conversation items.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.SetFlagStatusForItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, flagStatus) {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "SetFlagStatusForItemsInConversations");
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.Flag, idLastSyncTimePairs, contextFolderId, null, null, null, null, null, flagStatus, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    ExchangeService.prototype.SetReadStateForItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, isRead, suppressReadReceipts) {
        if (suppressReadReceipts === void 0) { suppressReadReceipts = null; }
        if (arguments.length === 4) {
            EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this, ExchangeVersion_1.ExchangeVersion.Exchange2013, "SetReadStateForItemsInConversations");
        }
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.SetReadState, idLastSyncTimePairs, contextFolderId, null, null, isRead, null, null, null, suppressReadReceipts, //null when not included in call
        ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Sets the retention policy for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their retention policy set and the date and time conversation was last synced (Items received after that date will not have their retention policy set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {RetentionType}                                 retentionPolicyType    Retention policy type.
     * @param   {Guid?}                                         retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    ExchangeService.prototype.SetRetentionPolicyForItemsInConversations = function (idLastSyncTimePairs, // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId, retentionPolicyType, retentionPolicyTagId) {
        return this.ApplyConversationOneTimeAction(ConversationActionType_1.ConversationActionType.SetRetentionPolicy, idLastSyncTimePairs, contextFolderId, null, null, null, retentionPolicyType, retentionPolicyTagId, null, null, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /* #end region Conversation */
    /* #region Id conversion operations */
    /**
     * Converts Id from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase}   id                 The Id to convert.
     * @param   {IdFormat}          destinationFormat   The destination format.
     * @return  {Promise<AlternateIdBase>}     The converted Id :Promise.
     */
    ExchangeService.prototype.ConvertId = function (id, destinationFormat) {
        EwsUtilities_1.EwsUtilities.ValidateParam(id, "id");
        return this.InternalConvertIds([id], destinationFormat, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError).then(function (responses) {
            return responses.__thisIndexer(0).ConvertedId;
        });
    };
    /**
     * Converts multiple Ids from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
     * @param   {IdFormat}              destinationFormat   The destination format.
     * @return  {Promise<ServiceResponseCollection<ConvertIdResponse>>}     A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
     */
    ExchangeService.prototype.ConvertIds = function (ids, destinationFormat) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(ids, "ids");
        return this.InternalConvertIds(ids, destinationFormat, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
    };
    /**
     * Converts multiple Ids from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
     * @param   {IdFormat}              destinationFormat   The destination format.
     * @param   {ServiceErrorHandling}  errorHandling       Type of error handling to perform.
     * @return  {Promise<ServiceResponseCollection<ConvertIdResponse>>}     A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
     */
    ExchangeService.prototype.InternalConvertIds = function (ids, destinationFormat, errorHandling) {
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(ids, "ids");
        var request = new ConvertIdRequest_1.ConvertIdRequest(this, errorHandling);
        ExtensionMethods_1.ArrayHelper.AddRange(request.Ids, ids); //request.Ids.AddRange(ids);
        request.DestinationFormat = destinationFormat;
        return request.Execute();
    };
    ExchangeService.prototype.AddDelegates = function (mailbox, meetingRequestsDeliveryScope, delegateUser) {
        var delegateUsers = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            delegateUsers[_i - 3] = arguments[_i];
        }
        if (delegateUser) { //info: rest parameters are optional for typescript
            if (ExtensionMethods_1.ArrayHelper.isArray(delegateUser)) {
                ExtensionMethods_1.ArrayHelper.AddRange(delegateUsers, delegateUser);
            }
            else {
                delegateUsers.push(delegateUser);
            }
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(delegateUsers, "delegateUsers");
        var request = new AddDelegateRequest_1.AddDelegateRequest(this);
        request.Mailbox = mailbox;
        ExtensionMethods_1.ArrayHelper.AddRange(request.DelegateUsers, delegateUsers); //request.DelegateUsers.AddRange(delegateUsers);
        request.MeetingRequestsDeliveryScope = meetingRequestsDeliveryScope;
        return request.Execute().then(function (response) {
            return response.DelegateUserResponses;
        });
    };
    ExchangeService.prototype.GetDelegates = function (mailbox, includePermissions, userId) {
        var userIds = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            userIds[_i - 3] = arguments[_i];
        }
        if (userId) { //info: rest parameters are optional for typescript
            if (ExtensionMethods_1.ArrayHelper.isArray(userId)) {
                ExtensionMethods_1.ArrayHelper.AddRange(userIds, userId);
            }
            else {
                userIds.push(userId);
            }
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(mailbox, "mailbox");
        var request = new GetDelegateRequest_1.GetDelegateRequest(this);
        request.Mailbox = mailbox;
        ExtensionMethods_1.ArrayHelper.AddRange(request.UserIds, userIds); //request.UserIds.AddRange(userIds);
        request.IncludePermissions = includePermissions;
        return request.Execute().then(function (response) {
            var delegateInformation = new DelegateInformation_1.DelegateInformation(response.DelegateUserResponses, response.MeetingRequestsDeliveryScope);
            return delegateInformation;
        });
    };
    ExchangeService.prototype.RemoveDelegates = function (mailbox, userId) {
        var userIds = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            userIds[_i - 2] = arguments[_i];
        }
        if (userId) { //info: rest parameters are optional for typescript
            if (ExtensionMethods_1.ArrayHelper.isArray(userId)) {
                ExtensionMethods_1.ArrayHelper.AddRange(userIds, userId);
            }
            else {
                userIds.push(userId);
            }
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(userIds, "userIds");
        var request = new RemoveDelegateRequest_1.RemoveDelegateRequest(this);
        request.Mailbox = mailbox;
        ExtensionMethods_1.ArrayHelper.AddRange(request.UserIds, userIds); //request.UserIds.AddRange(userIds);
        return request.Execute().then(function (response) {
            return response.DelegateUserResponses;
        });
    };
    ExchangeService.prototype.UpdateDelegates = function (mailbox, meetingRequestsDeliveryScope, delegateUser) {
        var delegateUsers = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            delegateUsers[_i - 3] = arguments[_i];
        }
        if (delegateUser) { //info: rest parameters are optional for typescript
            if (ExtensionMethods_1.ArrayHelper.isArray(delegateUser)) {
                ExtensionMethods_1.ArrayHelper.AddRange(delegateUsers, delegateUser);
            }
            else {
                delegateUsers.push(delegateUser);
            }
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(mailbox, "mailbox");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(delegateUsers, "delegateUsers");
        var request = new UpdateDelegateRequest_1.UpdateDelegateRequest(this);
        request.Mailbox = mailbox;
        ExtensionMethods_1.ArrayHelper.AddRange(request.DelegateUsers, delegateUsers); //request.DelegateUsers.AddRange(delegateUsers);
        request.MeetingRequestsDeliveryScope = meetingRequestsDeliveryScope;
        return request.Execute().then(function (response) {
            return response.DelegateUserResponses;
        });
    };
    /* #endregion Delegate management operations */
    /* #region UserConfiguration operations */
    /**
     * Creates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {Promise<void>}       :Promise.
     */
    ExchangeService.prototype.CreateUserConfiguration = function (userConfiguration) {
        EwsUtilities_1.EwsUtilities.ValidateParam(userConfiguration, "userConfiguration");
        var request = new CreateUserConfigurationRequest_1.CreateUserConfigurationRequest(this);
        request.UserConfiguration = userConfiguration;
        return request.Execute();
    };
    /**
     * Deletes a UserConfiguration.
     *
     * @param   {string}    name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}  parentFolderId   Id of the folder containing the UserConfiguration.
     * @return  {Promise<void>}     :Promise.
     */
    ExchangeService.prototype.DeleteUserConfiguration = function (name, parentFolderId) {
        EwsUtilities_1.EwsUtilities.ValidateParam(name, "name");
        EwsUtilities_1.EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        var request = new DeleteUserConfigurationRequest_1.DeleteUserConfigurationRequest(this);
        request.Name = name;
        request.ParentFolderId = parentFolderId;
        return request.Execute();
    };
    /**
     * Gets a UserConfiguration.
     *
     * @param   {string}                        name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}                      parentFolderId   Id of the folder containing the UserConfiguration.
     * @param   {UserConfigurationProperties}   properties       Properties to retrieve.
     * @return  {Promise<UserConfiguration>}    A UserConfiguration.
     */
    ExchangeService.prototype.GetUserConfiguration = function (name, parentFolderId, properties) {
        EwsUtilities_1.EwsUtilities.ValidateParam(name, "name");
        EwsUtilities_1.EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        var request = new GetUserConfigurationRequest_1.GetUserConfigurationRequest(this);
        request.Name = name;
        request.ParentFolderId = parentFolderId;
        request.Properties = properties;
        return request.Execute().then(function (response) {
            return response.__thisIndexer(0).UserConfiguration;
        });
    };
    /**
     * Loads the properties of the specified userConfiguration.
     *
     * @param   {UserConfiguration}             userConfiguration   The userConfiguration containing properties to load.
     * @param   {UserConfigurationProperties}   properties          Properties to retrieve.
     * @return  {Promise<void>}                 :Promise.
     */
    ExchangeService.prototype.LoadPropertiesForUserConfiguration = function (userConfiguration, properties) {
        EwsLogging_1.EwsLogging.Assert(userConfiguration != null, "ExchangeService.LoadPropertiesForUserConfiguration", "userConfiguration is null");
        var request = new GetUserConfigurationRequest_1.GetUserConfigurationRequest(this);
        request.UserConfiguration = userConfiguration;
        request.Properties = properties;
        return request.Execute();
    };
    /**
     * Updates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {Promise<void>}       :Promise.
     */
    ExchangeService.prototype.UpdateUserConfiguration = function (userConfiguration) {
        EwsUtilities_1.EwsUtilities.ValidateParam(userConfiguration, "userConfiguration");
        var request = new UpdateUserConfigurationRequest_1.UpdateUserConfigurationRequest(this);
        request.UserConfiguration = userConfiguration;
        return request.Execute();
    };
    ExchangeService.prototype.GetInboxRules = function (mailboxSmtpAddress) {
        if (mailboxSmtpAddress === void 0) { mailboxSmtpAddress = null; }
        var request = new GetInboxRulesRequest_1.GetInboxRulesRequest(this);
        if (arguments.length > 0) {
            EwsUtilities_1.EwsUtilities.ValidateParam(mailboxSmtpAddress, "MailboxSmtpAddress");
            request.MailboxSmtpAddress = mailboxSmtpAddress;
        }
        return request.Execute().then(function (response) {
            return response.Rules;
        });
    };
    ExchangeService.prototype.UpdateInboxRules = function (operations, removeOutlookRuleBlob, mailboxSmtpAddress) {
        var request = new UpdateInboxRulesRequest_1.UpdateInboxRulesRequest(this);
        request.InboxRuleOperations = operations;
        request.RemoveOutlookRuleBlob = removeOutlookRuleBlob;
        if (arguments.length > 2) {
            request.MailboxSmtpAddress = mailboxSmtpAddress;
        }
        return request.Execute();
    };
    /* #endregion InboxRule operations */
    /* #region eDiscovery/Compliance operations */
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
    ExchangeService.prototype.CreateGetNonIndexableItemDetailsRequest = function (parameters) {
        EwsUtilities_1.EwsUtilities.ValidateParam(parameters, "parameters");
        EwsUtilities_1.EwsUtilities.ValidateParam(parameters.Mailboxes, "parameters.Mailboxes");
        var request = new GetNonIndexableItemDetailsRequest_1.GetNonIndexableItemDetailsRequest(this);
        request.Mailboxes = parameters.Mailboxes;
        request.PageSize = parameters.PageSize;
        request.PageItemReference = parameters.PageItemReference;
        request.PageDirection = parameters.PageDirection;
        request.SearchArchiveOnly = parameters.SearchArchiveOnly;
        return request;
    };
    /**
     * Create get non indexable item statistics request
     *
     * @param   {GetNonIndexableItemStatisticsParameters}   parameters   Get non indexable item statistics parameters
     * @return  {GetNonIndexableItemStatisticsRequest}      Service response object
     */
    ExchangeService.prototype.CreateGetNonIndexableItemStatisticsRequest = function (parameters) {
        EwsUtilities_1.EwsUtilities.ValidateParam(parameters, "parameters");
        EwsUtilities_1.EwsUtilities.ValidateParam(parameters.Mailboxes, "parameters.Mailboxes");
        var request = new GetNonIndexableItemStatisticsRequest_1.GetNonIndexableItemStatisticsRequest(this);
        request.Mailboxes = parameters.Mailboxes;
        request.SearchArchiveOnly = parameters.SearchArchiveOnly;
        return request;
    };
    /**
     * Creates SearchMailboxesRequest from SearchMailboxesParameters
     *
     * @param   {SearchMailboxesParameters}   searchParameters   search parameters
     * @return  {SearchMailboxesRequest}      request object
     */
    ExchangeService.prototype.CreateSearchMailboxesRequest = function (searchParameters) {
        var request = new SearchMailboxesRequest_1.SearchMailboxesRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        ExtensionMethods_1.ArrayHelper.AddRange(request.SearchQueries, searchParameters.SearchQueries); //request.SearchQueries.AddRange(searchParameters.SearchQueries);
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
    };
    /**
     * Get dicovery search configuration
     *
     * @param   {string}    searchId                       Search Id
     * @param   {boolean}   expandGroupMembership          True if want to expand group membership
     * @param   {boolean}   inPlaceHoldConfigurationOnly   True if only want the inplacehold configuration
     * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response object    :Promise.
     */
    ExchangeService.prototype.GetDiscoverySearchConfiguration = function (searchId, expandGroupMembership, inPlaceHoldConfigurationOnly) {
        var request = new GetDiscoverySearchConfigurationRequest_1.GetDiscoverySearchConfigurationRequest(this);
        request.SearchId = searchId;
        request.ExpandGroupMembership = expandGroupMembership;
        request.InPlaceHoldConfigurationOnly = inPlaceHoldConfigurationOnly;
        return request.Execute();
    };
    /**
     * Get hold on mailboxes
     *
     * @param   {string}   holdId   Hold id
     * @return  {Promise<GetHoldOnMailboxesResponse>}       Service response object
     */
    ExchangeService.prototype.GetHoldOnMailboxes = function (holdId) {
        var request = new GetHoldOnMailboxesRequest_1.GetHoldOnMailboxesRequest(this);
        request.HoldId = holdId;
        return request.Execute();
    };
    ExchangeService.prototype.GetNonIndexableItemDetails = function (mailboxesOrParameters, pageSize, pageItemReference, pageDirection) {
        if (pageSize === void 0) { pageSize = null; }
        if (pageItemReference === void 0) { pageItemReference = null; }
        if (pageDirection === void 0) { pageDirection = null; }
        var parameters = null;
        if (mailboxesOrParameters instanceof NonIndexableItemParameters_1.GetNonIndexableItemDetailsParameters) {
            parameters = mailboxesOrParameters;
        }
        else {
            parameters = new NonIndexableItemParameters_1.GetNonIndexableItemDetailsParameters();
            parameters.Mailboxes = mailboxesOrParameters;
            parameters.PageSize = pageSize;
            parameters.PageItemReference = pageItemReference;
            parameters.PageDirection = pageDirection;
            parameters.SearchArchiveOnly = false;
        }
        var request = this.CreateGetNonIndexableItemDetailsRequest(parameters);
        return request.Execute();
    };
    ExchangeService.prototype.GetNonIndexableItemStatistics = function (mailboxesOrParameters) {
        var parameters = null;
        if (mailboxesOrParameters instanceof NonIndexableItemParameters_1.GetNonIndexableItemStatisticsParameters) {
            parameters = mailboxesOrParameters;
        }
        else {
            parameters = new NonIndexableItemParameters_1.GetNonIndexableItemStatisticsParameters();
            parameters.Mailboxes = mailboxesOrParameters;
            parameters.SearchArchiveOnly = false;
        }
        var request = this.CreateGetNonIndexableItemStatisticsRequest(parameters);
        return request.Execute();
    };
    /**
     * Get searchable mailboxes
     *
     * @param   {string}    searchFilter            Search filter
     * @param   {boolean}   expandGroupMembership   True if want to expand group membership
     * @return  {Promise<GetSearchableMailboxesResponse>}       Service response object :Promise
     */
    ExchangeService.prototype.GetSearchableMailboxes = function (searchFilter, expandGroupMembership) {
        var request = new GetSearchableMailboxesRequest_1.GetSearchableMailboxesRequest(this);
        request.SearchFilter = searchFilter;
        request.ExpandGroupMembership = expandGroupMembership;
        return request.Execute();
    };
    ExchangeService.prototype.SearchMailboxes = function (mailboxQueriesOrSearchParameters, resultType, sortByProperty, sortOrder, pageSize, pageDirection, pageItemReference) {
        if (resultType === void 0) { resultType = SearchResultType_1.SearchResultType.PreviewOnly; }
        if (sortByProperty === void 0) { sortByProperty = null; }
        if (sortOrder === void 0) { sortOrder = SortDirection_1.SortDirection.Ascending; }
        if (pageSize === void 0) { pageSize = 0; }
        if (pageDirection === void 0) { pageDirection = SearchPageDirection_1.SearchPageDirection.Next; }
        if (pageItemReference === void 0) { pageItemReference = null; }
        var request = null;
        if (mailboxQueriesOrSearchParameters instanceof SearchMailboxesParameters_1.SearchMailboxesParameters) {
            var searchParameters = null;
            searchParameters = mailboxQueriesOrSearchParameters;
            EwsUtilities_1.EwsUtilities.ValidateParam(searchParameters, "searchParameters");
            EwsUtilities_1.EwsUtilities.ValidateParam(searchParameters.SearchQueries, "searchParameters.SearchQueries");
            request = this.CreateSearchMailboxesRequest(searchParameters);
        }
        else {
            request = new SearchMailboxesRequest_1.SearchMailboxesRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
            if (mailboxQueriesOrSearchParameters != null) {
                ExtensionMethods_1.ArrayHelper.AddRange(request.SearchQueries, mailboxQueriesOrSearchParameters);
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
    };
    ExchangeService.prototype.SetHoldOnMailboxes = function (holdIdOrParameters, _actionType, _query, mailboxesOrInPlaceHoldIdentity, _itemHoldPeriod) {
        if (_actionType === void 0) { _actionType = null; }
        if (_query === void 0) { _query = null; }
        if (mailboxesOrInPlaceHoldIdentity === void 0) { mailboxesOrInPlaceHoldIdentity = null; }
        if (_itemHoldPeriod === void 0) { _itemHoldPeriod = null; }
        var holdId = holdIdOrParameters;
        var actionType = _actionType;
        var query = _query;
        var mailboxes = mailboxesOrInPlaceHoldIdentity;
        var inPlaceHoldIdentity = mailboxesOrInPlaceHoldIdentity;
        var itemHoldPeriod = _itemHoldPeriod;
        var request = new SetHoldOnMailboxesRequest_1.SetHoldOnMailboxesRequest(this);
        var argsLength = arguments.length;
        if (argsLength === 1) { //SetHoldOnMailboxesParameters
            var parameters = holdIdOrParameters;
            EwsUtilities_1.EwsUtilities.ValidateParam(parameters, "parameters");
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
            if (ExtensionMethods_1.ArrayHelper.isArray(mailboxesOrInPlaceHoldIdentity)) {
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
    };
    /* #endregion eDiscovery/Compliance operations */
    /* #region MRM operations */
    /**
     * Get user retention policy tags.
     *
     * @return  {Promise<GetUserRetentionPolicyTagsResponse>}       Service response object.
     */
    ExchangeService.prototype.GetUserRetentionPolicyTags = function () {
        var request = new GetUserRetentionPolicyTagsRequest_1.GetUserRetentionPolicyTagsRequest(this);
        return request.Execute();
    };
    /* #endregion MRM operations */
    /* #region Autodiscover */
    /**
     * Adjusts the service URI based on the current type of credentials.
     *
     * @param   {Uri}   uri   The URI.
     * @return  {Uri}         Adjusted URL.
     */
    ExchangeService.prototype.AdjustServiceUriFromCredentials = function (uri) {
        return (this.Credentials != null)
            ? this.Credentials.AdjustUrl(uri)
            : uri;
    };
    ExchangeService.prototype.AutodiscoverUrl = function (emailAddress, validateRedirectionUrlCallback) {
        //validateRedirectionUrlCallback = validateRedirectionUrlCallback || this.DefaultAutodiscoverRedirectionUrlValidationCallback;
        var _this = this;
        if (validateRedirectionUrlCallback === void 0) { validateRedirectionUrlCallback = this.DefaultAutodiscoverRedirectionUrlValidationCallback; }
        var exchangeServiceUrl = null;
        if (this.RequestedServerVersion > ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            return this.GetAutodiscoverUrl(emailAddress, this.RequestedServerVersion, validateRedirectionUrlCallback).then(function (url) {
                exchangeServiceUrl = url;
                _this.Url = _this.AdjustServiceUriFromCredentials(exchangeServiceUrl);
                //return;
            }, function (err) {
                //catch (AutodiscoverLocalException ex)
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverResponse, ExtensionMethods_1.StringHelper.Format("Autodiscover service call failed with error '{0}'. Will try legacy service", err));
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
                var exchangeServiceUrl = _this.GetAutodiscoverUrl(emailAddress, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, validateRedirectionUrlCallback).then(function (url) {
                    _this.Url = _this.AdjustServiceUriFromCredentials(url);
                });
            });
        }
    };
    /**
     * Default implementation of AutodiscoverRedirectionUrlValidationCallback. Always returns true indicating that the URL can be used.
     *
     * @param   {string}   redirectionUrl   The redirection URL.
     * @return  {boolean}                    Returns true.
     */
    ExchangeService.prototype.DefaultAutodiscoverRedirectionUrlValidationCallback = function (redirectionUrl) {
        throw new AutodiscoverLocalException_1.AutodiscoverLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.AutodiscoverRedirectBlocked, redirectionUrl));
    };
    /**
     * Gets the EWS URL from Autodiscover.
     *
     * @param   {string}                                        emailAddress                     The email address.
     * @param   {ExchangeVersion}                               requestedServerVersion           Exchange version.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}  validateRedirectionUrlCallback   The validate redirection URL callback.
     * @return  {Promise<Uri>}                                  Ews URL :Promise.
     */
    ExchangeService.prototype.GetAutodiscoverUrl = function (emailAddress, requestedServerVersion, validateRedirectionUrlCallback) {
        var _this = this;
        var autodiscoverService = new AutodiscoverService_1.AutodiscoverService(null, null, requestedServerVersion);
        autodiscoverService.Credentials = this.Credentials;
        autodiscoverService.XHRApi = this.XHRApi;
        autodiscoverService.RedirectionUrlValidationCallback = validateRedirectionUrlCallback,
            autodiscoverService.EnableScpLookup = this.EnableScpLookup;
        return autodiscoverService.GetUserSettings(emailAddress, UserSettingName_1.UserSettingName.InternalEwsUrl, UserSettingName_1.UserSettingName.ExternalEwsUrl)
            .then(function (response) {
            switch (response.ErrorCode) {
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.NoError:
                    return _this.GetEwsUrlFromResponse(response, autodiscoverService.IsExternal);
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.InvalidUser:
                    throw new ServiceRemoteException_1.ServiceRemoteException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidUser, emailAddress));
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.InvalidRequest:
                    throw new ServiceRemoteException_1.ServiceRemoteException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidAutodiscoverRequest, response.ErrorMessage));
                default:
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No EWS Url returned for user {0}, error code is {1}", emailAddress, response.ErrorCode));
                    throw new ServiceRemoteException_1.ServiceRemoteException(response.ErrorMessage);
            }
        }, function (err) {
            throw err;
        });
    };
    /**
     * Gets the EWS URL from Autodiscover GetUserSettings response.
     *
     * @param   {GetUserSettingsResponse}   response     The response.
     * @param   {boolean}                   isExternal   If true, Autodiscover call was made externally.
     * @return  {Uri}                       EWS URL.
     */
    ExchangeService.prototype.GetEwsUrlFromResponse = function (response, isExternal) {
        var uriString = response.GetSettingValue(UserSettingName_1.UserSettingName.ExternalEwsUrl);
        // Figure out which URL to use: Internal or External.
        // AutoDiscover may not return an external protocol. First try external, then internal.
        // Either protocol may be returned without a configured URL.
        if ((isExternal &&
            uriString) &&
            !ExtensionMethods_1.StringHelper.IsNullOrEmpty(uriString)) {
            return new Uri_1.Uri(uriString);
        }
        else {
            uriString = response.GetSettingValue(UserSettingName_1.UserSettingName.InternalEwsUrl) || uriString;
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(uriString)) {
                return new Uri_1.Uri(uriString);
            }
        }
        // If Autodiscover doesn't return an internal or external EWS URL, throw an exception.
        throw new AutodiscoverLocalException_1.AutodiscoverLocalException(Strings_1.Strings.AutodiscoverDidNotReturnEwsUrl);
    };
    ExchangeService.prototype.GetClientAccessToken = function (tokenRequestsOrIdAndTypes) {
        if (!tokenRequestsOrIdAndTypes && tokenRequestsOrIdAndTypes.length === 0) {
            throw new ArgumentException_1.ArgumentOutOfRangeException(Strings_1.Strings.IndexIsOutOfRange);
        }
        var requestList = [];
        if (tokenRequestsOrIdAndTypes[0] instanceof ClientAccessTokenRequest_1.ClientAccessTokenRequest) {
            requestList = tokenRequestsOrIdAndTypes;
        }
        else {
            for (var _i = 0, _a = tokenRequestsOrIdAndTypes; _i < _a.length; _i++) {
                var idAndType = _a[_i];
                var clientAccessTokenRequest = new ClientAccessTokenRequest_1.ClientAccessTokenRequest(idAndType.key, idAndType.value);
                requestList.push(clientAccessTokenRequest);
            }
        }
        var request = new GetClientAccessTokenRequest_1.GetClientAccessTokenRequest(this, ServiceErrorHandling_1.ServiceErrorHandling.ReturnErrors);
        request.TokenRequests = requestList;
        return request.Execute();
    };
    ExchangeService.prototype.GetAppManifests = function (apiVersionSupported, schemaVersionSupported) {
        if (apiVersionSupported === void 0) { apiVersionSupported = null; }
        if (schemaVersionSupported === void 0) { schemaVersionSupported = null; }
        var argsLength = arguments.length;
        var request = new GetAppManifestsRequest_1.GetAppManifestsRequest(this);
        if (argsLength !== 0) {
            request.ApiVersionSupported = apiVersionSupported;
            request.SchemaVersionSupported = schemaVersionSupported;
        }
        return request.Execute().then(function (response) {
            if (argsLength !== 0) {
                return response.Apps;
            }
            else {
                return response.Manifests;
            }
        });
    };
    ExchangeService.prototype.GetAppMarketplaceUrl = function (apiVersionSupported, schemaVersionSupported) {
        if (apiVersionSupported === void 0) { apiVersionSupported = null; }
        if (schemaVersionSupported === void 0) { schemaVersionSupported = null; }
        var request = new GetAppMarketplaceUrlRequest_1.GetAppMarketplaceUrlRequest(this);
        request.ApiVersionSupported = apiVersionSupported;
        request.SchemaVersionSupported = schemaVersionSupported;
        return request.Execute().then(function (response) {
            return response.AppMarketplaceUrl;
        });
    };
    /**
     * Disable an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}                id              App ID
     * @param   {DisableReasonType}     disableReason   Disable reason
     * @return  {Promise<void>}         :Promise.
     */
    ExchangeService.prototype.DisableApp = function (id, disableReason) {
        EwsUtilities_1.EwsUtilities.ValidateParam(id, "id");
        EwsUtilities_1.EwsUtilities.ValidateParam(disableReason, "disableReason");
        var request = new DisableAppRequest_1.DisableAppRequest(this, id, disableReason);
        return request.Execute();
    };
    /**
     * Install an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}   manifestStream   The manifest's plain text XML as base64 encoded string.
     * @return  {Promise<void>}     :Promise.
     */
    ExchangeService.prototype.InstallApp = function (manifestStream) {
        EwsUtilities_1.EwsUtilities.ValidateParam(manifestStream, "manifestStream");
        var request = new InstallAppRequest_1.InstallAppRequest(this, manifestStream);
        return request.Execute();
    };
    /**
     * Uninstall an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}   id   App ID
     * @return  {Promise<void>}     :Promise.
     */
    ExchangeService.prototype.UninstallApp = function (id) {
        EwsUtilities_1.EwsUtilities.ValidateParam(id, "id");
        var request = new UninstallAppRequest_1.UninstallAppRequest(this, id);
        return request.Execute();
    };
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
    ExchangeService.IsMajorMinor = function (versionPart) {
        var MajorMinorSeparator = '.'; //char
        var parts = versionPart.split(MajorMinorSeparator);
        if (parts.length != 2) {
            return false;
        }
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var s = parts_1[_i];
            for (var _a = 0, _b = s.split(''); _a < _b.length; _a++) {
                var c = _b[_a];
                if (isNaN(c)) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * @internal Validates this instance.
     *
     */
    ExchangeService.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.Url == null) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.ServiceUrlMustBeSet);
        }
        if (this.PrivilegedUserId != null && this.ImpersonatedUserId != null) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.CannotSetBothImpersonatedAndPrivilegedUser);
        }
        // only one of PrivilegedUserId|ImpersonatedUserId|ManagementRoles can be set.
    };
    /**
     * @internal Validates a new-style version string. This validation is not as strict as server-side validation.
     *
     * @param   {string}   version   the version string
     */
    ExchangeService.ValidateTargetVersion = function (version) {
        var ParameterSeparator = ';'; //char
        var LegacyVersionPrefix = "Exchange20";
        var ParameterValueSeparator = '='; //char
        var ParameterName = "minimum";
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(version)) {
            throw new ArgumentException_1.ArgumentException("Target version must not be empty.");
        }
        var parts = version.trim().split(ParameterSeparator);
        if (parts.length > 2) {
            throw new ArgumentException_1.ArgumentException("Target version should have the form.");
        }
        var skipPart1 = true;
        if (parts.length === 2) {
            // Validate the optional minimum version parameter, "minimum=X.Y"
            var part2 = parts[1].trim();
            var minParts = part2.split(ParameterValueSeparator);
            if (minParts.length == 2 &&
                minParts[0].trim().toUpperCase() === ParameterName.toUpperCase() &&
                ExchangeService.IsMajorMinor(minParts[1].trim())) {
                skipPart1 = false;
            }
            else {
                throw new ArgumentException_1.ArgumentException("Target version must match X.Y or Exchange20XX.");
            }
        }
        if (parts.length >= 0 && !skipPart1) {
            // Validate the header value. We allow X.Y or Exchange20XX.
            var part1 = parts[0].trim();
            if (parts[0].indexOf(LegacyVersionPrefix) === 0) {
                // Close enough; misses corner cases like "Exchange2001". Server will do complete validation.
            }
            else if (ExchangeService.IsMajorMinor(part1)) {
                // Also close enough; misses corner cases like ".5".
            }
            else {
                throw new ArgumentException_1.ArgumentException("Target version must match X.Y or Exchange20XX.");
            }
        }
    };
    /* #endregion Validation */
    /* #region Utilities */
    /**
     * @internal Creates an IXHROptions instance and initializes it with the appropriate parameters, based on the configuration of this service object.
     *
     * @param   {string}   methodName   Name of the method.
     * @return  {IXHROptions}           An instance of IXHROptions to call web service with.
     */
    ExchangeService.prototype.PrepareHttpWebRequest = function (methodName) {
        var endpoint = this.Url;
        //this.RegisterCustomBasicAuthModule();
        if (this.RenderingMethod === RenderingMode_1.RenderingMode.JSON) {
            //endpoint = new Uri(
            //    endpoint,
            //    string.Format("{0}/{1}{2}", endpoint.AbsolutePath, methodName, endpoint.Query));
        }
        else {
            endpoint = this.AdjustServiceUriFromCredentials(endpoint);
        }
        var request = this.PrepareHttpWebRequestForUrl(endpoint, this.AcceptGzipEncoding, true);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.TargetServerVersion)) {
            request.headers[ExchangeService.TargetServerVersionHeaderName] = this.TargetServerVersion;
        }
        return request;
    };
    /**
     * @internal Processes an HTTP error response.
     *
     * @param   {XMLHttpRequest}   httpWebResponse      The HTTP web response.
     * @param   {SoapFaultDetails}   soapFault          The SoapFault Instance.
     */
    ExchangeService.prototype.ProcessHttpErrorResponse = function (httpWebResponse, soapFault) {
        this.InternalProcessHttpErrorResponse(httpWebResponse, soapFault, TraceFlags_1.TraceFlags.EwsResponseHttpHeaders, TraceFlags_1.TraceFlags.EwsResponse);
    };
    /**
     * Sets the type of the content.
     *
     * @param   {IXHROptions}   request   The request.
     */
    ExchangeService.prototype.SetContentType = function (request /*IEwsHttpWebRequest*/) {
        if (this.renderingMode == RenderingMode_1.RenderingMode.Xml) {
            request.headers["Content-Type"] = "text/xml; charset=utf-8";
            request.headers["Accept"] = "text/xml";
        }
        else if (this.renderingMode == RenderingMode_1.RenderingMode.JSON) {
            request.headers["Content-Type"] = "application/json; charset=utf-8";
            request.headers["Accept"] = "application/json";
        }
        else {
            _super.prototype.SetContentType.call(this, request);
        }
    };
    /* #endregion Utilities */
    //#region Additional Operations not in official EWS Managed Api in the commit
    /**
     * Get the TimeZoneInfo objects from server
     *
     * @returns {Promise<TimeZoneInfo[]>}
     */
    ExchangeService.prototype.GetServerTimeZones = function () {
        var argsLength = arguments.length;
        var request = new GetServerTimeZonesRequest_1.GetServerTimeZonesRequest(this);
        return request.Execute().then(function (response) {
            return response.Responses[0].TimeZones;
        });
    };
    /* #region Constants */
    ExchangeService.TargetServerVersionHeaderName = "X-EWS-TargetVersion";
    return ExchangeService;
}(ExchangeServiceBase_1.ExchangeServiceBase));
exports.ExchangeService = ExchangeService;
//module ExchangeService { -> moved to its own file to remove circular dependency.
//    export enum RenderingMode {
//        Xml = 0,
//        JSON = 1
//    }
//}
