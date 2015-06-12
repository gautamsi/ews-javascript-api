import {CalendarEvent} from "../../ComplexProperties/Availability/CalendarEvent";
import {WorkingHours} from "../../ComplexProperties/Availability/WorkingHours";
import {ServiceResponse} from "./ServiceResponse";
import {FreeBusyViewType} from "../../Enumerations/FreeBusyViewType";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class AttendeeAvailability extends ServiceResponse {
    CalendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
    ViewType: FreeBusyViewType;
    MergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
    WorkingHours: WorkingHours;
    private calendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
    private mergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
    private viewType: FreeBusyViewType;
    private workingHours: WorkingHours;
    LoadFreeBusyViewFromXml(reader: EwsServiceXmlReader, viewType: FreeBusyViewType): any { throw new Error("AttendeeAvailability.ts - LoadFreeBusyViewFromXml : Not implemented."); }
}



//}



