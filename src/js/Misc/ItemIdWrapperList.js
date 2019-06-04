"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("../Core/ServiceObjects/Items/Item");
var ItemId_1 = require("../ComplexProperties/ItemId");
var ItemIdWrapper_1 = require("./ItemIdWrapper");
var ItemWrapper_1 = require("./ItemWrapper");
/**
 * @internal Represents a list a abstracted item Ids.
 */
var ItemIdWrapperList = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **ItemIdWrapperList** class.
     */
    function ItemIdWrapperList() {
        /**
         * List of ItemIdWrapper
         */
        this.itemIds = [];
    }
    Object.defineProperty(ItemIdWrapperList.prototype, "Count", {
        /**
         * @internal Gets the count.
         *
         * @value   The count.
         */
        get: function () {
            return this.itemIds.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the *Item* at the specified index.
     *
     * @param   {number}   index   the index
     */
    ItemIdWrapperList.prototype._getItem = function (index) {
        return this.itemIds[index].GetItem();
    };
    ItemIdWrapperList.prototype.Add = function (itemOrId) {
        if (itemOrId instanceof Item_1.Item)
            this.itemIds.push(new ItemWrapper_1.ItemWrapper(itemOrId));
        else if (itemOrId instanceof ItemId_1.ItemId)
            this.itemIds.push(new ItemIdWrapper_1.ItemIdWrapper(itemOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    };
    ItemIdWrapperList.prototype.AddRange = function (itemsOrIds) {
        if (itemsOrIds != null) {
            for (var _i = 0, itemsOrIds_1 = itemsOrIds; _i < itemsOrIds_1.length; _i++) {
                var itemOrId = itemsOrIds_1[_i];
                this.Add(itemOrId);
            }
        }
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.itemIds
     */
    ItemIdWrapperList.prototype.GetEnumerator = function () {
        return this.itemIds;
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          ewsNamesapce     The ews namesapce.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    ItemIdWrapperList.prototype.WriteToXml = function (writer, ewsNamesapce, xmlElementName) {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);
            for (var _i = 0, _a = this.itemIds; _i < _a.length; _i++) {
                var itemIdWrapper = _a[_i];
                itemIdWrapper.WriteToXml(writer);
            }
            writer.WriteEndElement();
        }
    };
    return ItemIdWrapperList;
}());
exports.ItemIdWrapperList = ItemIdWrapperList;
