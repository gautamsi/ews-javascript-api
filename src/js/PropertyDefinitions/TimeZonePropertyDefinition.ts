import {PropertyDefinition} from "./PropertyDefinition";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class TimeZonePropertyDefinition extends PropertyDefinition {
        Type: any;//System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("TimeZonePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
        LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("TimeZonePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("TimeZonePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("TimeZonePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
}


//}



