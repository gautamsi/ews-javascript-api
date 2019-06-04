"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonTokenizer = /** @class */ (function () {
    function JsonTokenizer() {
    }
    JsonTokenizer.prototype.AdvanceRegExMatch = function () { throw new Error("JsonTokenizer.ts - AdvanceRegExMatch : Not implemented."); };
    JsonTokenizer.prototype.NextToken = function (token) { throw new Error("JsonTokenizer.ts - NextToken : Not implemented."); };
    JsonTokenizer.prototype.Peek = function () { throw new Error("JsonTokenizer.ts - Peek : Not implemented."); };
    JsonTokenizer.JsonStringRegExCode = '"([^\\"]|\\"|\\\\|\\/|\\b|\\f|\\n|\\r|\\t|\\u[\da - fA - F]{4 }) * "';
    JsonTokenizer.JsonNumberRegExCode = "-?\d+(.\d+)?([eE][+-]?\d+)?";
    JsonTokenizer.JsonBooleanRegExCode = "(true|false)";
    JsonTokenizer.JsonNullRegExCode = "null";
    JsonTokenizer.JsonOpenObjectRegExCode = "\{";
    JsonTokenizer.JsonCloseObjectRegExCode = "\}";
    JsonTokenizer.JsonOpenArrayRegExCode = "\[";
    JsonTokenizer.JsonCloseArrayRegExCode = "\]";
    JsonTokenizer.JsonColonRegExCode = "\:";
    JsonTokenizer.JsonCommaRegExCode = "\,";
    return JsonTokenizer;
}());
exports.JsonTokenizer = JsonTokenizer;
