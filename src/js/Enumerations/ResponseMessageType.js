"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of a ResponseMessage object.
 */
var ResponseMessageType;
(function (ResponseMessageType) {
    /**
     * The ResponseMessage is a reply to the sender of a message.
     */
    ResponseMessageType[ResponseMessageType["Reply"] = 0] = "Reply";
    /**
     * The ResponseMessage is a reply to the sender and all the recipients of a message.
     */
    ResponseMessageType[ResponseMessageType["ReplyAll"] = 1] = "ReplyAll";
    /**
     * The ResponseMessage is a forward.
     */
    ResponseMessageType[ResponseMessageType["Forward"] = 2] = "Forward";
})(ResponseMessageType = exports.ResponseMessageType || (exports.ResponseMessageType = {}));
