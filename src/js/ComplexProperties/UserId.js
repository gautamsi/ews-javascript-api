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
var StandardUser_1 = require("../Enumerations/StandardUser");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the Id of a user.
 *
 * @sealed
 */
var UserId = /** @class */ (function (_super) {
    __extends(UserId, _super);
    function UserId(primarySmtpAddressOrStandardUser) {
        var _this = _super.call(this) || this;
        _this.sID = null;
        _this.primarySmtpAddress = null;
        _this.displayName = null;
        _this.standardUser = null;
        if (typeof primarySmtpAddressOrStandardUser !== 'undefined') {
            if (typeof primarySmtpAddressOrStandardUser === 'string') {
                _this.primarySmtpAddress = primarySmtpAddressOrStandardUser;
            }
            else {
                _this.standardUser = primarySmtpAddressOrStandardUser;
            }
        }
        return _this;
    }
    Object.defineProperty(UserId.prototype, "SID", {
        /**
         * Gets or sets the SID of the user.
         */
        get: function () {
            return this.sID;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.sID; }, setValue: function (data) { return _this.sID = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "PrimarySmtpAddress", {
        /**
         * Gets or sets the primary SMTP address or the user.
         */
        get: function () {
            return this.primarySmtpAddress;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.primarySmtpAddress; }, setValue: function (data) { return _this.primarySmtpAddress = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "DisplayName", {
        /**
         * Gets or sets the display name of the user.
         */
        get: function () {
            return this.displayName;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.displayName; }, setValue: function (data) { return _this.displayName = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserId.prototype, "StandardUser", {
        /**
         * Gets or sets a value indicating which standard user the user represents.
         *
         * @Nullable
         */
        get: function () {
            return this.standardUser;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.standardUser; }, setValue: function (data) { return _this.standardUser = data; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Determines whether this instance is valid.
     *
     * @return  {boolean}      true if this instance is valid; otherwise, false.
     */
    UserId.prototype.IsValid = function () {
        return typeof this.StandardUser === 'number' || !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.PrimarySmtpAddress) || !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.SID);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    UserId.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.SID:
                    this.sID = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.PrimarySmtpAddress:
                    this.primarySmtpAddress = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.DisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.DistinguishedUser:
                    //debugger;//check for enum value consistency
                    this.standardUser = StandardUser_1.StandardUser[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UserId.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SID, this.SID);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.PrimarySmtpAddress, this.PrimarySmtpAddress);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DisplayName, this.DisplayName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DistinguishedUser, StandardUser_1.StandardUser[this.StandardUser]);
    };
    return UserId;
}(ComplexProperty_1.ComplexProperty));
exports.UserId = UserId;
