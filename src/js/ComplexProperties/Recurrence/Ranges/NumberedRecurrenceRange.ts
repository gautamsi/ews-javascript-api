import RecurrenceRange = require("./RecurrenceRange");
import Recurrence = require("../Patterns/Recurrence");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");

class NumberedRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    NumberOfOccurrences: number;
    private numberOfOccurrences: number;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NumberedRecurrenceRange.ts - AddPropertiesToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NumberedRecurrenceRange.ts - LoadFromJson : Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("NumberedRecurrenceRange.ts - SetupRecurrence : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("NumberedRecurrenceRange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("NumberedRecurrenceRange.ts - WriteElementsToXml : Not implemented."); }
}
export = NumberedRecurrenceRange;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
