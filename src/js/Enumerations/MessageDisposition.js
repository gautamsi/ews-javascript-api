"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how messages are disposed of in CreateItem and UpdateItem operations.
 */
var MessageDisposition;
(function (MessageDisposition) {
    /**
     * Messages are saved but not sent.
     */
    MessageDisposition[MessageDisposition["SaveOnly"] = 0] = "SaveOnly";
    /**
     * Messages are sent and a copy is saved.
     */
    MessageDisposition[MessageDisposition["SendAndSaveCopy"] = 1] = "SendAndSaveCopy";
    /**
     * Messages are sent but no copy is saved.
     */
    MessageDisposition[MessageDisposition["SendOnly"] = 2] = "SendOnly";
})(MessageDisposition = exports.MessageDisposition || (exports.MessageDisposition = {}));
