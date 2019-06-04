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
var EwsLogging_1 = require("../Core/EwsLogging");
var AbstractItemIdWrapper_1 = require("./AbstractItemIdWrapper");
var ItemIdWrapper = /** @class */ (function (_super) {
    __extends(ItemIdWrapper, _super);
    function ItemIdWrapper(itemId) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(itemId != null, "ItemIdWrapper.ctor", "itemId is null");
        _this.itemId = itemId;
        return _this;
    }
    ItemIdWrapper.prototype.IternalToJson = function (service) { throw new Error("ItemIdWrapper.ts - IternalToJson : Not implemented."); };
    /**@internal */
    ItemIdWrapper.prototype.WriteToXml = function (writer) { this.itemId.WriteToXml(writer); };
    return ItemIdWrapper;
}(AbstractItemIdWrapper_1.AbstractItemIdWrapper));
exports.ItemIdWrapper = ItemIdWrapper;
