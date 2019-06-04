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
var ComplexPropertyDefinitionBase_1 = require("./ComplexPropertyDefinitionBase");
/**
 * @internal Represents base complex property type.
 *
 * @type <TComplexProperty> The type of the complex property.
 */
var ComplexPropertyDefinition = /** @class */ (function (_super) {
    __extends(ComplexPropertyDefinition, _super);
    function ComplexPropertyDefinition(propertyName, xmlElementName, uriOrFlags, versionOrFlags, versionOrDelegate, propertyCreationDelegate) {
        var _this = this;
        switch (arguments.length) {
            case 5:
                _this = _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags) || this;
                _this.propertyCreationDelegate = versionOrDelegate;
                EwsLogging_1.EwsLogging.Assert(_this.propertyCreationDelegate != null, "ComplexPropertyDefinition ctor", "CreateComplexPropertyDelegate cannot be null");
                break;
            case 6:
                _this = _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags, versionOrDelegate) || this;
                _this.propertyCreationDelegate = propertyCreationDelegate;
                break;
            default:
                break;
        }
        return _this;
    }
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty instance.
     */
    ComplexPropertyDefinition.prototype.CreatePropertyInstance = function (owner) {
        var complexProperty = this.propertyCreationDelegate();
        if (TypeGuards_1.TypeGuards.isIOwnedProperty(complexProperty)) { //IOwnedProperty ownedProperty = complexProperty as IOwnedProperty;
            complexProperty.Owner = owner;
        }
        if (complexProperty)
            return complexProperty;
    };
    return ComplexPropertyDefinition;
}(ComplexPropertyDefinitionBase_1.ComplexPropertyDefinitionBase));
exports.ComplexPropertyDefinition = ComplexPropertyDefinition;
