import TypedPropertyDefinition = require("./TypedPropertyDefinition");
import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");

    class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
        Type: any;//System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}

export = GenericPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
