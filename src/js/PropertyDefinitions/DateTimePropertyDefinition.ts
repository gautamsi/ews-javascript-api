import PropertyDefinition = require("./PropertyDefinition");
import ExchangeServiceBase = require("../Core/ExchangeServiceBase");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
    class DateTimePropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        Type: any;//System.Type;
        private isNullable: boolean;
        GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): Date { throw new Error("DateTimePropertyDefinition.ts - GetConvertedDateTime : Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("DateTimePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
        LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("DateTimePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented."); }
        ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("DateTimePropertyDefinition.ts - ScopeToTimeZone : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("DateTimePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("DateTimePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
    }


    export = DateTimePropertyDefinition;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
