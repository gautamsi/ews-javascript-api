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
var Exception_1 = require("./Exception");
var ArgumentException = /** @class */ (function (_super) {
    __extends(ArgumentException, _super);
    function ArgumentException(message, paramNameOrInnerException, innerException) {
        if (message === void 0) { message = null; }
        if (paramNameOrInnerException === void 0) { paramNameOrInnerException = null; }
        if (innerException === void 0) { innerException = null; }
        var _this = _super.call(this, message, innerException || (paramNameOrInnerException instanceof Exception_1.Exception ? paramNameOrInnerException : null)) || this;
        _this.ParamName = null;
        if (typeof paramNameOrInnerException === 'string') {
            _this.ParamName = message;
        }
        return _this;
    }
    return ArgumentException;
}(Exception_1.Exception));
exports.ArgumentException = ArgumentException;
var ArgumentNullException = /** @class */ (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException(paramNameOrMessage, paramNameOrInnerException, innerException) {
        if (paramNameOrMessage === void 0) { paramNameOrMessage = null; }
        if (paramNameOrInnerException === void 0) { paramNameOrInnerException = null; }
        if (innerException === void 0) { innerException = null; }
        var _this = this;
        var argsLength = arguments.length;
        switch (argsLength) {
            case 1:
                _this = _super.call(this, "Argument is Null", paramNameOrMessage) || this;
                break;
            case 2:
                if (typeof paramNameOrInnerException === 'string') {
                    _this = _super.call(this, paramNameOrInnerException, paramNameOrMessage) || this;
                }
                else {
                    _this = _super.call(this, paramNameOrMessage, paramNameOrInnerException) || this;
                }
                break;
            default:
                _this = _super.call(this, "Argument is Null") || this;
                break;
        }
        return _this;
    }
    return ArgumentNullException;
}(ArgumentException));
exports.ArgumentNullException = ArgumentNullException;
var ArgumentOutOfRangeException = /** @class */ (function (_super) {
    __extends(ArgumentOutOfRangeException, _super);
    function ArgumentOutOfRangeException(paramNameOrMessage, messageOrActualValueOrException, message) {
        if (message === void 0) { message = null; }
        var _this = this;
        //super((message || messageOrObjValueOrException instanceof Exception ? paramNameOrMessage : null);
        var argsLength = arguments.length;
        switch (argsLength) {
            case 0:
                _this = _super.call(this, "ArgumentOutOfRangeException") || this;
                break;
            case 1:
                _this = _super.call(this, "ArgumentOutOfRangeException", paramNameOrMessage) || this;
                break;
            case 2:
                if (typeof messageOrActualValueOrException === 'string') {
                    _this = _super.call(this, messageOrActualValueOrException, paramNameOrMessage) || this;
                }
                else {
                    _this = _super.call(this, paramNameOrMessage, messageOrActualValueOrException) || this;
                }
                break;
            case 3:
                _this = _super.call(this, message, paramNameOrMessage) || this;
                _this.actualValue = messageOrActualValueOrException;
                break;
            default:
                _this = _super.call(this, "ArgumentOutOfRangeException") || this;
                break;
        }
        return _this;
    }
    Object.defineProperty(ArgumentOutOfRangeException.prototype, "ActualValue", {
        /**
         * Gets the value of the argument that caused the exception.
         */
        get: function () { return this.actualValue; },
        enumerable: true,
        configurable: true
    });
    return ArgumentOutOfRangeException;
}(ArgumentException));
exports.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
