import {CalendarEventDetails} from "./CalendarEventDetails";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {DateTime} from "../../DateTime";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {ComplexProperty} from "../ComplexProperty";
export class CalendarEvent extends ComplexProperty {

    private startTime: DateTime = null;
    private endTime: DateTime = null;
    private freeBusyStatus: LegacyFreeBusyStatus = 0;
    private details: CalendarEventDetails = null;
    get StartTime(): DateTime {
        return this.startTime;
    }
    get EndTime(): DateTime {
        return this.endTime;
    }
    get FreeBusyStatus(): LegacyFreeBusyStatus {
        return this.freeBusyStatus;
    }
    get Details(): CalendarEventDetails {
        return this.details;
    }

    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("CalendarEvent.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.StartTime:
                    this.startTime = EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(
                        jsonProperty[key],
                        service);
                    break;
                case XmlElementNames.EndTime:
                    this.endTime = EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(
                        jsonProperty[key],
                        service);
                    break;
                case XmlElementNames.BusyType:
                    this.freeBusyStatus = <LegacyFreeBusyStatus><any>LegacyFreeBusyStatus[jsonProperty[key]];
                    break;
                case XmlElementNames.CalendarEventDetails:
                    this.details = new CalendarEventDetails();
                    this.details.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    }
}