"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsLogging_1 = require("../Core/EwsLogging");
var ItemGroup = /** @class */ (function () {
    function ItemGroup(groupIndex, items) {
        this.Items = []; //System.Collections.ObjectModel.Collection<TItem>;
        EwsLogging_1.EwsLogging.Assert(items != null, "ItemGroup.ctor", "items is null");
        this.GroupIndex = groupIndex;
        this.Items = items; //new Collection<TItem>(items);
    }
    return ItemGroup;
}());
exports.ItemGroup = ItemGroup;
