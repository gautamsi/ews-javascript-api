import {CalendarEvent} from "../../ComplexProperties/Availability/CalendarEvent";
import {WorkingHours} from "../../ComplexProperties/Availability/WorkingHours";
import {FreeBusyViewType} from "../../Enumerations/FreeBusyViewType";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {XmlElementNames} from "../XmlElementNames";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "./ServiceResponse";
export class AttendeeAvailability extends ServiceResponse {
    get CalendarEvents(): CalendarEvent[] { return this.calendarEvents; }
    get ViewType(): FreeBusyViewType { return this.viewType; }
    get MergedFreeBusyStatus(): LegacyFreeBusyStatus[] { return this.mergedFreeBusyStatus; }
    get WorkingHours(): WorkingHours { return this.workingHours; }
    private calendarEvents: CalendarEvent[] = [];
    private mergedFreeBusyStatus: LegacyFreeBusyStatus[] = [];
    private viewType: FreeBusyViewType = FreeBusyViewType.None;
    private workingHours: WorkingHours = null;
    LoadFreeBusyViewFromXmlJsObject(jsObject: any, viewType: FreeBusyViewType, service: ExchangeService): void {
        var viewTypeString = jsObject[XmlElementNames.FreeBusyViewType];
        this.viewType = <FreeBusyViewType><any>FreeBusyViewType[viewTypeString];
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.MergedFreeBusy:
                    var mergedFreeBusy: string = jsObject[key];

                    for (var status of mergedFreeBusy.split('')) {
                        this.mergedFreeBusyStatus.push(<LegacyFreeBusyStatus>Number(status));
                    }
                    break;
                case XmlElementNames.CalendarEventArray:
                    var calendarEventArray = jsObject[key];
                    var calendarEvents:any[] = calendarEventArray[XmlElementNames.CalendarEvent];
                    if (!Array.isArray(calendarEvents)) {
                        calendarEvents = [calendarEvents]
                    }
                    for (var calendarEventObj of calendarEvents) {
                        var calendarEvent: CalendarEvent = new CalendarEvent();
                        calendarEvent.LoadFromXmlJsObject(calendarEventObj, service);
                        this.calendarEvents.push(calendarEvent);
                    }
                    break;
                case XmlElementNames.WorkingHours:
                    this.workingHours = new WorkingHours();
                    this.workingHours.LoadFromXmlJsObject(jsObject[key], service);
                    break;
            }
        }
    }
}
