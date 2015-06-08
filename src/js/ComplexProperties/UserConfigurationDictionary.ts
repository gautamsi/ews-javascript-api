import ComplexProperty = require("./ComplexProperty");
import UserConfigurationDictionaryObjectType = require("../Enumerations/UserConfigurationDictionaryObjectType");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import ExchangeServiceBase = require("../Core/ExchangeServiceBase");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class UserConfigurationDictionary extends ComplexProperty {//IEnumerable, IJsonCollectionDeserializer
    Item: any;
    Count: number;
    IsDirty: boolean;
    private dictionary: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
    private isDirty: boolean;
    Add(key: any, value: any): any { throw new Error("UserConfigurationDictionary.ts - Add : Not implemented."); }
    Changed(): any { throw new Error("UserConfigurationDictionary.ts - Changed : Not implemented."); }
    Clear(): any { throw new Error("UserConfigurationDictionary.ts - Clear : Not implemented."); }
    ConstructObject(type: UserConfigurationDictionaryObjectType, value: string[] /*System.Collections.Generic.List<string>*/, service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - ConstructObject : Not implemented."); }
    ContainsKey(key: any): boolean { throw new Error("UserConfigurationDictionary.ts - ContainsKey : Not implemented."); }
    CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - CreateFromJsonCollection : Not implemented."); }
    //GetDictionaryObject(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - GetDictionaryObject : Not implemented."); }
    GetDictionaryObject(reader: EwsServiceXmlReader): any { throw new Error("UserConfigurationDictionary.ts - GetDictionaryObject : Not implemented."); }
    GetEnumerator(): any { throw new Error("UserConfigurationDictionary.ts - GetEnumerator : Not implemented."); }
    GetJsonObject(dictionaryObject: any, service: ExchangeService): JsonObject { throw new Error("UserConfigurationDictionary.ts - GetJsonObject : Not implemented."); }
    GetObjectType(reader: EwsServiceXmlReader): UserConfigurationDictionaryObjectType { throw new Error("UserConfigurationDictionary.ts - GetObjectType : Not implemented."); }
    //GetObjectType(type: string): UserConfigurationDictionaryObjectType { throw new Error("UserConfigurationDictionary.ts - GetObjectType : Not implemented."); }
    GetObjectValue(valueArray: any): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("UserConfigurationDictionary.ts - GetObjectValue : Not implemented."); }
    //GetObjectValue(reader: EwsServiceXmlReader, type: UserConfigurationDictionaryObjectType): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("UserConfigurationDictionary.ts - GetObjectValue : Not implemented."); }
    GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: any, valueAsString: any): any { throw new Error("UserConfigurationDictionary.ts - GetTypeCode : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - InternalToJson : Not implemented."); }
    LoadEntry(reader: EwsServiceXmlReader): any { throw new Error("UserConfigurationDictionary.ts - LoadEntry : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void { throw new Error("UserConfigurationDictionary.ts - LoadFromXmlJsObject : Not implemented."); }
    Remove(key: any): boolean { throw new Error("UserConfigurationDictionary.ts - Remove : Not implemented."); }
    TryGetValue(key: any, value: any): boolean { throw new Error("UserConfigurationDictionary.ts - TryGetValue : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("UserConfigurationDictionary.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("UserConfigurationDictionary.ts - UpdateFromJsonCollection : Not implemented."); }
    ValidateArrayObject(dictionaryObjectAsArray: Array<any> /*System.Array*/): any { throw new Error("UserConfigurationDictionary.ts - ValidateArrayObject : Not implemented."); }
    ValidateEntry(key: any, value: any): any { throw new Error("UserConfigurationDictionary.ts - ValidateEntry : Not implemented."); }
    ValidateObject(dictionaryObject: any): any { throw new Error("UserConfigurationDictionary.ts - ValidateObject : Not implemented."); }
    ValidateObjectType(type: any/*System.Type*/): any { throw new Error("UserConfigurationDictionary.ts - ValidateObjectType : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UserConfigurationDictionary.ts - WriteElementsToXml : Not implemented."); }
    WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): any { throw new Error("UserConfigurationDictionary.ts - WriteEntryTypeToXml : Not implemented."); }
    WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): any { throw new Error("UserConfigurationDictionary.ts - WriteEntryValueToXml : Not implemented."); }
    WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): any { throw new Error("UserConfigurationDictionary.ts - WriteObjectToXml : Not implemented."); }
    WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): any { throw new Error("UserConfigurationDictionary.ts - WriteObjectValueToXml : Not implemented."); }
}
export = UserConfigurationDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
