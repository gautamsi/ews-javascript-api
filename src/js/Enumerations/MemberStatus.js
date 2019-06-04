"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the status of group members.
 */
var MemberStatus;
(function (MemberStatus) {
    /**
     * The member is unrecognized.
     */
    MemberStatus[MemberStatus["Unrecognized"] = 0] = "Unrecognized";
    /**
     * The member is normal.
     */
    MemberStatus[MemberStatus["Normal"] = 1] = "Normal";
    /**
     * The member is demoted.
     */
    MemberStatus[MemberStatus["Demoted"] = 2] = "Demoted";
})(MemberStatus = exports.MemberStatus || (exports.MemberStatus = {}));
