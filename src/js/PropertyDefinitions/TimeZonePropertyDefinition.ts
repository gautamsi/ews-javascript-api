import PropertyDefinition = require("./PropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class TimeZonePropertyDefinition extends PropertyDefinition {
        Type: any;//System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("TimeZonePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
        LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("TimeZonePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("TimeZonePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("TimeZonePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
}

export = TimeZonePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
