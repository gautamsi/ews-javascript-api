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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var EmailAddress_1 = require("./EmailAddress");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of e-mail addresses.
 */
var EmailAddressCollection = /** @class */ (function (_super) {
    __extends(EmailAddressCollection, _super);
    function EmailAddressCollection(collectionItemXmlElementName) {
        var _this = _super.call(this) || this;
        /**
         * XML element name
         */
        _this.collectionItemXmlElementName = null;
        _this.collectionItemXmlElementName = collectionItemXmlElementName || XmlElementNames_1.XmlElementNames.Mailbox;
        return _this;
    }
    EmailAddressCollection.prototype.Add = function (nameOrSmtpAddressOrEmailAddress, smtpAddress) {
        var argsLength = arguments.length;
        var emailAddress = nameOrSmtpAddressOrEmailAddress;
        if (argsLength == 1) {
            if (typeof nameOrSmtpAddressOrEmailAddress === 'string') {
                emailAddress = new EmailAddress_1.EmailAddress(nameOrSmtpAddressOrEmailAddress);
            }
            else {
                emailAddress = nameOrSmtpAddressOrEmailAddress;
            }
        }
        if (argsLength === 2) {
            emailAddress = new EmailAddress_1.EmailAddress(nameOrSmtpAddressOrEmailAddress, smtpAddress);
        }
        this.InternalAdd(emailAddress);
        return emailAddress;
    };
    EmailAddressCollection.prototype.AddRange = function (emailOrSmtpAddresses) {
        for (var _i = 0, emailOrSmtpAddresses_1 = emailOrSmtpAddresses; _i < emailOrSmtpAddresses_1.length; _i++) {
            var address = emailOrSmtpAddresses_1[_i];
            var emailAddress = address;
            if (typeof emailAddress === 'string') {
                emailAddress = new EmailAddress_1.EmailAddress(address);
            }
            this.InternalAdd(emailAddress);
        }
    };
    /**
     * Clears the collection.
     */
    EmailAddressCollection.prototype.Clear = function () { this.InternalClear(); };
    /**
     * @internal Creates an EmailAddress object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the e-mail address.
     * @return  {EmailAddress}              An EmailAddress object.
     */
    EmailAddressCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == this.collectionItemXmlElementName) {
            return new EmailAddress_1.EmailAddress();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailAddress}      default instance of EmailAddress
     */
    EmailAddressCollection.prototype.CreateDefaultComplexProperty = function () { return new EmailAddress_1.EmailAddress(); };
    /**
     * @internal Retrieves the XML element name corresponding to the provided EmailAddress object.
     *
     * @param   {EmailAddress}   emailAddress   The EmailAddress object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided EmailAddress object.
     */
    EmailAddressCollection.prototype.GetCollectionItemXmlElementName = function (emailAddress) { return this.collectionItemXmlElementName; };
    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {EmailAddress}  emailAddress   The e-mail address to remove.
     * @return  {boolean}       True if the email address was successfully removed from the collection, false otherwise.
     */
    EmailAddressCollection.prototype.Remove = function (emailAddress) {
        EwsUtilities_1.EwsUtilities.ValidateParam(emailAddress, "emailAddress");
        return this.InternalRemove(emailAddress);
    };
    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {number}   index   The index of the e-mail address to remove.
     */
    EmailAddressCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    };
    /**
     * @internal Determine whether we should write collection to XML or not.
     *
     * @return  {true}      Always true, even if the collection is empty.
     */
    EmailAddressCollection.prototype.ShouldWriteToRequest = function () { return true; };
    return EmailAddressCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.EmailAddressCollection = EmailAddressCollection;
