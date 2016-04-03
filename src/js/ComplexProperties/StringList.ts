import {XmlElementNames} from "../Core/XmlElementNames";
import {Strings} from "../Strings";
import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ExchangeService} from "../Core/ExchangeService";
import {ArrayHelper} from "../ExtensionMethods";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ComplexProperty} from "./ComplexProperty";
export class StringList extends ComplexProperty { // IEnumerable<string>, IJsonCollectionDeserializer
    get Count(): number { return this.items.length; }
    get Items(): string[] { return this.items; }
    private items: string[] = [];// /*System.Collections.Generic.List<string>*/;
    private itemXmlElementName: string = XmlElementNames.String;

    constructor();
    constructor(itemXmlElementName: string);
    constructor(strings: string[]);
    constructor(stringOrItemXmlElementName?: string | string[]) {
        super();
        if (typeof stringOrItemXmlElementName !== 'undefined') {
            if (typeof stringOrItemXmlElementName === 'string') {
                this.itemXmlElementName = stringOrItemXmlElementName;
            }
            else {
                this.AddRange(stringOrItemXmlElementName);
            }
        }
    }

    _getItem(index: number): string {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }
    _setItem(index: number, value: string): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        if (this.items[index] !== value) {
            this.items[index] = value;
            this.Changed();
        }
    }


    Add(s: string): void {
        this.items.push(s);
        this.Changed();
    }
    AddRange(strings: string[]): void {
        var changed = false;

        for (var s of strings) {
            if (!this.Contains(s)) {
                this.items.push(s);
                changed = true;
            }
        }

        if (changed) {
            this.Changed();
        }
    }
    Clear(): void {
        this.items.splice(0);
        this.Changed();
    }
    Contains(s: string): boolean { return this.items.indexOf(s) >= 0; }
    Equals(obj: any): boolean { throw new Error("StringList.ts - Equals : Not implemented."); }
    GetEnumerator(): any { throw new Error("StringList.ts - GetEnumerator : Not implemented."); }
    GetHashCode(): number { throw new Error("StringList.ts - GetHashCode : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("StringList.ts - InternalToJson : Not implemented."); }
    Remove(s: string): boolean {
        var index = this.items.indexOf(s);
        if (index >= 0) {
            this.RemoveAt(index);
            this.Changed();
            return true;
        }
        return false;
    }
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index - " + Strings.IndexIsOutOfRange);
        }
        this.items.splice(index, 1);
        this.Changed();
    }
    ToString(): string { return this.items.join(","); }
    //ReadElementsFromXmlJsObject(reader: any): boolean { debugger; throw new Error("StringList.ts - TryReadElementFromXmlJsObject : Not implemented."); return null; }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var item of this.items) {
            writer.WriteStartElement(XmlNamespace.Types, this.itemXmlElementName);
            writer.WriteValue(item, this.itemXmlElementName);
            writer.WriteEndElement();
        }
    }

    CreateFromXmlJsObjectCollection(jsObjectCollection: any[], service: ExchangeService): void {
        var collection = jsObjectCollection[this.itemXmlElementName];
        if (!ArrayHelper.isArray(collection)) {
            collection = [collection];
        }

        for (var item of collection) {
            this.Add(<string>item);
        }
    }

    UpdateFromXmlJsObjectCollection(jsObjectCollection: any[], service: ExchangeService): void {
        throw new Error("StringList.ts - UpdateFromXmlJsObjectCollection : Not implemented.");
    }
}