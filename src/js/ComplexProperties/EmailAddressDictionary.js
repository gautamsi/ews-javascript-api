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
var EmailAddressEntry_1 = require("./EmailAddressEntry");
var DictionaryProperty_1 = require("./DictionaryProperty");
var EmailAddressDictionary = /** @class */ (function (_super) {
    __extends(EmailAddressDictionary, _super);
    function EmailAddressDictionary() {
        return _super.call(this, DictionaryKeyType_1.DictionaryKeyType.EmailAddressKey) || this;
    }
    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
    EmailAddressDictionary.prototype._getItem = function (key) {
        return this.Entries.get(key).EmailAddress;
    };
    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
    EmailAddressDictionary.prototype._setItem = function (key, value) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry = { outValue: null };
            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.EmailAddress = value;
                this.Changed();
            }
            else {
                var newEntry = new EmailAddressEntry_1.EmailAddressEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    };
    /**
     * @internal Creates instance of dictionary entry.
     *
     * @return  {EmailAddressEntry}      New instance.
     */
    EmailAddressDictionary.prototype.CreateEntryInstance = function () { return new EmailAddressEntry_1.EmailAddressEntry(); };
    /**
     * @internal Gets the field URI.
     *
     * @return  {string}      Field URI.
     */
    EmailAddressDictionary.prototype.GetFieldURI = function () { return "contacts:EmailAddress"; };
    /**
     * Tries to get the e-mail address associated with the specified key.
     *
     * @param   {EmailAddressKey}   key            The key.
     * @param   {IOutParam<EmailAddress>}   emailAddress   When this method returns, contains the e-mail address associated with the specified key, if the key is found; otherwise, null. This parameter is passed uninitialized.
     * @return  {boolean}                  true if the Dictionary contains an e-mail address associated with the specified key; otherwise, false.
     */
    EmailAddressDictionary.prototype.TryGetValue = function (key, emailAddress) {
        var entry = { outValue: null };
        if (this.Entries.tryGetValue(key, entry)) {
            emailAddress.outValue = entry.outValue.EmailAddress;
            return true;
        }
        else {
            emailAddress = null;
            return false;
        }
    };
    return EmailAddressDictionary;
}(DictionaryProperty_1.DictionaryProperty));
exports.EmailAddressDictionary = EmailAddressDictionary;
