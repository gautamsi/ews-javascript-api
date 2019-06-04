"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var isNode = (typeof window === 'undefined');
var util = undefined;
if (isNode) {
    util = require('util');
}
else {
    util = {
        inspect: function (obj, option) { return obj; }
    };
}
var EwsLogging = /** @class */ (function () {
    function EwsLogging() {
    }
    EwsLogging.Assert = function (condition, caller, message, always) {
        if (always === void 0) { always = false; }
        if ((this.DebugLogEnabled || always) && !condition)
            console.log(ExtensionMethods_1.StringHelper.Format("[{0}] {1}", caller, message));
    };
    EwsLogging.Log = function (message, always, expandObject) {
        if (always === void 0) { always = false; }
        if (expandObject === void 0) { expandObject = false; }
        if (this.DebugLogEnabled || always) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    };
    EwsLogging.DebugLog = function (message, expandObject) {
        if (expandObject === void 0) { expandObject = false; }
        if (this.DebugLogEnabled) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    };
    EwsLogging.DebugLogEnabled = false;
    return EwsLogging;
}());
exports.EwsLogging = EwsLogging;
