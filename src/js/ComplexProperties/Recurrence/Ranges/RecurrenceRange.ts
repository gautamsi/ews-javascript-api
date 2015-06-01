import Recurrence = require("../Patterns/Recurrence");
import ComplexProperty = require("../../ComplexProperty");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");

class RecurrenceRange extends ComplexProperty {
    XmlElementName: string;
    Recurrence: Recurrence;
    StartDate: Date;
    private startDate: Date;
    private recurrence: Recurrence;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("RecurrenceRange.ts - AddPropertiesToJson : Not implemented."); }
    Changed(): any { throw new Error("RecurrenceRange.ts - Changed : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("RecurrenceRange.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("RecurrenceRange.ts - LoadFromJson : Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("RecurrenceRange.ts - SetupRecurrence : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("RecurrenceRange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("RecurrenceRange.ts - WriteElementsToXml : Not implemented."); }
}
export = RecurrenceRange;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
