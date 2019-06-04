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
var ItemInfo_1 = require("../Core/ServiceObjects/Items/ItemInfo");
var Strings_1 = require("../Strings");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a collection of items.
 */
var ItemCollection = /** @class */ (function (_super) {
    __extends(ItemCollection, _super);
    /**
     * Initializes a new instance of the **ItemCollection** class.
     *
     */
    function ItemCollection() {
        var _this = _super.call(this) || this;
        _this.__implements = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TItem>", "IJsonCollectionDeserializer"];
        _this.items = []; // System.Collections.Generic.List<T>;
        return _this;
    }
    Object.defineProperty(ItemCollection.prototype, "Count", {
        /**
         * Gets the total number of items in the collection.
         */
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the item at the specified index.
     *
     * @param   {number}   index   The zero-based index of the item to get.
     * @return  {TItem}     The item at the specified index.
     */
    ItemCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    ItemCollection.prototype.GetEnumerator = function () { throw new Error("ItemCollection.ts - GetEnumerator : Not implemented."); }; //wil be implementedfor ES6 later with yield
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    ItemCollection.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        var collectionObj = undefined;
        if (ExtensionMethods_1.ArrayHelper.isArray(jsObject)) {
            collectionObj = jsObject;
        }
        else {
            collectionObj = [jsObject];
        }
        for (var _i = 0, collectionObj_1 = collectionObj; _i < collectionObj_1.length; _i++) {
            var entry = collectionObj_1[_i];
            var jsonServiceObject = entry;
            var item = (new ItemInfo_1.ItemInfo()).CreateEwsObjectFromXmlElementName(service, ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonServiceObject));
            item.LoadFromXmlJsObject(jsonServiceObject, service, true);
            this.items.push(item);
        }
    };
    return ItemCollection;
}(ComplexProperty_1.ComplexProperty));
exports.ItemCollection = ItemCollection;
