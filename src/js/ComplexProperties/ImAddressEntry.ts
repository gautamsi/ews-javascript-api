import DictionaryEntryProperty = require("./DictionaryEntryProperty");
import ImAddressKey = require("../Enumerations/ImAddressKey");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
    ImAddress: string;
    private imAddress: string;
    InternalToJson(service: ExchangeService): any { throw new Error("ImAddressEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ImAddressEntry.ts - LoadFromJson : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ImAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ImAddressEntry.ts - WriteElementsToXml : Not implemented."); }
}
export = ImAddressEntry;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
