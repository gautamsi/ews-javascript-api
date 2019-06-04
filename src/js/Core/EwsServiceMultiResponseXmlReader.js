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
var EwsServiceXmlReader_1 = require("./EwsServiceXmlReader");
/**@internal */
var EwsServiceMultiResponseXmlReader = /** @class */ (function (_super) {
    __extends(EwsServiceMultiResponseXmlReader, _super);
    function EwsServiceMultiResponseXmlReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwsServiceMultiResponseXmlReader.prototype.Create = function (stream /*System.IO.Stream*/, service) { throw new Error("EwsServiceMultiResponseXmlReader.ts - Create : Not implemented."); };
    EwsServiceMultiResponseXmlReader.prototype.CreateXmlReader = function (stream /*System.IO.Stream*/) { throw new Error("EwsServiceMultiResponseXmlReader.ts - CreateXmlReader : Not implemented."); };
    EwsServiceMultiResponseXmlReader.prototype.InitializeXmlReader = function (stream /*System.IO.Stream*/) { throw new Error("EwsServiceMultiResponseXmlReader.ts - InitializeXmlReader : Not implemented."); };
    return EwsServiceMultiResponseXmlReader;
}(EwsServiceXmlReader_1.EwsServiceXmlReader));
exports.EwsServiceMultiResponseXmlReader = EwsServiceMultiResponseXmlReader;
