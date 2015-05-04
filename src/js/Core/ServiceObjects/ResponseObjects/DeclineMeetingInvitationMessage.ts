import CalendarResponseMessage = require("./CalendarResponseMessage");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
}


export = DeclineMeetingInvitationMessage;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
