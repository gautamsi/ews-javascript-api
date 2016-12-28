import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { ArrayHelper } from "../ExtensionMethods";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { Strings } from "../Strings";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents a list of strings.
 * 
 * @sealed
 */
export class StringList extends ComplexProperty implements IEnumerable<string> {

    private items: string[] = [];
    private itemXmlElementName: string = XmlElementNames.String;

    /**
     * Gets the number of strings in the list.
     */
    get Count(): number {
        return this.items.length;
    }

    /**
     * Initializes a new instance of the **StringList** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **StringList** class.
     *
     * @param   {string}   itemXmlElementName   Name of the item XML element.
     */
    constructor(itemXmlElementName: string);
    /**
     * Initializes a new instance of the **StringList** class.
     *
     * @param   {string[]}   strings   The strings.
     */
    constructor(strings: string[]);
    constructor(stringOrItemXmlElementName: string | string[] = null) {
        super();
        if (stringOrItemXmlElementName !== null) {
            if (typeof stringOrItemXmlElementName === 'string') {
                this.itemXmlElementName = stringOrItemXmlElementName;
            }
            else {
                this.AddRange(stringOrItemXmlElementName);
            }
        }
    }

    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    _getItem(index: number): string {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }

    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    _setItem(index: number, value: string): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        if (this.items[index] !== value) {
            this.items[index] = value;
            this.Changed();
        }
    }

    /**
     * Adds a string to the list.
     *
     * @param   {string}   s   The string to add.
     */
    Add(s: string): void {
        this.items.push(s);
        this.Changed();
    }

    /**
     * Adds multiple strings to the list.
     *
     * @param   {string[]}   strings   The strings to add.
     */
    AddRange(strings: string[]): void {
        let changed = false;

        for (let s of strings) {
            if (!this.Contains(s)) {
                this.items.push(s);
                changed = true;
            }
        }

        if (changed) {
            this.Changed();
        }
    }

    /**
     * Clears the list.
     */
    Clear(): void {
        this.items.splice(0);
        this.Changed();
    }

    /**
     * Determines whether the list contains a specific string.
     *
     * @param   {string}    s   The string to check the presence of.
     * @return  {boolean}   True if s is present in the list, false otherwise.
     */
    Contains(s: string): boolean { return this.items.indexOf(s) >= 0; }

    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    CreateFromXmlJsObjectCollection(jsObjectCollection: any[], service: ExchangeService): void {
        let collection = jsObjectCollection[this.itemXmlElementName];
        if (!ArrayHelper.isArray(collection)) {
            collection = [collection];
        }

        for (let item of collection) {
            this.Add(<string>item);
        }
    }

    Equals(obj: any): boolean { throw new Error("StringList.ts - Equals : Not implemented."); }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): string[] {
        return this.items;
    }

    GetHashCode(): number { throw new Error("StringList.ts - GetHashCode : Not implemented."); }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObjectCollection: any[], service: ExchangeService): void {
        this.CreateFromXmlJsObjectCollection(jsObjectCollection, service);
    }

    /**
     * Removes a string from the list.
     *
     * @param   {string}   s   The string to remove.
     * @return  {boolean}       True is s was removed, false otherwise.
     */
    Remove(s: string): boolean {
        let result: boolean = ArrayHelper.RemoveEntry(this.items, s);
        if (result) {
            this.Changed();
        }
        return result;
    }

    /**
     * Removes the string at the specified position from the list.
     *
     * @param   {number}   index   The index of the string to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        this.items.splice(index, 1);
        this.Changed();
    }

    /**
     * Generates a string representation of all the items in the list.
     *
     * @return  {string}      A comma-separated list of the strings present in the list.
     */
    ToString(): string {
        return this.items.join(",");
    }

    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    UpdateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void {
        throw new Error("StringList.ts - UpdateFromXmlJsObjectCollection : Not implemented.");
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (let item of this.items) {
            writer.WriteStartElement(XmlNamespace.Types, this.itemXmlElementName);
            writer.WriteValue(item, this.itemXmlElementName);
            writer.WriteEndElement();
        }
    }
}