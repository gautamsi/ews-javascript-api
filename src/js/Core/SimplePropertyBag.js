"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsLogging_1 = require("./EwsLogging");
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
var SimplePropertyBag = /** @class */ (function () {
    function SimplePropertyBag(keyPicker) {
        this.items = null;
        this.removedItems = [];
        this.addedItems = [];
        this.modifiedItems = [];
        this.OnChange = [];
        this.items = new AltDictionary_1.Dictionary(keyPicker);
    }
    Object.defineProperty(SimplePropertyBag.prototype, "AddedItems", {
        get: function () {
            return this.addedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimplePropertyBag.prototype, "RemovedItems", {
        get: function () {
            return this.removedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimplePropertyBag.prototype, "ModifiedItems", {
        get: function () {
            return this.modifiedItems;
        },
        enumerable: true,
        configurable: true
    });
    SimplePropertyBag.prototype._getItem = function (key) {
        var value = { outValue: null };
        if (this.TryGetValue(key, value)) {
            return value.outValue;
        }
        else {
            return null;
        }
    };
    SimplePropertyBag.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemoveItem(key);
        }
        else {
            // If the item was to be deleted, the deletion becomes an update.
            if (ExtensionMethods_1.ArrayHelper.RemoveEntry(this.removedItems, key)) {
                this.InternalAddItemToChangeList(key, this.modifiedItems);
            }
            else {
                // If the property value was not set, we have a newly set property.
                if (!this.ContainsKey(key)) {
                    this.InternalAddItemToChangeList(key, this.addedItems);
                }
                else {
                    // The last case is that we have a modified property.
                    if (this.modifiedItems.indexOf(key) === -1) {
                        this.InternalAddItemToChangeList(key, this.modifiedItems);
                    }
                }
            }
            this.items.set(key, value);
            this.Changed();
        }
    };
    SimplePropertyBag.prototype.Changed = function () {
        if (this.OnChange != null) {
            EwsLogging_1.EwsLogging.Assert(false, "SimplePropertyBag.Changed", "OnChange events not fired due to circular calling, todo: fix needed");
            return;
            for (var _i = 0, _a = this.OnChange; _i < _a.length; _i++) {
                var changeDelegate = _a[_i];
                changeDelegate();
            }
        }
    };
    SimplePropertyBag.prototype.ClearChangeLog = function () {
        this.removedItems.splice(0);
        this.addedItems.splice(0);
        this.modifiedItems.splice(0);
    };
    SimplePropertyBag.prototype.ContainsKey = function (key) { return this.items.containsKey(key); };
    SimplePropertyBag.prototype.GetEnumerator = function () { throw new Error("SimplePropertyBag.ts - GetEnumerator : Not implemented."); };
    SimplePropertyBag.prototype.InternalAddItemToChangeList = function (key, changeList) {
        if (changeList.indexOf(key) === -1) {
            changeList.push(key);
        }
    };
    SimplePropertyBag.prototype.InternalRemoveItem = function (key) {
        var value = { outValue: null };
        if (this.TryGetValue(key, value)) {
            this.items.remove(key);
            this.removedItems.push(key);
            this.Changed();
        }
    };
    SimplePropertyBag.prototype.TryGetValue = function (key, value) { return this.items.tryGetValue(key, value); };
    return SimplePropertyBag;
}());
exports.SimplePropertyBag = SimplePropertyBag;
