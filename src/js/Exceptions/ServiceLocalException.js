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
/**
 * Represents an error that occurs when a service operation fails locally (e.g. validation error).
 */
var ServiceLocalException = /** @class */ (function (_super) {
    __extends(ServiceLocalException, _super);
    function ServiceLocalException(message, innerException) {
        if (message === void 0) { message = null; }
        if (innerException === void 0) { innerException = null; }
        return _super.call(this, message, innerException) || this;
    }
    return ServiceLocalException;
}(Exception_1.Exception));
exports.ServiceLocalException = ServiceLocalException;
