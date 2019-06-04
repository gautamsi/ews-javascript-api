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
var AbstractItemIdWrapper_1 = require("./AbstractItemIdWrapper");
var EwsLogging_1 = require("../Core/EwsLogging");
var ItemWrapper = /** @class */ (function (_super) {
    __extends(ItemWrapper, _super);
    function ItemWrapper(item) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(item != null, "ItemWrapper.ctor", "item is null");
        EwsLogging_1.EwsLogging.Assert(!item.IsNew, "ItemWrapper.ctor", "item does not have an Id");
        _this.item = item;
        return _this;
    }
    ItemWrapper.prototype.GetItem = function () { return this.item; };
    ItemWrapper.prototype.IternalToJson = function (service) { throw new Error("ItemWrapper.ts - IternalToJson : Not implemented."); };
    /**@internal */
    ItemWrapper.prototype.WriteToXml = function (writer) { this.item.Id.WriteToXml(writer); };
    return ItemWrapper;
}(AbstractItemIdWrapper_1.AbstractItemIdWrapper));
exports.ItemWrapper = ItemWrapper;
