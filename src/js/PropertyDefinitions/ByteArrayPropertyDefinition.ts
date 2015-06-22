import {JsonObject} from "../Core/JsonObject";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";

import {base64Helper} from "../ExtensionMethods";

import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
export class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
    get IsNullable(): boolean{return true;}
    Type: any;//System.Type;
    Parse(value: string): any { return base64Helper.atob(value); }
    ToString(value?: any): string {
        if (value)
            return base64Helper.btoa(value);
            
        throw new Error("ByteArrayPropertyDefinition: incorrect call of ToString(), undefined or null passed");
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("ByteArrayPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}