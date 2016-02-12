import {XmlElementNames} from "../../XmlElementNames";

import {MeetingMessage} from "./MeetingMessage";
/**
 * ## *Not Implemented* 
 */
export class MeetingCancellation extends MeetingMessage {
    //////Start: Date;
    //////End: Date;
    //////Location: string;
    //////Recurrence: Recurrence;
    //////EnhancedLocation: EnhancedLocation;
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingCancellation { throw new Error("MeetingCancellation.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): MeetingCancellation { throw new Error("MeetingCancellation.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MeetingCancellation.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("MeetingCancellation.ts - GetSchema : Not implemented."); }
        GetXmlElementName(): string { return XmlElementNames.MeetingCancellation; }
//////RemoveMeetingFromCalendar(): CalendarActionResults { throw new Error("MeetingCancellation.ts - RemoveMeetingFromCalendar : Not implemented."); }
}
