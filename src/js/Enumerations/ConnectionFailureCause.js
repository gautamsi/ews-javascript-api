"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ConnectionFailureCause enumeration
 */
var ConnectionFailureCause;
(function (ConnectionFailureCause) {
    /**
     * None
     */
    ConnectionFailureCause[ConnectionFailureCause["None"] = 0] = "None";
    /**
     * UserBusy
     */
    ConnectionFailureCause[ConnectionFailureCause["UserBusy"] = 1] = "UserBusy";
    /**
     * NoAnswer
     */
    ConnectionFailureCause[ConnectionFailureCause["NoAnswer"] = 2] = "NoAnswer";
    /**
     * Unavailable
     */
    ConnectionFailureCause[ConnectionFailureCause["Unavailable"] = 3] = "Unavailable";
    /**
     * Other
     */
    ConnectionFailureCause[ConnectionFailureCause["Other"] = 4] = "Other";
})(ConnectionFailureCause = exports.ConnectionFailureCause || (exports.ConnectionFailureCause = {}));
