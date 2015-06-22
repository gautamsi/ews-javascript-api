import {XmlElementNames} from "../../XmlElementNames";
import {MeetingCancellation} from "../Items/MeetingCancellation";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {CalendarResponseMessageBase} from "./CalendarResponseMessageBase";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
export class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
    Body: MessageBody;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CancelMeetingMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("CancelMeetingMessage.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.CancelCalendarItem; }
}