import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class DictionaryProperty<TKey, TEntry> extends ComplexProperty {
    Entries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
    private entries: any;//System.Collections.Generic.Dictionary<TKey, TEntry>;
    private removedEntries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
    private addedEntries: any[];// System.Collections.Generic.List<T>;
    private modifiedEntries: any[];// System.Collections.Generic.List<T>;
    ClearChangeLog(): any { throw new Error("Not implemented."); }
    Contains(key: TKey): boolean { throw new Error("Not implemented."); }
    CreateEntry(reader: EwsServiceXmlReader): TEntry { throw new Error("Not implemented."); }
    CreateEntryInstance(): TEntry { throw new Error("Not implemented."); }
    EntryChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
    GetEntryXmlElementName(entry: TEntry): string { throw new Error("Not implemented."); }
    GetFieldIndex(key: TKey): string { throw new Error("Not implemented."); }
    GetFieldURI(): string { throw new Error("Not implemented."); }
    InternalAdd(entry: TEntry): any { throw new Error("Not implemented."); }
    InternalAddOrReplace(entry: TEntry): any { throw new Error("Not implemented."); }
    InternalRemove(key: TKey): any { throw new Error("Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    //WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
    //WriteUriToJson(key: TKey): JsonObject { throw new Error("Not implemented."); }
    //WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
