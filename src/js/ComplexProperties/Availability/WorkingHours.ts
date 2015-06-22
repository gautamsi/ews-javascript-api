import {DayOfTheWeek} from "../../Enumerations/DayOfTheWeek";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {ExchangeService} from "../../Core/ExchangeService";
import {LegacyAvailabilityTimeZone} from "../../Misc/Availability/LegacyAvailabilityTimeZone";
import {TimeSpan, moment} from "../../DateTime";
import {WorkingPeriod} from "./WorkingPeriod";
import {ComplexProperty} from "../ComplexProperty";
export class WorkingHours extends ComplexProperty {
    LegacyTimeZone: LegacyAvailabilityTimeZone = new LegacyAvailabilityTimeZone();
    get TimeZone(): moment.Moment { return this.timeZone; }//System.TimeZoneInfo;
    get DaysOfTheWeek(): DayOfTheWeek[] { return this.daysOfTheWeek; }/*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/
    get StartTime(): TimeSpan { return this.startTime; } /*System.TimeSpan*/
    get EndTime(): TimeSpan { return this.endTime; } /*System.TimeSpan*/
    private timeZone: moment.Moment;//System.TimeZoneInfo
    private daysOfTheWeek: DayOfTheWeek[] = [] /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
    private startTime: TimeSpan /*System.TimeSpan*/;
    private endTime: TimeSpan /*System.TimeSpan*/;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("WorkingHours.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.TimeZone:
                    var legacyTimeZone: LegacyAvailabilityTimeZone = new LegacyAvailabilityTimeZone();
                    legacyTimeZone.LoadFromXmlJsObject(jsonProperty[key], service);

                    this.LegacyTimeZone = legacyTimeZone;
                    //this.timeZone = legacyTimeZone.ToTimeZoneInfo();

                    break;
                case XmlElementNames.WorkingPeriodArray:
                    var workingPeriods: WorkingPeriod[] = [];// new List<WorkingPeriod>();

                    var workingPeriodsArrayObject: any[] = jsonProperty[key];
                    var workingPeriodsArray: any[] = workingPeriodsArrayObject[XmlElementNames.WorkingPeriod];
                    if (!Array.isArray(workingPeriodsArray)) {
                        workingPeriodsArray = <any>[workingPeriodsArray];
                    }
                    for (var workingPeriodEntry of workingPeriodsArray) {
                        var workingPeriod: WorkingPeriod = new WorkingPeriod();

                        workingPeriod.LoadFromXmlJsObject(workingPeriodEntry, service);

                         workingPeriods.push(workingPeriod);
                    }

                    // Availability supports a structure that can technically represent different working
                    // times for each day of the week. This is apparently how the information is stored in
                    // Exchange. However, no client (Outlook, OWA) either will let you specify different
                    // working times for each day of the week, and Outlook won't either honor that complex
                    // structure if it happens to be in Exchange.
                    // So here we'll do what Outlook and OWA do: we'll use the start and end times of the
                    // first working period, but we'll use the week days of all the periods.
                    this.startTime = workingPeriods[0].StartTime;
                    this.endTime = workingPeriods[0].EndTime;

                    for (var workingPeriod of workingPeriods) {
                        for (var dayOfWeek of workingPeriods[0].DaysOfWeek) {
                            if (this.daysOfTheWeek.indexOf(dayOfWeek) < 0) {
                                this.daysOfTheWeek.push(dayOfWeek);
                            }
                        }
                    }

                    break;
                default:
                    break;
            }
        }
    }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("WorkingHours.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
