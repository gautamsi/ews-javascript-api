import {XmlElementNames} from "../../XmlElementNames";
import {MeetingResponse} from "../Items/MeetingResponse";
import {CalendarResponseMessage} from "./CalendarResponseMessage";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
export class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeclineMeetingInvitationMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.DeclineItem; }
}
