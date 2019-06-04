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
var EffectiveRights_1 = require("../Enumerations/EffectiveRights");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtensionMethods_1 = require("../ExtensionMethods");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents effective rights property definition.
 */
var EffectiveRightsPropertyDefinition = /** @class */ (function (_super) {
    __extends(EffectiveRightsPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **EffectiveRightsPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function EffectiveRightsPropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    EffectiveRightsPropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        var effectiveRightsValue = EffectiveRights_1.EffectiveRights.None;
        if (jsObject != null) {
            for (var key in jsObject) {
                switch (key) {
                    case XmlElementNames_1.XmlElementNames.CreateAssociated:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.CreateAssociated;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.CreateContents:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.CreateContents;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.CreateHierarchy:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.CreateHierarchy;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.Delete:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.Delete;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.Modify:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.Modify;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.Read:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.Read;
                        }
                        break;
                    case XmlElementNames_1.XmlElementNames.ViewPrivateItems:
                        if (ExtensionMethods_1.Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights_1.EffectiveRights.ViewPrivateItems;
                        }
                        break;
                }
            }
        }
        propertyBag._setItem(this, effectiveRightsValue);
    };
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    EffectiveRightsPropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        // EffectiveRights is a read-only property, no need to implement this.
    };
    return EffectiveRightsPropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.EffectiveRightsPropertyDefinition = EffectiveRightsPropertyDefinition;
