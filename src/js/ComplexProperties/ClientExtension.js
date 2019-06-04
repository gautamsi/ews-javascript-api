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
var ComplexProperty_1 = require("./ComplexProperty");
var ClientExtension = /** @class */ (function (_super) {
    __extends(ClientExtension, _super);
    function ClientExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**@internal */
    ClientExtension.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("ClientExtension.ts - ReadAttributesFromXml : Not implemented."); };
    /**@internal */
    ClientExtension.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ClientExtension.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    /**@internal */
    ClientExtension.prototype.WriteAttributesToXml = function (writer) { throw new Error("ClientExtension.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    ClientExtension.prototype.WriteElementsToXml = function (writer) { throw new Error("ClientExtension.ts - WriteElementsToXml : Not implemented."); };
    return ClientExtension;
}(ComplexProperty_1.ComplexProperty));
exports.ClientExtension = ClientExtension;
