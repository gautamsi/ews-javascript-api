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
var BodyType_1 = require("../Enumerations/BodyType");
var MessageBody_1 = require("./MessageBody");
/**
 * Represents the body of a message.
 */
var TextBody = /** @class */ (function (_super) {
    __extends(TextBody, _super);
    function TextBody(text) {
        if (text === void 0) { text = null; }
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, BodyType_1.BodyType.Text, text) || this;
        return _this;
    }
    return TextBody;
}(MessageBody_1.MessageBody));
exports.TextBody = TextBody;
