"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the email position of an extracted entity.
 */
var EmailPosition;
(function (EmailPosition) {
    /**
     * The position is in the latest reply.
     */
    EmailPosition[EmailPosition["LatestReply"] = 0] = "LatestReply";
    /**
     * The position is not in the latest reply.
     */
    EmailPosition[EmailPosition["Other"] = 1] = "Other";
    /**
     * The position is in the subject.
     */
    EmailPosition[EmailPosition["Subject"] = 2] = "Subject";
    /**
     * The position is in the signature.
     */
    EmailPosition[EmailPosition["Signature"] = 3] = "Signature";
})(EmailPosition = exports.EmailPosition || (exports.EmailPosition = {}));
