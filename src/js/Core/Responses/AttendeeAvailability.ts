import ServiceResponse = require("./ServiceResponse");
import FreeBusyViewType = require("../../Enumerations/FreeBusyViewType");
import LegacyFreeBusyStatus = require("../../Enumerations/LegacyFreeBusyStatus");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class AttendeeAvailability extends ServiceResponse {
    CalendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
    ViewType: FreeBusyViewType;
    MergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
    WorkingHours: WorkingHours;
    private calendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
    private mergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
    private viewType: FreeBusyViewType;
    private workingHours: WorkingHours;
    LoadFreeBusyViewFromXml(reader: EwsServiceXmlReader, viewType: FreeBusyViewType): any { throw new Error("Not implemented."); }
}
export = AttendeeAvailability;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
