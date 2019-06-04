"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Disable reason type
 */
var DisableReasonType;
(function (DisableReasonType) {
    /**
     * Extension is being disabled with no reason
     */
    DisableReasonType[DisableReasonType["NoReason"] = 0] = "NoReason";
    /**
     * Extension is being disabled from Outlook due to performance reasons
     */
    DisableReasonType[DisableReasonType["OutlookClientPerformance"] = 1] = "OutlookClientPerformance";
    /**
     * Extension is being disabled from OWA due to performance reasons
     */
    DisableReasonType[DisableReasonType["OWAClientPerformance"] = 2] = "OWAClientPerformance";
    /**
     * Extension is being disabled from MOWA due to performance reasons
     */
    DisableReasonType[DisableReasonType["MobileClientPerformance"] = 3] = "MobileClientPerformance";
})(DisableReasonType = exports.DisableReasonType || (exports.DisableReasonType = {}));
