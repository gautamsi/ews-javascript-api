import MeetingResponse = require("../Items/MeetingResponse");
import CalendarResponseMessage = require("./CalendarResponseMessage");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");

    class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        Tentative: boolean;
        private tentative: boolean;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("AcceptMeetingInvitationMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("AcceptMeetingInvitationMessage.ts - GetXmlElementNameOverride : Not implemented."); }
}

export= AcceptMeetingInvitationMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


