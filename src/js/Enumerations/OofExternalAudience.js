"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the external audience of an Out of Office notification.
 */
var OofExternalAudience;
(function (OofExternalAudience) {
    /**
     * No external recipients should receive Out of Office notifications.
     */
    OofExternalAudience[OofExternalAudience["None"] = 0] = "None";
    /**
     * Only recipients that are in the user's Contacts frolder should receive Out of Office notifications.
     */
    OofExternalAudience[OofExternalAudience["Known"] = 1] = "Known";
    /**
     * All recipients should receive Out of Office notifications.
     */
    OofExternalAudience[OofExternalAudience["All"] = 2] = "All";
})(OofExternalAudience = exports.OofExternalAudience || (exports.OofExternalAudience = {}));
