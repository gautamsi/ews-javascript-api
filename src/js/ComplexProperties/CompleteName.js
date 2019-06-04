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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the complete name of a contact.
 */
var CompleteName = /** @class */ (function (_super) {
    __extends(CompleteName, _super);
    function CompleteName() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.givenName = null;
        _this.middleName = null;
        _this.surname = null;
        _this.suffix = null;
        _this.initials = null;
        _this.fullName = null;
        _this.nickname = null;
        _this.yomiGivenName = null;
        _this.yomiSurname = null;
        return _this;
    }
    Object.defineProperty(CompleteName.prototype, "Title", {
        /**
         * Gets the contact's title.
         */
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "GivenName", {
        /**
         * Gets the given name (first name) of the contact.
         */
        get: function () {
            return this.givenName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "MiddleName", {
        /**
         * Gets the middle name of the contact.
         */
        get: function () {
            return this.middleName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "Surname", {
        /**
         * Gets the surname (last name) of the contact.
         */
        get: function () {
            return this.surname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "Suffix", {
        /**
         * Gets the suffix of the contact.
         */
        get: function () {
            return this.suffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "Initials", {
        /**
         * Gets the initials of the contact.
         */
        get: function () {
            return this.initials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "FullName", {
        /**
         * Gets the full name of the contact.
         */
        get: function () {
            return this.fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "NickName", {
        /**
         * Gets the nickname of the contact.
         */
        get: function () {
            return this.nickname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "YomiGivenName", {
        /**
         * Gets the Yomi given name (first name) of the contact.
         */
        get: function () {
            return this.yomiGivenName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleteName.prototype, "YomiSurname", {
        /**
         * Gets the Yomi surname (last name) of the contact.
         */
        get: function () {
            return this.yomiSurname;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    CompleteName.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Title:
                    this.title = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.FirstName:
                    this.givenName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.MiddleName:
                    this.middleName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.LastName:
                    this.surname = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Suffix:
                    this.suffix = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Initials:
                    this.initials = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.FullName:
                    this.fullName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NickName:
                    this.nickname = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.YomiFirstName:
                    this.yomiGivenName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.YomiLastName:
                    this.yomiSurname = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    CompleteName.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Title, this.Title);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FirstName, this.GivenName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MiddleName, this.MiddleName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LastName, this.Surname);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Suffix, this.Suffix);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Initials, this.Initials);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FullName, this.FullName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.NickName, this.NickName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.YomiFirstName, this.YomiGivenName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.YomiLastName, this.YomiSurname);
    };
    return CompleteName;
}(ComplexProperty_1.ComplexProperty));
exports.CompleteName = CompleteName;
