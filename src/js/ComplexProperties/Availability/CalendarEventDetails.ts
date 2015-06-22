import {ComplexProperty} from "../ComplexProperty";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class CalendarEventDetails extends ComplexProperty {
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
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("CalendarEventDetails.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("CalendarEventDetails.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



