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
var SearchFilter_PropertyBasedFilter_1 = require("./SearchFilter.PropertyBasedFilter");
/**
 * Represents a search filter checking if a field is set. Applications can use ExistsFilter to define conditions such as "Field IS SET".
 */
var Exists = /** @class */ (function (_super) {
    __extends(Exists, _super);
    function Exists(propertyDefinition) {
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, propertyDefinition) || this;
        return _this;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    Exists.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Exists; };
    return Exists;
}(SearchFilter_PropertyBasedFilter_1.PropertyBasedFilter));
exports.Exists = Exists;
