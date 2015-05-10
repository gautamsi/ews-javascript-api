import ComplexProperty = require("../../ComplexProperties/ComplexProperty");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class SearchFilter extends ComplexProperty {
    GetSearchFilterInstance(localName: string): SearchFilter { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): SearchFilter { throw new Error("Not implemented."); }
    LoadSearchFilterFromJson(jsonObject: any/*JsonObject*/, service: ExchangeService): SearchFilter { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = SearchFilter;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
