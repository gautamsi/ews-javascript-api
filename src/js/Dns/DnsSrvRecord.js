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
var DnsRecord_1 = require("./DnsRecord");
/** @internal */
var DnsSrvRecord = /** @class */ (function (_super) {
    __extends(DnsSrvRecord, _super);
    function DnsSrvRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DnsSrvRecord.prototype.Load = function (header, dataPointer) { throw new Error("DnsSrvRecord.ts - Load : Not implemented."); };
    return DnsSrvRecord;
}(DnsRecord_1.DnsRecord));
exports.DnsSrvRecord = DnsSrvRecord;
//------------modulename->Microsoft.Exchange.WebServices.Dns------------
