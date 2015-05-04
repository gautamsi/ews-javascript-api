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
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    Changed(): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
