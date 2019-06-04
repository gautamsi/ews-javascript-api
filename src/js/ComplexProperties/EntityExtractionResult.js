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
var AddressEntityCollection_1 = require("./AddressEntityCollection");
var ContactEntityCollection_1 = require("./ContactEntityCollection");
var EmailAddressEntityCollection_1 = require("./EmailAddressEntityCollection");
var MeetingSuggestionCollection_1 = require("./MeetingSuggestionCollection");
var PhoneEntityCollection_1 = require("./PhoneEntityCollection");
var TaskSuggestionCollection_1 = require("./TaskSuggestionCollection");
var UrlEntityCollection_1 = require("./UrlEntityCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an EntityExtractionResult object.
 */
var EntityExtractionResult = /** @class */ (function (_super) {
    __extends(EntityExtractionResult, _super);
    /**
     * @internal Initializes a new instance of the **EntityExtractionResult** class.
     */
    function EntityExtractionResult() {
        var _this = _super.call(this) || this;
        /**
         * Gets the extracted Addresses.
         */
        _this.Addresses = null;
        /**
         * Gets the extracted MeetingSuggestions.
         */
        _this.MeetingSuggestions = null;
        /**
         * Gets the extracted TaskSuggestions.
         */
        _this.TaskSuggestions = null;
        /**
         * Gets the extracted EmailAddresses.
         */
        _this.EmailAddresses = null;
        /**
         * Gets the extracted Contacts.
         */
        _this.Contacts = null;
        /**
         * Gets the extracted Urls.
         */
        _this.Urls = null;
        /**
         * Gets the extracted PhoneNumbers
         */
        _this.PhoneNumbers = null;
        _this.Namespace = XmlNamespace_1.XmlNamespace.Types;
        return _this;
    }
    /**
     * @internal Read element from XMLJsObject.
     *
     * @param   {any}   jsObject   xmljsonObject
     * @return  {ExchangeService} the ExchangeService
     */
    EntityExtractionResult.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (jsObject.hasOwnProperty(key)) {
                switch (key) {
                    case XmlElementNames_1.XmlElementNames.NlgAddresses:
                        this.Addresses = new AddressEntityCollection_1.AddressEntityCollection();
                        this.Addresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgMeetingSuggestions:
                        this.MeetingSuggestions = new MeetingSuggestionCollection_1.MeetingSuggestionCollection();
                        this.MeetingSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgTaskSuggestions:
                        this.TaskSuggestions = new TaskSuggestionCollection_1.TaskSuggestionCollection();
                        this.TaskSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgEmailAddresses:
                        this.EmailAddresses = new EmailAddressEntityCollection_1.EmailAddressEntityCollection();
                        this.EmailAddresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgContacts:
                        this.Contacts = new ContactEntityCollection_1.ContactEntityCollection();
                        this.Contacts.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgUrls:
                        this.Urls = new UrlEntityCollection_1.UrlEntityCollection();
                        this.Urls.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    case XmlElementNames_1.XmlElementNames.NlgPhoneNumbers:
                        this.PhoneNumbers = new PhoneEntityCollection_1.PhoneEntityCollection();
                        this.PhoneNumbers.LoadFromXmlJsObject(jsObject[key], service);
                        break;
                    default:
                        break;
                }
            }
        }
    };
    return EntityExtractionResult;
}(ComplexProperty_1.ComplexProperty));
exports.EntityExtractionResult = EntityExtractionResult;
