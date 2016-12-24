import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsUtilities} from "../Core/EwsUtilities";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {IOutParam} from "../Interfaces/IOutParam";
import {StringHelper, ArrayHelper} from "../ExtensionMethods";
import {Dictionary, StringKeyPicker} from "../AltDictionary";
import {ComplexProperty} from "./ComplexProperty";
import {DictionaryEntryProperty} from "./DictionaryEntryProperty";

export class DictionaryProperty<TKey, TEntry extends DictionaryEntryProperty<TKey>> extends ComplexProperty {
    private dictionaryKeyType: DictionaryKeyType = DictionaryKeyType.EmailAddressKey;
    private dictionaryKeyTypeEnum: any;
    private dictionaryKeyDelegate: StringKeyPicker<TKey> = (key) => { return this.dictionaryKeyTypeEnum[<any>key] };
    private entries: Dictionary<TKey, TEntry> = new Dictionary<TKey, TEntry>(this.dictionaryKeyDelegate);
    private removedEntries: Dictionary<TKey, TEntry> = new Dictionary<TKey, TEntry>(this.dictionaryKeyDelegate);
    private addedEntries: TKey[] = [];
    private modifiedEntries: TKey[] = [];
    get Entries(): Dictionary<TKey, TEntry> {
        return this.entries;
    }
    constructor(dictionaryKeyType: DictionaryKeyType) {
        super();
        this.dictionaryKeyType = dictionaryKeyType;
        
        this.dictionaryKeyTypeEnum = EwsUtilities.GetDictionaryKeyTypeEnum(this.dictionaryKeyType);
    }

    ClearChangeLog(): void {
        this.addedEntries.splice(0);
        this.removedEntries.clear();
        this.modifiedEntries.splice(0);

        for (var entry of this.entries.Values) {
            entry.ClearChangeLog();
        }
    }
    Contains(key: TKey): boolean { return this.Entries.containsKey(key); }
    CreateEntry(): TEntry {
        return this.CreateEntryInstance();
    }
    CreateEntryInstance(): TEntry { return null; /*abstract*/ }
    EntryChanged(complexProperty: ComplexProperty): void {
        var key: TKey = (<DictionaryEntryProperty<any>>complexProperty).Key;

        if (this.addedEntries.indexOf(key) === -1 && this.modifiedEntries.indexOf(key) === -1) {
            this.modifiedEntries.push(key);
            this.Changed();
        }
    }
    GetEntryXmlElementName(entry: TEntry): string { return XmlElementNames.Entry; }
    GetFieldIndex(key: TKey): string { return this.dictionaryKeyTypeEnum[<any>key]; }
    GetFieldURI(): string { return null; }
    InternalAdd(entry: TEntry): void {
        entry.OnChange.push(this.EntryChanged.bind(this));

        this.entries.Add(entry.Key, entry);
        this.addedEntries.push(entry.Key);
        this.removedEntries.remove(entry.Key);
        this.Changed();
    }
    InternalAddOrReplace(entry: TEntry): void {
        var oldEntry: IOutParam<TEntry> = { outValue: null };

        if (this.entries.tryGetValue(entry.Key, oldEntry)) {
            ArrayHelper.RemoveEntry(oldEntry.outValue.OnChange, this.EntryChanged);

            entry.OnChange.push(this.EntryChanged.bind(this));

            if (this.addedEntries.indexOf(entry.Key) === -1) {
                if (this.modifiedEntries.indexOf(entry.Key) === -1) {
                    this.modifiedEntries.push(entry.Key);
                }
            }

            this.Changed();
        }
        else {
            this.InternalAdd(entry);
        }
    }
    InternalRemove(key: TKey): void {
        var entry: IOutParam<TEntry> = { outValue: null };

        if (this.entries.tryGetValue(key, entry)) {
            ArrayHelper.RemoveEntry(entry.outValue.OnChange, this.EntryChanged);

            this.entries.remove(key);
            this.removedEntries.Add(key, entry.outValue);
            this.Changed();
        }

        ArrayHelper.RemoveEntry(this.addedEntries, key);
        ArrayHelper.RemoveEntry(this.modifiedEntries, key);
    }
    InternalToJson(service: ExchangeService): any { throw new Error("DictionaryProperty.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        if (jsonProperty[XmlElementNames.Entry]) {
            var entries: any[] = EwsServiceJsonReader.ReadAsArray(jsonProperty, XmlElementNames.Entry);
            for (var jsonEntry of entries) {
                var entry: TEntry = this.CreateEntryInstance();
                entry.LoadFromXmlJsObject(jsonEntry, service);
                this.InternalAdd(entry);
            }
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var keyValuePair of this.entries.Items) {
            keyValuePair.value.WriteToXml(writer, this.GetEntryXmlElementName(keyValuePair.value));
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
        // Only write collection if it has at least one element.
        if (this.entries.Count > 0) {
            super.WriteToXml(
                writer,
                xmlElementName,
                xmlNamespace)
        }
    }
    WriteUriToJson(key: TKey): any { throw new Error("DictionaryProperty.ts - WriteUriToJson : Not implemented."); }
    WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.IndexedFieldURI);
        writer.WriteAttributeValue(XmlAttributeNames.FieldURI, this.GetFieldURI());
        writer.WriteAttributeValue(XmlAttributeNames.FieldIndex, this.GetFieldIndex(key));
        writer.WriteEndElement();
    }
}
