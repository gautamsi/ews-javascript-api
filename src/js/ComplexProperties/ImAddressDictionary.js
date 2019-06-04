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
var ImAddressEntry_1 = require("./ImAddressEntry");
var DictionaryProperty_1 = require("./DictionaryProperty");
var ImAddressDictionary = /** @class */ (function (_super) {
    __extends(ImAddressDictionary, _super);
    function ImAddressDictionary() {
        return _super.call(this, DictionaryKeyType_1.DictionaryKeyType.ImAddressKey) || this;
    }
    ImAddressDictionary.prototype._getItem = function (key) {
        return this.Entries.get(key).ImAddress;
    };
    ImAddressDictionary.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry = { outValue: null };
            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.ImAddress = value;
                this.Changed();
            }
            else {
                var newEntry = new ImAddressEntry_1.ImAddressEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    };
    ImAddressDictionary.prototype.CreateEntryInstance = function () { return new ImAddressEntry_1.ImAddressEntry(); };
    ImAddressDictionary.prototype.GetFieldURI = function () { return "contacts:ImAddress"; };
    ImAddressDictionary.prototype.TryGetValue = function (key, imAddress) {
        var entry = { outValue: null };
        if (this.Entries.tryGetValue(key, entry)) {
            imAddress.outValue = entry.outValue.ImAddress;
            return true;
        }
        else {
            imAddress.outValue = null;
            return false;
        }
    };
    return ImAddressDictionary;
}(DictionaryProperty_1.DictionaryProperty));
exports.ImAddressDictionary = ImAddressDictionary;
