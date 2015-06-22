import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
export class DictionaryEntryProperty<TKey> extends ComplexProperty {
    Key: TKey;
    private key: TKey;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("DictionaryEntryProperty.ts - WriteAttributesToXml : Not implemented."); }
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[] /*System.Collections.Generic.List<T>*/): boolean { throw new Error("DictionaryEntryProperty.ts - WriteDeleteUpdateToJson : Not implemented."); }
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("DictionaryEntryProperty.ts - WriteDeleteUpdateToXml : Not implemented."); }
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]/*System.Collections.Generic.List<T>*/): boolean { throw new Error("DictionaryEntryProperty.ts - WriteSetUpdateToJson : Not implemented."); }
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("DictionaryEntryProperty.ts - WriteSetUpdateToXml : Not implemented."); }
}

