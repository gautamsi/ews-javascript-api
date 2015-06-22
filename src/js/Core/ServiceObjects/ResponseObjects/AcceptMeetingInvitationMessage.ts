import {MeetingResponse} from "../Items/MeetingResponse";
import {CalendarResponseMessage} from "./CalendarResponseMessage";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
export class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        Tentative: boolean;
        private tentative: boolean;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("AcceptMeetingInvitationMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("AcceptMeetingInvitationMessage.ts - GetXmlElementNameOverride : Not implemented."); }
}
