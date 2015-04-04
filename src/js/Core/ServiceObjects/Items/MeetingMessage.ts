
import EmailMessage = require("./EmailMessage");
class MeetingMessage extends EmailMessage {
    ////////AssociatedAppointmentId: ItemId;
    ////////IsDelegated: boolean;
    ////////IsOutOfDate: boolean;
    ////////HasBeenProcessed: boolean;
    ////////IsOrganizer: boolean;
    ////////ResponseType: MeetingResponseType;
    ////////ICalUid: string;
    ////////ICalRecurrenceId: Date;
    ////////ICalDateTimeStamp: Date;
    ////////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingMessage { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, id: ItemId): MeetingMessage { throw new Error("Not implemented."); }
    ////////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    ////////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
}

export = MeetingMessage;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
