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
var ExtensionMethods_1 = require("../ExtensionMethods");
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/**
 * @internal Represents Integer property defintion.
 */
var IntPropertyDefinition = /** @class */ (function (_super) {
    __extends(IntPropertyDefinition, _super);
    function IntPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) {
        var _this = this;
        switch (arguments.length) {
            case 4:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags) || this;
                break;
            case 5:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version, false) || this;
                break;
            case 6:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version, isNullable) || this;
                break;
            default:
                break;
        }
        return _this;
    }
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    IntPropertyDefinition.prototype.Parse = function (value) {
        return ExtensionMethods_1.Convert.toNumber(value);
    };
    return IntPropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.IntPropertyDefinition = IntPropertyDefinition;
