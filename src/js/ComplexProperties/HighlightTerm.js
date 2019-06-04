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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an AQS highlight term.
 *
 * @sealed
 */
var HighlightTerm = /** @class */ (function (_super) {
    __extends(HighlightTerm, _super);
    /**
     * @internal Initializes a new instance of the **HighlightTerm** class.
     */
    function HighlightTerm() {
        var _this = _super.call(this) || this;
        /**
         * Term scope.
         */
        _this.scope = null;
        /**
         * Term value.
         */
        _this.value = null;
        return _this;
    }
    Object.defineProperty(HighlightTerm.prototype, "Scope", {
        /**
         * Gets term scope.
         */
        get: function () {
            return this.scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightTerm.prototype, "Value", {
        /**
         * Gets term value.
         */
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    HighlightTerm.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.HighlightTermScope]) {
            this.scope = jsObject[XmlElementNames_1.XmlElementNames.HighlightTermScope];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.HighlightTermValue]) {
            this.value = jsObject[XmlElementNames_1.XmlElementNames.HighlightTermValue];
        }
    };
    return HighlightTerm;
}(ComplexProperty_1.ComplexProperty));
exports.HighlightTerm = HighlightTerm;
