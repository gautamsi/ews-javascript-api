import ComplexProperty = require("./ComplexProperty");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class DeletedOccurrenceInfo extends ComplexProperty {
    OriginalStart: Date;
    private originalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DeletedOccurrenceInfo.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("DeletedOccurrenceInfo.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = DeletedOccurrenceInfo;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
