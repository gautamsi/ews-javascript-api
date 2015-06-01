import ComplexProperty = require("../ComplexProperty");
import DayOfTheWeek = require("../../Enumerations/DayOfTheWeek");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");

class WorkingHours extends ComplexProperty {
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
export = WorkingHours;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
