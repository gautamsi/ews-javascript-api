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
var EwsXmlReader_1 = require("./EwsXmlReader");
/**@internal */
var EwsServiceXmlReader = /** @class */ (function (_super) {
    __extends(EwsServiceXmlReader, _super);
    //#region Constructor
    function EwsServiceXmlReader(rawXML, service) {
        var _this = _super.call(this, rawXML) || this;
        _this.service = service;
        return _this;
    }
    Object.defineProperty(EwsServiceXmlReader.prototype, "Service", {
        get: function () { return this.service; },
        enumerable: true,
        configurable: true
    });
    //#endregion
    EwsServiceXmlReader.prototype.ConvertStringToDateTime = function (dateTimeString) { throw new Error("EwsServiceXmlReader.ts - ConvertStringToDateTime : Not implemented."); };
    EwsServiceXmlReader.prototype.ConvertStringToUnspecifiedDate = function (dateTimeString) { throw new Error("EwsServiceXmlReader.ts - ConvertStringToUnspecifiedDate : Not implemented."); };
    EwsServiceXmlReader.prototype.ReadElementValueAsDateTime = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); };
    //ReadElementValueAsDateTime(xmlNamespace: XmlNamespace, localName: string): Date { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsDateTime : Not implemented."); }
    EwsServiceXmlReader.prototype.ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone : Not implemented."); };
    EwsServiceXmlReader.prototype.ReadElementValueAsUnspecifiedDate = function () { throw new Error("EwsServiceXmlReader.ts - ReadElementValueAsUnspecifiedDate : Not implemented."); };
    return EwsServiceXmlReader;
}(EwsXmlReader_1.EwsXmlReader));
exports.EwsServiceXmlReader = EwsServiceXmlReader;
