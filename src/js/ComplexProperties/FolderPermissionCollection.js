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
var ExchangeWebService_1 = require("../ExchangeWebService");
var FolderPermission_1 = require("./FolderPermission");
var TypeContainer_1 = require("../TypeContainer");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of folder permissions.
 *
 * @sealed
 */
var FolderPermissionCollection = /** @class */ (function (_super) {
    __extends(FolderPermissionCollection, _super);
    /**
     * Initializes a new instance of the **FolderPermissionCollection** class.
     *
     * @param   {Folder}   owner   The folder owner.
     */
    function FolderPermissionCollection(owner) {
        var _this = _super.call(this) || this;
        _this.unknownEntries = [];
        _this.isCalendarFolder = owner instanceof TypeContainer_1.TypeContainer.CalendarFolder; // owner instanceof CalendarFolder;
        return _this;
    }
    Object.defineProperty(FolderPermissionCollection.prototype, "InnerCollectionXmlElementName", {
        /**
         * Gets the name of the inner collection XML element.
         *
         * @value   XML element name.
         */
        get: function () {
            return this.isCalendarFolder ? XmlElementNames_1.XmlElementNames.CalendarPermissions : XmlElementNames_1.XmlElementNames.Permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermissionCollection.prototype, "CollectionItemXmlElementName", {
        /**
         * Gets the name of the collection item XML element.
         *
         * @value   XML element name.
         */
        get: function () {
            return this.isCalendarFolder ? XmlElementNames_1.XmlElementNames.CalendarPermission : XmlElementNames_1.XmlElementNames.Permission;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderPermissionCollection.prototype, "UnknownEntries", {
        /**
         * Gets a list of unknown user Ids in the collection.
         */
        get: function () {
            return this.unknownEntries;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a permission to the collection.
     *
     * @param   {FolderPermission}   permission   The permission to add.
     */
    FolderPermissionCollection.prototype.Add = function (permission) {
        this.InternalAdd(permission);
    };
    /**
     * Adds the specified permissions to the collection.
     *
     * @param   {FolderPermission[]}   permissions   The permissions to add.
     */
    FolderPermissionCollection.prototype.AddRange = function (permissions) {
        ExchangeWebService_1.EwsUtilities.ValidateParam(permissions, "permissions");
        for (var _i = 0, permissions_1 = permissions; _i < permissions_1.length; _i++) {
            var permission = permissions_1[_i];
            this.Add(permission);
        }
    };
    /**
     * Clears this collection.
     */
    FolderPermissionCollection.prototype.Clear = function () {
        this.InternalClear();
    };
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {FolderPermission}          FolderPermission instance.
     */
    FolderPermissionCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        return new FolderPermission_1.FolderPermission();
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {FolderPermission}  FolderPermission instance.
     */
    FolderPermissionCollection.prototype.CreateDefaultComplexProperty = function () {
        return new FolderPermission_1.FolderPermission();
    };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {FolderPermission}      complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    FolderPermissionCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) {
        return this.CollectionItemXmlElementName;
    };
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    FolderPermissionCollection.prototype.CreateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var jsonFolderPermissions = jsObjectCollection[this.InnerCollectionXmlElementName];
        if (jsonFolderPermissions && jsonFolderPermissions[this.CollectionItemXmlElementName])
            jsonFolderPermissions = jsonFolderPermissions[this.CollectionItemXmlElementName];
        if (!Array.isArray(jsonFolderPermissions)) {
            //debugger;
            throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml parsing, jsonproperty must contain collectionxmlelementname and collectionitemelementname underneeth");
        }
        for (var _i = 0, jsonFolderPermissions_1 = jsonFolderPermissions; _i < jsonFolderPermissions_1.length; _i++) {
            var jsonFolderPermission = jsonFolderPermissions_1[_i];
            var permission = new FolderPermission_1.FolderPermission();
            permission.LoadFromXmlJsObject(jsonFolderPermission, service);
            this.InternalAdd(permission);
        }
        if (jsObjectCollection[XmlElementNames_1.XmlElementNames.UnknownEntries]) {
            var jsonUnknownEntries = jsObjectCollection[XmlElementNames_1.XmlElementNames.UnknownEntries];
            if (typeof jsonUnknownEntries !== 'object' && !Array.isArray(jsonFolderPermissions)) {
                //debugger;
                throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml returned - check for consistency, UnknownEntries must be array type");
            }
            for (var _a = 0, jsonUnknownEntries_1 = jsonUnknownEntries; _a < jsonUnknownEntries_1.length; _a++) {
                var jsonUnknownEntry = jsonUnknownEntries_1[_a];
                this.unknownEntries.push(jsonUnknownEntry);
            }
        }
    };
    /**
     * Removes a permission from the collection.
     *
     * @param   {FolderPermission}  permission   The permission to remove.
     * @return  {boolean}           True if the folder permission was successfully removed from the collection, false otherwise.
     */
    FolderPermissionCollection.prototype.Remove = function (permission) {
        return this.InternalRemove(permission);
    };
    /**
     * Removes a permission from the collection.
     *
     * @param   {number}   index   The zero-based index of the permission to remove.
     */
    FolderPermissionCollection.prototype.RemoveAt = function (index) {
        this.InternalRemoveAt(index);
    };
    /**
     * @internal Validates this instance.
     */
    FolderPermissionCollection.prototype.Validate = function () {
        for (var permissionIndex = 0; permissionIndex < this.Items.length; permissionIndex++) {
            var permission = this.Items[permissionIndex];
            permission.Validate(this.isCalendarFolder, permissionIndex);
        }
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    FolderPermissionCollection.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.InnerCollectionXmlElementName);
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var folderPermission = _a[_i];
            folderPermission.WriteToXml(writer, this.GetCollectionItemXmlElementName(folderPermission), undefined, //XmlNamespace - incorrect inheritance error with typesctipt in folderpermission class if removed xmlnamespace parameter
            this.isCalendarFolder);
        }
        writer.WriteEndElement(); // this.InnerCollectionXmlElementName
    };
    return FolderPermissionCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.FolderPermissionCollection = FolderPermissionCollection;
