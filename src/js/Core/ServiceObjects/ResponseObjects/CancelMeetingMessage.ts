
    class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
        Body: MessageBody;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
}

export = CancelMeetingMessage;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

