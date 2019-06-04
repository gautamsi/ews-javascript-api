"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var EmailAddress_1 = require("../ComplexProperties/EmailAddress");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents the results of an ExpandGroup operation.
 *
 * @sealed
 */
var ExpandGroupResults = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **ExpandGroupResults** class.
     */
    function ExpandGroupResults() {
        /**
         * True, if all members are returned.
         * EWS always returns true on ExpandDL, i.e. all members are returned.
         */
        this.includesAllMembers = false;
        /**
         * DL members.
         */
        this.members = [];
    }
    Object.defineProperty(ExpandGroupResults.prototype, "Count", {
        /**
         * Gets the number of members that were returned by the ExpandGroup operation.
         * Count might be less than the total number of members in the group, in which case the value of the IncludesAllMembers is false.
         */
        get: function () {
            return this.members.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpandGroupResults.prototype, "IncludesAllMembers", {
        /**
         * Gets a value indicating whether all the members of the group have been returned by ExpandGroup.
         */
        get: function () {
            return this.includesAllMembers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpandGroupResults.prototype, "Members", {
        /**
         * Gets the members of the expanded group.
         */
        get: function () {
            return this.members;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Returns an enumerator that iterates through the collection. this case this.members
     */
    ExpandGroupResults.prototype.GetEnumerator = function () {
        return this.members;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ExpandGroupResults.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        var dlResponse = jsObject[XmlElementNames_1.XmlElementNames.DLExpansion];
        var mailboxes = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(dlResponse, XmlElementNames_1.XmlElementNames.Mailbox);
        this.includesAllMembers = ExtensionMethods_1.Convert.toBool(dlResponse[XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange]);
        var mailboxCount = ExtensionMethods_1.Convert.toNumber(dlResponse[XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView]);
        for (var _i = 0, mailboxes_1 = mailboxes; _i < mailboxes_1.length; _i++) {
            var mailbox = mailboxes_1[_i];
            var emailAddress = new EmailAddress_1.EmailAddress();
            emailAddress.LoadFromXmlJsObject(mailbox, service);
            this.members.push(emailAddress);
        }
    };
    return ExpandGroupResults;
}());
exports.ExpandGroupResults = ExpandGroupResults;
