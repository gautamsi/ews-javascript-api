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
var PropertyException_1 = require("./PropertyException");
var ServiceObjectPropertyException = /** @class */ (function (_super) {
    __extends(ServiceObjectPropertyException, _super);
    //private propertyDefinition: PropertyDefinitionBase;
    function ServiceObjectPropertyException(message, propertyDefinition, innerException) {
        var _this = _super.call(this, message, propertyDefinition.GetPrintableName(), innerException) || this;
        _this.PropertyDefinition = propertyDefinition;
        return _this;
    }
    return ServiceObjectPropertyException;
}(PropertyException_1.PropertyException));
exports.ServiceObjectPropertyException = ServiceObjectPropertyException;
