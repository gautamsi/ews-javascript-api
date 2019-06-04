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
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var ComplexProperty_1 = require("./ComplexProperty");
var ByteArrayArray = /** @class */ (function (_super) {
    __extends(ByteArrayArray, _super);
    function ByteArrayArray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //ref: bytearray not implemented here, storing base64 value instead
        _this.content = []; // System.Byte[][];//System.Collections.Generic.List<T>;
        return _this;
    }
    Object.defineProperty(ByteArrayArray.prototype, "Content", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    ByteArrayArray.prototype.InternalToJson = function (service) { throw new Error("ByteArrayArray.ts - InternalToJson : Not implemented."); };
    ByteArrayArray.prototype.LoadFromXmlJsObject = function (jsonCollection, serviceExchangeService) {
        if (jsonCollection !== null && jsonCollection[ByteArrayArray.ItemXmlElementName]) {
            var binarydata = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonCollection, ByteArrayArray.ItemXmlElementName);
            for (var _i = 0, binarydata_1 = binarydata; _i < binarydata_1.length; _i++) {
                var blob = binarydata_1[_i];
                this.content.push(blob); //ref: storing original base64 content //EwsServiceJsonReader.ReadBase64ElementValue(blob));
            }
        }
    };
    /**@internal */
    ByteArrayArray.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.content; _i < _a.length; _i++) {
            var item = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, ByteArrayArray.ItemXmlElementName);
            writer.WriteValue(item, null);
            //writer.WriteBase64ElementValue(item);
            writer.WriteEndElement();
        }
    };
    ByteArrayArray.ItemXmlElementName = "Base64Binary";
    return ByteArrayArray;
}(ComplexProperty_1.ComplexProperty));
exports.ByteArrayArray = ByteArrayArray;
