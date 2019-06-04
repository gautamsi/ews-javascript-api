"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//make necessary changes if needed
//ref: 0.9 - extending Error as BlueBird throws error if promise is rejected without an Error object
var Exception = /** @class */ (function () {
    function Exception(message, innerException) {
        if (message === void 0) { message = ""; }
        if (innerException === void 0) { innerException = null; }
        /** @internal  */
        this.message = '';
        //todo: implement stacktrace and source if needed - stack trace implemented by calling Error.captureStack
        this.stack = null;
        this.InnerException = null;
        this.InnerException = innerException;
        this.message = message || "";
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
        //this.name = this.constructor.name; - no need to capture Name, can be infered by checking instance of Exception (or inheriting class)
    }
    Object.defineProperty(Exception.prototype, "Message", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "name", {
        /** @internal  needed for bluebird to work when rejected without inheriting from Error object. BlueBird checks for Error like object not Error subclass itself. */
        get: function () {
            return 'Exception';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    Exception.prototype.toString = function () {
        var result = this.stack;
        try {
            result = result || JSON.stringify(this);
        }
        catch (e) { }
        return result;
    };
    Exception.prototype.ToString = function () {
        return this.toString();
    };
    return Exception;
}());
exports.Exception = Exception;
