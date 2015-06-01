import PersonaPostalAddress = require("./PersonaPostalAddress");
import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class EnhancedLocation extends ComplexProperty {
    DisplayName: string;
    Annotation: string;
    PersonaPostalAddress: PersonaPostalAddress;
    private displayName: string;
    private annotation: string;
    private personaPostalAddress: PersonaPostalAddress;
    InternalToJson(service: ExchangeService): any { throw new Error("EnhancedLocation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("EnhancedLocation.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EnhancedLocation.ts - LoadFromJson : Not implemented."); }
    PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any { throw new Error("EnhancedLocation.ts - PersonaPostalAddress_OnChange : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EnhancedLocation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EnhancedLocation.ts - WriteElementsToXml : Not implemented."); }
}
export = EnhancedLocation;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
