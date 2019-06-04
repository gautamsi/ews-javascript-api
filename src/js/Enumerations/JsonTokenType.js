"use strict";
//todo - move to file where class Microsoft.Exchange.WebServices.Data.JsonTokenizer is located
Object.defineProperty(exports, "__esModule", { value: true });
var JsonTokenType;
(function (JsonTokenType) {
    JsonTokenType[JsonTokenType["String"] = 0] = "String";
    JsonTokenType[JsonTokenType["Number"] = 1] = "Number";
    JsonTokenType[JsonTokenType["Boolean"] = 2] = "Boolean";
    JsonTokenType[JsonTokenType["Null"] = 3] = "Null";
    JsonTokenType[JsonTokenType["ObjectOpen"] = 4] = "ObjectOpen";
    JsonTokenType[JsonTokenType["ObjectClose"] = 5] = "ObjectClose";
    JsonTokenType[JsonTokenType["ArrayOpen"] = 6] = "ArrayOpen";
    JsonTokenType[JsonTokenType["ArrayClose"] = 7] = "ArrayClose";
    JsonTokenType[JsonTokenType["Colon"] = 8] = "Colon";
    JsonTokenType[JsonTokenType["Comma"] = 9] = "Comma";
    JsonTokenType[JsonTokenType["EndOfFile"] = 10] = "EndOfFile";
})(JsonTokenType = exports.JsonTokenType || (exports.JsonTokenType = {}));
