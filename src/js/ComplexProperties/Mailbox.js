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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a mailbox reference.
 */
var Mailbox = /** @class */ (function (_super) {
    __extends(Mailbox, _super);
    function Mailbox(smtpAddressOrAddress, routingType) {
        if (smtpAddressOrAddress === void 0) { smtpAddressOrAddress = null; }
        if (routingType === void 0) { routingType = null; }
        var _this = _super.call(this) || this;
        _this.Address = smtpAddressOrAddress;
        _this.RoutingType = routingType;
        return _this;
    }
    Object.defineProperty(Mailbox.prototype, "IsValid", {
        /**
         * True if this instance is valid, false otherthise.
         *
         * @value   *true* if this instance is valid; otherwise, *false*.
         */
        get: function () {
            return !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Address);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines whether the specified  is equal to the current .
     *
     * @param   {any}   obj   The  to compare with the current .
     * @return  {boolean}       true if the specified  is equal to the current ; otherwise, false.
     *
     * @exception   {NullReferenceException}    The **obj** parameter is null.
     */
    Mailbox.prototype.Equals = function (obj) {
        if (this === obj) {
            return true;
        }
        else {
            var other = obj;
            if (!(other instanceof Mailbox)) {
                return false;
            }
            else if (((this.Address == null) && (other.Address == null)) ||
                ((this.Address != null) && this.Address === other.Address)) {
                return ((this.RoutingType == null) && (other.RoutingType == null)) ||
                    ((this.RoutingType != null) && this.RoutingType === other.RoutingType);
            }
            else {
                return false;
            }
        }
    };
    //GetHashCode(): number { throw new Error("Mailbox.ts - GetHashCode : Not implemented."); }
    /**
     * @internal Validates this instance.
     */
    Mailbox.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParamAllowNull(this.Address, "address");
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParamAllowNull(this.RoutingType, "routingType");
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    Mailbox.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        //debug:
        if (jsonProperty[XmlElementNames_1.XmlElementNames.EmailAddress]) {
            this.Address = jsonProperty[XmlElementNames_1.XmlElementNames.EmailAddress]; //.ReadAsString(XmlElementNames.EmailAddress);
        }
        if (jsonProperty[XmlElementNames_1.XmlElementNames.RoutingType]) {
            this.RoutingType = jsonProperty[XmlElementNames_1.XmlElementNames.RoutingType]; //.ReadAsString(XmlElementNames.RoutingType);
        }
    };
    /**
     * Returns a  that represents the current .
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    Mailbox.prototype.ToString = function () {
        if (!this.IsValid) {
            return ExtensionMethods_1.StringHelper.Empty;
        }
        else if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.RoutingType)) {
            return this.RoutingType + ":" + this.Address;
        }
        else {
            return this.Address;
        }
    };
    Mailbox.prototype.toString = function () {
        return this.ToString();
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Mailbox.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RoutingType, this.RoutingType);
    };
    /**
     * Get a string representation for using this instance in a search filter.
     * ISearchStringProvider.GetSearchString
     *
     * @return  {string}      String representation of instance.
     */
    Mailbox.prototype.GetSearchString = function () {
        return this.Address;
    };
    return Mailbox;
}(ComplexProperty_1.ComplexProperty));
exports.Mailbox = Mailbox;
