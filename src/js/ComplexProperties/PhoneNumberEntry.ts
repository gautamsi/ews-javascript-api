import DictionaryEntryProperty = require("./DictionaryEntryProperty");
import PhoneNumberKey = require("../Enumerations/PhoneNumberKey");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import PhysicalAddressKey = require("../Enumerations/PhysicalAddressKey");
import SimplePropertyBag = require("../Core/SimplePropertyBag");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");

class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
    PhoneNumber: string;
    private phoneNumber: string;
    InternalToJson(service: ExchangeService): any { throw new Error("PhoneNumberEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("PhoneNumberEntry.ts - LoadFromJson : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("PhoneNumberEntry.ts - ReadTextValueFromXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("PhoneNumberEntry.ts - WriteElementsToXml : Not implemented."); }
}
export = PhoneNumberEntry;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


