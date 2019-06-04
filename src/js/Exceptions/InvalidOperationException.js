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
var InvalidOperationException = /** @class */ (function (_super) {
    __extends(InvalidOperationException, _super);
    function InvalidOperationException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        var _this = _super.call(this, message, innerException) || this;
        _this.ParamName = null;
        return _this;
    }
    return InvalidOperationException;
}(Exception_1.Exception));
exports.InvalidOperationException = InvalidOperationException;
