import {RecurrenceRange} from "./RecurrenceRange";
import {Recurrence} from "../Patterns/Recurrence";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
export class EndDateRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    EndDate: Date;
    private endDate: Date;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EndDateRecurrenceRange.ts - AddPropertiesToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EndDateRecurrenceRange.ts - LoadFromJson : Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("EndDateRecurrenceRange.ts - SetupRecurrence : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EndDateRecurrenceRange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EndDateRecurrenceRange.ts - WriteElementsToXml : Not implemented."); }
}


//}



