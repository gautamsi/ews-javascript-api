import XmlElementNames = require("../../XmlElementNames");
import MeetingResponse = require("../Items/MeetingResponse");
import CalendarResponseMessage = require("./CalendarResponseMessage");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeclineMeetingInvitationMessage.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.DeclineItem; }
}


export = DeclineMeetingInvitationMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
