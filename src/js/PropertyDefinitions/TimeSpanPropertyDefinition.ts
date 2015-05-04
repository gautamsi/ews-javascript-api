import GenericPropertyDefinition = require("./GenericPropertyDefinition");
import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
   class TimeSpanPropertyDefinition extends GenericPropertyDefinition<System.TimeSpan> {
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}
export = TimeSpanPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
