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
var ContactPhoneEntityCollection_1 = require("./ContactPhoneEntityCollection");
var StringList_1 = require("./StringList");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an ContactEntity object.
 */
var ContactEntity = /** @class */ (function (_super) {
    __extends(ContactEntity, _super);
    /**
     * Initializes a new instance of the **ContactEntity** class.
     */
    function ContactEntity() {
        var _this = _super.call(this) || this;
        /**
         * Gets the contact entity PersonName.
         */
        _this.PersonName = null;
        /**
         * Gets the contact entity BusinessName.
         */
        _this.BusinessName = null;
        /**
         * Gets the contact entity PhoneNumbers.
         */
        _this.PhoneNumbers = null;
        /**
         * Gets the contact entity Urls.
         */
        _this.Urls = null;
        /**
         * Gets the contact entity EmailAddresses.
         */
        _this.EmailAddresses = null;
        /**
         * Gets the contact entity Addresses.
         */
        _this.Addresses = null;
        /**
         * Gets the contact entity ContactString.
         */
        _this.ContactString = null;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ContactEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgPersonName:
                    this.PersonName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgBusinessName:
                    this.BusinessName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgPhoneNumbers:
                    this.PhoneNumbers = new ContactPhoneEntityCollection_1.ContactPhoneEntityCollection();
                    this.PhoneNumbers.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgUrls:
                    this.Urls = new StringList_1.StringList(XmlElementNames_1.XmlElementNames.NlgUrl);
                    this.Urls.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgEmailAddresses:
                    this.EmailAddresses = new StringList_1.StringList(XmlElementNames_1.XmlElementNames.NlgEmailAddress);
                    this.EmailAddresses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgAddresses:
                    this.EmailAddresses = new StringList_1.StringList(XmlElementNames_1.XmlElementNames.NlgEmailAddress);
                    this.Addresses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.NlgContactString:
                    this.ContactString = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return ContactEntity;
}(ExtractedEntity_1.ExtractedEntity));
exports.ContactEntity = ContactEntity;
