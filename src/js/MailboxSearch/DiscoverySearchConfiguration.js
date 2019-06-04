"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var SearchableMailbox_1 = require("./SearchableMailbox");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents mailbox query object.
 *
 * @sealed
 */
var DiscoverySearchConfiguration = /** @class */ (function () {
    function DiscoverySearchConfiguration() {
        /**
         * Search Id
         */
        this.SearchId = null;
        /**
         * Search query
         */
        this.SearchQuery = null;
        /**
         * Set of mailbox and scope pair
         */
        this.SearchableMailboxes = null;
        /**
         * In-Place hold identity
         */
        this.InPlaceHoldIdentity = null;
        /**
         * Managed by organization
         */
        this.ManagedByOrganization = null;
        /**
         * Language
         */
        this.Language = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {DiscoverySearchConfiguration}              Discovery search configuration object.
     */
    DiscoverySearchConfiguration.LoadFromXmlJsObject = function (jsObject, service) {
        var mailboxes = [];
        var configuration = new DiscoverySearchConfiguration();
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchId]) {
            configuration.SearchId = jsObject[XmlElementNames_1.XmlElementNames.SearchId];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.InPlaceHoldIdentity]) {
            configuration.InPlaceHoldIdentity = jsObject[XmlElementNames_1.XmlElementNames.InPlaceHoldIdentity];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ManagedByOrganization]) {
            configuration.ManagedByOrganization = jsObject[XmlElementNames_1.XmlElementNames.ManagedByOrganization];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchQuery]) {
            configuration.SearchQuery = jsObject[XmlElementNames_1.XmlElementNames.SearchQuery];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes], XmlElementNames_1.XmlElementNames.SearchableMailbox); _i < _a.length; _i++) {
                var searchableMailboxObject = _a[_i];
                mailboxes.push(SearchableMailbox_1.SearchableMailbox.LoadFromXmlJsObject(searchableMailboxObject, service));
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Language]) {
            configuration.Language = jsObject[XmlElementNames_1.XmlElementNames.Language];
        }
        configuration.SearchableMailboxes = mailboxes.length == 0 ? null : mailboxes;
        return configuration;
    };
    return DiscoverySearchConfiguration;
}());
exports.DiscoverySearchConfiguration = DiscoverySearchConfiguration;
