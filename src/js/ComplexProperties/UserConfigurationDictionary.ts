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
    Add(key: any, value: any): any { throw new Error("Not implemented."); }
    Changed(): any { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    ConstructObject(type: UserConfigurationDictionaryObjectType, value: string[] /*System.Collections.Generic.List<string>*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    ContainsKey(key: any): boolean { throw new Error("Not implemented."); }
    CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
    //GetDictionaryObject(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetDictionaryObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    GetJsonObject(dictionaryObject: any, service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
    GetObjectType(reader: EwsServiceXmlReader): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
    //GetObjectType(type: string): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
    GetObjectValue(valueArray: any): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("Not implemented."); }
    //GetObjectValue(reader: EwsServiceXmlReader, type: UserConfigurationDictionaryObjectType): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("Not implemented."); }
    GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: any, valueAsString: any): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadEntry(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace: XmlNamespace): void { throw new Error("Not implemented."); }
    Remove(key: any): boolean { throw new Error("Not implemented."); }
    TryGetValue(key: any, value: any): boolean { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
    ValidateArrayObject(dictionaryObjectAsArray: Array<any> /*System.Array*/): any { throw new Error("Not implemented."); }
    ValidateEntry(key: any, value: any): any { throw new Error("Not implemented."); }
    ValidateObject(dictionaryObject: any): any { throw new Error("Not implemented."); }
    ValidateObjectType(type: any/*System.Type*/): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): any { throw new Error("Not implemented."); }
    WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): any { throw new Error("Not implemented."); }
    WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): any { throw new Error("Not implemented."); }
    WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): any { throw new Error("Not implemented."); }
}
export = UserConfigurationDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
