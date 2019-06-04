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
var EwsLogging_1 = require("../Core/EwsLogging");
var TypeGuards_1 = require("../Interfaces/TypeGuards");
var TypedPropertyDefinition_1 = require("./TypedPropertyDefinition");
/**
 * @internal Represents generic property definition.
 */
var GenericPropertyDefinition = /** @class */ (function (_super) {
    __extends(GenericPropertyDefinition, _super);
    function GenericPropertyDefinition(propertyName, xmlElementName, uri, versionOrFlags, version, isNullableOrEnumType) {
        if (isNullableOrEnumType === void 0) { isNullableOrEnumType = false; }
        var _this = this;
        switch (arguments.length) {
            case 4:
                _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags) || this;
                break;
            case 6:
                if (typeof isNullableOrEnumType === 'boolean') {
                    _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version, isNullableOrEnumType) || this;
                }
                else {
                    _this = _super.call(this, propertyName, xmlElementName, uri, versionOrFlags, version) || this;
                    _this.enumType = isNullableOrEnumType;
                }
                break;
            default:
                break;
        }
        return _this;
    }
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    GenericPropertyDefinition.prototype.Parse = function (value) {
        //todo: fix converting generictype
        if (TypeGuards_1.TypeGuards.hasEwsEnumAttribute(this.enumType)) {
            return this.enumType.FromEwsEnumString(value);
        }
        EwsLogging_1.EwsLogging.Assert(false, "GenericPropertyDefinition<TPropertyValue>.Parse", "GenericPropertyDefinition<TPropertyValue> needs to be improved");
        return value;
    };
    /**
     * @internal Convert instance to string.
     *
     * @param   {any}   value   The value.
     * @return  {string}        String representation of property value.
     */
    GenericPropertyDefinition.prototype.ToString = function (value) {
        if (value === void 0 || value === null) {
            throw new Error("GenericPropertyDefinition: incorrect call of ToString(value): value is undefined/null");
        }
        if (TypeGuards_1.TypeGuards.hasEwsEnumAttribute(this.enumType)) {
            this.enumType.ToEwsEnumString(value);
        }
        else {
            return value.toString();
        }
    };
    GenericPropertyDefinition.prototype.toString = function (value) {
        return this.ToString(value);
    };
    return GenericPropertyDefinition;
}(TypedPropertyDefinition_1.TypedPropertyDefinition));
exports.GenericPropertyDefinition = GenericPropertyDefinition;
