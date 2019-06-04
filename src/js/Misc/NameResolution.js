"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailAddress_1 = require("../ComplexProperties/EmailAddress");
var Contact_1 = require("../Core/ServiceObjects/Items/Contact");
var EwsLogging_1 = require("../Core/EwsLogging");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PropertySet_1 = require("../Core/PropertySet");
var NameResolution = /** @class */ (function () {
    function NameResolution(owner) {
        this.owner = null;
        this.mailbox = new EmailAddress_1.EmailAddress();
        this.contact = null;
        EwsLogging_1.EwsLogging.Assert(owner !== null, "NameResolution.ctor", "owner is null.");
        this.owner = owner;
    }
    Object.defineProperty(NameResolution.prototype, "Mailbox", {
        get: function () {
            return this.mailbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolution.prototype, "Contact", {
        get: function () {
            return this.contact;
        },
        enumerable: true,
        configurable: true
    });
    NameResolution.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("NameResolution.ts - LoadFromJson : Not implemented."); };
    NameResolution.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Mailbox:
                    this.mailbox.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Contact:
                    this.contact = new Contact_1.Contact(this.owner.Session);
                    this.contact.LoadFromXmlJsObject(jsonProperty[key], service, true, PropertySet_1.PropertySet.FirstClassProperties, false);
                    break;
                default:
                    break;
            }
        }
    };
    return NameResolution;
}());
exports.NameResolution = NameResolution;
