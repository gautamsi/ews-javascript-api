import {GenericPropertyDefinition} from "./GenericPropertyDefinition";
import {JsonObject} from "../Core/JsonObject";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
export class TimeSpanPropertyDefinition extends GenericPropertyDefinition<any/*System.TimeSpan*/> {
        Parse(value: string): any { throw new Error("TimeSpanPropertyDefinition.ts - Parse : Not implemented."); }
        //ToString(value: any): string { throw new Error("TimeSpanPropertyDefinition.ts - ToString : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("TimeSpanPropertyDefinition.ts - WriteJsonValue : Not implemented."); }
}
