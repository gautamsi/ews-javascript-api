"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../ExtensionMethods");
/**
 * Represents a mobile phone.
 *
 * @sealed
 */
var MobilePhone = /** @class */ (function () {
    function MobilePhone(name, phoneNumber) {
        if (name === void 0) { name = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    Object.defineProperty(MobilePhone.prototype, "Name", {
        /**
         * Gets or sets the name associated with this mobile phone.
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobilePhone.prototype, "PhoneNumber", {
        /**
         * Gets or sets the number of this mobile phone.
         */
        get: function () {
            return this.phoneNumber;
        },
        set: function (value) {
            this.phoneNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Validates this instance.
     * ISelfValidate.Validate
     */
    MobilePhone.prototype.Validate = function () {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.PhoneNumber)) {
            throw new ServiceValidationException_1.ServiceValidationException("PhoneNumber cannot be empty.");
        }
    };
    ;
    return MobilePhone;
}());
exports.MobilePhone = MobilePhone;
