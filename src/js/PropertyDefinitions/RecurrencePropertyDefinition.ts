import {Recurrence} from "../ComplexProperties/Recurrence/Patterns/Recurrence";
import {RecurrenceRange} from "../ComplexProperties/Recurrence/Ranges/RecurrenceRange";
import {PropertyDefinition} from "./PropertyDefinition";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class RecurrencePropertyDefinition extends PropertyDefinition {
        Type: any;//System.Type;
        GetRecurrenceFromString(recurranceString: string): Recurrence { throw new Error("RecurrencePropertyDefinition.ts - GetRecurrenceFromString : Not implemented."); }
        GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange { throw new Error("RecurrencePropertyDefinition.ts - GetRecurrenceRange : Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("RecurrencePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
        LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("RecurrencePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("RecurrencePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("RecurrencePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
}
