import TypedPropertyDefinition = require("./TypedPropertyDefinition");
import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
   class StringPropertyDefinition extends TypedPropertyDefinition {
        get IsNullable(): boolean{return true;}
        Type: any;//System.Type;
        Parse(value: string): any { return value; }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
   export = StringPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
