"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Source of resolution.
 */
var LocationSource;
(function (LocationSource) {
    /**
     * Unresolved
     */
    LocationSource[LocationSource["None"] = 0] = "None";
    /**
     * Resolved by external location services (such as Bing, Google, etc)
     */
    LocationSource[LocationSource["LocationServices"] = 1] = "LocationServices";
    /**
     * Resolved by external phonebook services (such as Bing, Google, etc)
     */
    LocationSource[LocationSource["PhonebookServices"] = 2] = "PhonebookServices";
    /**
     * Revolved by a GPS enabled device (such as cellphone)
     */
    LocationSource[LocationSource["Device"] = 3] = "Device";
    /**
     * Sourced from a contact card
     */
    LocationSource[LocationSource["Contact"] = 4] = "Contact";
    /**
     * Sourced from a resource (such as a conference room)
     */
    LocationSource[LocationSource["Resource"] = 5] = "Resource";
})(LocationSource = exports.LocationSource || (exports.LocationSource = {}));
