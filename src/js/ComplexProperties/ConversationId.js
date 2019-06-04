"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ServiceId_1 = require("./ServiceId");
/**
 * Represents the Id of a Conversation.
 */
var ConversationId = /** @class */ (function (_super) {
    __extends(ConversationId, _super);
    function ConversationId(uniqueId) {
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, uniqueId) || this;
        return _this;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ConversationId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ConversationId; };
    /**
     * Gets a string representation of the Conversation Id.
     *
     * @return  {string}      The string representation of the conversation id.
     */
    ConversationId.prototype.ToString = function () {
        // We have ignored the change key portion
        return this.UniqueId;
    };
    ConversationId.prototype.toString = function () { return this.ToString(); };
    return ConversationId;
}(ServiceId_1.ServiceId));
exports.ConversationId = ConversationId;
