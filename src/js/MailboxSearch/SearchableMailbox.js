"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var Guid_1 = require("../Guid");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents searchable mailbox object
 *
 * @sealed
 */
var SearchableMailbox = /** @class */ (function () {
    function SearchableMailbox(guid, smtpAddress, isExternalMailbox, externalEmailAddress, displayName, isMembershipGroup, referenceId) {
        if (guid === void 0) { guid = null; }
        if (smtpAddress === void 0) { smtpAddress = null; }
        if (isExternalMailbox === void 0) { isExternalMailbox = false; }
        if (externalEmailAddress === void 0) { externalEmailAddress = null; }
        if (displayName === void 0) { displayName = null; }
        if (isMembershipGroup === void 0) { isMembershipGroup = false; }
        if (referenceId === void 0) { referenceId = null; }
        /**
         * Guid
         */
        this.Guid = null;
        /**
         * Smtp address
         */
        this.SmtpAddress = null;
        /**
         * If true, this is an external mailbox
         */
        this.IsExternalMailbox = false;
        /**
         * External email address for the mailbox
         */
        this.ExternalEmailAddress = null;
        /**
         * Display name
         */
        this.DisplayName = null;
        /**
         * Is a membership group
         */
        this.IsMembershipGroup = false;
        /**
         * Reference id
         */
        this.ReferenceId = null;
        this.Guid = guid;
        this.SmtpAddress = smtpAddress;
        this.IsExternalMailbox = isExternalMailbox;
        this.ExternalEmailAddress = externalEmailAddress;
        this.DisplayName = displayName;
        this.IsMembershipGroup = isMembershipGroup;
        this.ReferenceId = referenceId;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchableMailbox}              Searchable mailbox object
     */
    SearchableMailbox.LoadFromXmlJsObject = function (jsObject, service) {
        var searchableMailbox = new SearchableMailbox();
        if (jsObject[XmlElementNames_1.XmlElementNames.Guid]) {
            searchableMailbox.Guid = new Guid_1.Guid(jsObject[XmlElementNames_1.XmlElementNames.Guid]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.DisplayName]) {
            searchableMailbox.DisplayName = jsObject[XmlElementNames_1.XmlElementNames.DisplayName];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.PrimarySmtpAddress]) {
            searchableMailbox.SmtpAddress = jsObject[XmlElementNames_1.XmlElementNames.PrimarySmtpAddress];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.IsExternalMailbox]) {
            searchableMailbox.IsExternalMailbox = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsExternalMailbox]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ExternalEmailAddress]) {
            searchableMailbox.ExternalEmailAddress = jsObject[XmlElementNames_1.XmlElementNames.ExternalEmailAddress];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.IsMembershipGroup]) {
            searchableMailbox.IsMembershipGroup = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsMembershipGroup]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ReferenceId]) {
            searchableMailbox.ReferenceId = jsObject[XmlElementNames_1.XmlElementNames.ReferenceId];
        }
        return searchableMailbox;
    };
    return SearchableMailbox;
}());
exports.SearchableMailbox = SearchableMailbox;
