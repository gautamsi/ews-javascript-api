import {CalendarEventDetails} from "./CalendarEventDetails";
import {ComplexProperty} from "../ComplexProperty";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class CalendarEvent extends ComplexProperty {
    StartTime: Date;
    EndTime: Date;
    FreeBusyStatus: LegacyFreeBusyStatus;
    Details: CalendarEventDetails;
    private startTime: Date;
    private endTime: Date;
    private freeBusyStatus: LegacyFreeBusyStatus;
    private details: CalendarEventDetails;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("CalendarEvent.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("CalendarEvent.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



