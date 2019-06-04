"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of Id of a ConnectingId object.
 */
var ConnectingIdType;
(function (ConnectingIdType) {
    /**
     * The connecting Id is a principal name.
     */
    ConnectingIdType[ConnectingIdType["PrincipalName"] = 0] = "PrincipalName";
    /**
     * The Id is an SID.
     */
    ConnectingIdType[ConnectingIdType["SID"] = 1] = "SID";
    /**
     * The Id is an SMTP address.
     */
    ConnectingIdType[ConnectingIdType["SmtpAddress"] = 2] = "SmtpAddress";
})(ConnectingIdType = exports.ConnectingIdType || (exports.ConnectingIdType = {}));
