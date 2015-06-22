import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
import {PhoneNumberKey} from "../Enumerations/PhoneNumberKey";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {PhysicalAddressKey} from "../Enumerations/PhysicalAddressKey";
import {SimplePropertyBag} from "../Core/SimplePropertyBag";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
export class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
    PhoneNumber: string;
    private phoneNumber: string;
    InternalToJson(service: ExchangeService): any { throw new Error("PhoneNumberEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("PhoneNumberEntry.ts - LoadFromJson : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("PhoneNumberEntry.ts - ReadTextValueFromXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("PhoneNumberEntry.ts - WriteElementsToXml : Not implemented."); }
}


//}





