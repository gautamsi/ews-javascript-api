import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
import {ImAddressKey} from "../Enumerations/ImAddressKey";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
    ImAddress: string;
    private imAddress: string;
    InternalToJson(service: ExchangeService): any { throw new Error("ImAddressEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ImAddressEntry.ts - LoadFromJson : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ImAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ImAddressEntry.ts - WriteElementsToXml : Not implemented."); }
}


//}



