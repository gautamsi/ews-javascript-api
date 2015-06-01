import ComplexProperty = require("./ComplexProperty");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class HighlightTerm extends ComplexProperty {
    Scope: string;
    Value: string;
    private scope: string;
    private value: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("HighlightTerm.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("HighlightTerm.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = HighlightTerm;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

