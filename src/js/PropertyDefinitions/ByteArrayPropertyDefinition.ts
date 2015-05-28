import JsonObject = require("../Core/JsonObject");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");

import {base64Helper} from "../ExtensionMethods";

import TypedPropertyDefinition = require("./TypedPropertyDefinition");
class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
    get IsNullable(): boolean{return true;}
    Type: any;//System.Type;
    Parse(value: string): any { return base64Helper.atob(value); }
    ToString(value?: any): string {
        if (value)
            return base64Helper.btoa(value);
            
        throw new Error("ByteArrayPropertyDefinition: incorrect call of ToString(), undefined or null passed");
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}
export = ByteArrayPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
