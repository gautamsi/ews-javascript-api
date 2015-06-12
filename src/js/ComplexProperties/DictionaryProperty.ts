import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class DictionaryProperty<TKey, TEntry> extends ComplexProperty {
    Entries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
    private entries: any;//System.Collections.Generic.Dictionary<TKey, TEntry>;
    private removedEntries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
    private addedEntries: any[];// System.Collections.Generic.List<T>;
    private modifiedEntries: any[];// System.Collections.Generic.List<T>;
    ClearChangeLog(): any { throw new Error("DictionaryProperty.ts - ClearChangeLog : Not implemented."); }
    Contains(key: TKey): boolean { throw new Error("DictionaryProperty.ts - Contains : Not implemented."); }
    CreateEntry(reader: EwsServiceXmlReader): TEntry { throw new Error("DictionaryProperty.ts - CreateEntry : Not implemented."); }
    CreateEntryInstance(): TEntry { throw new Error("DictionaryProperty.ts - CreateEntryInstance : Not implemented."); }
    EntryChanged(complexProperty: ComplexProperty): any { throw new Error("DictionaryProperty.ts - EntryChanged : Not implemented."); }
    GetEntryXmlElementName(entry: TEntry): string { throw new Error("DictionaryProperty.ts - GetEntryXmlElementName : Not implemented."); }
    GetFieldIndex(key: TKey): string { throw new Error("DictionaryProperty.ts - GetFieldIndex : Not implemented."); }
    GetFieldURI(): string { throw new Error("DictionaryProperty.ts - GetFieldURI : Not implemented."); }
    InternalAdd(entry: TEntry): any { throw new Error("DictionaryProperty.ts - InternalAdd : Not implemented."); }
    InternalAddOrReplace(entry: TEntry): any { throw new Error("DictionaryProperty.ts - InternalAddOrReplace : Not implemented."); }
    InternalRemove(key: TKey): any { throw new Error("DictionaryProperty.ts - InternalRemove : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("DictionaryProperty.ts - InternalToJson : Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("DictionaryProperty.ts - LoadFromXml : Not implemented."); }
    //WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DictionaryProperty.ts - WriteElementsToXml : Not implemented."); }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("DictionaryProperty.ts - WriteToXml : Not implemented."); }
    //WriteUriToJson(key: TKey): JsonObject { throw new Error("DictionaryProperty.ts - WriteUriToJson : Not implemented."); }
    //WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): any { throw new Error("DictionaryProperty.ts - WriteUriToXml : Not implemented."); }
}


