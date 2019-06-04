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
 * @internal Represents double-precision floating point property definition.
 */
var DoublePropertyDefinition = /** @class */ (function (_super) {
    __extends(DoublePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **DoublePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function DoublePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version, false) || this;
    }
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    DoublePropertyDefinition.prototype.Parse = function (value) {
        return ExtensionMethods_1.Convert.toNumber(value);
    };
    return DoublePropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.DoublePropertyDefinition = DoublePropertyDefinition;
