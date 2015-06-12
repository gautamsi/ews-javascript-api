import {TypedPropertyDefinition} from "./TypedPropertyDefinition";
import {JsonObject} from "../Core/JsonObject";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
export class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
    Type: any;//System.Type;
    Parse(value: string): any {
        debugger;
        return value;
        //todo:fix converting generictype
        throw new Error("GenericPropertyDefinition.ts - Parse : Not implemented.");
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("GenericPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}