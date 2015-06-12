import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
    HasTransitionTime: boolean;
    Delta: any /*System.TimeSpan*/;
    TimeOfDay: any /*System.TimeSpan*/;
    DayOrder: number;
    Month: number;
    DayOfTheWeek: DayOfTheWeek;
    Year: number;
    private delta: any /*System.TimeSpan*/;
    private year: number;
    private month: number;
    private dayOrder: number;
    private dayOfTheWeek: DayOfTheWeek;
    private timeOfDay: any /*System.TimeSpan*/;
    InternalToJson(service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - LoadFromJson : Not implemented."); }
    ToTransitionTime(): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - ToTransitionTime : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("LegacyAvailabilityTimeZoneTime.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - WriteElementsToXml : Not implemented."); }
}


//}



