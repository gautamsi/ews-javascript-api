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
var ExtensionMethods_1 = require("../ExtensionMethods");
var ComplexProperty_1 = require("./ComplexProperty");
var EmailAddress_1 = require("./EmailAddress");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ItemId_1 = require("./ItemId");
var MailboxType_1 = require("../Enumerations/MailboxType");
var MemberStatus_1 = require("../Enumerations/MemberStatus");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents a group member
 * [RequiredServerVersion(ExchangeVersion.Exchange2010)] ** needs implementation
 */
var GroupMember = /** @class */ (function (_super) {
    __extends(GroupMember, _super);
    function GroupMember(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, _3mbxTypeOrRoutingType) {
        var _this = _super.call(this) || this;
        /**
         * AddressInformation field.
         */
        _this.addressInformation = null;
        // Key is assigned by server
        _this.key = null;
        // Member status is calculated by server
        _this.status = MemberStatus_1.MemberStatus.Unrecognized;
        var argsLength = arguments.length;
        if (argsLength == 1) {
            if (typeof _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId === 'string') { // smtpAddress
                _this.AddressInformation = new EmailAddress_1.EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            }
            else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof ItemId_1.ItemId) { // contactGroupId
                _this.AddressInformation = new EmailAddress_1.EmailAddress(null, null, null, MailboxType_1.MailboxType.ContactGroup, _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            }
            else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof GroupMember) { // contactGroupId
                EwsUtilities_1.EwsUtilities.ValidateParam(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, "member");
                _this.AddressInformation = new EmailAddress_1.EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId.AddressInformation);
            }
            else {
                _this.AddressInformation = new EmailAddress_1.EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            }
        }
        if (argsLength === 2) {
            if (typeof _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId === 'string') {
                if (typeof _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey === 'string') {
                    _this.AddressInformation = new EmailAddress_1.EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, EmailAddress_1.EmailAddress.SmtpRoutingType, MailboxType_1.MailboxType.OneOff);
                }
                else {
                    _this.constructor_str_str_mbType(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, EmailAddress_1.EmailAddress.SmtpRoutingType, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey);
                }
            }
            else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof ItemId_1.ItemId) {
                _this.AddressInformation = new EmailAddress_1.EmailAddress(null, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, // addressToLink
                null, MailboxType_1.MailboxType.Contact, _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId); //contactId
            }
            else {
                var contact = _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId;
                EwsUtilities_1.EwsUtilities.ValidateParam(contact, "contact");
                var emailAddress = contact.EmailAddresses[_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey /* emailAddressKey */];
                _this.AddressInformation = new EmailAddress_1.EmailAddress(emailAddress);
                _this.addressInformation.Id = contact.Id;
            }
        }
        if (argsLength === 3) {
            if (typeof _3mbxTypeOrRoutingType === 'string') { // mailboxType
                _this.AddressInformation = new EmailAddress_1.EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, _3mbxTypeOrRoutingType, MailboxType_1.MailboxType.OneOff);
            }
            else {
                _this.constructor_str_str_mbType(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, _3mbxTypeOrRoutingType);
            }
        }
        return _this;
    }
    Object.defineProperty(GroupMember.prototype, "Key", {
        /**
         * ets the key of the member.
         */
        get: function () {
            return this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupMember.prototype, "AddressInformation", {
        /**
         * Gets the address information of the member.
         */
        get: function () {
            return this.addressInformation;
        },
        /**
         * @internal Sets the address information of the member.
         */
        set: function (value) {
            if (this.addressInformation !== null) {
                ExtensionMethods_1.ArrayHelper.RemoveEntry(this.addressInformation.OnChange, this.AddressInformationChanged);
            }
            this.addressInformation = value;
            if (this.addressInformation !== null) {
                this.addressInformation.OnChange.push(this.AddressInformationChanged.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupMember.prototype, "Status", {
        /**
         * Gets the status of the member.
         */
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    //#region Constructor methods
    GroupMember.prototype.constructor_str_str_mbType = function (address, routingType, mailboxType) {
        switch (mailboxType) {
            case MailboxType_1.MailboxType.PublicGroup:
            case MailboxType_1.MailboxType.PublicFolder:
            case MailboxType_1.MailboxType.Mailbox:
            case MailboxType_1.MailboxType.Contact:
            case MailboxType_1.MailboxType.OneOff:
                this.AddressInformation = new EmailAddress_1.EmailAddress(null, address, routingType, mailboxType);
                break;
            default:
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidMailboxType);
        }
    };
    //#endregion
    /**
     * AddressInformation instance is changed.
     *
     * @param   {}   complexProperty   Changed property.
     */
    GroupMember.prototype.AddressInformationChanged = function (complexProperty) {
        this.Changed();
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    GroupMember.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Key:
                    this.key = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Status:
                    this.status = MemberStatus_1.MemberStatus[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.Mailbox:
                    this.AddressInformation = new EmailAddress_1.EmailAddress();
                    this.AddressInformation.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes the member key attribute to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GroupMember.prototype.WriteAttributesToXml = function (writer) {
        // if this.key is null or empty, writer skips the attribute
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Key, this.key);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GroupMember.prototype.WriteElementsToXml = function (writer) {
        // No need to write member Status back to server
        // Write only AddressInformation container element
        this.AddressInformation.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Mailbox, XmlNamespace_1.XmlNamespace.Types);
    };
    return GroupMember;
}(ComplexProperty_1.ComplexProperty));
exports.GroupMember = GroupMember;
