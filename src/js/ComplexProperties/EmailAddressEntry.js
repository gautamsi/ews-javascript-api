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
var EmailAddressKey_1 = require("../Enumerations/EmailAddressKey");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var MailboxType_1 = require("../Enumerations/MailboxType");
var EmailAddress_1 = require("./EmailAddress");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var DictionaryEntryProperty_1 = require("./DictionaryEntryProperty");
var EmailAddressEntry = /** @class */ (function (_super) {
    __extends(EmailAddressEntry, _super);
    function EmailAddressEntry(key, emailAddress) {
        if (key === void 0) { key = EmailAddressKey_1.EmailAddressKey.EmailAddress1; }
        if (emailAddress === void 0) { emailAddress = new EmailAddress_1.EmailAddress(); }
        var _this = _super.call(this, key) || this;
        _this.emailAddress = null;
        _this.keyType = EmailAddressKey_1.EmailAddressKey;
        _this.emailAddress = emailAddress;
        if (_this.emailAddress != null) {
            _this.emailAddress.OnChange.push(_this.EmailAddressChanged.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(EmailAddressEntry.prototype, "EmailAddress", {
        get: function () {
            return this.emailAddress;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.emailAddress; }, setValue: function (address) { _this.emailAddress = address; } }, value);
            if (this.emailAddress != null) {
                this.emailAddress.OnChange.push(this.EmailAddressChanged.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    EmailAddressEntry.prototype.EmailAddressChanged = function (complexProperty) { this.Changed(); };
    EmailAddressEntry.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Key:
                    this.Key = EmailAddressKey_1.EmailAddressKey[jsonProperty[key]];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.Name:
                    this.EmailAddress.Name = jsonProperty[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.RoutingType:
                    this.EmailAddress.RoutingType = jsonProperty[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.MailboxType:
                    this.EmailAddress.MailboxType = MailboxType_1.MailboxType.FromEwsEnumString(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EmailAddress:
                    this.EmailAddress.Address = jsonProperty[key];
                    break;
            }
        }
        //ref: ews-javascript-api specific workaround for text node in complexproperty
        if (jsonProperty[XmlElementNames_1.XmlElementNames.Entry]) {
            if (this.emailAddress.Address === null) {
                this.emailAddress.Address = jsonProperty[XmlElementNames_1.XmlElementNames.Entry];
            }
        }
    };
    // ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadAttributesFromXml : Not implemented."); }
    // ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
    /**@internal */
    EmailAddressEntry.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        if (writer.Service.RequestedServerVersion > ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.EmailAddress.Name);
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.RoutingType, this.EmailAddress.RoutingType);
            if (this.EmailAddress.MailboxType != MailboxType_1.MailboxType.Unknown) {
                writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MailboxType, MailboxType_1.MailboxType.ToEwsEnumString(this.EmailAddress.MailboxType));
            }
        }
    };
    /**@internal */
    EmailAddressEntry.prototype.WriteElementsToXml = function (writer) { writer.WriteValue(this.EmailAddress.Address, XmlElementNames_1.XmlElementNames.EmailAddress); };
    return EmailAddressEntry;
}(DictionaryEntryProperty_1.DictionaryEntryProperty));
exports.EmailAddressEntry = EmailAddressEntry;
