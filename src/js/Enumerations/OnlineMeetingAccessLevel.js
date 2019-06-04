"use strict";
//todo - move to file where class Microsoft.Exchange.WebServices.Data.OnlineMeetingSettings is located
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Online Meeting Access Level options.
 */
var OnlineMeetingAccessLevel;
(function (OnlineMeetingAccessLevel) {
    /**
     * Locked.
     */
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Locked"] = 0] = "Locked";
    /**
     * Invited.
     */
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Invited"] = 1] = "Invited";
    /**
     * Internal.
     */
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Internal"] = 2] = "Internal";
    /**
     * Everyone.
     */
    OnlineMeetingAccessLevel[OnlineMeetingAccessLevel["Everyone"] = 3] = "Everyone";
})(OnlineMeetingAccessLevel = exports.OnlineMeetingAccessLevel || (exports.OnlineMeetingAccessLevel = {}));
