import ComplexProperty = require("../../ComplexProperties/ComplexProperty");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class SearchFilter extends ComplexProperty {
    GetSearchFilterInstance(localName: string): SearchFilter { throw new Error("SearchFilter.ts - GetSearchFilterInstance : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SearchFilter.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("SearchFilter.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): SearchFilter { throw new Error("SearchFilter.ts - LoadFromXmlJsObject : Not implemented."); }
    LoadSearchFilterFromJson(jsonObject: any/*JsonObject*/, service: ExchangeService): SearchFilter { throw new Error("SearchFilter.ts - LoadSearchFilterFromJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFilter.ts - WriteToXml : Not implemented."); }
}
export = SearchFilter;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
