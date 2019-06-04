"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines physical address entries for a contact.
 */
var PhysicalAddressKey;
(function (PhysicalAddressKey) {
    /**
     * The business address.
     */
    PhysicalAddressKey[PhysicalAddressKey["Business"] = 0] = "Business";
    /**
     * The home address.
     */
    PhysicalAddressKey[PhysicalAddressKey["Home"] = 1] = "Home";
    /**
     * An alternate address.
     */
    PhysicalAddressKey[PhysicalAddressKey["Other"] = 2] = "Other";
})(PhysicalAddressKey = exports.PhysicalAddressKey || (exports.PhysicalAddressKey = {}));
