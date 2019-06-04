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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ItemId_1 = require("./ItemId");
var MailboxType_1 = require("../Enumerations/MailboxType");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an e-mail address.
 */
var EmailAddress = /** @class */ (function (_super) {
    __extends(EmailAddress, _super);
    function EmailAddress(smtpAddressOrNameOrMailbox, smtpAddressOrAddress, routingType, mailboxType, itemId) {
        var _this = _super.call(this) || this;
        /**
         * Display name.
         */
        _this.name = null;
        /**
         * Email address.
         */
        _this.address = null;
        /**
         * Routing type.
         */
        _this.routingType = null;
        /**
         * Mailbox type.
         */
        _this.mailboxType = null;
        /**
         * ItemId - Contact or PDL.
         */
        _this.id = null;
        if (smtpAddressOrNameOrMailbox instanceof EmailAddress) {
            EwsUtilities_1.EwsUtilities.ValidateParam(smtpAddressOrNameOrMailbox, "mailbox");
            _this.Name = smtpAddressOrNameOrMailbox.Name;
            _this.Address = smtpAddressOrNameOrMailbox.Address;
            _this.RoutingType = smtpAddressOrNameOrMailbox.RoutingType;
            _this.MailboxType = smtpAddressOrNameOrMailbox.MailboxType;
            _this.Id = smtpAddressOrNameOrMailbox.Id;
        }
        else {
            var argsLength = arguments.length;
            if (argsLength === 1) {
                _this.address = smtpAddressOrNameOrMailbox;
            }
            else if (argsLength > 1) {
                _this.name = smtpAddressOrNameOrMailbox;
                _this.address = smtpAddressOrAddress;
                if (argsLength >= 3) {
                    _this.routingType = routingType;
                }
                if (argsLength >= 4) {
                    _this.mailboxType = mailboxType;
                }
                if (argsLength === 5) {
                    _this.id = itemId;
                }
            }
        }
        return _this;
    }
    Object.defineProperty(EmailAddress.prototype, "Name", {
        /**
         * Gets or sets the name associated with the e-mail address.
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.name; }, setValue: function (updateValue) { _this.name = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailAddress.prototype, "Address", {
        /**
         * Gets or sets the actual address associated with the e-mail address. The type of the Address property must match the specified routing type. If RoutingType is not set, Address is assumed to be an SMTP address.
         */
        get: function () {
            return this.address;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.address; }, setValue: function (updateValue) { _this.address = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailAddress.prototype, "RoutingType", {
        /**
         * Gets or sets the routing type associated with the e-mail address. If RoutingType is not set, Address is assumed to be an SMTP address.
         */
        get: function () {
            return this.routingType;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.routingType; }, setValue: function (updateValue) { _this.routingType = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailAddress.prototype, "MailboxType", {
        /**
         * Gets or sets the type of the e-mail address.
         */
        get: function () {
            return this.mailboxType;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.mailboxType; }, setValue: function (updateValue) { _this.mailboxType = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailAddress.prototype, "Id", {
        /**
         * Gets or sets the Id of the contact the e-mail address represents. When Id is specified, Address should be set to null.
         */
        get: function () {
            return this.id;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.id; }, setValue: function (updateValue) { _this.id = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get a string representation for using this instance in a search filter.
     * ISearchStringProvider.GetSearchString
     *
     * @return  {string}      String representation of instance.
     */
    EmailAddress.prototype.GetSearchString = function () {
        return this.Address;
    };
    EmailAddress.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("EmailAddress.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    //todo: implement UpdateFromXmlJsObject
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    EmailAddress.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Name:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.EmailAddress:
                    this.address = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.RoutingType:
                    this.routingType = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.MailboxType:
                    this.mailboxType = MailboxType_1.MailboxType.FromEwsEnumString(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.ItemId:
                    this.id = new ItemId_1.ItemId();
                    this.id.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Returns a **string** that represents the current **object**.
     *
     * @return  {string}      A **string** that represents the current **object**.
     */
    EmailAddress.prototype.ToString = function () {
        var addressPart = null;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Address)) {
            return ExtensionMethods_1.StringHelper.Empty;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.RoutingType)) {
            addressPart = this.RoutingType + ":" + this.Address;
        }
        else {
            addressPart = this.Address;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Name)) {
            return this.Name + " <" + addressPart + ">";
        }
        else {
            return addressPart;
        }
    };
    EmailAddress.prototype.toString = function () {
        return this.ToString();
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    EmailAddress.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Name, this.Name);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RoutingType, this.RoutingType);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxType, MailboxType_1.MailboxType.ToEwsEnumString(this.MailboxType));
        if (this.Id != null) {
            this.Id.WriteToXml(writer); //, XmlElementNames.ItemId);
        }
    };
    /**
     * SMTP routing type.
     */
    EmailAddress.SmtpRoutingType = "SMTP";
    return EmailAddress;
}(ComplexProperty_1.ComplexProperty));
exports.EmailAddress = EmailAddress;
