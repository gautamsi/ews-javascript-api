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
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var SearchFilter_RelationalFilter_1 = require("./SearchFilter.RelationalFilter");
/**
 * Represents a search filter that checks if a property is less than or equal to a given value or other property.
 */
var IsLessThanOrEqualTo = /** @class */ (function (_super) {
    __extends(IsLessThanOrEqualTo, _super);
    function IsLessThanOrEqualTo(propertyDefinition, otherPropertyDefinitionOrValue) {
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, propertyDefinition, otherPropertyDefinitionOrValue) || this;
        return _this;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    IsLessThanOrEqualTo.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IsLessThanOrEqualTo; };
    return IsLessThanOrEqualTo;
}(SearchFilter_RelationalFilter_1.RelationalFilter));
exports.IsLessThanOrEqualTo = IsLessThanOrEqualTo;
