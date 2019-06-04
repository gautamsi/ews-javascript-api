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
var DictionaryKeyType_1 = require("../Enumerations/DictionaryKeyType");
var PhysicalAddressEntry_1 = require("./PhysicalAddressEntry");
var DictionaryProperty_1 = require("./DictionaryProperty");
var PhysicalAddressDictionary = /** @class */ (function (_super) {
    __extends(PhysicalAddressDictionary, _super);
    function PhysicalAddressDictionary() {
        return _super.call(this, DictionaryKeyType_1.DictionaryKeyType.PhysicalAddressKey) || this;
    }
    PhysicalAddressDictionary.prototype._getItem = function (key) {
        return this.Entries.get(key);
    };
    PhysicalAddressDictionary.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            value.Key = key;
            this.InternalAddOrReplace(value);
        }
    };
    PhysicalAddressDictionary.prototype.CreateEntryInstance = function () { return new PhysicalAddressEntry_1.PhysicalAddressEntry(); };
    PhysicalAddressDictionary.prototype.TryGetValue = function (key, physicalAddress) { return this.Entries.tryGetValue(key, physicalAddress); };
    return PhysicalAddressDictionary;
}(DictionaryProperty_1.DictionaryProperty));
exports.PhysicalAddressDictionary = PhysicalAddressDictionary;
