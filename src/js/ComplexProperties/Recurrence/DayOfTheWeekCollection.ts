import {ComplexProperty} from "../ComplexProperty";
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class DayOfTheWeekCollection extends ComplexProperty {
    Item: DayOfTheWeek;
    Count: number;
    private items: any[];// System.Collections.Generic.List<T>;
    Add(dayOfTheWeek: DayOfTheWeek): any { throw new Error("DayOfTheWeekCollection.ts - Add : Not implemented."); }
    AddRange(daysOfTheWeek: any /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("DayOfTheWeekCollection.ts - AddRange : Not implemented."); }
    Clear(): any { throw new Error("DayOfTheWeekCollection.ts - Clear : Not implemented."); }
    GetEnumerator(): any { throw new Error("DayOfTheWeekCollection.ts - GetEnumerator : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("DayOfTheWeekCollection.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DayOfTheWeekCollection.ts - LoadFromJson : Not implemented."); }
    LoadFromJsonValue(jsonValue: string): any { throw new Error("DayOfTheWeekCollection.ts - LoadFromJsonValue : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("DayOfTheWeekCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    Remove(dayOfTheWeek: DayOfTheWeek): boolean { throw new Error("DayOfTheWeekCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("DayOfTheWeekCollection.ts - RemoveAt : Not implemented."); }
    ToString(separator?: string): string { throw new Error("DayOfTheWeekCollection.ts - ToString : Not implemented."); }
    //ToString(): string { throw new Error("DayOfTheWeekCollection.ts - ToString : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("DayOfTheWeekCollection.ts - WriteToXml : Not implemented."); }
}


//}



