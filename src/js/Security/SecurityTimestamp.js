"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityTimestamp = /** @class */ (function () {
    function SecurityTimestamp() {
    }
    SecurityTimestamp.prototype.GetCreationTimeChars = function () { throw new Error("SecurityTimestamp.ts - GetCreationTimeChars : Not implemented."); };
    SecurityTimestamp.prototype.GetDigest = function () { throw new Error("SecurityTimestamp.ts - GetDigest : Not implemented."); };
    SecurityTimestamp.prototype.GetExpiryTimeChars = function () { throw new Error("SecurityTimestamp.ts - GetExpiryTimeChars : Not implemented."); };
    SecurityTimestamp.prototype.ToChars = function (utcTime) { throw new Error("SecurityTimestamp.ts - ToChars : Not implemented."); };
    //ToChars(n: number, buffer: any[] /*System.Char[]*/, offset: number /*System.Int32&*/, count: number): void{ throw new Error("SecurityTimestamp.ts - ToChars : Not implemented.");}
    SecurityTimestamp.prototype.ToString = function () { throw new Error("SecurityTimestamp.ts - ToString : Not implemented."); };
    SecurityTimestamp.DefaultTimestampValidityDurationString = "00:05:00";
    SecurityTimestamp.DefaultFormat = "yyyy-MM-ddTHH:mm:ss.fffZ";
    return SecurityTimestamp;
}());
exports.SecurityTimestamp = SecurityTimestamp;
