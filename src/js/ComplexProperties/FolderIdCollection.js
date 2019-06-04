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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var Strings_1 = require("../Strings");
var FolderId_1 = require("./FolderId");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of folder Ids.
 *
 * @sealed
 */
var FolderIdCollection = /** @class */ (function (_super) {
    __extends(FolderIdCollection, _super);
    function FolderIdCollection(folderIds) {
        if (folderIds === void 0) { folderIds = null; }
        var _this = _super.call(this) || this;
        if (folderIds != null) {
            folderIds.forEach(function (folderId) { return _this.InternalAdd(folderId); });
        }
        return _this;
    }
    FolderIdCollection.prototype.Add = function (folderIdOrName) {
        var folderId = null;
        if (typeof folderIdOrName === 'number') {
            folderId = new FolderId_1.FolderId(folderIdOrName);
            if (ExtensionMethods_1.ArrayHelper.Find(this.Items, function (item) { return item.FolderName === folderIdOrName; })) { //if (this.Contains(folderIdOrName)) { // can not use in JavaScript
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.IdAlreadyInList, "folderName");
            }
        }
        else {
            EwsUtilities_1.EwsUtilities.ValidateParam(folderId, "folderId");
            folderId = folderIdOrName;
            if (this.Contains(folderId)) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.IdAlreadyInList, "folderId");
            }
        }
        this.InternalAdd(folderId);
        return folderId;
    };
    /**
     * Clears the collection.
     */
    FolderIdCollection.prototype.Clear = function () {
        this.InternalClear();
    };
    /**
     * @internal Instantiate the appropriate attachment type depending on the current XML element name.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {FolderId}        FolderId.
     */
    FolderIdCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        return new FolderId_1.FolderId();
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {FolderId}      FolderId.
     */
    FolderIdCollection.prototype.CreateDefaultComplexProperty = function () {
        return new FolderId_1.FolderId();
    };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {FolderId}  complexProperty   The complex property.
     * @return  {string}    XML element name.
     */
    FolderIdCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) {
        return complexProperty.GetXmlElementName();
    };
    FolderIdCollection.prototype.Remove = function (folderIdOrName) {
        if (typeof folderIdOrName === 'number') {
            // can not simply use InternalRemove as javascript does not have c# List functionality
            var index = ExtensionMethods_1.ArrayHelper.IndexOf(this.Items, function (item) { return item.FolderName === folderIdOrName; });
            if (index >= 0) {
                this.InternalRemoveAt(index);
                return true;
            }
        }
        else {
            EwsUtilities_1.EwsUtilities.ValidateParam(folderIdOrName, "folderId");
            return this.InternalRemove(folderIdOrName);
        }
        return false;
    };
    /**
     * Removes the folder Id at the specified index.
     *
     * @param   {number}   index   The zero-based index of the folder Id to remove.
     */
    FolderIdCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    };
    return FolderIdCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.FolderIdCollection = FolderIdCollection;
