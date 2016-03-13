import {XmlElementNames} from "../../XmlElementNames";
import {AttachableAttribute} from "../../../Attributes/AttachableAttribute";

import {EmailMessage} from "./EmailMessage";
/**
 * ## *Not Implemented* 
 */
@AttachableAttribute(false)
export class MeetingMessage extends EmailMessage {
    ////////AssociatedAppointmentId: ItemId;
    ////////IsDelegated: boolean;
    ////////IsOutOfDate: boolean;
    ////////HasBeenProcessed: boolean;
    ////////IsOrganizer: boolean;
    ////////ResponseType: MeetingResponseType;
    ////////ICalUid: string;
    ////////ICalRecurrenceId: Date;
    ////////ICalDateTimeStamp: Date;
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingMessage { throw new Error("MeetingMessage.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): MeetingMessage { throw new Error("MeetingMessage.ts - Bind : Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MeetingMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("MeetingMessage.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.MeetingMessage; }
}