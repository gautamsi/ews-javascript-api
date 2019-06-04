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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/**
 * @internal Represents TimeSpan property definition. based on moment Duration
 */
var TimeSpanPropertyDefinition = /** @class */ (function (_super) {
    __extends(TimeSpanPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **TimeSpanPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function TimeSpanPropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version, false) || this;
    }
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    TimeSpanPropertyDefinition.prototype.Parse = function (value) {
        return EwsUtilities_1.EwsUtilities.XSDurationToTimeSpan(value);
    };
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TimeSpan value.
     */
    TimeSpanPropertyDefinition.prototype.ToString = function (value) {
        if (value)
            return EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(value);
        throw new Error("TimeSpanPropertyDefinition: incorrect call of ToString(value): value is undefined");
    };
    return TimeSpanPropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.TimeSpanPropertyDefinition = TimeSpanPropertyDefinition;
