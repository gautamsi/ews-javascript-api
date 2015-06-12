import {RecurrenceRange} from "./RecurrenceRange";
import {Recurrence} from "../Patterns/Recurrence";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
export class NumberedRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    NumberOfOccurrences: number;
    private numberOfOccurrences: number;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NumberedRecurrenceRange.ts - AddPropertiesToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NumberedRecurrenceRange.ts - LoadFromJson : Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("NumberedRecurrenceRange.ts - SetupRecurrence : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("NumberedRecurrenceRange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("NumberedRecurrenceRange.ts - WriteElementsToXml : Not implemented."); }
}


//}



