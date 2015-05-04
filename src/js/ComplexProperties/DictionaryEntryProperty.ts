import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
class DictionaryEntryProperty<TKey> extends ComplexProperty {
    Key: TKey;
    private key: TKey;
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[] /*System.Collections.Generic.List<T>*/): boolean { throw new Error("Not implemented."); }
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("Not implemented."); }
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]/*System.Collections.Generic.List<T>*/): boolean { throw new Error("Not implemented."); }
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("Not implemented."); }
}
export = DictionaryEntryProperty;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
