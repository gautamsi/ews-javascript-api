"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Folder_1 = require("../Core/ServiceObjects/Folders/Folder");
var FolderId_1 = require("../ComplexProperties/FolderId");
var FolderIdWrapper_1 = require("./FolderIdWrapper");
var FolderWrapper_1 = require("./FolderWrapper");
/**
 * @internal Represents a list a abstracted folder Ids.
 */
var FolderIdWrapperList = /** @class */ (function () {
    function FolderIdWrapperList() {
        /**
         * List of AbstractFolderIdWrapper.
         */
        this.ids = [];
    }
    Object.defineProperty(FolderIdWrapperList.prototype, "Count", {
        /**
         * Gets the id count.
         *
         * @value   The count.
         */
        get: function () {
            return this.ids.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the **AbstractFolderIdWrapper** at the specified index.
     *
     * @param   {}   index   the index
     */
    FolderIdWrapperList.prototype._getItem = function (index) {
        return this.ids[index];
    };
    FolderIdWrapperList.prototype.Add = function (folderOrId) {
        if (folderOrId instanceof Folder_1.Folder)
            this.ids.push(new FolderWrapper_1.FolderWrapper(folderOrId));
        else if (folderOrId instanceof FolderId_1.FolderId)
            this.ids.push(new FolderIdWrapper_1.FolderIdWrapper(folderOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    };
    FolderIdWrapperList.prototype.AddRange = function (foldersOrIds) {
        if (foldersOrIds != null) {
            for (var _i = 0, foldersOrIds_1 = foldersOrIds; _i < foldersOrIds_1.length; _i++) {
                var folderOrId = foldersOrIds_1[_i];
                this.Add(folderOrId);
            }
        }
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.ids
     */
    FolderIdWrapperList.prototype.GetEnumerator = function () {
        return this.ids;
    };
    /**
     * @internal Validates list of folderIds against a specified request version.
     *
     * @param   {ExchangeVersion}   version   The version.
     */
    FolderIdWrapperList.prototype.Validate = function (version) {
        for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
            var folderIdWrapper = _a[_i];
            //var folderIdWrapper: AbstractFolderIdWrapper = item;
            folderIdWrapper.Validate(version);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          ewsNamesapce     The ews namesapce.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    FolderIdWrapperList.prototype.WriteToXml = function (writer, ewsNamesapce, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);
            for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
                var folderIdWrapper = _a[_i];
                //var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.WriteToXml(writer);
            }
            writer.WriteEndElement();
        }
    };
    return FolderIdWrapperList;
}());
exports.FolderIdWrapperList = FolderIdWrapperList;
