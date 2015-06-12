import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
import {JsonObject} from "../Core/JsonObject";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
export class StringPropertyDefinition extends TypedPropertyDefinition {
    get IsNullable(): boolean { return true; }
    Type: any;//System.Type;
    Parse(value: string): any { return value; }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("StringPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}