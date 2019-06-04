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
var TypedPropertyDefinition_1 = require("./TypedPropertyDefinition");
/**
 * @internal Represents byte array property definition.
 */
var ByteArrayPropertyDefinition = /** @class */ (function (_super) {
    __extends(ByteArrayPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **ByteArrayPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function ByteArrayPropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    Object.defineProperty(ByteArrayPropertyDefinition.prototype, "IsNullable", {
        /**
         * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         */
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByteArrayPropertyDefinition.prototype, "Type", {
        /**
         * @internal Gets the property type.
         */
        get: function () { return ByteArrayPropertyDefinition; } //System.Type;
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}           Byte array value.
     */
    ByteArrayPropertyDefinition.prototype.Parse = function (value) {
        //ref: storing original base64 data base64Helper.atob(value); }
        EwsLogging_1.EwsLogging.Assert(false, "ByteArrayPropertyDefinition.Parse", "ByteArrayPropertyDefinition needs to be improved");
        return value;
    };
    /**
     * @internal Converts byte array property to a string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    Byte array value.
     */
    ByteArrayPropertyDefinition.prototype.ToString = function (value) {
        EwsLogging_1.EwsLogging.Assert(false, "ByteArrayPropertyDefinition.Parse", "ByteArrayPropertyDefinition needs to be improved");
        if (value)
            return value; //ref: using original value. base64Helper.btoa(value);
        throw new Error("ByteArrayPropertyDefinition: incorrect call of ToString(value): value is undefined");
    };
    return ByteArrayPropertyDefinition;
}(TypedPropertyDefinition_1.TypedPropertyDefinition));
exports.ByteArrayPropertyDefinition = ByteArrayPropertyDefinition;
