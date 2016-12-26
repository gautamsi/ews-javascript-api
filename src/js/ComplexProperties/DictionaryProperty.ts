import { ArrayHelper, StringHelper } from "../ExtensionMethods";
import { ComplexProperty } from "./ComplexProperty";
import { Dictionary, StringKeyPicker } from "../AltDictionary";
import { DictionaryEntryProperty } from "./DictionaryEntryProperty";
import { DictionaryKeyType } from "../Enumerations/DictionaryKeyType";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ICustomUpdateSerializer } from "../Interfaces/ICustomXmlUpdateSerializer";
import { IOutParam } from "../Interfaces/IOutParam";
import { PropertyDefinition } from "../PropertyDefinitions/PropertyDefinition";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * Represents a generic dictionary that can be sent to or retrieved from EWS.
 * 
 * @typeparam   <TKey>      The type of key.
 * @typeparam   <TEntry>    The type of entry.
 */
export abstract class DictionaryProperty<TKey, TEntry extends DictionaryEntryProperty<TKey>> extends ComplexProperty implements ICustomUpdateSerializer {

    private dictionaryKeyType: DictionaryKeyType = DictionaryKeyType.EmailAddressKey;
    private dictionaryKeyTypeEnum: any;
    private dictionaryKeyDelegate: StringKeyPicker<TKey> = (key) => { return this.dictionaryKeyTypeEnum[<any>key] };
    private entries: Dictionary<TKey, TEntry> = new Dictionary<TKey, TEntry>(this.dictionaryKeyDelegate);
    private removedEntries: Dictionary<TKey, TEntry> = new Dictionary<TKey, TEntry>(this.dictionaryKeyDelegate);
    private addedEntries: TKey[] = [];
    private modifiedEntries: TKey[] = [];

    /**
     * Gets the entries.
     * 
     * @value   The entries.
     */
    get Entries(): Dictionary<TKey, TEntry> {
        return this.entries;
    }

    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {DictionaryKeyType}	dictionaryKeyType	Dictionary Key type, needed to workaround c# type checking of generics.    
     */
    constructor(dictionaryKeyType: DictionaryKeyType) {
        super();
        this.dictionaryKeyType = dictionaryKeyType;

        this.dictionaryKeyTypeEnum = EwsUtilities.GetDictionaryKeyTypeEnum(this.dictionaryKeyType);
    }

    /**
     * @internal Clears the change log.
     */
    ClearChangeLog(): void {
        this.addedEntries.splice(0);
        this.removedEntries.clear();
        this.modifiedEntries.splice(0);

        for (var entry of this.entries.Values) {
            entry.ClearChangeLog();
        }
    }

    /**
     * Determines whether this instance contains the specified key.
     *
     * @param   {TKey}      key   The key.
     * @return  {boolean}   true if this instance contains the specified key; otherwise, false.
     */
    Contains(key: TKey): boolean {
        return this.Entries.containsKey(key);
    }

    /**
     * @internal Creates the entry.
     *
     * @return  {TEntry}  Dictionary entry.
     */
    CreateEntry(): TEntry {
        return this.CreateEntryInstance();
    }

    /**
     * @internal Creates instance of dictionary entry.
     *
     * @return  {TEntry}      New instance.
     */
    abstract CreateEntryInstance(): TEntry;

    /**
     * Entry was changed.
     *
     * @param   {}   complexProperty   The complex property.
     */
    private EntryChanged(complexProperty: ComplexProperty): void {
        var key: TKey = (<DictionaryEntryProperty<any>>complexProperty).Key;

        if (this.addedEntries.indexOf(key) === -1 && this.modifiedEntries.indexOf(key) === -1) {
            this.modifiedEntries.push(key);
            this.Changed();
        }
    }

    /**
     * @internal Gets the name of the entry XML element.
     *
     * @param   {TEntry}    entry   The entry.
     * @return  {string}    XML element name.
     */
    GetEntryXmlElementName(entry: TEntry): string {
        return XmlElementNames.Entry;
    }

    /**
     * @internal Gets the index of the field.
     *
     * @param   {TKey}      key   The key.
     * @return  {string}    Key index.
     */
    GetFieldIndex(key: TKey): string {
        return this.dictionaryKeyTypeEnum[<any>key];
    }

    /**
     * @internal Gets the field URI.
     *
     * @return  {string}      Field URI.
     */
    GetFieldURI(): string {
        return null;
    }

    /**
     * @internal Add entry.
     *
     * @param   {TEntry}   entry   The entry.
     */
    InternalAdd(entry: TEntry): void {
        entry.OnChange.push(this.EntryChanged.bind(this));

        this.entries.Add(entry.Key, entry);
        this.addedEntries.push(entry.Key);
        this.removedEntries.remove(entry.Key);
        this.Changed();
    }

    /**
     * @internal Add or replace entry.
     *
     * @param   {TEntry}   entry   The entry.
     */
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

    /**
     * Remove entry based on key.
     *
     * @param   {TKey}   key   The key.
     */
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

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
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

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var keyValuePair of this.entries.Items) {
            keyValuePair.value.WriteToXml(writer, this.GetEntryXmlElementName(keyValuePair.value));
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
        // Only write collection if it has at least one element.
        if (this.entries.Count > 0) {
            super.WriteToXml(
                writer,
                xmlElementName,
                xmlNamespace)
        }
    }

    /**
     * Writes the URI to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {TKey}                  key      The key.
     */
    private WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.IndexedFieldURI);
        writer.WriteAttributeValue(XmlAttributeNames.FieldURI, this.GetFieldURI());
        writer.WriteAttributeValue(XmlAttributeNames.FieldIndex, this.GetFieldIndex(key));
        writer.WriteEndElement();
    }

    /**
     * @internal Writes the update to XML.
     * ICustomUpdateSerializer.WriteSetUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteSetUpdateToXml(
        writer: EwsServiceXmlWriter,
        ewsObject: ServiceObject,
        propertyDefinition: PropertyDefinition): boolean {

        let tempEntries: TEntry[] = [];

        for (let key of this.addedEntries) {
            tempEntries.push(this.entries.get(key));
        }
        for (let key of this.modifiedEntries) {
            tempEntries.push(this.entries.get(key));
        }

        for (let entry of tempEntries) {
            if (!entry.WriteSetUpdateToXml(
                writer,
                ewsObject,
                propertyDefinition.XmlElementName)) {
                writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetSetFieldXmlElementName());
                this.WriteUriToXml(writer, entry.Key);

                writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetXmlElementName());
                writer.WriteStartElement(XmlNamespace.Types, propertyDefinition.XmlElementName);
                entry.WriteToXml(writer, this.GetEntryXmlElementName(entry));
                writer.WriteEndElement();
                writer.WriteEndElement();

                writer.WriteEndElement();
            }
        }

        for (let entry of this.removedEntries.Values) {
            if (!entry.WriteDeleteUpdateToXml(writer, ewsObject)) {
                writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
                this.WriteUriToXml(writer, entry.Key);
                writer.WriteEndElement();
            }
        }

        return true;
    }

    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean {
        // Use the default XML serializer.
        return false;
    }
}
