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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ServiceId_1 = require("./ServiceId");
var ItemId = /** @class */ (function (_super) {
    __extends(ItemId, _super);
    function ItemId(uniqueId) {
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            return;
        }
        _this = _super.call(this, uniqueId) || this;
        return _this;
    }
    ItemId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ItemId; };
    return ItemId;
}(ServiceId_1.ServiceId));
exports.ItemId = ItemId;
