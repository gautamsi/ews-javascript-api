"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonParser = /** @class */ (function () {
    function JsonParser() {
    }
    JsonParser.prototype.Parse = function () { throw new Error("JsonParser.ts - Parse : Not implemented."); };
    JsonParser.prototype.ParseArray = function () { throw new Error("JsonParser.ts - ParseArray : Not implemented."); };
    JsonParser.prototype.ParseKeyValuePair = function (jsonObject) { throw new Error("JsonParser.ts - ParseKeyValuePair : Not implemented."); };
    JsonParser.prototype.ParseNumber = function (valueToken) { throw new Error("JsonParser.ts - ParseNumber : Not implemented."); };
    JsonParser.prototype.ParseObject = function () { throw new Error("JsonParser.ts - ParseObject : Not implemented."); };
    JsonParser.prototype.ParseValue = function () { throw new Error("JsonParser.ts - ParseValue : Not implemented."); };
    JsonParser.prototype.ReadAndValidateToken = function (token, expectedTokenTypes) { throw new Error("JsonParser.ts - ReadAndValidateToken : Not implemented."); };
    JsonParser.prototype.UnescapeString = function (value) { throw new Error("JsonParser.ts - UnescapeString : Not implemented."); };
    return JsonParser;
}());
exports.JsonParser = JsonParser;
