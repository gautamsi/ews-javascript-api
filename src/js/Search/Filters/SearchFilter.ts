import {ComplexProperty} from "../../ComplexProperties/ComplexProperty";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class SearchFilter extends ComplexProperty {
    GetSearchFilterInstance(localName: string): SearchFilter { throw new Error("SearchFilter.ts - GetSearchFilterInstance : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SearchFilter.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("SearchFilter.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): SearchFilter { throw new Error("SearchFilter.ts - LoadFromXmlJsObject : Not implemented."); }
    LoadSearchFilterFromJson(jsonObject: any/*JsonObject*/, service: ExchangeService): SearchFilter { throw new Error("SearchFilter.ts - LoadSearchFilterFromJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFilter.ts - WriteToXml : Not implemented."); }
}