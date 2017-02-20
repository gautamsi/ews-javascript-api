import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {Dictionary} from "../AltDictionary";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
import {ComplexProperty} from "./ComplexProperty";
export class DictionaryEntryProperty<TKey> extends ComplexProperty {
    protected keyType:any;
    private key: TKey = null;
    get Key(): TKey {
        return this.key;
    }
    set Key(value: TKey) {
        this.key = value;
    }
    constructor();
    constructor(key: TKey);
    constructor(key?: TKey) {
        super();
        this.key = key;
    }
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not used."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { writer.WriteAttributeValue(XmlAttributeNames.Key, this.keyType[this.Key]); }
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[] /*System.Collections.Generic.List<T>*/): boolean { throw new Error("DictionaryEntryProperty.ts - WriteDeleteUpdateToJson : Not implemented."); }
    /**@internal */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { return false; }
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]/*System.Collections.Generic.List<T>*/): boolean { throw new Error("DictionaryEntryProperty.ts - WriteSetUpdateToJson : Not implemented."); }
    /**@internal */
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { return false; }
}