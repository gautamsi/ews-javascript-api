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
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PhoneNumberKey_1 = require("../Enumerations/PhoneNumberKey");
var DictionaryEntryProperty_1 = require("./DictionaryEntryProperty");
var PhoneNumberEntry = /** @class */ (function (_super) {
    __extends(PhoneNumberEntry, _super);
    function PhoneNumberEntry(key, phoneNumber) {
        if (key === void 0) { key = PhoneNumberKey_1.PhoneNumberKey.AssistantPhone; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        var _this = _super.call(this, key) || this;
        _this.phoneNumber = null;
        _this.keyType = PhoneNumberKey_1.PhoneNumberKey;
        _this.phoneNumber = phoneNumber;
        return _this;
    }
    Object.defineProperty(PhoneNumberEntry.prototype, "PhoneNumber", {
        get: function () {
            return this.phoneNumber;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.phoneNumber; }, setValue: function (address) { _this.phoneNumber = address; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    PhoneNumberEntry.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        this.Key = PhoneNumberKey_1.PhoneNumberKey[jsonProperty[XmlAttributeNames_1.XmlAttributeNames.Key]];
        this.phoneNumber = jsonProperty[XmlElementNames_1.XmlElementNames.Entry]; //PhoneNumber
    };
    /**@internal */
    PhoneNumberEntry.prototype.WriteElementsToXml = function (writer) { writer.WriteValue(this.PhoneNumber, XmlElementNames_1.XmlElementNames.PhoneNumber); };
    return PhoneNumberEntry;
}(DictionaryEntryProperty_1.DictionaryEntryProperty));
exports.PhoneNumberEntry = PhoneNumberEntry;
