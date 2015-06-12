import {ComplexProperty} from "../ComplexProperty";
import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class WorkingHours extends ComplexProperty {
    TimeZone: any;//System.TimeZoneInfo;
    DaysOfTheWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
    StartTime: any /*System.TimeSpan*/;
    EndTime: any /*System.TimeSpan*/;
    private timeZone: any;//System.TimeZoneInfo;
    private daysOfTheWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
    private startTime: any /*System.TimeSpan*/;
    private endTime: any /*System.TimeSpan*/;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("WorkingHours.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("WorkingHours.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



