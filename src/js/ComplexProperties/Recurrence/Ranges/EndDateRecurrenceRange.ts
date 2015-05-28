import RecurrenceRange = require("./RecurrenceRange");
import Recurrence = require("../Patterns/Recurrence");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");

class EndDateRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    EndDate: Date;
    private endDate: Date;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EndDateRecurrenceRange.ts - AddPropertiesToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EndDateRecurrenceRange.ts - LoadFromJson : Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("EndDateRecurrenceRange.ts - SetupRecurrence : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EndDateRecurrenceRange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EndDateRecurrenceRange.ts - WriteElementsToXml : Not implemented."); }
}
export = EndDateRecurrenceRange;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
