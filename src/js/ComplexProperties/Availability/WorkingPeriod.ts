import { DayOfTheWeek } from "../../Enumerations/DayOfTheWeek";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeService } from "../../Core/ExchangeService";
import { TimeSpan } from "../../TimeSpan";
import { XmlElementNames } from "../../Core/XmlElementNames";

import { ComplexProperty } from "../ComplexProperty";
export class WorkingPeriod extends ComplexProperty {
    get DaysOfWeek(): DayOfTheWeek[] { return this.daysOfWeek; } /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/
    get StartTime(): TimeSpan { return this.startTime; } /*System.TimeSpan*/
    get EndTime(): TimeSpan { return this.endTime; } /*System.TimeSpan*/
    private daysOfWeek: DayOfTheWeek[] = [] /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
    private startTime: TimeSpan = null /*System.TimeSpan*/;
    private endTime: TimeSpan = null/*System.TimeSpan*/;
    constructor() {
        super();
    }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("WorkingPeriod.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("WorkingPeriod.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.DayOfWeek:
                    EwsUtilities.ParseEnumValueList<DayOfTheWeek>(
                        this.daysOfWeek,
                        jsonProperty[key],
                        ' ',
                        DayOfTheWeek);
                    break;
                case XmlElementNames.StartTimeInMinutes:
                    this.startTime = TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames.EndTimeInMinutes:
                    this.endTime = TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                default:
                    break;
            }
        }
    }
}




