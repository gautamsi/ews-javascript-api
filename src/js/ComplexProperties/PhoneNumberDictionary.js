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
var PhoneNumberEntry_1 = require("./PhoneNumberEntry");
var DictionaryProperty_1 = require("./DictionaryProperty");
var PhoneNumberDictionary = /** @class */ (function (_super) {
    __extends(PhoneNumberDictionary, _super);
    function PhoneNumberDictionary() {
        return _super.call(this, DictionaryKeyType_1.DictionaryKeyType.PhoneNumberKey) || this;
    }
    PhoneNumberDictionary.prototype._getItem = function (key) {
        return this.Entries.get(key).PhoneNumber;
    };
    PhoneNumberDictionary.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry = { outValue: null };
            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.PhoneNumber = value;
                this.Changed();
            }
            else {
                var newEntry = new PhoneNumberEntry_1.PhoneNumberEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    };
    PhoneNumberDictionary.prototype.CreateEntryInstance = function () { return new PhoneNumberEntry_1.PhoneNumberEntry(); };
    PhoneNumberDictionary.prototype.GetFieldURI = function () { return "contacts:PhoneNumber"; };
    PhoneNumberDictionary.prototype.TryGetValue = function (key, phoneNumber) {
        var entry = { outValue: null };
        if (this.Entries.tryGetValue(key, entry)) {
            phoneNumber.outValue = entry.outValue.PhoneNumber;
            return true;
        }
        else {
            phoneNumber = null;
            return false;
        }
    };
    return PhoneNumberDictionary;
}(DictionaryProperty_1.DictionaryProperty));
exports.PhoneNumberDictionary = PhoneNumberDictionary;
