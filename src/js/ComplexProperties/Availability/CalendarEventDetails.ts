  class CalendarEventDetails extends ComplexProperty {
        StoreId: string;
        Subject: string;
        Location: string;
        IsMeeting: boolean;
        IsRecurring: boolean;
        IsException: boolean;
        IsReminderSet: boolean;
        IsPrivate: boolean;
        private storeId: string;
        private subject: string;
        private location: string;
        private isMeeting: boolean;
        private isRecurring: boolean;
        private isException: boolean;
        private isReminderSet: boolean;
        private isPrivate: boolean;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
