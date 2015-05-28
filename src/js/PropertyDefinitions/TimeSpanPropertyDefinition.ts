import GenericPropertyDefinition = require("./GenericPropertyDefinition");
import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
   class TimeSpanPropertyDefinition extends GenericPropertyDefinition<any/*System.TimeSpan*/> {
        Parse(value: string): any { throw new Error("TimeSpanPropertyDefinition.ts - Parse : Not implemented."); }
        //ToString(value: any): string { throw new Error("TimeSpanPropertyDefinition.ts - ToString : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("TimeSpanPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}
export = TimeSpanPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
