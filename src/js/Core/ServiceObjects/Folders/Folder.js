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
var EwsLogging_1 = require("../../EwsLogging");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var FolderView_1 = require("../../../Search/FolderView");
var Grouping_1 = require("../../../Search/Grouping");
var ItemView_1 = require("../../../Search/ItemView");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var SearchFilter_1 = require("../../../Search/Filters/SearchFilter");
var ServiceErrorHandling_1 = require("../../../Enumerations/ServiceErrorHandling");
var ServiceObjectSchema_1 = require("../Schemas/ServiceObjectSchema");
var ViewBase_1 = require("../../../Search/ViewBase");
var WellKnownFolderName_1 = require("../../../Enumerations/WellKnownFolderName");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObject_1 = require("../ServiceObject");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    //get _FolderType(): string { return XmlElementNames.Folder; }
    /**
     * Initializes an unsaved local instance of **Folder**. To bind to an existing folder, use Folder.Bind() instead.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    function Folder(service) {
        return _super.call(this, service) || this;
    }
    Object.defineProperty(Folder.prototype, "Id", {
        /**
         * Gets the Id of the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(this.GetIdPropertyDefinition()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "ParentFolderId", {
        /**
         * Gets the Id of this folder's parent folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.ParentFolderId); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "ChildFolderCount", {
        /**
         * Gets the number of child folders this folder has.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.ChildFolderCount); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "DisplayName", {
        /**
         * Gets or sets the display name of the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.DisplayName); },
        set: function (value) { this.PropertyBag._setItem(Schemas_1.Schemas.FolderSchema.DisplayName, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "FolderClass", {
        /**
         * Gets or sets the custom class name of this folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.FolderClass); },
        set: function (value) { this.PropertyBag._setItem(Schemas_1.Schemas.FolderSchema.FolderClass, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "TotalCount", {
        /**
         * Gets the total number of items contained in the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.TotalCount); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "ExtendedProperties", {
        /**
         * Gets a list of extended properties associated with the folder. **Unstable Need testing**
         *
         */
        get: function () { return this.PropertyBag._getItem(ServiceObjectSchema_1.ServiceObjectSchema.ExtendedProperties); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "ManagedFolderInformation", {
        /**
         * Gets the Email Lifecycle Management (ELC) information associated with the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.ManagedFolderInformation); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "EffectiveRights", {
        /**
         * Gets a value indicating the effective rights the current authenticated user has on the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.EffectiveRights); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "Permissions", {
        /**
         * Gets a list of permissions for the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.Permissions); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "UnreadCount", {
        /**
         * Gets the number of unread items in the folder.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.UnreadCount); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "PolicyTag", {
        /**
         * Gets or sets the policy tag.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.PolicyTag); },
        set: function (value) { this.PropertyBag._setItem(Schemas_1.Schemas.FolderSchema.PolicyTag, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "ArchiveTag", {
        /**
         * Gets or sets the archive tag.
         *
         */
        get: function () { return this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.ArchiveTag); },
        set: function (value) { this.PropertyBag._setItem(Schemas_1.Schemas.FolderSchema.ArchiveTag, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "WellKnownFolderNameAsString", {
        /**
         * Gets the well known name of this folder, if any, as a string.
         * **value** - The well known name of this folder as a string, or null if this folder isn't a well known folder.
         *
         */
        get: function () { return WellKnownFolderName_1.WellKnownFolderName[this.PropertyBag._getItem(Schemas_1.Schemas.FolderSchema.WellKnownFolderName)]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "WellKnownFolderName", {
        /**
         * Gets the well known name of this folder, if any.
         * **value** - The well known name of this folder, or null if this folder isn't a well known folder.
         *
         */
        get: function () { return WellKnownFolderName_1.WellKnownFolderName[this.WellKnownFolderNameAsString] || null; },
        enumerable: true,
        configurable: true
    });
    Folder.Bind = function (service, idOrName, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        if (idOrName instanceof FolderId_1.FolderId) {
            return service.BindToFolder(idOrName, propertySet);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder(new FolderId_1.FolderId(idOrName), propertySet);
        }
        EwsLogging_1.EwsLogging.Assert(false, "Folder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should not be  reached");
    };
    Folder.prototype.Copy = function (destinationFolderIdOrName) {
        this.ThrowIfThisIsNew();
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        if (typeof destinationFolderIdOrName === 'undefined') {
            EwsLogging_1.EwsLogging.Assert(false, "Folder.Copy", "unknown paramete type");
            throw new Error("unknow parameter type. this should not be  reached");
        }
        var folderId = destinationFolderIdOrName;
        if (typeof destinationFolderIdOrName === 'number')
            folderId = new FolderId_1.FolderId(destinationFolderIdOrName);
        return this.Service.CopyFolder(this.Id, folderId);
    };
    /**
     * Deletes the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   Deletion mode.
     */
    Folder.prototype.Delete = function (deleteMode) { return this.InternalDelete(deleteMode, null, null); };
    /**
     * Empties the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}    deleteMode         The deletion mode.
     * @param   {boolean}       deleteSubFolders   Indicates whether sub-folders should also be deleted.
     */
    Folder.prototype.Empty = function (deleteMode, deleteSubFolders) {
        this.ThrowIfThisIsNew();
        return this.Service.EmptyFolder(this.Id, deleteMode, deleteSubFolders);
    };
    Folder.prototype.FindFolders = function (viewOrSearchFilter, view) {
        this.ThrowIfThisIsNew();
        //todo: better argument check with ewsutilities
        var argsLength = arguments.length;
        if (argsLength < 1 && argsLength > 2) {
            throw new Error("invalid arguments, check documentation and try again.");
        }
        if (viewOrSearchFilter instanceof FolderView_1.FolderView) {
            return this.Service.FindFolders(this.Id, viewOrSearchFilter);
        }
        else if (viewOrSearchFilter instanceof SearchFilter_1.SearchFilter) {
            if (typeof view === 'undefined' || !(view instanceof FolderView_1.FolderView)) {
                throw new Error("Folder.ts - FindFolders - incorrect uses of parameters at 2nd position, must be FolderView");
            }
            return this.Service.FindFolders(this.Id, viewOrSearchFilter, view);
        }
        else {
            throw new Error("Folder.ts - FindFolders - incorrect uses of parameters at 1st position, must be FolderView or SearchFilter");
        }
    };
    Folder.prototype.FindItems = function (viewQueryStringOrSearchFilter, viewOrGroupBy, groupBy) {
        var argsLength = arguments.length;
        if (argsLength < 1 && argsLength > 3) {
            throw new Error("invalid arguments, check documentation and try again.");
        }
        //todo: better argument check with ewsutilities
        //EwsUtilities.ValidateParam(groupBy, "groupBy");
        //EwsUtilities.ValidateParamAllowNull(searchFilter, "searchFilter");
        //EwsUtilities.ValidateParamAllowNull(queryString, "queryString");
        //position 1 - viewQueryStringOrSearchFilter
        var queryString = null;
        var searchFilter = null;
        var view = null;
        if (typeof viewQueryStringOrSearchFilter === 'string') {
            queryString = viewQueryStringOrSearchFilter;
        }
        else if (viewQueryStringOrSearchFilter instanceof SearchFilter_1.SearchFilter) {
            searchFilter = viewQueryStringOrSearchFilter;
        }
        else if (viewQueryStringOrSearchFilter instanceof ViewBase_1.ViewBase) {
            view = viewQueryStringOrSearchFilter;
        }
        else {
            throw new Error("Folder.ts - FindItems - incorrect uses of parameters at 1st position, must be string, Itemview or SearchFilter");
        }
        var groupResultBy = null;
        var isGroupped = false; // to resturn GroupedFindItemsResults<Item>
        //position 2 - viewOrGroupBy
        if (argsLength >= 2) {
            if (viewOrGroupBy instanceof Grouping_1.Grouping) {
                if (!(viewQueryStringOrSearchFilter instanceof ItemView_1.ItemView)) {
                    throw new Error("Folder.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 1nd position, it must be Itemview when using Grouping at 2nd place");
                }
                groupResultBy = viewOrGroupBy;
                isGroupped = true;
            }
            else if (viewOrGroupBy instanceof ItemView_1.ItemView) {
                view = viewOrGroupBy;
            }
            else {
                throw new Error("ExchangeService.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 2nd position, must be Itemsview or Grouping");
            }
        }
        //position 3 - groupBy
        if (argsLength === 3) {
            if (!(viewOrGroupBy instanceof ItemView_1.ItemView)) {
                throw new Error("Folder.ts - FindItems with " + argsLength + " parameters - incorrect uses of parameter at 1nd position, it must be Itemview when using Grouping at 3rd place");
            }
            groupResultBy = groupBy;
            isGroupped = true;
        }
        return this.InternalFindItems(searchFilter || queryString, view, groupResultBy /* groupBy */)
            .then(function (res) {
            if (isGroupped) {
                return res.__thisIndexer(0).GroupedFindResults;
            }
            return res.__thisIndexer(0).Results;
        });
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Folder.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Folder; };
    /**
     * @internal Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    Folder.prototype.GetChangeXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FolderChange; };
    /**
     * @internal Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    Folder.prototype.GetDeleteFieldXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteFolderField; };
    /**
     * @internal Gets a list of extended properties defined on this object.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    Folder.prototype.GetExtendedProperties = function () { return this.ExtendedProperties; };
    /**
     * @internal Get the property definition for the Id property.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    Folder.prototype.GetIdPropertyDefinition = function () { return Schemas_1.Schemas.FolderSchema.Id; };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Folder.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Folder.prototype.GetSchema = function () { return Schemas_1.Schemas.FolderSchema.Instance; };
    /**
     * @internal Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    Folder.prototype.GetSetFieldXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SetFolderField; };
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    Folder.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        this.ThrowIfThisIsNew();
        return this.Service.DeleteFolder(this.Id, deleteMode);
    };
    Folder.prototype.InternalFindItems = function (searchFilterOrQueryString, view, groupBy) {
        this.ThrowIfThisIsNew();
        var searchFilter = null;
        var queryString = null;
        if (searchFilterOrQueryString instanceof SearchFilter_1.SearchFilter) {
            searchFilter = searchFilterOrQueryString;
        }
        else if (typeof searchFilterOrQueryString === 'string') {
            queryString = searchFilterOrQueryString;
        }
        //debug: //todo: //ref: verify if querystring is null
        return this.Service.FindItems([this.Id], // FolderId[]
        searchFilter, /* searchFilter */ queryString, /* queryString */ view, groupBy, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError);
    };
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Folder.prototype.InternalLoad = function (propertySet) {
        this.ThrowIfThisIsNew();
        return this.Service.LoadPropertiesForFolder(this, propertySet);
    };
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    Folder.prototype.MarkAllItemsAsRead = function (suppressReadReceipts) {
        this.ThrowIfThisIsNew();
        return this.Service.MarkAllItemsAsRead(this.Id, true, suppressReadReceipts);
    };
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    Folder.prototype.MarkAllItemsAsUnread = function (suppressReadReceipts) {
        this.ThrowIfThisIsNew();
        return this.Service.MarkAllItemsAsRead(this.Id, false, suppressReadReceipts);
    };
    Folder.prototype.Move = function (destinationFolderIdOrName) {
        this.ThrowIfThisIsNew();
        if (typeof destinationFolderIdOrName === 'undefined') {
            EwsLogging_1.EwsLogging.Assert(false, "Folder.Move", "unknown paramete type");
            throw new Error("unknow parameter type. this should not be  reached");
        }
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        var folderId = destinationFolderIdOrName;
        if (typeof destinationFolderIdOrName === 'number')
            folderId = new FolderId_1.FolderId(destinationFolderIdOrName);
        return this.Service.MoveFolder(this.Id, folderId);
    };
    /**
     * Removes an extended property.
     *
     * @param   {ExtendedPropertyDefinition}   extendedPropertyDefinition   The extended property definition.
     * @return  {boolean}       True if property was removed.
     */
    Folder.prototype.RemoveExtendedProperty = function (extendedPropertyDefinition) { return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition); };
    Folder.prototype.Save = function (parentFolderIdOrname) {
        this.ThrowIfThisIsNotNew();
        if (typeof parentFolderIdOrname === 'undefined') {
            EwsLogging_1.EwsLogging.Assert(false, "Folder.Save", "unknown paramete type");
            throw new Error("unknow parameter type. this should not be  reached");
        }
        //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        var folderId = parentFolderIdOrname;
        if (typeof parentFolderIdOrname === 'number')
            folderId = new FolderId_1.FolderId(parentFolderIdOrname);
        if (this.IsDirty) {
            return this.Service.CreateFolder(this, folderId);
        }
        else
            return null;
    };
    /**
     * Sets the extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @param   {any}                           value                        The value.
     */
    Folder.prototype.SetExtendedProperty = function (extendedPropertyDefinition, value) { this.ExtendedProperties.SetExtendedProperty(extendedPropertyDefinition, value); };
    /**
     * Applies the local changes that have been made to this folder. Calling this method results in a call to EWS.
     *
     */
    Folder.prototype.Update = function () {
        if (this.IsDirty) {
            if (this.PropertyBag.GetIsUpdateCallNecessary()) {
                return this.Service.UpdateFolder(this);
            }
        }
        return undefined;
    };
    /**
     * @internal Validates this instance.
     *
     */
    Folder.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        // Validate folder permissions
        if (this.PropertyBag.Contains(Schemas_1.Schemas.FolderSchema.Permissions)) {
            this.Permissions.Validate();
        }
    };
    return Folder;
}(ServiceObject_1.ServiceObject));
exports.Folder = Folder;
