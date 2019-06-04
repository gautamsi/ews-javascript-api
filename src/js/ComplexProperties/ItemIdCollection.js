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
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ItemId_1 = require("./ItemId");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of item Ids.
 *
 * @sealed
 */
var ItemIdCollection = /** @class */ (function (_super) {
    __extends(ItemIdCollection, _super);
    /**
     * @internal Initializes a new instance of the **ItemIdCollection** class.
     */
    function ItemIdCollection() {
        return _super.call(this) || this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}    xmlElementName   Name of the XML element.
     * @return  {ItemId}    ItemId.
     */
    ItemIdCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        return new ItemId_1.ItemId();
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {ItemId}      ItemId.
     */
    ItemIdCollection.prototype.CreateDefaultComplexProperty = function () {
        return new ItemId_1.ItemId();
    };
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    ItemIdCollection.prototype.CreateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection;
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            if (jsObjectCollection[XmlElementNames_1.XmlElementNames.OccurrenceItemId]) {
                EwsLogging_1.EwsLogging.Log("Fix needed for ItemIdCollection for element OccurrenceItemId", true, true);
                EwsLogging_1.EwsLogging.Log(jsObjectCollection[XmlElementNames_1.XmlElementNames.OccurrenceItemId], true, true);
            }
            if (jsObjectCollection[XmlElementNames_1.XmlElementNames.RecurringMasterItemId]) {
                EwsLogging_1.EwsLogging.Log("Fix needed for ItemIdCollection for element RecurringMasterItemId", true, true);
                EwsLogging_1.EwsLogging.Log(jsObjectCollection[XmlElementNames_1.XmlElementNames.RecurringMasterItemId], true, true);
            }
            collection = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(collection, XmlElementNames_1.XmlElementNames.ItemId);
        }
        _super.prototype.CreateFromXmlJsObjectCollection.call(this, collection, service);
    };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ItemId}   complexProperty   The complex property.
     * @return  {string}                     XML element name.
     */
    ItemIdCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) {
        return complexProperty.GetXmlElementName();
    };
    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    ItemIdCollection.prototype.UpdateFromXmlJsObjectCollection = function (jsObjectCollection, service) {
        var collection = jsObjectCollection;
        if (!ExtensionMethods_1.ArrayHelper.isArray(collection)) {
            collection = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(collection, XmlElementNames_1.XmlElementNames.ItemId);
        }
        _super.prototype.UpdateFromXmlJsObjectCollection.call(this, collection, service);
    };
    return ItemIdCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ItemIdCollection = ItemIdCollection;
