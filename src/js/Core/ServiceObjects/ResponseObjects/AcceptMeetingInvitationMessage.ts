import CalendarResponseMessage = require("./CalendarResponseMessage");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");

    class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        Tentative: boolean;
        private tentative: boolean;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("Not implemented."); }
}

export= AcceptMeetingInvitationMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


