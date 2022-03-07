import {EffectiveRights} from "../Enumerations/EffectiveRights";
import {XmlElementNames} from "../Core/XmlElementNames";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {Convert} from "../ExtensionMethods";

import {PropertyDefinition} from "./PropertyDefinition";
/**
 * @internal Represents effective rights property definition.
 */
export class EffectiveRightsPropertyDefinition extends PropertyDefinition {

    /**
     * Gets the property type.
     */
    // @ts-ignore
    Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **EffectiveRightsPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion) {
        super(propertyName, xmlElementName, uri, flags, version);
    }


    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        var effectiveRightsValue: EffectiveRights = EffectiveRights.None;
        if (jsObject != null) {
            for (var key in jsObject) {
                switch (key) {
                    case XmlElementNames.CreateAssociated:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.CreateAssociated;
                        }
                        break;
                    case XmlElementNames.CreateContents:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.CreateContents;
                        }
                        break;
                    case XmlElementNames.CreateHierarchy:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.CreateHierarchy;
                        }
                        break;
                    case XmlElementNames.Delete:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.Delete;
                        }
                        break;
                    case XmlElementNames.Modify:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.Modify;
                        }
                        break;
                    case XmlElementNames.Read:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.Read;
                        }
                        break;
                    case XmlElementNames.ViewPrivateItems:
                        if (Convert.toBool(jsObject[key])) {
                            effectiveRightsValue |= EffectiveRights.ViewPrivateItems;
                        }
                        break;
                }
            }
        }
        propertyBag._setItem(this, effectiveRightsValue);
    }

    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        // EffectiveRights is a read-only property, no need to implement this.
    }
}
