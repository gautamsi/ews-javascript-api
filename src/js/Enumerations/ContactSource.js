"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the source of a contact or group.
 */
var ContactSource;
(function (ContactSource) {
    /**
     * The contact or group is stored in the Global Address List
     */
    ContactSource[ContactSource["ActiveDirectory"] = 0] = "ActiveDirectory";
    /**
     * The contact or group is stored in Exchange.
     */
    ContactSource[ContactSource["Store"] = 1] = "Store";
})(ContactSource = exports.ContactSource || (exports.ContactSource = {}));
