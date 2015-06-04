import EffectiveRights = require("../Enumerations/EffectiveRights");
import XmlElementNames = require("../Core/XmlElementNames");
import ExchangeService = require("../Core/ExchangeService");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {Convert} from "../ExtensionMethods";
import PropertyDefinition = require("./PropertyDefinition");
class EffectiveRightsPropertyDefinition extends PropertyDefinition {
    Type: any;//System.Type;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("EffectiveRightsPropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any {
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
        propertyBag._setItem(this,jsObject);
        //throw new Error("EffectiveRightsPropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented.");
    }
    //WriteJsonValue(jsObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("EffectiveRightsPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void { 
        // EffectiveRights is a read-only property, no need to implement this.
        //throw new Error("EffectiveRightsPropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); 
    }
}


export = EffectiveRightsPropertyDefinition;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
