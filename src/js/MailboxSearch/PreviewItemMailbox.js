"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents mailbox object for preview item.
 *
 * @sealed
 */
var PreviewItemMailbox = /** @class */ (function () {
    function PreviewItemMailbox(mailboxId, primarySmtpAddress) {
        if (mailboxId === void 0) { mailboxId = null; }
        if (primarySmtpAddress === void 0) { primarySmtpAddress = null; }
        /**
         * Mailbox id
         */
        this.MailboxId = null;
        /**
         * Primary smtp address
         */
        this.PrimarySmtpAddress = null;
        this.MailboxId = mailboxId;
        this.PrimarySmtpAddress = primarySmtpAddress;
    }
    return PreviewItemMailbox;
}());
exports.PreviewItemMailbox = PreviewItemMailbox;
